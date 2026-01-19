"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const About = () => {
  const couseWork = ["Java", "DSA", "Cloud Computing", "Probability & Stats"];
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div id="about" className="text-white max-w-6xl mx-auto px-6 my-24">
        <div className="flex items-center gap-4 mb-5 ">
          <img
            data-aos="fade-up"
            className="w-12 h-12 bg-cover  "
            src="about.svg"
            alt="AboutMe_Icon"
          />
          <h2
            data-aos="fade-up"
            className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent"
          >
            About Me
          </h2>
        </div>
        <div className="mb-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <p
          data-aos="fade-up"
          className={`${inter.className} text-l md:text-xl text-white/75 leading-relaxed`}
        >
          Aspiring Software Engineer and Full-Stack Developer enjoys breaking
          down complex problems and turning them into efficient, scalable
          solutions. I actively strengthen my DSA and problem-solving skills,
          aiming to write code that is both performant and maintainable. As a
          Full-Stack Developer, I work with the MERN stack and enjoy building
          scalable, user-focused applications.
        </p>
        {/* Education Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <img
              data-aos="fade-up"
              className="w-10 h-10"
              src="/educationSvg.svg"
            />
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent"
            >
              Education
            </h2>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-xl rounded-2xl bg-white/[0.04] backdrop-blur-sm p-6"
          >
            <h4 className="text-lg font-semibold text-white">
              Vellore Institute of Technology, Vellore
            </h4>

            <p className="mt-1 text-sm text-gray-400">
              B.Tech – Electrical and Electronics Engineering
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
              <span>CGPA: 8.35</span>
              <span>Pre-Final Year</span>
              <span>2023 – 2027</span>
            </div>

            <p className="mt-5 mb-2 text-sm text-gray-400">
              Related Courseworks
            </p>

            <div className="flex flex-wrap gap-2">
              {couseWork.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-lg bg-white/10 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
