# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-09-15
- Primary product surfaces: public MAKO marketing landing page
- Evidence reviewed: sibling MAKO product `frontend/DESIGN.md`, `frontend/components/Home.tsx`, `frontend/app/globals.css`, official MAKO mascot and product showcase assets, existing Pickcare clone layout

## Brand
- Personality: clear, capable, production-focused, friendly
- Trust signals: real MAKO product imagery, concrete workflow language, direct links to the working product
- Avoid: pet-care language, speculative performance claims, decorative complexity, fake testimonials or customer counts

## Product goals
- Goals: explain MAKO in one screen, show the two core creation products, and move qualified visitors into the product
- Non-goals: reproduce the authenticated application or claim unverified automation outcomes
- Success signals: visitors understand the product category, core workflow, and next action without opening a menu

## Personas and jobs
- Primary personas: small brand operators, marketers, creators, and agency teams
- User jobs: turn reusable brand information into card news and short-form video
- Key contexts of use: desktop evaluation and mobile discovery

## Information architecture
- Primary navigation: Product, How it works, MAKO AI, Start
- Core routes/screens: single public landing page with links to the production card-news and video tools
- Content hierarchy: brand promise, product proof, workflow, platform advantages, final action

## Design principles
- Show the real product: product and mascot imagery must be MAKO-owned assets rather than generic stock visuals.
- Specific over inflated: copy describes what MAKO does without invented metrics, customers, or outcomes.
- Product first: the first viewport names MAKO, shows the mascot, and exposes the primary action.
- Tradeoffs: preserve the source clone's motion energy while replacing its pet-care information architecture.

## Visual language
- Color: near-black and white foundations, MAKO blue action color, yellow utility accent
- Typography: Pretendard/system stack with compact, high-contrast display hierarchy
- Spacing/layout rhythm: generous full-width bands with constrained 1180px content columns
- Shape/radius/elevation: 8px controls, 6px media frames, restrained shadows
- Motion: subtle entrance and floating mascot motion; reduced-motion disables animation
- Imagery/iconography: official MAKO mascot and real card-news/video product scenes

## Components
- Existing components to reuse: Next.js Image, local Pretendard font
- New/changed components: `MakoLanding`, responsive header, hero, product showcase, workflow, capability strip, final CTA, footer
- Variants and states: default, hover, focus-visible, mobile collapsed navigation
- Token/component ownership: global resets and shared tokens in `globals.css`; landing layout in its CSS module

## Accessibility
- Target standard: WCAG 2.1 AA
- Keyboard/focus behavior: all links have visible focus states and skip navigation remains available
- Contrast/readability: body copy uses high-contrast neutral pairs; blue/yellow are not the sole carriers of meaning
- Screen-reader semantics: one H1, ordered headings, decorative images have empty alt text, product images have descriptive alt text
- Reduced motion and sensory considerations: all nonessential movement is disabled by `prefers-reduced-motion`

## Responsive behavior
- Supported breakpoints/devices: 360px mobile through wide desktop
- Layout adaptations: hero and product rows stack; navigation reduces to the primary action; media retains stable aspect ratios
- Touch/hover differences: controls remain at least 44px high and hover decoration is nonessential

## Interaction states
- Loading: local optimized images reserve aspect ratio to avoid layout shift
- Empty: not applicable to the static landing page
- Error: core value proposition remains readable if imagery fails
- Success: primary links navigate directly to the corresponding MAKO creation surface
- Disabled: no disabled controls
- Offline/slow network, if applicable: local imagery and font avoid third-party runtime dependencies

## Content voice
- Tone: concise, confident, non-technical Korean
- Terminology: MAKO, 브랜드, 제품·서비스, 카드뉴스, 영상, 제작
- Microcopy rules: prefer concrete verbs; do not invent market leadership, customer, or speed claims

## Implementation constraints
- Framework/styling system: Next.js, React, TypeScript, CSS Modules
- Design-token constraints: extend existing local tokens without adding a second UI framework
- Performance constraints: local images, no autoplay video, minimal client JavaScript
- Compatibility constraints: current Next.js 16 and React 19 project
- Test/screenshot expectations: typecheck, production build, desktop and mobile browser screenshots, console check

## Open questions
- [ ] Confirm the permanent production destination for the primary CTA if the application later moves away from `mako.hyphen.it.com`.

