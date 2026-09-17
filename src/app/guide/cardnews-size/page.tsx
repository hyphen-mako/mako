import type { Metadata } from "next";
import GuideHeader from "@/components/GuideHeader";
import GuideHero from "@/components/GuideHero";
import GuideCta from "@/components/GuideCta";
import GuideRelated from "@/components/GuideRelated";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "인스타그램 카드뉴스 사이즈와 템플릿 총정리",
  description:
    "인스타그램 카드뉴스 사이즈(1:1, 4:5), 권장 장수, 폰트 크기, 템플릿 고르는 기준까지. 카드뉴스 제작 전에 알아야 할 규격을 정리했습니다.",
  keywords: [
    "카드뉴스 사이즈",
    "인스타그램 카드뉴스",
    "카드뉴스 템플릿",
    "카드뉴스 크기",
    "인스타 카드뉴스 사이즈",
    "카드뉴스 규격",
    "카드뉴스 비율",
    "카드뉴스 장수",
  ],
  alternates: { canonical: "/guide/cardnews-size" },
  openGraph: {
    title: "인스타그램 카드뉴스 사이즈와 템플릿 총정리 | MAKO",
    description:
      "카드뉴스 사이즈, 비율, 장수, 폰트 크기, 템플릿 고르는 기준까지 한 번에 정리.",
    url: "https://mako-landing.hyphen.it.com/guide/cardnews-size",
    type: "article",
  },
};

const BASE_URL = "https://mako-landing.hyphen.it.com";

const SIZES = [
  {
    name: "1:1 정사각형 (1080×1080px)",
    body: "가장 대표적인 카드뉴스 비율입니다. 피드에서 잘리지 않고 모든 채널에서 안정적으로 보입니다. 처음이라면 이 비율로 시작하세요.",
  },
  {
    name: "4:5 세로형 (1080×1350px)",
    body: "피드에서 차지하는 화면이 가장 큰 비율입니다. 노출 면적이 넓어 도달에 유리하지만, 상하단이 잘리는 채널도 있어 핵심 내용은 중앙에 배치합니다.",
  },
  {
    name: "9:16 스토리/릴스형 (1080×1920px)",
    body: "스토리나 릴스 커버로 재활용할 때 쓰는 비율입니다. 카드뉴스를 여러 채널로 확장할 때 함께 제작하면 좋습니다.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/guide/cardnews-size#article`,
      headline: "인스타그램 카드뉴스 사이즈와 템플릿 총정리",
      description:
        "카드뉴스 사이즈, 비율, 장수, 폰트 크기, 템플릿 고르는 기준까지 정리한 가이드입니다.",
      inLanguage: "ko-KR",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: `${BASE_URL}/guide/cardnews-size`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      image: `${BASE_URL}/mako/card-news-showcase.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MAKO", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "카드뉴스 가이드", item: `${BASE_URL}/guide` },
        { "@type": "ListItem", position: 3, name: "사이즈와 템플릿", item: `${BASE_URL}/guide/cardnews-size` },
      ],
    },
  ],
};

export default function CardnewsSizePage() {
  return (
    <main className="bg-white text-[#162033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <GuideHeader />
      <GuideHero
        crumbs={[{ label: "MAKO", href: "/" }, { label: "가이드", href: "/guide" }, { label: "사이즈와 템플릿" }]}
        title="인스타그램 카드뉴스 사이즈와 템플릿 총정리"
        intro="카드뉴스를 만들기 전에 정해야 할 것이 사이즈와 구성입니다. 비율에 따라 피드에서 보이는 면적이 달라지고, 장수와 폰트 크기에 따라 끝까지 읽히는지가 갈립니다. 자주 쓰이는 규격과 선택 기준을 정리했습니다."
      />
      <article className="guide-article mx-auto w-full max-w-[820px] px-6 pb-16 pt-8 tablet:px-8 tablet:pb-20">

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">카드뉴스 사이즈: 어떤 비율을 쓸까?</h2>
          <div className="mt-5 flex flex-col gap-4">
            {SIZES.map((size) => (
              <div key={size.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[16px] font-bold">{size.name}</h3>
                <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d]">{size.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">몇 장으로 구성하면 좋을까?</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            일반적으로 5~10장이 가장 많이 쓰입니다. 첫 장은 제목, 중간 장들은 한 장에
            메시지 하나, 마지막 장은 정리와 행동 유도(CTA)로 구성하는 것이 기본 골격입니다.
            10장을 넘기면 이탈률이 올라가므로, 내용이 길면 시리즈로 나누는 편이 낫습니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">폰트 크기와 안전 영역</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            대부분 스마트폰에서 보기 때문에 본문은 최소 24~28px(1080px 기준), 제목은
            40px 이상을 권장합니다. 가장자리 60~80px 안쪽은 채널 UI에 가려질 수 있으니
            텍스트와 로고는 안전 영역 안에 두세요.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">템플릿 고르는 기준</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            템플릿은 예쁜 것보다 브랜드 컬러·폰트로 바꾸기 쉬운 구조가 중요합니다.
            카드뉴스를 꾸준히 만들 계획이라면, 매번 템플릿을 고르는 대신 브랜드 톤을
            학습해 자동으로 만들어주는 AI 도구가 시간을 크게 줄여줍니다.
            MAKO는 브랜드 정보를 반영해 카드뉴스 구성·카피·이미지를 한 번에 제작합니다.
          </p>
          <GuideCta buttonLabel="MAKO 웨이트리스트 등록하기" />
        </section>

        <GuideRelated current="/guide/cardnews-size" />
      </article>
      <SiteFooter />
    </main>
  );
}
