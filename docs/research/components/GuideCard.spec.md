# GuideCard Specification
## Overview
Target src/components/GuideCard.jsx. Scroll visibility + hover. Screenshot desktop-step.png.
## DOM / Styles
Relative motion div; desktop385×485px/tablet320×420px/mobile280×380px; radius24 padding24 shadow-2xl. Adjacent card margin-left -50px. Text block absolute bottom56 left24 max-width75%.
Badge font13 bold white background radiusfull px14 py6 mb12. Title20px600 line-height1.35 mb10 pre-line. Description14px line-height1.625 pre-line white85% except light variant.
## States
Initial opacity0 y100 rotate as original card. Visible opacity1 y0, duration500ms easeOut. Hover rotate0 scale1.05 z100; neighbors move ±30px. Retain original distinct rotations/backgrounds passed from HomeExperience.
Card4 onAnimationComplete unlocks desktop scroll once threshold reached.
## Content/Assets
STEP1 반려동물에 대해\n궁금한 걸 물어보세요; 질환, 행동, 식습관, 산책, 제품 추천까지\n물어보면 바로 답변드려요.; /images/Character_Official_Source/01.main_motion.001.webp.
STEP2 반려견 프로필 기반으로\n더 정확한 정보를 제공해요; 품종, 나이, 질환, 환경에 따라\n완전히 다른 맞춤 답변을 드려요.; /images/main/sec2_profile.webp.
STEP3 반려견이 여러 마리라면\n쉽게 변경하면서 대화하세요; 아이별로 각각 다른\n정보 기록 추천을 받을 수 있어요.; /images/main/sec2_multi_family.webp.
STEP4 제품 서비스와\n매장 정보까지 확인해보세요; 브랜드 컨텐츠, 커뮤니티, 근처 매장,\n병원 정보까지 자동 연결돼요.; /images/main/sec2_service_cloud.webp.
Image1 desktop250px top-56 right24; image2 desktop250px top24 right24; images3/4 desktop270px top24 right24. Pointer eventsnone.
## Responsive
Desktop component overlaps rotated cards. Below1080 original HomeExperience renders compact mobile/tablet cards with16px/13px headings; same assets/content and original classes.
