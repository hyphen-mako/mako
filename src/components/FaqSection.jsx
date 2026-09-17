export const FAQ_ITEMS = [
  {
    question: "MAKO는 어떤 서비스인가요?",
    answer:
      "MAKO는 브랜드를 이해하는 AI 마케팅 스튜디오입니다. 브랜드 톤과 스타일에 맞는 카드뉴스와 영상 콘텐츠를 AI가 자동으로 만들어줍니다. 디자인 경험이 없어도 브랜드다운 마케팅 콘텐츠를 빠르게 제작할 수 있습니다.",
  },
  {
    question: "카드뉴스 무한 생성 이벤트는 무엇인가요?",
    answer:
      "MAKO 정식 오픈을 앞두고 진행하는 오픈 이벤트입니다. 웨이트리스트에 이메일을 등록하면 이벤트 기간 동안 카드뉴스를 제한 없이 무제한으로 생성할 수 있는 초대를 가장 먼저 보내드립니다.",
  },
  {
    question: "웨이트리스트에 등록하면 어떤 혜택이 있나요?",
    answer:
      "웨이트리스트 등록자는 MAKO 정식 오픈 시 가장 먼저 초대를 받고, 오픈 이벤트 기간 동안 카드뉴스 무한 생성 혜택을 누릴 수 있습니다. 추가 정보를 남겨주시면 우선 초대와 맞춤 안내를 더 빠르게 받아보실 수 있습니다.",
  },
  {
    question: "MAKO로 어떤 콘텐츠를 만들 수 있나요?",
    answer:
      "인스타그램·스레드 같은 SNS에 올리는 카드뉴스와 숏폼 영상 등 마케팅 콘텐츠를 만들 수 있습니다. 브랜드의 구성, 카피, 이미지를 AI가 한 번에 제작합니다.",
  },
  {
    question: "MAKO는 무료로 사용할 수 있나요?",
    answer:
      "오픈 이벤트 기간 동안에는 웨이트리스트 등록자에 한해 카드뉴스를 무료로 무한 생성할 수 있습니다. 정식 요금제는 오픈과 함께 안내될 예정입니다.",
  },
  {
    question: "정식 출시는 언제인가요?",
    answer:
      "현재 웨이트리스트를 운영하며 오픈을 준비 중입니다. 등록해주신 순서대로 초대를 보내드릴 예정이며, 일정은 이메일과 공식 SNS(인스타그램·스레드 @mako_platform)를 통해 안내드립니다.",
  },
];

const BASE_URL = "https://mako-landing.hyphen.it.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "MAKO",
      alternateName: "마코",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/mako/mako-icon-512.png`,
        width: 512,
        height: 512,
      },
      description:
        "브랜드를 이해하는 AI 마케팅 스튜디오. 카드뉴스와 영상 콘텐츠를 AI로 자동 제작합니다.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+82-10-9145-5226",
        contactType: "customer service",
        availableLanguage: "Korean",
      },
      sameAs: [
        "https://www.instagram.com/mako_platform",
        "https://www.threads.com/@mako_platform",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "MAKO",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "ko-KR",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "MAKO - 오픈 이벤트로 카드뉴스 무한 생성",
      description:
        "브랜드를 이해하는 AI 마케팅 스튜디오 MAKO에서 오픈 이벤트 기간 동안 카드뉴스를 제한 없이 만들어보세요.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "ko-KR",
      datePublished: "2026-09-15",
      dateModified: "2026-09-17",
    },
    {
      "@type": "HowTo",
      "@id": `${BASE_URL}/#howto`,
      name: "MAKO로 카드뉴스 만드는 방법",
      description:
        "만들고 싶은 콘텐츠를 말하면 MAKO AI가 브랜드 정보를 바탕으로 카드뉴스와 숏폼을 제작합니다.",
      inLanguage: "ko-KR",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "만들고 싶은 콘텐츠를 한 문장으로 알려주세요",
          text: "주제, 채널, 목적, 톤앤매너까지 말하면 바로 초안을 만들어요.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "브랜드 정보를 바탕으로 더 정확하게 제작해요",
          text: "제품, 타깃, 말투, 핵심 메시지를 반영해 브랜드다운 결과를 만들어요.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "카드뉴스와 숏폼을 한 번에 제작하세요",
          text: "채널에 맞는 구성과 비율로 여러 포맷을 빠르게 만들어요.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "마음에 들 때까지 수정하고 관리하세요",
          text: "아쉬운 초안은 바로 수정하고 캠페인별로 이어서 관리해요.",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${BASE_URL}/#service`,
      name: "MAKO AI 마케팅 스튜디오",
      provider: { "@id": `${BASE_URL}/#organization` },
      serviceType: "AI 마케팅 콘텐츠 제작",
      areaServed: "KR",
      description:
        "브랜드 톤에 맞는 카드뉴스와 숏폼 영상을 AI가 자동으로 제작하는 마케팅 스튜디오 서비스입니다.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
        description: "오픈 이벤트 기간 웨이트리스트 등록자 카드뉴스 무한 생성",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      inLanguage: "ko-KR",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="faq-section relative z-20 px-6 py-16 tablet:px-10 tablet:py-20 desktop:px-16 desktop:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="mx-auto w-full max-w-[900px]">
        <p className="text-center text-[14px] font-bold text-[#0f7dff]">FAQ</p>
        <h2 id="faq-heading" className="keep-all mt-2 text-center text-[30px] font-black leading-[1.25] text-[#162033] tablet:text-[38px] desktop:text-[44px]">
          자주 묻는 질문
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="faq-item rounded-2xl px-6 py-5 tablet:px-8 tablet:py-6">
              <h3 className="keep-all text-[16px] font-bold text-[#162033] tablet:text-[18px]">
                {item.question}
              </h3>
              <p className="keep-all mt-2 text-[14px] leading-relaxed text-[#4b5a6d] tablet:text-[15px]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
