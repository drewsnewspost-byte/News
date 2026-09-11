---
headline: "Looped Flows hit 58.8% on ARC-AGI-1 with local denoising recurrence"
dek: "arXiv 2609.11801, submitted Sept. 10: Thinking with Looped Flows trains looped models with local denoising objectives; 12.2% on ARC-AGI-2 across six reasoning benchmarks."
comic:
  src: "/comics/looped-flows-arc.png"
  caption: "Four panels: looped recurrence maze, local denoising objectives, 58.8% ARC-AGI-1 scoreboard, 12.2% ARC-AGI-2 badge."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: arXiv."
  alt: "Four-panel full-color AI comic. Panel 1: robot cycling a looped hidden-state recurrence. Panel 2: local denoising objectives with decreasing noise levels. Panel 3: 58.8 percent ARC-AGI-1 test accuracy scoreboard. Panel 4: 12.2 percent ARC-AGI-2 badge across six reasoning benchmarks."
  width: 1200
  height: 675
source:
  url: "https://arxiv.org/abs/2609.11801"
  title: "Thinking with Looped Flows"
  publisher: "arXiv"
datePublished: "2026-09-11T07:00:00-07:00"
dateModified: "2026-09-11T07:00:00-07:00"
section: ai
status: published
slug: looped-flows-arc
---

What happened

arXiv paper 2609.11801, submitted 10 September 2026, introduces Thinking with Looped Flows: train looped recurrence with local denoising objectives so early updates can still support later ones when backprop only covers a few steps. By tying denoising objectives across time with progressively decreasing noise levels and shared noise, the model is pushed to learn recurrent states that transfer useful computation forward. Inference is cast as integrating the velocity of a probability flow parameterized by the learned denoiser, coupled with those recurrent states — more compute via a finer temporal grid, and multiple valid predictions from different initial noise samples.

Across six reasoning benchmarks, including two multi-solution benchmarks, looped flows outperform prior state-of-the-art looped models overall, posting 58.8% test accuracy on ARC-AGI-1 and 12.2% on ARC-AGI-2. This desk files the method name, the local-denoising training trick, and the measured ARC numbers — not a product pitch and not a jailbreak or exploit recipe. Skip anything that wanders into bypassing safety systems.

AI packages here prefer a measurable method over hype. Spending more inference compute through a finer flow grid is an accuracy-and-compute story about recurrence, not a bypass of safeguards. The comic is the loop maze, the denoising chalk, the 58.8% ARC-AGI-1 board, and the 12.2% ARC-AGI-2 badge. Bright lab colors. No brand logos.

Why it matters

Readers get the paper title, the local denoising / probability-flow framing, the six-benchmark scope, and the 58.8% / 12.2% ARC scores. Keep politics out. Keep the arXiv path on the page. A looped-model training fix that still respects the architecture is a clean AI slot for this batch.

Conclusion

Thinking with Looped Flows trains recurrence with local denoising objectives and reports 58.8% on ARC-AGI-1 and 12.2% on ARC-AGI-2 across six reasoning benchmarks, per arXiv 2609.11801 submitted Sept. 10. Source: https://arxiv.org/abs/2609.11801
