"use client";
import LightRays from "./LightRays";
import dynamic from "next/dynamic";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "800"],
});
const MorphingText = dynamic(
  () => import("@/components/ui/morphing-text").then((m) => m.MorphingText),
  { ssr: false },
);

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const texts = [
  "Problem Solver",
  "FullStack developer",
  "Product-Focused Developer",
  "Continuous Learner",
];

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <LightRays
        raysOrigin="top-center"
        raysColor="#e6ebeb"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={2.2}
        followMouse
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0 z-0"
      />

      <div className=" text-white relative z-10 flex flex-col items-center justify-center h-full px-16 ">
        <h1 className=" text-5xl md:text-6xl font-bold tracking-tight">
          Hi I&apos;m
        </h1>

        <h1
          className={`${plus_Jakarta_Sans.className} text-6xl md:text-7xl font-extrabold text-cyan-300`}
        >
          Raunak
        </h1>
        <MorphingText className="mt-2 mb-6" texts={texts} />
        <p
          className={`${inter.className} w-full  md:mt-4 text text-sm text-center md:text-xl text-gray-300 leading-relaxed`}
        >
          Passionate about creating end-to-end solutions for real-world problems{" "}
          <br />
          Focused on engineering scalable systems, clean UX, and delivering user
          value
        </p>

        <div className="mt-6 flex gap-4 justify-center items-center">
          <a href="https://github.com/Raunak216" target="_blank">
            <img
              className="w-8 h-8 opacity-80 hover:opacity-100 hover:rotate-15 transition rounded-3xl"
              src="githubsvg.svg"
              alt="Github"
            />
          </a>

          <a href="https://www.linkedin.com/in/raunak-216k" target="_blank">
            <img
              className="w-8 h-8 opacity-80 hover:opacity-100 hover:rotate-15 transition rounded-3xl"
              src="linkedinsvg.svg"
              alt="linkedin"
            />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=raunak.kr216@gmail.com"
            target="_blank"
          >
            <img
              className="w-8 h-8 opacity-80 hover:opacity-100 hover:rotate-15 transition rounded-3xl"
              src="gmail.svg"
              alt="Gmail"
            />
          </a>
          <a href="https://leetcode.com/u/Raunak_216/" target="_blank">
            <img
              className="w-8 h-8 opacity-80 hover:opacity-100 hover:rotate-15 transition rounded-3xl"
              src="leetcode.svg"
              alt="Leetcode"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => {
              scrollToSection("projects");
            }}
            className="group uppercase relative inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-m md:text-lg font-bold text-black shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(34,211,238,0.8)]"
          >
            Projects
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1IiKQbz3vjhbbTvEjaqUoQJcyo5nzhgbP"
            target="_blank"
          >
            <button className="group uppercase inline-flex items-center gap-2 rounded-xl  border border-white/30 bg-white/5 px-6 py-3 text-m md:text-lg font-bold text-white  backdrop-blur transition-all duration-300  hover:-translate-y-1 hover:bg-white/10">
              Resume
              <img
                src="/downloadSvg.svg"
                alt="Download"
                className="h-5 w-5  transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
