"use client";

import { FormEvent, useState } from "react";

type Variant = "home" | "footer" | "rail" | "band";

export function NewsletterSignup({ variant = "home" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error || "Please enter a valid email.");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not subscribe. Try again.");
    }
  }

  const compact = variant === "footer";
  const rail = variant === "rail";
  const band = variant === "band";

  if (band) {
    return (
      <div id="subscribe" className="bg-leaf text-white">
        <div className="shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
          <div className="max-w-xl">
            <p className="font-serif text-3xl font-medium leading-tight md:text-4xl">Comics on the day’s news</p>
            <p className="mt-2 font-sans text-sm text-white/90">One or two strips in your inbox. A recap and a source, nothing extra.</p>
          </div>
          {status === "success" ? (
            <p className="font-sans text-sm" role="status">You’re on the list.</p>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <label htmlFor="newsletter-email-band" className="sr-only">Email</label>
              <input
                id="newsletter-email-band"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border-0 bg-white px-3 py-2.5 font-sans text-sm text-ink placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 bg-ink px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-forest-deep disabled:opacity-60"
              >
                {status === "loading" ? "…" : "Subscribe"}
              </button>
            </form>
          )}
          {status === "error" && message ? (
            <p className="font-sans text-sm text-white" role="alert">{message}</p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        compact
          ? "mt-6 max-w-md border-t border-line pt-5"
          : rail
            ? "border border-line bg-white p-3"
            : "my-8 border border-line bg-white px-5 py-5 md:px-7"
      }
    >
      <p className={`font-sans uppercase ${rail ? "text-[10px] tracking-[0.16em] text-leaf" : "text-kicker text-leaf"}`}>
        Newsletter
      </p>
      <p className={`mt-2 font-serif text-forest ${compact ? "text-lg" : rail ? "text-sm leading-snug" : "text-xl"}`}>
        The day’s one or two stories, in your inbox.
      </p>
      {!compact && !rail ? <div className="mt-3 h-px w-16 bg-leaf" aria-hidden /> : null}
      {status === "success" ? (
        <p className={`mt-3 font-sans text-leaf ${rail ? "text-xs" : "text-sm"}`} role="status">
          You’re on the list.
        </p>
      ) : (
        <form onSubmit={onSubmit} className={`mt-3 flex flex-col gap-2 ${rail ? "" : "sm:flex-row sm:items-stretch"}`}>
          <label htmlFor={`newsletter-email-${variant}`} className="sr-only">
            Email
          </label>
          <input
            id={`newsletter-email-${variant}`}
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className={`w-full border border-line bg-white px-3 font-sans text-ink placeholder:text-sage focus:border-leaf focus:outline-none ${rail ? "py-1.5 text-xs" : "py-2 text-sm"}`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`shrink-0 bg-forest font-sans uppercase tracking-wide text-paper hover:bg-forest-deep disabled:opacity-60 ${rail ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"}`}
          >
            {status === "loading" ? "…" : "Subscribe"}
          </button>
        </form>
      )}
      {status === "error" && message ? (
        <p className={`mt-2 font-sans text-brick ${rail ? "text-xs" : "text-sm"}`} role="alert">
          {message}
        </p>
      ) : null}
    </div>
  );
}
