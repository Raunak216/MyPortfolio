"use client";
import dynamic from "next/dynamic";

const MorphingText = dynamic(
  () => import("@/components/ui/morphing-text").then((m) => m.MorphingText),
  { ssr: false },
);

const texts = [
  "Loading resources…",
  "Initializing application…",
  "Finalizing setup…",
];
export default function Preloader() {
  return (
    <div className="fixed text-white inset-0 z-[100] flex items-center justify-center bg-black">
      <MorphingText texts={texts} />
    </div>
  );
}
