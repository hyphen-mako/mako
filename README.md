# MAKO 랜딩페이지

`https://mako.hyphen.it.com`을 위한 MAKO AI 마케팅 스튜디오 소개 페이지입니다.

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
- MAKO 공식 캐릭터와 실제 카드뉴스·영상 제작 이미지
- 제품 소개, 제작 흐름, 플랫폼 장점, 시작 CTA
- 데스크톱·태블릿·모바일 반응형 레이아웃
- 로컬 이미지와 Pretendard 폰트 사용

디자인 기준과 카피 원칙은 루트의 `DESIGN.md`에서 관리합니다.
