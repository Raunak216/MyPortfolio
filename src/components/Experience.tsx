"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div id="experience" className="max-w-6xl mx-auto px-6 my-24 text-white">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-5 ">
        <img
          data-aos="fade-up"
          className="w-10 h-10 bg-cover  "
          src="workExp.svg"
          alt="Experience_Icon"
        />
        <h2
          data-aos="fade-up"
          className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent"
        >
          Experience
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="mb-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 data-aos="fade-up" className="text-xl font-bold text-white">
              Frontend Developer
            </h3>
            <p data-aos="fade-up" className="text-blue-400 font-semibold">
              Core Member - CodeChef VIT Chapter
            </p>
          </div>

          <p data-aos="fade-up" className="text-sm text-gray-400 mt-2 md:mt-0">
            2024 - 2025
          </p>
        </div>

        <p
          data-aos="fade-up"
          className="text-gray-300 leading-relaxed max-w-4xl"
        >
          As a core frontend member, I contributed to building frontend
          components for the chapter’s hackathon platform, ensuring smooth user
          experience and reliability during high student traffic.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li data-aos="fade-up">
            Built reusable frontend components used by{" "}
            <span className="text-white font-semibold">1000+ students</span>{" "}
            during hackathons
          </li>
          <li data-aos="fade-up">
            Focused on responsive UI, component reusability, and clean code
            practices
          </li>
          <li data-aos="fade-up">
            Collaborated closely with team members to deliver features under
            deadlines
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
