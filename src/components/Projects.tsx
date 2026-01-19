"use client";
import { useEffect } from "react";
import majorProject from "@/utils/MajorProject.json";
import ElectricBorder from "@/components/ElectricBorder";
import SubMajorProject from "@/utils/SubMajorProject.json";
import ShareLiftStats from "./ShareLiftStats";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const project = majorProject[0];
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 my-24">
      <div className="flex items-center gap-4 mb-5 ">
        <img
          data-aos="fade-up"
          className="w-10 h-10 bg-cover  "
          src="projects.svg"
          alt="Project_Icon"
        />
        <h2
          data-aos="fade-up"
          className="text-3xl py-2 lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent"
        >
          Featured Project
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="mb-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        <div className="relative rounded-xl overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
        <div className="text-white">
          <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
          <p className="text-cyan-300 mb-4">{project.subTitle}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={`https://${project.demo}`}
              target="_blank"
              className="group uppercase relative inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm md:text-m font-bold text-black shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(34,211,238,0.8)]"
            >
              Live Demo
            </a>
            <a
              href={project.code}
              target="_blank"
              className="group uppercase inline-flex items-center gap-2 rounded-xl  border border-white/30 bg-white/5 px-6 py-3 text-sm md:text-m font-bold text-white  backdrop-blur transition-all duration-300  hover:-translate-y-1 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <ShareLiftStats />

      {/* Sub Projects */}
      <section className="mt-24">
        <div className="flex items-center gap-4 mb-5 ">
          <img
            data-aos="fade-up"
            className="w-10 h-10 bg-cover  "
            src="projects.svg"
            alt="Project_Icon"
          />
          <h2
            data-aos="fade-up"
            className="text-3xl py-2 lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent"
          >
            Other projects
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="mb-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        />
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-8">
          {SubMajorProject.map((sub, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-cyan-400/40 transition"
            >
              <div className="relative h-62 overflow-hidden">
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-white">
                <div className="flex items-center">
                  <h4 className="text-lg font-semibold mb-1 mr-3">
                    {sub.title}
                  </h4>
                  <p className="text-cyan-300 text-sm mb-1">{sub.subTitle}</p>
                </div>

                <p className="text-gray-400 text-sm mb-2 line-clamp-3">
                  {sub.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {sub.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-full bg-white/10 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={`${sub.demo}`}
                    target="_blank"
                    className="text-sm px-4 py-1.5 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium transition"
                  >
                    Live
                  </a>
                  <a
                    href={sub.code}
                    target="_blank"
                    className="text-sm px-4 py-1.5 rounded-md border border-white/20 hover:border-cyan-400/60 text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
