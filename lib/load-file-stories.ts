import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import { isRetiredSection, isSection, remapSection } from "./site";
import { adaptComicPost, type ComicPost, type ComicSource, type ComicStrip, type Story } from "./types";

const STORIES_DIR = join(process.cwd(), "content", "stories");

function asString(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${file}: missing string field "${field}"`);
  }
  return value;
}

function asOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function asOptionalNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return undefined;
}

function asComic(value: unknown, file: string, fallbackAlt: string): ComicStrip {
  if (!value || typeof value !== "object") {
    throw new Error(`${file}: comic.src and comic.alt are required`);
  }
  const rec = value as Record<string, unknown>;
  const comic: ComicStrip = {
    src: asString(rec.src, "comic.src", file),
    alt: asOptionalString(rec.alt) ?? fallbackAlt,
  };
  const caption = asOptionalString(rec.caption);
  const credit = asOptionalString(rec.credit);
  if (caption) comic.caption = caption;
  if (credit) comic.credit = credit;
  const width = asOptionalNumber(rec.width);
  const height = asOptionalNumber(rec.height);
  if (width) comic.width = width;
  if (height) comic.height = height;
  return comic;
}

function asSource(value: unknown, file: string, headline: string): ComicSource {
  if (!value || typeof value !== "object") {
    throw new Error(`${file}: source.url and source.title are required`);
  }
  const rec = value as Record<string, unknown>;
  const source: ComicSource = {
    url: asString(rec.url, "source.url", file),
    title: asOptionalString(rec.title) ?? headline,
  };
  const publisher = asOptionalString(rec.publisher);
  if (publisher) source.publisher = publisher;
  return source;
}

function unquoteScalar(raw: string): unknown {
  const val = raw.trim();
  if (val === "") return "";
  if (val === "true") return true;
  if (val === "false") return false;
  if (val === "null") return null;
  if (
    (val.startsWith("{") && val.endsWith("}")) ||
    (val.startsWith("[") && val.endsWith("]")) ||
    (val.startsWith('"') && val.endsWith('"'))
  ) {
    try {
      return JSON.parse(val);
    } catch {
      /* fall through */
    }
  }
  if (val.startsWith("'") && val.endsWith("'") && val.length >= 2) {
    return val.slice(1, -1);
  }
  return val;
}

/** Tiny YAML subset: key/value, nested maps, optional inline JSON. */
export function parseSimpleYaml(yaml: string, file: string): Record<string, unknown> {
  const lines = yaml.split(/\r?\n/);
  type Frame = { indent: number; obj: Record<string, unknown> };
  const root: Record<string, unknown> = {};
  const stack: Frame[] = [{ indent: -1, obj: root }];
  let i = 0;
  while (i < lines.length) {
    const raw = lines[i];
    if (raw.trim() === "" || raw.trimStart().startsWith("#")) {
      i += 1;
      continue;
    }
    const indent = raw.length - raw.trimStart().length;
    const line = raw.trimEnd();
    const kv = line.slice(indent).match(/^([A-Za-z][\w]*):\s*(.*)$/);
    if (!kv) {
      throw new Error(`${file}: cannot parse frontmatter line "${raw}"`);
    }
    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
      stack.pop();
    }
    const parent = stack[stack.length - 1].obj;
    const key = kv[1];
    const rest = kv[2];
    if (rest === "" || rest === "|" || rest === ">") {
      const child: Record<string, unknown> = {};
      const next = lines[i + 1];
      const nextIndent = next ? next.length - next.trimStart().length : indent;
      if (next && next.trim() && nextIndent > indent) {
        parent[key] = child;
        stack.push({ indent, obj: child });
        i += 1;
        continue;
      }
      parent[key] = "";
      i += 1;
      continue;
    }
    parent[key] = unquoteScalar(rest);
    i += 1;
  }
  return root;
}

export function parseMarkdownStory(source: string, file: string): Record<string, unknown> {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${file}: markdown stories need YAML frontmatter between --- fences`);
  }
  const data = parseSimpleYaml(match[1], file);
  const rest = match[2].trim();
  if (rest) {
    if (!data.recap) data.recap = rest;
    if (!data.body) {
      data.body = rest
        .split(/\n\s*\n/)
        .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
        .filter(Boolean);
    }
  }
  return data;
}

function parseStory(raw: Record<string, unknown>, file: string): Story {
  const section = remapSection(asString(raw.section, "section", file));
  if (!isSection(section)) {
    throw new Error(`${file}: unknown section "${section}"`);
  }
  const status = asString(raw.status, "status", file);
  if (status !== "draft" && status !== "published") {
    throw new Error(`${file}: status must be "draft" or "published"`);
  }
  const datePublished = asString(raw.datePublished ?? raw.publishedAt, "datePublished", file);
  const dateModified =
    typeof raw.dateModified === "string"
      ? raw.dateModified
      : typeof raw.updatedAt === "string"
        ? raw.updatedAt
        : datePublished;

  const headline = asString(raw.headline, "headline", file);
  const recap =
    asOptionalString(raw.recap) ??
    (Array.isArray(raw.body) && typeof raw.body[0] === "string" ? raw.body[0] : undefined);
  if (!recap) {
    throw new Error(`${file}: recap (or markdown body) is required`);
  }

  const post: ComicPost = {
    section,
    slug: asString(raw.slug, "slug", file),
    headline,
    source: asSource(raw.source, file, headline),
    recap,
    datePublished,
    dateModified,
    status,
  };
  const hasComicObj =
    (raw.comic && typeof raw.comic === "object") || (raw.hero && typeof raw.hero === "object");
  if (!(section === "horoscope" && !hasComicObj)) {
    post.comic = asComic(raw.comic ?? raw.hero, file, headline);
  }
  const dek = asOptionalString(raw.dek);
  if (dek) post.dek = dek;
  return adaptComicPost(post);
}

function loadOne(filePath: string, name: string): Story {
  const source = readFileSync(filePath, "utf8");
  const ext = extname(name);
  let raw: Record<string, unknown>;
  if (ext === ".json") {
    const parsed = JSON.parse(source) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error(name + ": root must be a story object");
    }
    raw = parsed as Record<string, unknown>;
  } else {
    raw = parseMarkdownStory(source, name);
  }
  if (!raw.slug) {
    raw.slug = basename(name, extname(name));
  }
  return parseStory(raw, name);
}

export function loadFileStories(): Story[] {
  if (!existsSync(STORIES_DIR)) {
    return [];
  }
  const names = readdirSync(STORIES_DIR)
    .filter((name) => name.endsWith(".md"))
    .filter((name) => !name.startsWith("_") && !name.startsWith("."))
    .sort();
  const stories: Story[] = [];
  for (const name of names) {
    const filePath = join(STORIES_DIR, name);
    const source = readFileSync(filePath, "utf8");
    const raw = parseMarkdownStory(source, name);
    const section = typeof raw.section === "string" ? raw.section : "";
    if (isRetiredSection(section)) {
      continue;
    }
    stories.push(loadOne(filePath, name));
  }
  return stories;
}

export function mergeStories(base: Story[], fromFiles: Story[]): Story[] {
  const bySlug = new Map<string, Story>();
  for (const story of base) bySlug.set(story.slug, story);
  for (const story of fromFiles) bySlug.set(story.slug, story);
  return Array.from(bySlug.values());
}
