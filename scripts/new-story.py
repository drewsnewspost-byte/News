#!/usr/bin/env python3
import argparse
import re
import sys
from datetime import datetime, timezone, timedelta
from pathlib import Path

SECTIONS = ["sports", "finance", "science", "ai", "animal", "culture", "horoscope", "humor", "conspiracy", "movies"]

def main():
    p = argparse.ArgumentParser(prog="new-story")
    p.add_argument("--section", required=True)
    p.add_argument("--slug", required=True)
    args = p.parse_args()
    section = args.section.lower()
    slug = args.slug.lower()
    if section not in SECTIONS:
        sys.exit("Unknown section. Use one of: " + ", ".join(SECTIONS))
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug):
        sys.exit("slug must be lowercase letters, numbers, and hyphens")
    dest = Path(__file__).resolve().parent.parent / "content" / "stories" / (slug + ".md")
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists():
        sys.exit("Already exists: " + str(dest))
    now = datetime.now(timezone(timedelta(hours=-7)))
    published_at = now.strftime("%Y-%m-%dT%H:%M:%S-07:00")
    dest.write_text(
        "---\n"
        "headline: \"Headline goes here\"\n"
        "dek: \"One-line dek\"\n"
        "comic:\n"
        f"  src: \"/art/{section}.svg\"\n"
        "  alt: \"Describe the comic strip\"\n"
        "  caption: \"Optional caption\"\n"
        "  credit: \"Credit\"\n"
        "source:\n"
        "  url: \"https://example.com/original-story\"\n"
        "  title: \"Original story title\"\n"
        "  publisher: \"Publisher\"\n"
        f"datePublished: \"{published_at}\"\n"
        f"dateModified: \"{published_at}\"\n"
        f"section: {section}\n"
        "status: draft\n"
        f"slug: {slug}\n"
        "---\n\n"
        "Short recap of the news the comic is based on.\n"
    )
    print("Wrote draft", dest)
    print("Set status: published when the strip is ready.")

if __name__ == "__main__":
    main()
