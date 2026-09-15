# ServiceCard Specification
## Overview
Target src/components/ServiceCard.jsx. Scroll-selected or click-selected service with animated height. Screenshot desktop-lounge.png.
## DOM / Styles
motion wrapper relative radius24 overflowhidden shadow-lg flexcol transform-origin top. Inner padding24 flexcol. Top row justify-between align-start mb16. Badge px20 py8 font16 bold radiusfull. SVG32×32 exact original paths.
Heading20px bold leading-tight whitespace-pre-line.
## States / Behaviors
Height120→280px over800ms cubic-bezier(.33,1,.68,1). Content opacity0→1 height0→auto duration400 delay100ms on expansion. Header colors and background from parent props.
Pointer hover callbacks supported. Parent positions/cards also respond to scroll phases and click override for600000ms, see BEHAVIORS.md.
## Text Content
픽라운지 — 반려생활 콘텐츠가\n한 곳에 모이는 순간.
커뮤니티 — 반려인들의 생생한\n경험이 모이는 곳.
마이페이지 — 나와 반려동물의\n기록을 담는 곳.
## Assets
Three inline SVG icons: pick pointer, community thumbs up, mypage briefcase. Paths preserved in component.
## Responsive
Used in >=1080 desktop sticky stage. Below1080 main experience uses fullwidth normal-flow compact service tiles and local character illustrations.
