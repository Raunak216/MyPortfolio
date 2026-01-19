"use client";
import { useEffect } from "react";
import { Orbitron } from "next/font/google";
import AnimatedCounter from "@/components/AnimatedCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import ElectricBorder from "./ElectricBorder";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const ShareLiftStats = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div data-aos="fade-up" className="my-14">
      <p className="mb-4 text-center text-m tracking-widest uppercase text-cyan-400">
        First launch Stats
      </p>

      {/* Stats Container */}
      <ElectricBorder
        color="#3fefe9"
        speed={0.4}
        chaos={0.1}
        thickness={0.5}
        style={{ borderRadius: 16 }}
      >
        <div className="flex items-center justify-between gap-8 rounded-2xl bg-white/[0.04]   px-8 py-6">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`${orbitron.className} tabular-nums  min-w-[4ch] text-center text-xl md:text-5xl tracking-widest text-cyan-300`}
            >
              <AnimatedCounter from={0} to={120} />+
            </div>
            <p className="text-xs text-center md:text-sm font-semibold text-gray-300">
              Registered Users
            </p>
          </div>

          <div className="hidden md:block h-10 w-px bg-white/20" />

          <div className="flex flex-col items-center gap-1">
            <div
              className={`${orbitron.className} tabular-nums  min-w-[4ch] text-center text-xl md:text-5xl tracking-widest text-cyan-300`}
            >
              30+
            </div>
            <p className="text-xs text-center md:text-sm font-semibold text-gray-300">
              Students Connected
            </p>
          </div>

          <div className="hidden md:block h-10 w-px bg-white/20" />

          <div className="flex flex-col items-center gap-1">
            <div
              className={`${orbitron.className} tabular-nums min-w-[5ch] text-center text-lg md:text-4xl tracking-widest text-cyan-300`}
            >
              &lt; 30s
            </div>
            <p className="text-xs text-center md:text-sm font-semibold text-gray-300">
              Matchmaking Time
            </p>
          </div>
        </div>
      </ElectricBorder>
    </div>
  );
};

export default ShareLiftStats;
