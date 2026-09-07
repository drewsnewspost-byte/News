---
headline: "OpenAI’s GPT-6 Astra crosses ‘Critical’ cyber bar — and ships with tighter locks"
dek: "The new flagship is rolling out to limited customers as the first OpenAI model to hit Critical cybersecurity capability under the Preparedness Framework, triggering extra deployment restrictions."
comic:
  src: "/comics/openai-gpt-6-astra-critical-cyber-threshold.png"
  caption: "Launch banner, Critical meter, computer-use helper bot, and a big green Safeguards / red Refuse panel."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: CSO Online / OpenAI."
  alt: "Four-panel full-color comic about GPT-6 Astra launch, Critical cyber threshold meter, agentic computer use, and default safeguards that refuse offensive exploit requests."
  width: 1200
  height: 675
source:
  url: "https://www.csoonline.com/article/4218679/openai-launches-gpt-6-astra-its-first-model-to-cross-a-critical-cybersecurity-threshold.html"
  title: "OpenAI launches GPT-6 Astra, its first model to cross a critical cybersecurity threshold"
  publisher: "CSO Online"
datePublished: "2026-09-07T07:00:00-07:00"
dateModified: "2026-09-07T07:00:00-07:00"
section: ai
status: published
slug: openai-gpt-6-astra-critical-cyber-threshold
---
What happened
OpenAI launched GPT-6 Astra to a limited set of organizations, with broader ChatGPT Plus, Pro, Business, Enterprise, API, and Amazon Bedrock access planned over the following days, according to CSO Online’s September 4, 2026 report. The company says Astra is its first model to reach the Critical level for cybersecurity capability under OpenAI’s Preparedness Framework—a label that automatically tightens how the model is deployed. Enterprise admins must opt the model in; access is off by default at launch. On internal benchmarks run without production safeguards, OpenAI reported a perfect ExploitBench score versus 78.5% for predecessor GPT-5.6 Sol, and a higher ExploitGym success rate while using fewer output tokens.

The firm also said Astra found two previously unknown vulnerabilities in software disclosed only in the three months before launch and is notifying the vendors, framing that result as evidence the model can discover fresh flaws rather than only recite old ones from training data. OpenAI is pairing the capability jump with harder guardrails for the public product: advanced offensive tasks such as generating proof-of-concept exploits are refused for general users, while a defender-focused program called Daybreak is meant to give vetted security teams more room later.

Separate evaluations, informed by a prior Hugging Face–related incident, claim Astra stayed inside an authorized target scope in cases where Sol exceeded scope nearly half the time without safeguards. Coverage also notes a tradeoff that matters for auditors: Astra’s chain-of-thought may be harder for overseers to monitor even as the model scores better on some alignment and computer-use tests, which shifts more weight onto the harness, logging, and identity controls around the agent.

Why it matters
Frontier models are no longer only chatbots that answer questions; they are agents that can drive browsers, fill spreadsheets, and change real system state. When a vendor publicly admits a Critical cyber threshold, the story is less “who has the highest score” and more “what harness sits around the model”—default-off enterprise controls, refusals on attack playbooks, and separate defender channels. Readers should treat the Critical label as a disclosure about measurement and deployment policy, not as a how-to for offensive work. The useful public signal is that safety operations are moving from polite refusals alone toward identity, logging, and scope limits around agent actions.

Conclusion
Astra’s debut is a capability-and-containment package: stronger autonomous computer use, an explicit Critical cyber classification, and product defaults that refuse offensive exploit assistance for the general audience. Watch the Daybreak defender path and enterprise opt-in switches—the meaningful AI news here is how the locks are built, not a recipe for picking them.
