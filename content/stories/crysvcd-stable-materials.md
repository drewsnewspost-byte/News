---
headline: "AI was generating crystals. Chemistry was the missing filter."
dek: "MIT’s CrysVCD puts valence-shell rules in front of the generator so the designs that come out can actually exist."
comic:
  src: "/comics/crysvcd-stable-materials.png"
  caption: "Four panels: AI spewing unstable crystals, a DVD-player valence filter, rules-first lattices that hold, a cooling chip in a data center."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: MIT News, Aug. 26, 2026."
  alt: "Four-panel AI comic: a generator dumps crumbling crystals into a stability screen, a CrysVCD DVD-player plug-in, valence rules then a lattice, and chips plus a hot data-center rack that need real solids."
  width: 1200
  height: 675
source:
  url: "https://news.mit.edu/2026/ai-helps-design-new-materials-that-work-in-real-world-0826"
  title: "AI helps design new materials that work in the real world"
  publisher: "MIT News"
datePublished: "2026-08-31T07:00:00-07:00"
dateModified: "2026-08-31T07:00:00-07:00"
section: ai
status: published
slug: crysvcd-stable-materials
---

What happened

Anyone with a large enough model can now generate millions of new material designs in minutes. Most of them are useless. MIT News, dated Aug. 26, 2026, reports that the bottleneck is chemical stability: current generators do not reliably respect how electrons sit around atoms, so industry then spends a fortune screening out the junk. In some pipelines that filter burns about 90 percent of the compute and can take weeks or months. Mingda Li’s group at MIT answers with a plug-in they call crystal generator with valence-constrained design, or CrysVCD. It enforces key valence-shell chemistry rules before the expensive generation step. A language model proposes chemically valid formulas; a diffusion model then builds the atomic structure on top of whatever generator you already have. Li’s metaphor is the strip: if material-generating models are DVDs, CrysVCD is the DVD player. “You can plug this into any kind of model, not only existing diffusion models but also future models, where people can’t generate enough stable materials, and it can improve stability.”

The paper is in Nature Computational Science. Co-authors on the MIT News write-up are Mouyang Cheng and Weiliang Luo, Hao Tang, Bowen Yu, Yongqiang Cheng of Oak Ridge National Laboratory, Weiwei Xie of Michigan State, Ju Li, and Heather Kulik. Applied to several common generators, CrysVCD pushed valence-shell compliance up and hit high lattice-dynamics stability — a stringent test — in nearly 70 percent of computational generations. Fine-tuned on stability metrics, it produced crystals with 68 percent mechanical stability and 85 percent metastability, meaning they stay put when left alone. Cheng’s line is the efficiency argument: generating the structure has become easy; validating stability is the bill. Put a language model at the front to constrain the recipe, and the ratio of usable crystals jumps. Luo and Tang put numbers on the contrast: typical diffusion can take on the order of a thousand steps to make one material; used at the beginning, their model is more like five steps of screening for quality.

Why it matters

The point is not a prettier picture of a crystal. It is that small labs cannot afford the brute-force filter that big companies run after the fact. Kulik says academia, with fewer resources, can still get strong performance with smarter design, and that generating first and down-selecting for stability is the inefficient order. CrysVCD is aimed at two properties the semiconductor and data-center worlds actually buy: high thermal conductivity and a high dielectric constant. Ju Li notes that data-center energy use has surged and that about 30 percent of that energy goes to cooling, so materials that move heat more efficiently are not a science-fair demo. In principle the same loop can target other properties. Cheng’s caution is the field’s real scoreboard: chasing two goals at once and clearing 50 percent is already hard; older pipelines often landed in the single digits on the combined test of property plus stability.

The method is not universal. It works best on solids with highly ordered internal arrangements, not every chemistry on the periodic table. Li’s closer is still the one that matters for the comic’s last panel: take the downstream selection off the critical path and you save huge computation cost and time, for hundred-million-material campaigns and for smaller groups with a single application. The work was supported in part by the U.S. Department of Energy, a Mathworks Engineering Fellowship, the National Science Foundation, and the U.S. Defense Threat Reduction Agency. No one is shipping a miracle coolant tomorrow. They are shipping a filter that makes the generator stop wasting most of its breath on crystals that would fall apart.

Conclusion

CrysVCD does not invent a new kind of imagination. It puts valence-shell chemistry in front of the imagination so the crystals that come out can exist in a lab, and then on a chip. MIT’s numbers are a nearly 70 percent lattice-dynamics hit rate, 68 percent mechanical stability and 85 percent metastability when fine-tuned, and a target list that starts with heat and dielectrics because data centers spend about 30 percent of their energy on cooling. The strip is the fountain of broken crystals, the gold filter, the stack that holds, and a server aisle that needs a better sink. Plug the DVD player in first. Then generate.
