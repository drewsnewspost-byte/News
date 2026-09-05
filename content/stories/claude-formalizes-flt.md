---
headline: "Claude formalizes Fermat’s Last Theorem in Lean—end to end"
dek: "Anthropic says an 11-day, largely autonomous run produced the first complete computer-checked FLT proof: millions of lines of Lean and tens of thousands of lemmas."
comic:
  src: "/comics/claude-formalizes-flt.png"
  caption: "Four panels: Fermat’s margin note becomes a glowing conjecture card, a swarm of agent bots stacks Lean theorems like colorful bricks, a verifier stamps CHECKED in green, and a scoreboard shows 11 days and millions of lines."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: Anthropic, Sept. 4, 2026."
  alt: "Four-panel full-color AI comic. Panel 1: cartoon parchment with a^n+b^n=c^n crossed out for n>2. Panel 2: colorful agent bots building Lean proof bricks. Panel 3: green computer-checked stamp. Panel 4: 11-day scoreboard with theorem count."
  width: 1200
  height: 675
source:
  url: "https://www.anthropic.com/research/formalizing-fermats-last-theorem"
  title: "Formalizing Fermat's Last Theorem"
  publisher: "Anthropic"
datePublished: "2026-09-05T07:00:00-07:00"
dateModified: "2026-09-05T07:00:00-07:00"
section: ai
status: published
slug: claude-formalizes-flt
---

What happened

Anthropic published Friday that Claude produced the first complete computer-checked proof of Fermat’s Last Theorem, written in the Lean programming language over about 11 days of largely autonomous work. The company said the run wrote on the order of 13 million lines of Lean and proved tens of thousands of intermediate theorems on the way to an end-to-end formalization. The classic claim—no positive integers a, b, c satisfy aⁿ + bⁿ = cⁿ for any n greater than 2—was first proved by Andrew Wiles in 1995 in a human-readable argument that took months of expert scrutiny to verify.

The Anthropic write-up frames the result as a test of AI formalization tools rather than a replacement for mathematical taste. Dozens of Claude agents defined concepts, proved lemmas, and assembled harder statements from those lemmas. Separate checking confirmed the formal statement matched the intended theorem and that the proof relied on the expected axiomatic setup. The formal proof is vastly larger than a typical human exposition because every step must be explicit enough for a machine kernel to accept.

This desk is covering the research disclosure and the scale of the formalization, not handing out a how-to for misusing agents.

Why it matters

A computer-checked proof does not make FLT newly true; it makes the argument newly inspectable by a verifier that does not get tired. For research mathematics, that is a different kind of trust: gaps and hidden assumptions have to be written down. For AI labs, FLT formalization is a stress test of long-horizon agent collaboration—definition management, lemma libraries, and proof search at a size that exceeds everyday coding chores.

The practical near-term effect is likely uneven. Some areas of mathematics already live close to Lean and Mathlib; others do not. A 13-million-line artifact is not something a human reads like a novel. It is something a community can replay, refactor, and cite when they want machine assurance. The interesting follow-on is whether the same pipeline shortens formalizations that mathematicians already want, not only trophy theorems everyone already believes.

Conclusion

Claude’s Lean formalization of Fermat’s Last Theorem is an 11-day, multi-agent, computer-checked milestone announced by Anthropic on Sept. 4—huge, explicit, and built for verifiers. Full-color strip. Source: https://www.anthropic.com/research/formalizing-fermats-last-theorem
