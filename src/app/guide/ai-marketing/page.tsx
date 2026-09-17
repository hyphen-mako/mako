import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI로 SNS 마케팅 콘텐츠 자동화하는 방법",
  description:
    "카드뉴스, 숏폼 영상 같은 SNS 마케팅 콘텐츠를 AI로 자동화하는 방법. 어떤 작업을 자동화할 수 있는지, AI 마케팅 도구를 고르는 기준까지 정리했습니다.",
  keywords: [
    "AI 마케팅",
    "마케팅 자동화",
    "SNS 마케팅",
    "AI 콘텐츠 제작",
    "마케팅 AI 도구",
    "콘텐츠 자동화",
    "SNS 콘텐츠 자동 생성",
    "AI 마케팅 스튜디오",
  ],
  alternates: { canonical: "/guide/ai-marketing" },
  openGraph: {
    title: "AI로 SNS 마케팅 콘텐츠 자동화하는 방법 | MAKO",
    description:
      "카드뉴스·숏폼 제작을 AI로 자동화하는 방법과 도구 선택 기준을 정리했습니다.",
    url: "https://mako-landing.hyphen.it.com/guide/ai-marketing",
    type: "article",
  },
};

const BASE_URL = "https://mako-landing.hyphen.it.com";

const TASKS = [
  {
    name: "카피·문구 초안 작성",
    body: "제품 설명, 행사 안내, 꿀팁 콘텐츠의 첫 카피를 AI가 작성합니다. 사람은 톤을 다듬는 역할에 집중할 수 있습니다.",
  },
  {
    name: "카드뉴스 구성·디자인",
    body: "주제만 알려주면 장수 구성, 카피 배치, 이미지까지 초안이 나옵니다. 브랜드 톤을 학습하는 도구라면 일관성도 유지됩니다.",
  },
  {
    name: "숏폼·영상 소재 제작",
    body: "같은 주제를 채널별 비율과 포맷으로 변환해 한 번에 여러 소재를 만들 수 있습니다.",
  },
  {
    name: "발행 주기 관리",
    body: "콘텐츠를 캠페인별로 관리하고 초안을 수정·재생성하는 흐름까지 자동화하면 주 단위 운영이 가벼워집니다.",
  },
];

const CRITERIA = [
  "브랜드 톤을 학습하는가 — 매번 프롬프트를 다시 쓰지 않고 브랜드 말투가 유지되는지가 핵심입니다.",
  "한국어 품질 — 카피가 자연스러운지, 어색한 번역투가 없는지 확인하세요.",
  "채널별 포맷 지원 — 인스타그램·스레드·스토리 등 필요한 비율을 지원하는지 봅니다.",
  "수정 워크플로 — 초안을 문장 단위로 다시 요청할 수 있는지, 캠페인별 관리가 되는지 봅니다.",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/guide/ai-marketing#article`,
      headline: "AI로 SNS 마케팅 콘텐츠 자동화하는 방법",
      description:
        "카드뉴스와 숏폼 영상 등 SNS 마케팅 콘텐츠를 AI로 자동화하는 방법과 도구 선택 기준을 정리한 가이드입니다.",
      inLanguage: "ko-KR",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: `${BASE_URL}/guide/ai-marketing`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      image: `${BASE_URL}/mako/card-news-showcase.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MAKO", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "카드뉴스 가이드", item: `${BASE_URL}/guide` },
        { "@type": "ListItem", position: 3, name: "AI 마케팅 자동화", item: `${BASE_URL}/guide/ai-marketing` },
      ],
    },
  ],
};

export default function AiMarketingPage() {
  return (
    <main className="bg-white text-[#162033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="mx-auto w-full max-w-[820px] px-6 py-16 tablet:px-8 tablet:py-20">
        <nav aria-label="breadcrumb" className="text-[13px] text-[#7a899b]">
          <Link href="/" className="font-semibold text-[#0f7dff]">MAKO</Link>
          <span className="mx-2">/</span>
          <Link href="/guide" className="font-semibold text-[#0f7dff]">가이드</Link>
          <span className="mx-2">/</span>
          <span>AI 마케팅 자동화</span>
        </nav>

        <h1 className="keep-all mt-6 text-[30px] font-black leading-[1.3] tablet:text-[40px]">
          AI로 SNS 마케팅 콘텐츠 자동화하는 방법
        </h1>
        <p className="keep-all mt-5 text-[15px] leading-relaxed text-[#4b5a6d] tablet:text-[17px]">
          SNS 마케팅에서 가장 시간을 잡아먹는 건 콘텐츠 제작입니다. 카드뉴스 한 세트를
          만드는 데도 기획·카피·디자인이 필요한데, AI 도구를 쓰면 이 과정 상당 부분을
          자동화할 수 있습니다. 어떤 작업을 맡길 수 있고, 도구는 무엇을 기준으로
          고르면 되는지 정리했습니다.
        </p>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">AI가 대신할 수 있는 작업</h2>
          <div className="mt-5 flex flex-col gap-4">
            {TASKS.map((task) => (
              <div key={task.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[16px] font-bold">{task.name}</h3>
                <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d]">{task.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">AI 마케팅 도구 고르는 기준</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-[15px] leading-relaxed text-[#4b5a6d] marker:font-bold marker:text-[#0f7dff]">
            {CRITERIA.map((item) => (
              <li key={item.slice(0, 20)} className="keep-all">{item}</li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">MAKO는 어떻게 다른가</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            MAKO는 브랜드를 이해하는 AI 마케팅 스튜디오입니다. 제품·타깃·말투·핵심 메시지를
            반영해 카드뉴스와 숏폼 영상의 구성, 카피, 이미지를 한 번에 제작합니다.
            만들고 싶은 콘텐츠를 한 문장으로 말하면 초안이 나오고, 마음에 들 때까지
            수정하며 캠페인별로 관리할 수 있습니다.
          </p>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            지금은 오픈 이벤트로 웨이트리스트 등록자에게 카드뉴스 무한 생성 혜택을
            제공하고 있습니다.
          </p>
          <Link
            href="/#waitlist"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f7dff] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            웨이트리스트 등록하고 먼저 써보기
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </section>

        <p className="mt-12 border-t border-[#e3ecf5] pt-6 text-[14px] text-[#7a899b]">
          함께 읽기:{" "}
          <Link href="/guide" className="font-bold text-[#0f7dff] underline underline-offset-2">
            카드뉴스 만드는 방법 총정리
          </Link>
          {" · "}
          <Link href="/guide/cardnews-size" className="font-bold text-[#0f7dff] underline underline-offset-2">
            카드뉴스 사이즈와 템플릿
          </Link>
        </p>
      </article>
    </main>
  );
}
