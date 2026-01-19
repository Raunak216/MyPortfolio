"use client";
import { useRef } from "react";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({
  subsets: ["latin"],
});
import {
  animate,
  KeyframeOptions,
  motion,
  useInView,
  useIsomorphicLayoutEffect,
  useMotionValue,
  useTransform,
} from "motion/react";
type animatedCounterProps = {
  from: number;
  to: number;
  animationOption?: KeyframeOptions;
};
const AnimatedCounter = ({
  from,
  to,
  animationOption,
}: animatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inview = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inview) return;
    if (window.matchMedia("(prefers-reduced-motion").matches) {
      element.textContent = String(to);
      return;
    }
    element.textContent = String(from);

    const contols = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOption,
      onUpdate(value) {
        element.textContent = String(value.toFixed(0));
      },
    });
    return () => {
      contols.stop;
    };
  }, [ref, inview, from, to]);
  return (
    <>
      <span className={`${orbitron.className}`} ref={ref} />
    </>
  );
};

export default AnimatedCounter;
