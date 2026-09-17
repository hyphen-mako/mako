import type { Metadata } from "next";
import GuideHeader from "@/components/GuideHeader";
import GuideHero from "@/components/GuideHero";
import GuideCta from "@/components/GuideCta";
import GuideRelated from "@/components/GuideRelated";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "숏폼 영상 만드는 방법: 카드뉴스에서 영상까지 확장하기",
  description:
    "릴스·쇼츠·틱톡 숏폼 영상을 만드는 방법. 카드뉴스 콘텐츠를 영상으로 재가공하는 공식과 AI로 숏폼까지 자동 제작하는 방법을 정리했습니다.",
  keywords: [
    "숏폼 영상 제작",
    "숏폼 만들기",
    "릴스 만들기",
    "쇼츠 만들기",
    "숏폼 영상 편집",
    "인스타 릴스",
    "AI 영상 제작",
    "카드뉴스 영상화",
  ],
  alternates: { canonical: "/guide/shortform" },
  openGraph: {
    title: "숏폼 영상 만드는 방법: 카드뉴스에서 영상까지 확장하기 | MAKO",
    description: "카드뉴스 콘텐츠를 숏폼 영상으로 확장하는 공식과 AI 자동 제작 방법.",
    url: "https://mako-landing.hyphen.it.com/guide/shortform",
    type: "article",
  },
};

const BASE_URL = "https://mako-landing.hyphen.it.com";

const FORMULAS = [
  {
    name: "훅: 첫 3초에 스크롤을 멈추게 하기",
    body: "숏폼의 승부는 첫 3초입니다. 질문, 숫자, 반전 같은 자극으로 시작하세요. 카드뉴스의 첫 장 제목이 그대로 영상 오프닝 문구가 됩니다.",
  },
  {
    name: "본문: 한 장면에 메시지 하나",
    body: "카드뉴스 한 장 = 영상 한 컷으로 생각하면 쉽습니다. 장면당 2~4초, 자막은 짧게. 카드뉴스 5~7장 분량이 약 15~30초짜리 숏폼 한 편입니다.",
  },
  {
    name: "CTA: 마지막 3초에 행동 유도",
    body: "'프로필 링크에서 확인', '저장해두기'처럼 다음 행동 하나만 명확하게. 카드뉴스 마지막 장의 CTA와 동일한 역할입니다.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/guide/shortform#article`,
      headline: "숏폼 영상 만드는 방법: 카드뉴스에서 영상까지 확장하기",
      description:
        "릴스·쇼츠·틱톡 숏폼 영상 제작 공식과 카드뉴스 콘텐츠를 영상으로 재가공하는 방법을 정리한 가이드입니다.",
      inLanguage: "ko-KR",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: `${BASE_URL}/guide/shortform`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      image: `${BASE_URL}/mako/card-news-showcase.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MAKO", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "카드뉴스 가이드", item: `${BASE_URL}/guide` },
        { "@type": "ListItem", position: 3, name: "숏폼 영상", item: `${BASE_URL}/guide/shortform` },
      ],
    },
  ],
};

export default function ShortformPage() {
  return (
    <main className="bg-white text-[#162033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <GuideHeader />
      <GuideHero
        crumbs={[{ label: "MAKO", href: "/" }, { label: "가이드", href: "/guide" }, { label: "숏폼 영상" }]}
        title="숏폼 영상 만드는 방법: 카드뉴스에서 영상까지 확장하기"
        intro="릴스, 쇼츠, 틱톡 — 숏폼은 도달 면적이 가장 큰 콘텐츠 포맷입니다. 하지만 영상 편집을 배우기엔 부담이 큽니다. 좋은 소식은 이미 카드뉴스를 만들 줄 안다면 숏폼의 80%는 알고 있다는 것입니다. 같은 구성 원리로 확장하는 방법을 정리했습니다."
      />
      <article className="guide-article mx-auto w-full max-w-[820px] px-6 pb-16 pt-8 tablet:px-8 tablet:pb-20">

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">숏폼의 기본 구조: 카드뉴스와 같다</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            카드뉴스가 &quot;첫 장 제목 → 장별 메시지 → 마지막 장 CTA&quot;로 구성되듯,
            숏폼도 &quot;훅 → 장면별 메시지 → CTA&quot;로 구성됩니다. 카드뉴스 한 장을
            영상 한 컷으로 바꾸는 게 가장 쉬운 변환 방법입니다.
          </p>
          <div className="mt-5 flex flex-col gap-4">
            {FORMULAS.map((formula) => (
              <div key={formula.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[16px] font-bold">{formula.name}</h3>
                <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d]">{formula.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">채널별 규격과 길이</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            숏폼은 어디든 9:16 세로형(1080×1920px)이 기본입니다. 인스타그램 릴스와
            유튜브 쇼츠는 15~60초, 틱톡은 21~34초 구간의 완주율이 높습니다.
            처음이라면 15~30초 분량으로 시작해 반응을 보고 늘리는 것을 권합니다.
            자막 영역은 하단 UI에 가려지지 않도록 화면 중앙~상단에 배치하세요.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">카드뉴스를 숏폼으로 재가공하는 순서</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            ① 기존 카드뉴스의 첫 장 제목을 영상 오프닝 훅으로 옮기기
            ② 장별 메시지를 자막으로 배치하고 컷 전환 추가
            ③ 마지막 장 CTA를 엔딩 화면으로 구성
            ④ 브랜드 컬러·폰트를 유지해 카드뉴스와 같은 세계관으로 보이게 하기.
            이렇게 하면 기획 하나로 이미지와 영상, 두 채널용 콘텐츠가 나옵니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">MAKO로 카드뉴스와 숏폼을 한 번에</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            MAKO는 브랜드 정보를 입력하면 카드뉴스와 영상을 함께 생성하는 AI
            마케팅 스튜디오입니다. 카드뉴스를 따로 만들고 영상을 따로 편집할 필요
            없이, 하나의 브랜드 톤으로 두 포맷을 동시에 받아볼 수 있습니다.
            지금 웨이트리스트에 등록하면 오픈 시 카드뉴스 무한 생성 혜택을
            가장 먼저 받아볼 수 있습니다.
          </p>
          <GuideCta buttonLabel="MAKO 웨이트리스트 등록하기" />
        </section>

        <GuideRelated current="/guide/shortform" />
      </article>
      <SiteFooter />
    </main>
  );
}
