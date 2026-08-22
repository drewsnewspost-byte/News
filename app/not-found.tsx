import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-3 font-serif text-3xl text-ink">Not on the page</h1>
      <p className="mt-3 text-muted">
        Unknown section, missing slug, or a draft still in the drawer.
      </p>
      <Link href="/" className="mt-6 inline-block text-forest underline">
        Back to the front page
      </Link>
    </main>
  );
}
