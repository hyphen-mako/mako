"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "사용 방법", href: "#guide" },
  { label: "제작 기능", href: "#services" },
  { label: "오픈 이벤트", href: "#waitlist-bottom" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScrollY.current && current > 120 && !menuOpen);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[200] px-4 pt-4 tablet:px-6 desktop:px-6"
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3">
        <a
          href="/"
          aria-label="MAKO 홈"
          className="flex h-[52px] items-center gap-2 rounded-lg bg-white/95 px-2 pr-4 shadow-md backdrop-blur-md transition-shadow hover:shadow-lg"
        >
          <img src="/mako/mako-mascot.webp" alt="" className="h-10 w-10 object-contain" />
          <span className="text-[22px] font-black leading-none text-[#0F7DFF]">MAKO</span>
        </a>

        <nav aria-label="주요 메뉴" className="mako-header-nav hidden items-center gap-1 rounded-lg p-1 shadow-md tablet:flex desktop:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-11 items-center rounded-md px-5 text-[15px] font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist-bottom"
          className="hidden h-[52px] items-center gap-2 rounded-lg bg-white/95 px-5 text-[15px] font-bold text-[#0B63CE] shadow-md backdrop-blur-md transition-all hover:-translate-y-0.5 hover:shadow-lg tablet:flex desktop:flex"
        >
          이벤트 신청
          <i className="ri-arrow-right-line text-[18px]" aria-hidden="true" />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="mako-header-menu-button flex h-[52px] w-[52px] items-center justify-center rounded-lg bg-white/95 text-[24px] shadow-md backdrop-blur-md tablet:hidden desktop:hidden"
        >
          <i className={menuOpen ? "ri-close-line" : "ri-menu-line"} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="모바일 메뉴"
            className="mx-auto mt-2 flex max-w-[420px] flex-col gap-1 rounded-lg border border-[#DFE8F2] bg-white p-2 shadow-xl tablet:hidden desktop:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="mako-header-mobile-link flex min-h-12 items-center rounded-md px-4 text-[16px] font-semibold">
                {item.label}
              </a>
            ))}
            <a href="#waitlist-bottom" onClick={closeMenu} className="mako-header-mobile-cta mt-1 flex min-h-12 items-center justify-between rounded-md px-4 text-[16px] font-bold">
              이벤트 신청
              <i className="ri-arrow-right-line text-[20px]" aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
