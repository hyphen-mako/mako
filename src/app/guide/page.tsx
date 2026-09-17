import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "카드뉴스 만드는 방법: AI로 빠르게 제작하는 총정리 가이드",
  description:
    "카드뉴스란 무엇인지부터 직접 제작·템플릿·AI 도구 비교, 잘 읽히는 카드뉴스의 조건, MAKO로 카드뉴스 만드는 방법까지 한 번에 정리했습니다.",
  keywords: [
    "카드뉴스 만드는 법",
    "카드뉴스 만들기",
    "카드뉴스 제작",
    "카드뉴스 템플릿",
    "인스타그램 카드뉴스",
    "AI 카드뉴스",
    "카드뉴스 디자인",
    "SNS 콘텐츠 제작",
  ],
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "카드뉴스 만드는 방법: AI로 빠르게 제작하는 총정리 가이드 | MAKO",
    description:
      "카드뉴스 제작 방법 3가지 비교부터 AI로 5분 만에 만드는 법까지. 브랜드 카드뉴스 제작 총정리 가이드.",
    url: "https://mako-landing.hyphen.it.com/guide",
    type: "article",
  },
};

const BASE_URL = "https://mako-landing.hyphen.it.com";

const METHODS = [
  {
    name: "직접 디자인하기",
    pros: "자유도가 가장 높음",
    cons: "디자인 툴 사용 경험 필요, 장당 1~3시간 소요",
    fit: "디자이너가 있는 팀",
  },
  {
    name: "템플릿 툴 활용하기",
    pros: "비교적 빠르고 저렴함",
    cons: "템플릿 티가 나기 쉽고 브랜드 톤 맞추기 어려움",
    fit: "가볍게 시작하는 개인",
  },
  {
    name: "AI 도구 활용하기",
    pros: "브랜드 톤 반영 자동화, 장당 몇 분",
    cons: "도구마다 품질 차이 있음",
    fit: "꾸준한 발행이 필요한 브랜드·마케터",
  },
];

const QUALITY_TIPS = [
  "첫 장은 스크롤을 멈추게 하는 한 문장으로 — 제목에서 궁금증이나 혜택을 바로 보여줍니다.",
  "한 장에 메시지는 하나만 — 카드 한 장당 전달할 핵심을 하나로 좁히면 이탈이 줄어듭니다.",
  "브랜드 컬러와 폰트를 통일 — 콘텐츠를 모아봤을 때 브랜드가 인식돼야 합니다.",
  "글자 크기는 모바일 기준으로 — 대부분 스마트폰에서 보기 때문에 시인성이 최우선입니다.",
  "마지막 장에는 행동 유도를 — 저장, 공유, 프로필 방문 등 다음 행동을 명시합니다.",
];

const STEPS = [
  {
    name: "만들고 싶은 콘텐츠를 한 문장으로 알려주세요",
    text: "주제, 채널, 목적, 톤앤매너까지 말하면 바로 초안을 만들어요.",
  },
  {
    name: "브랜드 정보를 바탕으로 더 정확하게 제작해요",
    text: "제품, 타깃, 말투, 핵심 메시지를 반영해 브랜드다운 결과를 만들어요.",
  },
  {
    name: "카드뉴스와 숏폼을 한 번에 제작하세요",
    text: "채널에 맞는 구성과 비율로 여러 포맷을 빠르게 만들어요.",
  },
  {
    name: "마음에 들 때까지 수정하고 관리하세요",
    text: "아쉬운 초안은 바로 수정하고 캠페인별로 이어서 관리해요.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/guide#article`,
      headline: "카드뉴스 만드는 방법: AI로 빠르게 제작하는 총정리 가이드",
      description:
        "카드뉴스란 무엇인지부터 제작 방법 비교, 좋은 카드뉴스의 조건, AI로 카드뉴스 만드는 방법까지 정리한 가이드입니다.",
      inLanguage: "ko-KR",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: `${BASE_URL}/guide`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#service` },
      image: `${BASE_URL}/mako/card-news-showcase.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MAKO", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "카드뉴스 가이드", item: `${BASE_URL}/guide` },
      ],
    },
  ],
};

export default function GuidePage() {
  return (
    <main className="bg-white text-[#162033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="mx-auto w-full max-w-[820px] px-6 py-16 tablet:px-8 tablet:py-20">
        <nav aria-label="breadcrumb" className="text-[13px] text-[#7a899b]">
          <Link href="/" className="font-semibold text-[#0f7dff]">MAKO</Link>
          <span className="mx-2">/</span>
          <span>카드뉴스 가이드</span>
        </nav>

        <h1 className="keep-all mt-6 text-[30px] font-black leading-[1.3] tablet:text-[40px]">
          카드뉴스 만드는 방법: AI로 빠르게 제작하는 총정리 가이드
        </h1>
        <p className="keep-all mt-5 text-[15px] leading-relaxed text-[#4b5a6d] tablet:text-[17px]">
          카드뉴스는 인스타그램·스레드 같은 SNS에서 가장 널리 쓰이는 콘텐츠 형식입니다.
          디자인 경험이 없어도 만들 수 있는 방법들이 있지만, 브랜드 톤을 유지하면서 꾸준히
          만들기는 쉽지 않습니다. 이 가이드에서는 카드뉴스 제작 방법을 비교하고, 잘 읽히는
          카드뉴스의 조건, 그리고 AI로 빠르게 만드는 방법까지 정리했습니다.
        </p>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">카드뉴스란?</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            카드뉴스(card news)는 여러 장의 카드 형태 이미지에 정보를 담아 올리는 SNS 콘텐츠입니다.
            뉴스, 제품 소개, 꿀팁, 공지 등을 스와이프해 읽는 형태라 모바일에서 특히 잘 소비됩니다.
            글보다 시각적이고 영상보다 제작이 가벼워 브랜드 마케팅의 기본 포맷으로 자리 잡았습니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">카드뉴스 만드는 방법 3가지 비교</h2>
          <div className="mt-5 flex flex-col gap-4">
            {METHODS.map((method, index) => (
              <div key={method.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[16px] font-bold">
                  <span className="text-[#0f7dff]">{index + 1}. </span>
                  {method.name}
                </h3>
                <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d]">
                  장점: {method.pros}
                  <br />
                  단점: {method.cons}
                  <br />
                  적합한 경우: {method.fit}
                </p>
              </div>
            ))}
          </div>
          <p className="keep-all mt-4 text-[14px] leading-relaxed text-[#4b5a6d]">
            요즘은 세 번째 방식인 AI 제작 도구를 선택하는 팀이 늘고 있습니다. 주제만 알려주면
            카피·구성·이미지를 한 번에 만들어주기 때문에, 디자이너 없이도 매주 발행하는 운영이
            가능해지기 때문입니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">잘 읽히는 카드뉴스의 조건 5가지</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-[15px] leading-relaxed text-[#4b5a6d] marker:font-bold marker:text-[#0f7dff]">
            {QUALITY_TIPS.map((tip) => (
              <li key={tip.slice(0, 20)} className="keep-all">{tip}</li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">MAKO로 카드뉴스 만드는 방법</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            MAKO는 브랜드를 이해하는 AI 마케팅 스튜디오입니다. 아래 4단계면 카드뉴스 초안이
            완성됩니다.
          </p>
          <ol className="mt-5 space-y-4">
            {STEPS.map((step, index) => (
              <li key={step.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[15px] font-bold">
                  <span className="text-[#0f7dff]">STEP {index + 1}. </span>
                  {step.name}
                </h3>
                <p className="keep-all mt-1.5 text-[14px] leading-relaxed text-[#4b5a6d]">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="keep-all mt-4 text-[14px] leading-relaxed text-[#4b5a6d]">
            현재 MAKO는 오픈 이벤트로 웨이트리스트 등록자에게 카드뉴스 무한 생성 혜택을
            제공하고 있습니다.
          </p>
          <Link
            href="/#waitlist"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f7dff] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            웨이트리스트 등록하고 무한 생성 받기
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </section>
      </article>
    </main>
  );
}
