---
headline: "Declarative Attention lets models skip most of the KV cache"
dek: "arXiv 2609.02737: zero-shot DA cuts attended tokens ~52% on Gemma-4-31B across 15 long-context tasks with a ~1.3-point accuracy dip."
comic:
  src: "/comics/declarative-attention-kv-skip.png"
  caption: "Four panels: a huge KV library, global/focus/local tags, skipping shelves for a 52% cut, and a small accuracy trade-off board."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: arXiv."
  alt: "Four-panel full-color AI comic. Panel 1: overwhelmed robot in KV cache library. Panel 2: Declarative Attention tags. Panel 3: skipping shelves, 52% fewer attended tokens. Panel 4: modest 1.27pp accuracy dip scoreboard."
  width: 1200
  height: 675
source:
  url: "https://arxiv.org/abs/2609.02737"
  title: "Language Models Can Control Their Own Attention"
  publisher: "arXiv"
datePublished: "2026-09-09T07:00:00-07:00"
dateModified: "2026-09-09T07:00:00-07:00"
section: ai
status: published
slug: declarative-attention-kv-skip
---

What happened

arXiv paper 2609.02737, submitted 2 September 2026 by Namgyu Ho and collaborators, introduces Declarative Attention: a protocol that asks a language model to declare, inside its chain-of-thought, whether the next stretch of generation should attend globally, focus on a named region, or stay local to recent output. The inference engine parses those declarations like tool calls and skips most of the key-value cache read.

Under zero-shot evaluation across 15 long-context tasks, DA on off-the-shelf models cuts total attended tokens during decoding — about 52.0% for Gemma-4-31B and 31.1% for Qwen-3.6-27B — with modest accuracy drops of roughly 1.27 and 2.75 percentage points that shrink with scale. The pitch is intrinsic sparsity: the model already knows what matters, so stop paying extrinsic O(N) proxy scores every step. This desk files the method and the measured trade-off, not a product pitch.

Why it matters

AI packages here prefer a measurable method over hype. Skipping KV reads is an efficiency story, not a jailbreak recipe. The comic is the crowded cache library, the three attention tags, the 52% skip, and the small accuracy dip. Bright lab colors. No brand logos.

Readers get the protocol name, the token savings, and the accuracy cost. Skip anything that wanders into bypassing safety systems.

Conclusion

Declarative Attention lets off-the-shelf models declare where to attend and skip most KV reads, posting large token savings with small accuracy costs, per arXiv 2609.02737. Source: https://arxiv.org/abs/2609.02737
