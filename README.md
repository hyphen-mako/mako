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

신청 이메일은 MAKO 백엔드의 `WaitlistEntry` 테이블에 직접 저장됩니다. 랜딩 서버는 브라우저 요청을 MAKO API로 전달하며, 운영에서는 기본적으로 `https://mako-server.hyphen.it.com`을 사용합니다.

```sh
MAKO_API_BASE_URL=https://mako-server.hyphen.it.com
```

로컬에서 별도 백엔드를 사용할 때만 `MAKO_API_BASE_URL`을 변경합니다. 이메일은 정규화되어 중복 없이 저장되고 재신청 횟수와 최근 신청 시각이 갱신됩니다.

디자인 기준과 카피 원칙은 루트의 `DESIGN.md`에서 관리합니다.
