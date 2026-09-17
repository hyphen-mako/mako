import type { Metadata } from "next";
import GuideHeader from "@/components/GuideHeader";
import GuideHero from "@/components/GuideHero";
import GuideCta from "@/components/GuideCta";
import GuideRelated from "@/components/GuideRelated";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "카드뉴스 카피 잘 쓰는 법: 첫 장부터 CTA까지 문구 공식",
  description:
    "카드뉴스 문구 작성법. 첫 장 제목 공식, 본문 한 장에 메시지 하나 원칙, CTA 문구 예시까지 끝까지 읽히는 카드뉴스 카피 쓰는 법을 정리했습니다.",
  keywords: [
    "카드뉴스 문구",
    "카드뉴스 카피",
    "카드뉴스 제목",
    "카드뉴스 글쓰기",
    "SNS 카피라이팅",
    "카드뉴스 내용 구성",
    "인스타 카드뉴스 문구",
  ],
  alternates: { canonical: "/guide/cardnews-copy" },
  openGraph: {
    title: "카드뉴스 카피 잘 쓰는 법: 첫 장부터 CTA까지 문구 공식 | MAKO",
    description: "끝까지 읽히는 카드뉴스 문구 공식 — 제목, 본문, CTA 예시까지.",
    url: "https://mako-landing.hyphen.it.com/guide/cardnews-copy",
    type: "article",
  },
};

const BASE_URL = "https://mako-landing.hyphen.it.com";

const TITLE_FORMULAS = [
  {
    name: "숫자형: 'OO한 카드뉴스의 3가지 조건'",
    body: "숫자는 내용의 분량을 예고해 클릭 부담을 낮춥니다. '3가지 조건', '5단계'처럼 작은 숫자가 효과적입니다.",
  },
  {
    name: "질문형: '왜 카드뉴스를 올려도 반응이 없을까?'",
    body: "독자가 실제로 갖고 있는 의문을 그대로 제목으로 쓰면 '내 얘기네'라는 반응을 끌어냅니다.",
  },
  {
    name: "이득형: '디자이너 없이 5분 만에 카드뉴스 만들기'",
    body: "독자가 얻는 결과를 명확하게 보여줍니다. 시간·비용·노력 절약 같은 구체적 이득이 강합니다.",
  },
  {
    name: "반전형: '카드뉴스, 예쁘게 만드는 게 정답이 아닙니다'",
    body: "상식을 뒤집는 문장은 호기심을 자극합니다. 단, 본문에서 반드시 근거를 제시해야 합니다.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/guide/cardnews-copy#article`,
      headline: "카드뉴스 카피 잘 쓰는 법: 첫 장부터 CTA까지 문구 공식",
      description:
        "카드뉴스 첫 장 제목 공식, 본문 작성 원칙, CTA 문구 예시까지 끝까지 읽히는 카피 작성법을 정리한 가이드입니다.",
      inLanguage: "ko-KR",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: `${BASE_URL}/guide/cardnews-copy`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      image: `${BASE_URL}/mako/card-news-showcase.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MAKO", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "카드뉴스 가이드", item: `${BASE_URL}/guide` },
        { "@type": "ListItem", position: 3, name: "카피 쓰는 법", item: `${BASE_URL}/guide/cardnews-copy` },
      ],
    },
  ],
};

export default function CardnewsCopyPage() {
  return (
    <main className="bg-white text-[#162033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <GuideHeader />
      <GuideHero
        crumbs={[{ label: "MAKO", href: "/" }, { label: "가이드", href: "/guide" }, { label: "카피 쓰는 법" }]}
        title="카드뉴스 카피 잘 쓰는 법: 첫 장부터 CTA까지 문구 공식"
        intro="카드뉴스의 성과는 디자인보다 문구에서 갈립니다. 같은 디자인이라도 첫 장 제목이 약하면 넘기지 않고, 본문이 장황하면 중간에 이탈합니다. 첫 장부터 마지막 장까지 적용할 수 있는 문구 공식을 정리했습니다."
      />
      <article className="guide-article mx-auto w-full max-w-[820px] px-6 pb-16 pt-8 tablet:px-8 tablet:pb-20">

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">첫 장 제목: 4가지 공식</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            첫 장은 광고가 아니라 약속입니다. &quot;이 카드뉴스를 끝까지 읽으면 무엇을
            얻는지&quot;를 한 문장으로 전달해야 합니다.
          </p>
          <div className="mt-5 flex flex-col gap-4">
            {TITLE_FORMULAS.map((formula) => (
              <div key={formula.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[16px] font-bold">{formula.name}</h3>
                <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d]">{formula.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">본문: 한 장에 메시지 하나</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            카드뉴스 본문의 철칙은 &quot;한 장에 메시지 하나&quot;입니다. 한 장에 두
            가지 이야기를 넣으면 둘 다 전달되지 않습니다. 문장은 짧게, 한 장당
            본문 3~5줄 이내로 유지하세요. 전문 용어는 독자의 언어로 풀어 쓰고,
            숫자나 비교 같은 구체적 정보를 우선 배치하면 신뢰가 올라갑니다.
            다음 장이 궁금하게 만드는 연결 문장(&quot;그런데 여기서 끝이 아닙니다&quot;)
            을 넣으면 완독률이 올라갑니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">마지막 장 CTA: 행동은 하나만</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            &quot;팔로우하고 저장하고 댓글 달아주세요&quot;처럼 여러 행동을 요구하면
            아무 행동도 하지 않습니다. 마지막 장에서는 가장 원하는 행동 하나만
            명확하게 적으세요. &quot;저장해두고 나중에 다시 보기&quot;,
            &quot;프로필 링크에서 자세히 보기&quot;처럼 행동 난이도가 낮을수록
            전환율이 높습니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">카피 쓰는 시간을 AI로 줄이기</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            카피 공식을 알아도 매번 첫 장 제목을 새로 짓는 건 시간이 걸립니다.
            MAKO는 주제와 브랜드 톤을 입력하면 제목부터 장별 카피, CTA까지
            카드뉴스 전체 문구를 생성합니다. 공식을 AI가 적용하니 검토와
            다듬는 시간만 쓰면 됩니다. 웨이트리스트에 등록하면 오픈 시
            가장 먼저 초대해드립니다.
          </p>
          <GuideCta buttonLabel="웨이트리스트 등록하고 먼저 써보기" />
        </section>

        <GuideRelated current="/guide/cardnews-copy" />
      </article>
      <SiteFooter />
    </main>
  );
}
