---
headline: "ETH Zurich teaches a robotic hand to walk on its own fingers"
dek: "Tech Times / Soft Robotics Lab, Sept. 18: arXiv ‘Fingers as Legs’; 818 g WUJI Hand crawls 14 surfaces, recovers from falls, presses keys while self-supported."
comic:
  src: "/comics/eth-zurich-fingers-as-legs.png"
  caption: "Four panels: cartoon robot hand standing, finger-steps across surfaces, fall recovery flip, keyboard press while balancing. Cartoon robots only."
  credit: "Comic: Topics / Drew’s Comic Newsroom. Source: Tech Times / ETH Zurich Soft Robotics Lab."
  alt: "Four-panel full-color AI comic. Panel 1: bright cartoon five-finger robot hand. Panel 2: hand walking on fingertips across tile and grass. Panel 3: hand flipping upright after a tip-over. Panel 4: hand pressing keyboard keys while balancing."
  width: 1280
  height: 720
source:
  url: "https://www.techtimes.com/articles/327706/20260918/eth-zurich-robotic-hand-walks-steers-presses-keys-its-own-fingers.htm"
  title: "ETH Zurich Robotic Hand Walks, Steers, and Presses Keys on Its Own Fingers"
  publisher: "Tech Times"
datePublished: "2026-09-19T07:00:00-07:00"
dateModified: "2026-09-19T07:00:00-07:00"
section: ai
status: published
slug: eth-zurich-fingers-as-legs
---

What happened

Tech Times’ Sept. 18 write-up of ETH Zurich’s Soft Robotics Lab paper “Fingers as Legs: Learning Self-Supported Locomotion and Manipulation with an Anthropomorphic Hand” (arXiv, Sept. 15; Kazemipour, Zheng, Katzschmann) describes a commercial five-finger WUJI Hand — 20 active degrees of freedom, complete system about 818 grams with battery and onboard computer — that crawls untethered across 14 surface types, recovers from falls, and presses keyboard keys while supporting its own weight. No wheels, no separate legs, no tether. That is the AI filing: reinforcement learning that erases the usual hand-vs-legs hardware split.

Training used sim-to-real transfer with a simulator calibrated from the physical hand’s actuators, plus asymmetric actor-critic PPO. The lab’s custom anisotropic “virtual spring” reward — forward deviation cheaper than sideways or vertical — produced about 1.67 cm/s mean crawl speed in simulation versus 1.02 cm/s with generic quadruped rewards. On hardware: rubber to gravel to grass, 21/25 fall recoveries (84%), and 29/32 correct Sokoban key presses (91%) with median 0.25 s latency, proprioception only. Soft lab teal and finger-pad pink, white gutters, cartoon robots only — never likenesses of researchers. Source: https://www.techtimes.com/articles/327706/20260918/eth-zurich-robotic-hand-walks-steers-presses-keys-its-own-fingers.htm.

Readers get the 818-gram single-system pitch, the 14-surface demo list, fall-recovery and keyboard accuracy, the reward-formulation speed bump, and the tight-space use cases (server racks, collapsed interiors) — an AI comic about loco-manipulation, not a product launch.

Why it matters

Mobile manipulators usually pay for an arm plus a base. One off-the-shelf hand doing both jobs changes the cost and bulk math for spaces where Spot-with-an-arm will not fit — even if crawl speed is a crawl. Color on the walking fingers and the keyboard panel. White gutters. Readers get the Soft Robotics Lab credit, the sim-to-real note, acknowledged speed/wear limits, and the source URL on the page.

Conclusion

ETH Zurich’s Soft Robotics Lab trained a commercial anthropomorphic hand to walk on its fingers, recover from falls, and type while self-supported — a reinforcement-learning “fingers as legs” result covered Sept. 18 by Tech Times. Cartoon robots only. Source: https://www.techtimes.com/articles/327706/20260918/eth-zurich-robotic-hand-walks-steers-presses-keys-its-own-fingers.htm
