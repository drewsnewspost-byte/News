---
headline: "MIT: at scale, AI images often have no one author"
dek: "CSAIL’s attribution-decay study finds that as a diffusion model’s training set grows, deleting any one image — or even one artist’s whole folder — often leaves the output unchanged."
comic:
  src: "/comics/attribution-decay-ai-art.png"
  caption: "Four panels: a detective asking whose art a printer made, pulling one painting from a huge pile with no change, tossing a whole artist folder with still no change, and a shrinking counterfactual-radius arrow as the dataset grows."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: MIT News, Aug. 18, 2026."
  alt: "Four-panel full-color lab-gallery comic, no real artist portraits. Panel 1: a cartoon detective asks whose art a pink diffusion printer made. Panel 2: removing one painting from a huge pile, the print stays the same. Panel 3: a folder labeled artist removed, still the same print, banner attribution decay. Panel 4: a graph, dataset size up, counterfactual radius down."
  width: 1200
  height: 675
source:
  url: "https://news.mit.edu/2026/when-ai-art-has-no-author-generated-images-often-cant-be-traced-to-training-data-0818"
  title: "When AI art has no author: Study finds generated images often can’t be traced to training data"
  publisher: "MIT News"
datePublished: "2026-09-02T07:00:00-07:00"
dateModified: "2026-09-02T07:00:00-07:00"
section: ai
status: published
slug: attribution-decay-ai-art
---

What happened

MIT News, Aug. 18, 2026, reports a Nature Communications paper from CSAIL: as generative image models train on more data, the link between any one training example and a given output can fade until it is gone. The researchers call it attribution decay. Lead author Zheng Dai, a former CSAIL researcher, puts the test in one sentence: if you take away a piece of data and the output does not change, that piece did not affect the output. Do that one at a time for every piece and find no change, and it does not make sense to pin the picture on any of them. Professor David Gifford, a CSAIL principal investigator, says prior attribution tools were approximate. This method actually deletes inputs and their influence, an exact large-scale ablation.

Retraining a model from scratch without each image is usually too expensive, which is why older work estimated influence. Dai and Gifford built a “diffusion ensemble”: many smaller components, each trained on a different slice. To ask what the model would have made without a given image, they switch off the parts that saw it. No full retrain, no estimate — a true counterfactual. The ensembles still generated images about as well as 24 ordinary diffusion models on the same data, and they held up better as the datasets got larger. The team then measured each image’s “counterfactual universe,” the alternate versions made by removing different training pieces, and the “counterfactual radius,” the distance to the most different alternate. That radius is the most any single piece of data could have mattered.

They trained 24 ensembles on sets from 256 images to more than 160,000, from seven public collections including CIFAR-10, CelebA, MetFaces, and ArtBench. The bigger the training set, the smaller the radius, shrinking along an inverse power law, whether they measured pixels or meaning. Stress tests — brute-force retraining of 1,282 small models, pinning the removed fraction, fixed epochs, text prompts, class labels, four similarity metrics — still showed the decay. At large scale, they find, you can often remove any single image, every image by a given artist, or every photograph of a given person, and the generated sample does not change.

Why it matters

The question “whose work went into this portrait?” sits under a lot of arguments about credit. This paper does not settle a courtroom. It reports a measurement: at large scales the causal link to any one training item can vanish. Gifford frames a follow-on as an industry obligation, that companies wanting to show outputs are not copies of individual works would need models that can actually demonstrate that. Cornell’s James Grimmelmann, quoted in the MIT story, says if attribution fails for interesting models, technologists and courts will need other methods for assessing copying. The authors note they studied diffusion models, not large language models, so the highest-profile text cases remain an open question.

The comic is a detective, a printer, a missing painting that changes nothing, a missing folder that still changes nothing, and a radius that shrinks as the pile grows. Bright gallery colors. No real artist’s face. Not a how-to for hiding data. A lab result about what “author” even means when the pile is huge.

Conclusion

Attribution decay, in this CSAIL study, means a big enough training set can make any one image — or one artist’s whole stack — irrelevant to a given output. Delete it, print again, same picture. Nature Communications, MIT News Aug. 18. The strip is the printer, the missing painting, the missing folder, and the shrinking radius. Source: https://news.mit.edu/2026/when-ai-art-has-no-author-generated-images-often-cant-be-traced-to-training-data-0818
