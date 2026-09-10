---
headline: "Trace as State puts reasoning traces before long context — and wins"
dek: "arXiv 2609.02702: placing collected traces before the context beats Trace Append in 26 of 27 reported model–task–metric combos."
comic:
  src: "/comics/trace-as-state-long-context.png"
  caption: "Four panels: long-context maze, Trace as State before the door, Trace Append after, 26/27 scoreboard with GraphWalks Parents lift."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: arXiv."
  alt: "Four-panel full-color AI comic. Panel 1: robot facing a long-context maze. Panel 2: Trace as State places reasoning traces before the context. Panel 3: Trace Append control stacks traces after. Panel 4: 26 of 27 wins scoreboard, GraphWalks Parents 81.8% vs 43%."
  width: 1200
  height: 675
source:
  url: "https://arxiv.org/abs/2609.02702"
  title: "Trace as State: Reasoning Traces as Conditional States for Long-Context Transformers"
  publisher: "arXiv"
datePublished: "2026-09-10T07:00:00-07:00"
dateModified: "2026-09-10T07:00:00-07:00"
section: ai
status: published
slug: trace-as-state-long-context
---

What happened

arXiv paper 2609.02702, submitted 2 September 2026 by Xu Zou and Jie Tang, introduces Trace as State: collect a reasoning trace as a textual proxy for task state, then place that trace before the long-context block on a fresh pass so earlier discoveries can guide rereading. The matched control, Trace Append, uses the same proxy but puts it after the context. Across three models and three long-context datasets, Trace as State beats Trace Append in 26 of 27 reported combinations of model, task, and metric.

On GraphWalks Parents, exact match for DeepSeek V4 Pro Preview rises from 29.2% on the initial pass and 43.0% with Trace Append to 81.8% with Trace as State. Another model, GLM-5.2, climbs from 66.4% and 83.2% to 100.0% under the same placement. The authors frame the method as fixing a causal mismatch: long-context reasoning may depend on task state discovered only later, and putting the condition first can require far less memory than putting it last. This desk files the placement result and the measured lifts — not a product pitch and not a jailbreak recipe.

AI packages here prefer a measurable method over hype. Putting traces before context is an efficiency-and-accuracy story about rereading, not a bypass of safety systems. The comic is the maze, the before-door badge, the after-door control, and the 26/27 scoreboard. Bright lab colors. No brand logos.

Why it matters

Readers get the protocol name, the append control, the 26/27 win rate, and the GraphWalks Parents lifts. Skip anything that wanders into bypassing safety systems. Keep the arXiv path on the page. A causal-transformer trick that still respects the architecture is a clean AI slot for this batch.

Conclusion

Trace as State places reasoning traces before long context and outperforms Trace Append in 26 of 27 reported combos, including an 81.8% vs 43% GraphWalks Parents lift on one model and 100% on another, per arXiv 2609.02702. Source: https://arxiv.org/abs/2609.02702