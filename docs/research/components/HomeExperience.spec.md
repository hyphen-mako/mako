# HomeExperience Specification
## Overview
Target src/components/HomeExperience.jsx. Coordinates hero, guide, services, mascot/footer transition and floating question.
Screenshots desktop-hero.png, desktop-step.png, desktop-lounge.png, mobile-full.png; original extracted source main.pretty.js functioney. Exact original public markup and timing sequences preserved in standalone React module.
## DOM / Computed Styles
Desktop1440×900: hero900px sticky; guide top980 height3600; service top4580 height4500; brand banner top9080, lazy image height initially0 then intrinsic aspect ratio; total document9501px with footer.
Hero watermark x24 y120 width1377 height211.109375. Character image x-378 y-117 width1395 height1395. Heading x775.3046875 y442 width471.671875 height65, font52px600 leading1.25. Question x775.3046875 y656 width565.1953125 h72.
Background gradient #D4EBFA0%,#E8F4FD30%,#F5F9FD60%,#FAFCFE80%,white100%. Original CSS wave layers and all inline transforms retained.
## States / Behaviors
Hero time entrance:300ms character;1200ms watermark;3000ms scroll unlock. Lenis1.2s. Hero image hover three speech bubbles sequence0/900/1800ms with original exit choreography.
Hero scroll fades and watermark travels-300px. Guide title/image stagger and four card scroll gates. Service three-panel scroll/click progression. Detailed exact thresholds in BEHAVIORS.md and source.
Floating question fixed bottom80px z100, max-width700px px24; appears after guide reveal and fades near footer overhalf viewport.
## Content / Assets
All text preserved verbatim from main.pretty.js including original typo 공금해요. All27 initial asset inventory entries in assets.json; no video or canvas found. Background and foreground images independently retained. Includes hero hover image and all three service illustration states.
## Responsive
mobile<768: hero minimum120svh, watermark top60+40margin, heading28px, portrait character bottom-60; guide intersection-triggered horizontal draggable card rail (-870 to0px); services normal-flow.
tablet768–1079: typography36px hero, navigation tablet sizes, simplified guide/services; desktop>=1080 sticky long scroll sections.
## Shared Components
WelcomeTutorial, QuestionInput, GuideCard, ServiceCard; header/footer composed by page.tsx. Exact original nonhome links go original external destinations.

## Reload correction
Browser inspection found a reloaded clone at scrollY2930 displaying the hero's initial state: native scroll restoration happened after the mount reset. Keep the original top-of-page entrance by setting history.scrollRestoration=manual during this component's lifetime and resetting desktop Lenis to0 immediately before its existing3000ms unlock. No extra delay or altered transition values.

Original embedded Lenis version1.3.15 is pinned exactly;1.3.26's new reduced-motion default could otherwise alter scrolling.
