"use client";

import { LazyMotion } from "framer-motion";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domMax);

export default function MotionProvider({ children }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
