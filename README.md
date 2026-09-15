# MAKO 랜딩페이지

`https://mako.hyphen.it.com`을 위한 MAKO AI 마케팅 스튜디오 소개 페이지입니다. 기존 소스의 섹션 구성, 카드 스택, 스크롤 연출은 유지하고 브랜드와 콘텐츠를 MAKO에 맞게 전환했습니다.

## 실행

Node.js 20.9 이상 권장. 최초 실행:

```sh
npm ci --cache ./work/npm-cache
npm run build
npm start
```

http://localhost:3000 에서 확인합니다. 수정 중에는 `npm run dev`를 사용합니다.

## 구현

- Next.js 16 + React 19
- MAKO 공식 캐릭터를 기준으로 생성한 6가지 상황별 투명 PNG 포즈
- 카드뉴스·AI 영상 소개, 4단계 제작 흐름, 시작 CTA
- 초기 팝업 없이 바로 신청할 수 있는 이메일 웨잇리스트
- 이메일 검증, 중복 판별, 성공·오류 피드백
- 데스크톱·태블릿·모바일 반응형 레이아웃
- 로컬 이미지, Pretendard 폰트, 기존 스크롤 애니메이션 사용

## 웨잇리스트 저장

기본 개발 환경에서는 신청 이메일을 `data/waitlist.jsonl`에 저장합니다. 배포 환경에서는 영구 저장소나 자동화 도구의 수신 URL을 `WAITLIST_WEBHOOK_URL`로 지정합니다.

```sh
WAITLIST_WEBHOOK_URL=https://example.com/hooks/mako-waitlist
WAITLIST_WEBHOOK_SECRET=optional-bearer-token
```

웹훅에는 `email`, `source`, `createdAt` 필드가 JSON으로 전달됩니다.

디자인 기준과 카피 원칙은 루트의 `DESIGN.md`에서 관리합니다.
