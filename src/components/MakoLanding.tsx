import Image from 'next/image';

import styles from './MakoLanding.module.css';

const PRODUCT_URL = 'https://mako.hyphen.it.com';

const workflow = [
  {
    number: '01',
    title: '브랜드를 알려주세요',
    copy: '브랜드의 말투, 제품 정보, 이미지와 참고 자료를 한 번 정리합니다.',
  },
  {
    number: '02',
    title: '만들 콘텐츠를 고르세요',
    copy: '카드뉴스와 영상 중 필요한 형식을 선택하고 목적을 입력합니다.',
  },
  {
    number: '03',
    title: '검토하고 완성하세요',
    copy: 'MAKO가 만든 결과를 확인하고, 수정하고, 다음 작업까지 이어갑니다.',
  },
];

const capabilities = [
  ['브랜드 기억', '매번 설명하지 않아도 저장된 브랜드와 제품 정보를 불러옵니다.'],
  ['콘텐츠 제작', '카드뉴스와 숏폼 영상을 하나의 제작 흐름에서 만듭니다.'],
  ['작업 아카이브', '이전 결과를 다시 열어 검토하고 다음 제작에 이어 씁니다.'],
];

function Arrow() {
  return <span aria-hidden="true" className={styles.arrow}>↗</span>;
}

export default function MakoLanding() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#main-content">본문 바로가기</a>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="MAKO 홈">
          <Image src="/mako/mako-mascot.png" alt="" width={40} height={40} priority />
          <span>MAKO</span>
        </a>

        <nav className={styles.nav} aria-label="주요 메뉴">
          <a href="#product">제품</a>
          <a href="#workflow">사용 방법</a>
          <a href="#platform">MAKO AI</a>
        </nav>

        <a className={styles.headerCta} href={`${PRODUCT_URL}/card-news`}>
          시작하기 <Arrow />
        </a>
      </header>

      <main id="main-content">
        <section className={styles.hero} id="top">
          <Image
            className={styles.heroImage}
            src="/mako/card-news-showcase.png"
            alt=""
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.heroShade} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>AI MARKETING STUDIO</p>
            <h1>MAKO</h1>
            <p className={styles.heroLead}>
              브랜드를 아는 AI와<br />콘텐츠를 만드세요.
            </p>
            <p className={styles.heroDescription}>
              브랜드와 제품 정보를 한 번 등록하면,<br className={styles.desktopBreak} />
              카드뉴스부터 영상까지 같은 기준으로 이어서 만듭니다.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryCta} href={`${PRODUCT_URL}/card-news`}>
                MAKO 시작하기 <Arrow />
              </a>
              <a className={styles.textCta} href="#product">제품 살펴보기</a>
            </div>
          </div>
          <p className={styles.heroNote}>MAKE YOUR BRAND MOVE</p>
        </section>

        <section className={styles.intro} id="product">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>ONE BRAND, EVERY FORMAT</p>
            <h2>생각은 하나여도<br />콘텐츠는 다양해야 하니까.</h2>
          </div>
          <p className={styles.sectionIntro}>
            채널마다 처음부터 다시 만들 필요 없이, MAKO에 저장한 브랜드 기준을 카드뉴스와 영상 제작에 함께 적용하세요.
          </p>
        </section>

        <section className={styles.productSection}>
          <div className={styles.productCopy}>
            <span className={styles.productIndex}>01 / CARD NEWS</span>
            <h2>넘기고 싶은<br />카드뉴스</h2>
            <p>브랜드의 메시지를 흐름 있는 여러 장의 콘텐츠로 정리합니다. 기획부터 문구와 비주얼까지 한 작업 안에서 이어집니다.</p>
            <a href={`${PRODUCT_URL}/card-news`}>카드뉴스 만들기 <Arrow /></a>
          </div>
          <div className={styles.productMedia}>
            <Image
              src="/mako/card-news-showcase.png"
              alt="MAKO 카드뉴스 제작 화면"
              fill
              sizes="(max-width: 800px) 100vw, 62vw"
            />
          </div>
        </section>

        <section className={`${styles.productSection} ${styles.productReverse}`}>
          <div className={styles.productCopy}>
            <span className={styles.productIndex}>02 / AI VIDEO</span>
            <h2>브랜드가 움직이는<br />짧은 영상</h2>
            <p>광고와 숏폼에 필요한 장면을 구성하고, 브랜드의 톤을 유지한 영상 제작 흐름으로 연결합니다.</p>
            <a href={`${PRODUCT_URL}/ai-video`}>영상 만들기 <Arrow /></a>
          </div>
          <div className={styles.productMedia}>
            <Image
              src="/mako/video-showcase.png"
              alt="MAKO AI 영상 제작 화면"
              fill
              sizes="(max-width: 800px) 100vw, 62vw"
            />
          </div>
        </section>

        <section className={styles.workflowSection} id="workflow">
          <div className={styles.workflowHeader}>
            <p className={styles.eyebrow}>HOW MAKO WORKS</p>
            <h2>브랜드를 쌓고,<br />콘텐츠는 더 빠르게.</h2>
          </div>
          <ol className={styles.workflowList}>
            {workflow.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.platformSection} id="platform">
          <div className={styles.mascotStage}>
            <p className={styles.mascotLabel}>YOUR AI MARKETING PARTNER</p>
            <Image
              src="/mako/mako-mascot.png"
              alt="콘텐츠 제작을 돕는 MAKO 캐릭터"
              width={620}
              height={620}
              sizes="(max-width: 800px) 82vw, 46vw"
            />
          </div>
          <div className={styles.platformCopy}>
            <p className={styles.eyebrow}>MEET MAKO</p>
            <h2>브랜드 맥락을<br />이어주는 AI</h2>
            <p className={styles.platformLead}>MAKO는 한 번의 결과보다, 브랜드가 계속 만들 수 있는 제작 흐름을 설계합니다.</p>
            <div className={styles.capabilityList}>
              {capabilities.map(([title, copy], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <Image
            src="/mako/auth-mascot-hero.png"
            alt=""
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.finalShade} />
          <div className={styles.finalContent}>
            <p className={styles.eyebrow}>START WITH MAKO</p>
            <h2>다음 콘텐츠는<br />MAKO와 만드세요.</h2>
            <a className={styles.primaryCta} href={`${PRODUCT_URL}/card-news`}>
              지금 시작하기 <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Image src="/mako/mako-mascot.png" alt="" width={46} height={46} />
          <span>MAKO</span>
        </div>
        <p>브랜드와 제품에 맞는 카드뉴스와 영상을 만드는 AI 마케팅 스튜디오</p>
        <div className={styles.footerLinks}>
          <a href={`${PRODUCT_URL}/card-news`}>카드뉴스</a>
          <a href={`${PRODUCT_URL}/ai-video`}>AI 영상</a>
          <a href={`${PRODUCT_URL}/templates`}>템플릿</a>
        </div>
        <small>© 2026 Hyphen Studio. All rights reserved.</small>
      </footer>
    </div>
  );
}
