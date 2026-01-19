"use client";
import { useEffect } from "react";
import data from "@/utils/tech.json";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Tech() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <section id="tech" className="max-w-6xl mx-auto px-6 my-24 text-white">
      <div data-aos="fade-up" className="flex items-center gap-4 mb-5 ">
        <img
          className="w-12 h-12 bg-cover"
          src="react-2.svg"
          alt="Technology_Icon"
        />
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent">
          Tech Arsenal
        </h2>
      </div>
      <div
        style={{ width: "100%" }}
        className=" mb-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-full"
      ></div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.map((d, idx) => (
          <div
            key={`${d.title}-${idx}`}
            data-aos="fade-up"
            className="group relative flex flex-col items-center justify-center h-32 bg-gray-900/30 rounded-2xl border border-blue-500/30 backdrop-blur-md transition hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]"
          >
            <img
              src={d.image}
              alt={d.title}
              className="w-12 h-12 bg-cover mb-3 opacity-90 group-hover:opacity-100 transition"
            />

            <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {d.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
