---
headline: "If the model already saw the test, the score is mush"
dek: "DeepMind is piloting a double-blind evaluation of Gemini Flash Lite so the model and the benchmark stay hidden from each other."
comic:
  src: "/comics/double-blind-ai-evals.png"
  caption: "Four panels: a 100-star score marked mush, locked benchmark and model boxes, two people who cannot see each other’s secrets, a small Gemini Flash Lite robot taking a hidden quiz."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: Google DeepMind, Aug. 27, 2026."
  alt: "Four-panel comic: a student with an answer key and a 100-star score marked mush, two locked boxes labeled benchmark and model, two people who cannot see each other’s secrets, a small Gemini Flash Lite robot taking a hidden quiz."
  width: 1200
  height: 675
source:
  url: "https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/"
  title: "Piloting the world’s first double-blind AI evaluations"
  publisher: "Google DeepMind"
datePublished: "2026-08-29T07:10:00-07:00"
dateModified: "2026-08-29T08:25:00-07:00"
section: ai
status: published
slug: double-blind-ai-evals
---

What happened

Google DeepMind’s new pitch is an old exam rule. If a student already saw the questions, a perfect score does not mean much. The lab says AI benchmarks have the same contamination problem: once a model has “peeked,” the number inflates. On Aug. 27 it said it is running what it calls the first double-blind evaluation of a proprietary frontier-class model. A Gemini Flash Lite model is being tested against confidential benchmarks inside Google Cloud Confidential Space, part of the company’s confidential computing tools.

Partners named on the post: Singapore AI Safety Institute, OpenMined, AVERI, and MLCommons. DeepMind says it already uses a wide mix of tests through development, and does not want to rely on internal testing alone. The new piece is cryptographic. The evaluator cannot see Gemini’s weights. Google cannot see the test prompts. Both stay in a box that can be verified without opening it. Authors on the post are William Isaac, Sol Messing, and Kristian Lum.

Why it matters

The old tradeoff was ugly. Either the tester handed over the prompts, risking the company seeing the exam, or the company handed over the weights, risking the model. Zero-logging and contracts have been the soft version of secrecy. DeepMind is arguing that a hardware-backed confidential environment is a harder version, and that scores from that box are easier to trust. As models get more capable, a contaminated leaderboard is not a quirky footnote. It is a fake report card, which is why the lab uses the student-and-answer-key picture in the first place.

The post is a pilot, not a new public scoreboard. It is a method claim: you can let an outside group stress-test a closed model without either side seeing the other’s crown jewels. If other labs copy the box, the useful output is not a viral number. It is a number that was not rehearsed. The strip’s last panel is a hidden quiz for a reason.

Conclusion

If the model already saw the test, the score is mush, and a 100 with an asterisk is not a measurement. DeepMind is trying to run an exam where the tester cannot see the weights and the company cannot see the questions. That is the whole story of the Aug. 27 post, and it is why the comic is a locked box instead of a trophy. The pilot either becomes a pattern other labs can copy or it stays a one-off method note. Either way, the recap should not pretend a new leaderboard dropped.
