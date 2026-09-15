# Pickcare behavior audit
Source https://pickcare.co.kr/, inspected 2026-09-15 at 1440×900, 768×1024, 390×844.
## Hero — time, hover and scroll
- Character entrance at 300ms; watermark bounce at 1200ms. Scroll unlocks at 3000ms. Header receives showHeader event after watermark completes.
- Lenis duration 1.2s, easing min(1,1.001 - 2^(-10t)), smoothWheel true; desktop >=1080 only.
- Hero fades from scroll viewportHeight-320 to viewportHeight+300; translates watermark to -300px. Background fades by viewportHeight+400.
- Hero mascot hover starts three speech bubbles at 0/900/1800ms, leaves with exit animations.
- Question placeholders rotate every 3000ms, exit y=-20/opacity0 and enter y20/opacity0, duration300ms.
- Question button expands 56→180px on desktop hover, background #1E3A8A→#3B82F6, duration300ms easeInOut.
## Tutorial — time and click
- Opens 300ms after home-scroll-unlocked, 5000ms fallback; three steps, next/previous/tab navigation.
- Overlay, X, Escape and skip dismiss. Checked by default: persist dismissal in localStorage pcf_welcome_tutorial_seen_v1.
- Overlay 220ms; dialog spring400ms bounce .2, scale .95→1 y10→0; contents300ms.
## Guide — scroll plus staggered time and hover
- >=1080: 400vh section, sticky viewport; title/image stagger at100/300/450/600/750/900ms after hero fades.
- Cards appear at section offset + viewport height +50/350/650/950px. Settled fourth card gates scroll continuation at +1050px.
- Cards opacity0→1 y100→0 in .5s easeOut, rotations retained. Hover rotates to0°, scales1.05, z-index100 and moves neighbors ±30px.
- <1080: IntersectionObserver threshold .3, title and cards stagger at100/300/500/1400ms; normal flow layout. Mobile card rail is horizontal drag (x), constraints left=-870/right=0, grab cursor; tablet cards wrap.
## Services — scroll and click override
- Desktop 500vh section; phases at .25/.55/.9/1.15/1.45/1.8/2.05/2.35 viewport heights.
- Three side cards expand 120→280px; 800ms cubic-bezier(.33,1,.68,1).
- Active content changes for lounge/community/mypage. Clicking a service card overrides scrolling selection for600000ms.
- Mobile/tablet: three normal-flow service blocks with illustration, copy and link.
## Header/menu
- Scroll y>50 switches compact styling; scrolling down after100px hides header, up reveals.
- Login dropdown click, outside/Escape dismiss; 160ms opacity/y/scale enter.
- Mobile hamburger opens overlay and expandable lounge submenu. Links preserved.
## Footer
- Logo, social/legal/support links; same original destinations.
## Scope
Homepage frontend reproduced. Authentication and live AI/backend are outside clone scope. Links to other original pages remain original external destinations.
