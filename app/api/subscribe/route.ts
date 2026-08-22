import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const STORE = path.join(process.cwd(), "data", "newsletter-signups.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Subscriber = { email: string; subscribedAt: string };

function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return null;
  return email;
}

async function loadSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await readFile(STORE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email = normalizeEmail(
    body && typeof body === "object" && "email" in body ? (body as { email: unknown }).email : null
  );
  if (!email) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const list = await loadSubscribers();
  if (!list.some((s) => s.email === email)) {
    list.push({ email, subscribedAt: new Date().toISOString() });
    await mkdir(path.dirname(STORE), { recursive: true });
    await writeFile(STORE, `${JSON.stringify(list, null, 2)}\n`, "utf8");
  }

  return NextResponse.json({ ok: true });
}
