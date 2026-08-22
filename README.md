# Drew's Comic Newsroom

Local homepage skeleton. Comics on the days news. Desks: AI, Science, Environment, Horoscope, Humor, Sports, Finance, Animal, Culture.

## How to run

From /workspace/drews-news:

1. Install dependencies with the Node package manager.
2. Start the development server with the project `dev` script (defaults to port 3000).
3. Open http://localhost:3000

Production: use the `build` script, then the `start` script.

## Routes

- / homepage (published stories only)
- /sports /finance /science /ai /animal /culture /horoscope /humor /culture
- /[section]/[slug] story page
- Draft slugs 404

Drafts are excluded from listings and sitemap.

Exact commands after install: the dev script, and the build script.

How to run: npm run dev
Confirm build: npm run build


## Add a story (local)

From this directory, run the new-story script with --section and --slug (example: section animal, slug my-slug).

That writes a draft markdown file in content/stories/ with todays date and placeholders. Edit the file, then set status published when it should appear. Stories load from those files at build/dev time.

## Newsletter

Homepage and footer signup POSTs to `/api/subscribe`, which appends validated emails to `data/subscribers.json`. No email is sent.

Post shape: comic image (alt, caption, credit), then recap, then source URL.
