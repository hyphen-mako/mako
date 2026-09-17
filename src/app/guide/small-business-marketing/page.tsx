import type { Metadata } from "next";
import Link from "next/link";
import GuideRelated from "@/components/GuideRelated";

export const metadata: Metadata = {
  title: "소상공인 SNS 마케팅 시작하기: 카드뉴스로 가볍게 시작하는 법",
  description:
    "디자이너 없이, 예산 없이 시작하는 소상공인 SNS 마케팅. 채널 선택부터 주간 운영 루틴, AI로 카드뉴스 제작 시간 줄이는 방법까지 정리했습니다.",
  keywords: [
    "소상공인 마케팅",
    "소상공인 SNS",
    "자영업 마케팅",
    "가게 홍보 SNS",
    "인스타그램 가게 홍보",
    "SNS 마케팅 시작",
    "1인 사업자 마케팅",
    "카드뉴스 마케팅",
  ],
  alternates: { canonical: "/guide/small-business-marketing" },
  openGraph: {
    title: "소상공인 SNS 마케팅 시작하기: 카드뉴스로 가볍게 시작하는 법 | MAKO",
    description: "채널 선택, 주간 운영 루틴, AI 카드뉴스 제작까지 — 소상공인 맞춤 SNS 마케팅 가이드.",
    url: "https://mako-landing.hyphen.it.com/guide/small-business-marketing",
    type: "article",
  },
};

const BASE_URL = "https://mako-landing.hyphen.it.com";

const ROUTINE = [
  {
    name: "월요일: 이번 주 소재 정하기 (10분)",
    body: "이번 주 이벤트, 신메뉴, 고객이 자주 묻는 질문 중 소재 하나를 고릅니다. 거창한 기획 없이 '이번 주에 알릴 것 하나'만 정하면 됩니다.",
  },
  {
    name: "화요일: 카드뉴스 1세트 제작 (30분→AI로 5분)",
    body: "제목 + 본문 5~7장 + CTA 구성으로 만듭니다. MAKO 같은 AI 도구를 쓰면 주제만 입력해 카피와 디자인이 함께 나옵니다.",
  },
  {
    name: "수~목요일: 업로드 + 스토리 재활용",
    body: "피드에 올리고 같은 내용을 스토리로 한 번 더 공유합니다. 스토리는 피드보다 부담이 적어 재노출 효과가 좋습니다.",
  },
  {
    name: "금요일: 반응 체크 (5분)",
    body: "저장 수와 프로필 방문 수만 확인하세요. 좋아요보다 '저장'이 높은 콘텐츠가 실제 유용한 정보로 읽힌 것입니다. 잘된 소재는 다음 주에 변형해 재사용합니다.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${BASE_URL}/guide/small-business-marketing#article`,
      headline: "소상공인 SNS 마케팅 시작하기: 카드뉴스로 가볍게 시작하는 법",
      description:
        "소상공인이 디자이너 없이 카드뉴스로 SNS 마케팅을 시작하는 방법. 채널 선택, 주간 운영 루틴, AI 활용법을 정리한 가이드입니다.",
      inLanguage: "ko-KR",
      datePublished: "2026-09-17",
      dateModified: "2026-09-17",
      author: { "@id": `${BASE_URL}/#organization` },
      publisher: { "@id": `${BASE_URL}/#organization` },
      mainEntityOfPage: `${BASE_URL}/guide/small-business-marketing`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      image: `${BASE_URL}/mako/card-news-showcase.jpg`,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "MAKO", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "카드뉴스 가이드", item: `${BASE_URL}/guide` },
        { "@type": "ListItem", position: 3, name: "소상공인 마케팅", item: `${BASE_URL}/guide/small-business-marketing` },
      ],
    },
  ],
};

export default function SmallBusinessMarketingPage() {
  return (
    <main className="bg-white text-[#162033]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <article className="mx-auto w-full max-w-[820px] px-6 py-16 tablet:px-8 tablet:py-20">
        <nav aria-label="breadcrumb" className="text-[13px] text-[#7a899b]">
          <Link href="/" className="font-semibold text-[#0f7dff]">MAKO</Link>
          <span className="mx-2">/</span>
          <Link href="/guide" className="font-semibold text-[#0f7dff]">가이드</Link>
          <span className="mx-2">/</span>
          <span>소상공인 마케팅</span>
        </nav>

        <h1 className="keep-all mt-6 text-[30px] font-black leading-[1.3] tablet:text-[40px]">
          소상공인 SNS 마케팅 시작하기: 카드뉴스로 가볍게 시작하는 법
        </h1>
        <p className="keep-all mt-5 text-[15px] leading-relaxed text-[#4b5a6d] tablet:text-[17px]">
          가게를 운영하면서 SNS까지 챙기기 어려운 이유는 &quot;뭘 올릴지&quot;와
          &quot;만드는 시간&quot; 때문입니다. 카드뉴스는 사진 촬영이나 영상 편집 없이
          정보만 있으면 되는 가장 가벼운 포맷입니다. 소상공인에게 맞는 시작 방법을
          정리했습니다.
        </p>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">왜 카드뉴스로 시작하는가</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            인스타그램에서 카드뉴스는 이벤트 안내, 메뉴 소개, 이용 방법, 자주 묻는
            질문처럼 소상공인이 매일 알리는 정보와 정확히 맞는 포맷입니다. 저장과
            공유가 잘 되는 형태라 단골이 퍼뜨려주기도 좋습니다. 무엇보다 매주
            꾸준히 올릴 수 있을 만큼 제작 부담이 낮아야 하는데, 카드뉴스는 그
            조건을 가장 잘 충족합니다.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">채널은 하나만 집중하세요</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            처음부터 인스타·틱톡·블로그를 다 하면 셋 다 무너집니다. 동네 가게·카페·
            뷰티·소매라면 인스타그램 하나로 시작하는 것이 정답에 가깝습니다.
            피드 카드뉴스 주 1회 + 스토리 수시 공유만으로도 충분합니다. 채널이
            자리 잡으면 그때 다른 채널로 확장하세요.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">주간 운영 루틴: 주 1회, 1시간</h2>
          <div className="mt-5 flex flex-col gap-4">
            {ROUTINE.map((step) => (
              <div key={step.name} className="faq-item rounded-2xl px-6 py-5">
                <h3 className="keep-all text-[16px] font-bold">{step.name}</h3>
                <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d]">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="keep-all text-[22px] font-bold tablet:text-[26px]">제작 시간을 AI로 줄이기</h2>
          <p className="keep-all mt-3 text-[15px] leading-relaxed text-[#4b5a6d]">
            이 루틴에서 가장 오래 걸리는 게 화요일의 제작 시간입니다. MAKO는 가게
            이름, 업종, 브랜드 톤을 한 번 등록하면 &quot;이번 주 이벤트&quot;처럼
            주제만 입력해 카드뉴스를 자동으로 만들어주는 AI 마케팅 스튜디오입니다.
            제작이 30분에서 5분으로 줄면 주 1회 운영이 현실이 됩니다. 지금
            웨이트리스트에 등록하면 오픈 시 카드뉴스 무한 생성 혜택을 드립니다.
          </p>
          <Link
            href="/#waitlist"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f7dff] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition hover:-translate-y-0.5"
          >
            웨이트리스트 등록하고 무한 생성 받기
            <i className="ri-arrow-right-line" aria-hidden="true" />
          </Link>
        </section>

        <GuideRelated current="/guide/small-business-marketing" />
      </article>
    </main>
  );
}
