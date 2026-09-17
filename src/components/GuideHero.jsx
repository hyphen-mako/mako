import Link from "next/link";

export default function GuideHero({ crumbs, title, intro }) {
  return (
    <header className="guide-hero overflow-hidden px-6 pb-12 pt-28 tablet:px-8 tablet:pb-14 tablet:pt-32">
      <div className="mx-auto flex w-full max-w-[820px] items-end justify-between gap-8">
        <div className="min-w-0">
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center text-[13px] text-[#7a899b]">
            {crumbs.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center">
                {index > 0 && <i className="ri-arrow-right-s-line mx-1 text-[14px]" aria-hidden="true" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="font-semibold text-[#0f7dff] hover:underline">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <p className="mt-5 text-[13px] font-bold tracking-wide text-[#0f7dff]">MAKO GUIDE</p>
          <h1 className="keep-all mt-2.5 text-[30px] font-black leading-[1.28] tablet:text-[40px]">
            {title}
          </h1>
          <p className="keep-all mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#4b5a6d] tablet:text-[17px]">
            {intro}
          </p>
        </div>
        <img
          src="/mako/mako-mascot.webp"
          alt=""
          className="guide-hero-mascot shrink-0 object-contain"
        />
      </div>
    </header>
  );
}
