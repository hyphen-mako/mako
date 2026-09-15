# SiteHeader Specification
Target src/components/SiteHeader.tsx (or jsx); screenshots desktop-hero.png and original HTML mobile-menu.html/mobile-submenu.html/desktop-login.html.
Model time, scroll, click and hover. Exact original render tree preserved in docs/research/source/shell-public.js function O, lines1317–2634; login function g1170–1248.
Use existing original CSS declarations from public/assets/reference.css, exact JSX classes from downloaded module. Homepage anonymous user only.
Header fixed top0 full width z200 px24, desktop80px/tablet72px/mobile min68px. Transition300ms ease-in-out. Wrapper full width flex justify-between. Desktop logo pill216×60px white/90 radius12px, icon48px and wordmark144px gap8px pad6px. Position left24px.
Nav dark #212529 pill center, padding6px radius12px, shadow; text18px600. Active chat blue #377CF6, gap icons. Links 대화하기 /chat, 픽라운지 /lounge, 커뮤니티 /community.
Lounge hover dropdown with links 픽라운지 홈 /lounge, 매거진 /lounge/magazine, 픽스팟 /lounge/pickspot, 픽마켓 /lounge/market, 픽페어 /peteventhub, 픽키랩 /picky-lab.
Login right24px width148px h48px px20, font16px600 mainblue, white/90 blur-md radius12. Hover scale1.02 tap.98. Dropdown at top100% right0 margin8; open opacity0 y-4 scale.96→1 over160ms easeOut; close/outside/Escape dismiss. Contains yellow 카카오 로그인, black Apple로 로그인. Homepage clone auth buttons should navigate to corresponding original login entry without local credential capture.
Header visible after showHeader event from Hero; default hidden on initial home render; scroll down after100px hides, scroll up reveals, y>50 scrolled state.
Mobile<768: icon40px left24, white menu button40px right24, menu opens dark overlay backdrop blur, white panel left16/right16 top68 radius16 padding16. Menu includes same links and expandable lounge submenu, two fullwidth login buttons. Cross icon when open, click overlay/Escape closes.
Tablet768–1079: original tablet classes, desktop>=1080: original desktop classes.
Logo 5 quick clicks triggers original 3-second easter egg if available in source; preserve if practical.
SVG icons extract from original markup or render exact original paths. Reuse /logo.svg and /op-image.svg.
Use original external destinations https://pickcare.co.kr for non-home links; no backend. No analytics or notifications APIs.

## 2026-09-15 재검증
원본 `/login` 실제 화면을 브라우저로 확인. 인증 백엔드가 없는 복제본의 소셜 로그인 버튼은 해당 로그인 화면으로 연결한다. 5회 로고 클릭 캐릭터는 로컬 `/characters/[2D]set_motion_01.webp`를 사용한다.
