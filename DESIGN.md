# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-09-15
- Primary product surfaces: public MAKO marketing landing page
- Evidence reviewed: sibling MAKO product `frontend/DESIGN.md`, `frontend/components/Home.tsx`, `frontend/app/globals.css`, official MAKO mascot assets, source landing layout and motion

## Brand
- Personality: clear, capable, production-focused, friendly
- Trust signals: real MAKO product imagery, concrete workflow language, direct links to the working product
- Avoid: pet-care language, speculative performance claims, decorative complexity, fake testimonials or customer counts

## Product goals
- Goals: explain MAKO in one screen, show the two core creation products, and convert qualified visitors into waitlist sign-ups
- Non-goals: reproduce the authenticated application or claim unverified automation outcomes
- Success signals: visitors understand the product category, core workflow, and waitlist action without opening a menu

## Personas and jobs
- Primary personas: small brand operators, marketers, creators, and agency teams
- User jobs: turn reusable brand information into card news and short-form video
- Key contexts of use: desktop evaluation and mobile discovery

## Information architecture
- Primary navigation: 사용 방법, 제작 기능, 출시 소식, 웨잇리스트
- Core routes/screens: single public landing page with hero and closing waitlist forms
- Content hierarchy: MAKO launch promise, waitlist form, four-step guide, creation services, final waitlist action

## Design principles
- Show the real product: product and mascot imagery must be MAKO-owned assets rather than generic stock visuals.
- Specific over inflated: copy describes what MAKO does without invented metrics, customers, or outcomes.
- Product first: the first viewport names MAKO, shows the mascot, and exposes the primary action.
- Preserve the familiar experience: keep the source section order, card geometry, and scroll choreography while replacing its identity and content with MAKO.

## Visual language
- Color: white foundation, MAKO blue action color, navy contrast panels, yellow accent
- Typography: Pretendard/system stack with the source layout's bold, friendly hierarchy
- Spacing/layout rhythm: full-width animated sections and stacked cards with responsive constraints
- Shape/radius/elevation: source card geometry and shadows preserved
- Motion: source scroll transitions, card stacking, and mascot movement; reduced-motion disables nonessential animation
- Imagery/iconography: one consistent MAKO character rendered in six scene-specific poses

## Components
- Existing components to reuse: `HomeExperience`, `GuideCard`, `ServiceCard`, `QuestionInput`, Next.js Image, local Pretendard font
- Changed components: `SiteHeader`, `SiteFooter`, `GlobalMascotEffects`, `HomeExperience`, `GuideCard`, `QuestionInput`
- Variants and states: default, hover, focus-visible, mobile navigation, scroll-driven card states, waitlist loading/success/error/duplicate
- Token/component ownership: shared tokens in `globals.css`; source layout rules in `public/assets/reference.css`; component behavior in JSX

## Accessibility
- Target standard: WCAG 2.1 AA
- Keyboard/focus behavior: all links have visible focus states and skip navigation remains available
- Contrast/readability: body copy uses high-contrast neutral pairs; blue/yellow are not the sole carriers of meaning
- Screen-reader semantics: one H1, ordered headings, decorative images have empty alt text, product images have descriptive alt text
- Reduced motion and sensory considerations: all nonessential movement is disabled by `prefers-reduced-motion`

## Responsive behavior
- Supported breakpoints/devices: 360px mobile through wide desktop
- Layout adaptations: source desktop card stacks switch to mobile sequential cards; navigation condenses; mascot art retains stable dimensions
- Touch/hover differences: controls remain at least 44px high and hover decoration is nonessential

## Interaction states
- Loading: local optimized images reserve aspect ratio to avoid layout shift
- Empty: not applicable to the static landing page
- Error: core value proposition remains readable if imagery fails
- Success: waitlist forms confirm a saved or previously registered email without navigating away
- Disabled: no disabled controls
- Offline/slow network, if applicable: local imagery and font avoid third-party runtime dependencies

## Content voice
- Tone: concise, confident, non-technical Korean
- Terminology: MAKO, 브랜드, 제품·서비스, 카드뉴스, 영상, 제작
- Microcopy rules: prefer concrete verbs; do not invent market leadership, customer, or speed claims

## Implementation constraints
- Framework/styling system: Next.js, React, TypeScript, source utility classes, global CSS
- Design-token constraints: extend existing local tokens without adding a second UI framework
- Performance constraints: local images, no autoplay video, minimal client JavaScript
- Compatibility constraints: current Next.js 16 and React 19 project
- Test/screenshot expectations: typecheck, production build, desktop and mobile browser screenshots, console check

## Open questions
- [ ] Confirm the permanent production destination for the primary CTA if the application later moves away from `mako.hyphen.it.com`.
