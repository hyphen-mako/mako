"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA",
];

const MAKO_POSES = [
  "/mako/poses/mako-analytics.png",
  "/mako/poses/mako-create.png",
  "/mako/poses/mako-sad.png",
  "/mako/poses/mako-curious.png",
  "/mako/poses/mako-celebrate.png",
  "/mako/poses/mako-sleep.png",
];

export default function GlobalMascotEffects() {
  const [showParade, setShowParade] = useState(false);
  const codeIndex = useRef(0);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === KONAMI_CODE[codeIndex.current]) {
        codeIndex.current += 1;
        if (codeIndex.current === KONAMI_CODE.length) {
          codeIndex.current = 0;
          setShowParade(true);
          window.setTimeout(() => setShowParade(false), 6000);
        }
        return;
      }
      codeIndex.current = 0;
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showParade && (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
          {MAKO_POSES.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt="마코 캐릭터"
              className="absolute w-16 h-16 object-contain"
              initial={{ x: -80, y: 100 + 70 * index }}
              animate={{
                x: [-80, window.innerWidth + 80],
                y: [100 + 70 * index, 80 + 70 * index, 100 + 70 * index],
              }}
              transition={{
                duration: 4,
                delay: 0.3 * index,
                ease: "linear",
                y: { duration: 0.6, repeat: 6, repeatType: "reverse", ease: "easeInOut" },
              }}
            />
          ))}
          <motion.div
            className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-3 border border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-[15px] font-bold text-gray-800">MAKO 크리에이티브 퍼레이드</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
