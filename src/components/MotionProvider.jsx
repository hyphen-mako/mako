"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  new Promise((resolve) => {
    const run = () =>
      import("framer-motion").then((res) => resolve(res.domMax));
    if (typeof requestIdleCallback === "function") {
      requestIdleCallback(run, { timeout: 1500 });
    } else {
      setTimeout(run, 0);
    }
  });

export default function MotionProvider({ children }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
