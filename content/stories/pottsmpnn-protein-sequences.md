---
headline: "MIT’s PottsMPNN designs proteins without copying nature’s recipes"
dek: "A Biology Department framework folds physical energy into sequence design so new proteins can be stable without reproducing the amino-acid strings evolution already picked."
comic:
  src: "/comics/pottsmpnn-protein-sequences.png"
  caption: "Four panels: nature’s recipe book versus a blank notebook, amino acids shaking hands on pairwise energy, noisy training so the model does not photocopy native sequences, and a stable fold stamped not a copy."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: MIT News, Aug. 27, 2026."
  alt: "Four-panel full-color lab comic. Panel 1: a cartoon scientist holds a green Nature’s Recipe Book and a yellow notebook labeled new sequences. Panel 2: orange and blue amino-acid characters shake hands with a gold pairwise-energy spark. Panel 3: glittery noise around a protein fold. Panel 4: a smiling cartoon protein ribbon stamped stable fold, not a copy."
  width: 1200
  height: 675
source:
  url: "https://news.mit.edu/2026/looking-beyond-natural-sequences-0827"
  title: "Looking beyond natural sequences"
  publisher: "MIT News"
datePublished: "2026-09-01T07:00:00-07:00"
dateModified: "2026-09-01T07:00:00-07:00"
section: ai
status: published
slug: pottsmpnn-protein-sequences
---

What happened

MIT News, Aug. 27, 2026, describes PottsMPNN, a machine-learning framework from the Department of Biology that tries to stop treating “did we reproduce evolution’s sequence?” as the main grade. Proteins fold according to amino-acid sequence. Design pipelines often pick a structure first, then ask a model for sequences that could adopt it. Nature already knows that many sequences can share a fold, and that one sequence can sometimes wear more than one shape. The paper, “Beyond native sequence recovery: Improved modeling of the sequence-energy landscape of protein structures,” is the citation. Senior author Amy E. Keating, Biology department head, says the field has measured success by whether a model can reproduce the sequence evolution happened to select, and that this is not the best metric for design.

Lead author Foster Birnbaum, a graduate student, puts the useful tests differently: how likely are the generated sequences to fold into the desired structures, how well does the model understand the sequence-energy landscape, and how well can it predict how a mutation changes stability. If the target fold is completely novel, there is no native sequence to copy anyway. PottsMPNN adds the physical principles that govern structure and stability into sequence generation. MIT News says that putting the framework into a design pipeline should let researchers make structurally feasible proteins whose sequences do not resemble any native protein.

The model’s tricks are specific. Birnbaum was interested in training-time “noise,” extra variation on a structure so the network is less tempted to photocopy native strings and can cover more folds. PottsMPNN also uses a pairwise distribution that scores physical interactions between amino acids at a pair of positions, all 20 options on each side, which MIT says is a reason it models the energy landscape more accurately. Evolutionarily related sequence sets go into training so the model sees that different strings can still share a fold. Birnbaum notes the irony: using evolutionary families is still, in a way, leaning on nature. The result they claim is that as the model depends less on native recovery, structural compatibility and energy prediction improve, including for novel proteins.

Why it matters

A widely used 2022 protein model has been hard to knock off the perch. Birnbaum’s question is why, and whether teaching physics and pairwise energy can move the grade from “looks like a real sequence” to “will this fold, and what does a mutation do?” That is an engineering metric. Keating’s closer in the MIT story is that the methods move the field toward useful new-to-nature proteins and a stronger foundation for later work. This filing stays on that claim. It is not a product launch and it is not a medical promise. It is a model that tries to stop treating nature’s recipe book as the answer key.

The comic is the same argument in four bright lab colors. A recipe book versus a blank notebook. Amino acids shaking hands on pairwise energy. A noisy training cloud so the network does not photocopy. A stable cartoon fold stamped not a copy. No hazard symbols. No dual-use plot. Just the MIT News beat: energy landscape in, native-sequence worship out.

Conclusion

PottsMPNN is MIT Biology’s attempt to grade protein design on fold and stability instead of on whether the letters match a natural protein. Noise in training, pairwise amino-acid physics, evolutionary families as examples of many sequences per fold. Paper in PNAS, story dated Aug. 27. The strip is the cookbook, the handshake, the glitter, and the not-a-copy stamp. Source: https://news.mit.edu/2026/looking-beyond-natural-sequences-0827
