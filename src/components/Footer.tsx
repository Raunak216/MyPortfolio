"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="mb-4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />
      <section className="flex justify-center md:px-6 mb-6">
        <div className="w-full max-w-5xl rounded-3xl  p-4 text-center">
          <h2
            data-aos="fade-up"
            className="text-xl md:text-3xl font-bold text-white"
          >
            Let’s Build Something{" "}
            <span className="text-cyan-300">Impactful</span>
          </h2>

          <p
            data-aos="fade-up"
            className="mt-4 text-sm md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            I’m currently seeking a Summer Internship and open to opportunities
            where I can contribute, learn, and build real-world products.
          </p>

          <div
            data-aos="fade-up"
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:raunak.kr216@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-6 py-3 text-cyan-300 hover:bg-cyan-400/10 transition"
            >
              raunak.kr216@gmail.com
            </a>

            <a
              data-aos="fade-up"
              href="tel:+917322942424"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition"
            >
              +91 7322 94 2424
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
