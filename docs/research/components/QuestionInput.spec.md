# QuestionInput Specification
## Overview
Target src/components/QuestionInput.jsx. Model time-driven placeholder, hover expansion, input+submit. Screenshot desktop-hero.png.
## DOM / Computed Styles
motion.form width100% max-width700px (hero computed565.1953125px at1440). Relative flex wrapper, input shell white border2 radius9999 shadow-lg.
Height52px mobile,62px tablet,72px desktop; padding-left20/24/32px, right100/130/160px. Font14/17/20px. Desktop hero x775.3046875 y656.
Submit right6/8/8px height40/48/56px; width56px; white Remix Icon ri-chat-ai-line at20px.
## States & Behaviors
Placeholder interval3000ms, enter y20 opacity0→1, exit y-20 opacity0,300ms modewait. Initial form opacity0 y50→1 y0 duration700 delay900.
Hover min-width1080: button width56→180 background#1E3A8A→#3B82F6, label width0→auto opacity0→1,300ms easeInOut. Focus accepts typed input; placeholders hidden while input not empty.
Submit query trimmed and encoded to original /chat?message=. Empty submits /chat. Shared controlled value with floating form.
## Text Content
사료를 안 먹고 간식만 찾아요 / 강아지가 자꾸 발을 핥아요 / 고양이 화장실 모래 추천해주세요 / 반려견 분리불안 훈련법 알려줘 / 노령견 건강검진 주기 공금해요. Button 질문하러가기; input aria 반려동물 관련 질문 입력.
## Assets
Remix Icon font local assets/reference/media/remixicon.f5184e52.woff2. No raster image.
## Responsive
mobile<768/tablet768–1079/desktop>=1080. Hover expansion desktop only. Floating instance desktop only bottom80px max-width700px px24 z100.
