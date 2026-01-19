"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Certification = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <section className="max-w-6xl mx-auto px-6 my-24 text-white">
      <div data-aos="fade-up" className="flex items-center gap-4 mb-5 ">
        <img
          className="w-10 h-10 bg-cover  "
          src="certSvg.svg"
          alt="Certification_Icon"
        />
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-500 bg-clip-text text-transparent">
          Certification
        </h2>
      </div>

      <div
        data-aos="fade-up"
        className="mb-10 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
      />

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Certificate Image */}
        <div className="rounded-2xl  overflow-hidden border border-white/10 bg-white/[0.03]">
          <img
            data-aos="zoom-out-up"
            src="/mongodbCert.png"
            alt="MongoDB Associate DBA Certificate"
            className="w-full h-auto md:h-72 object-fit"
          />
        </div>

        {/* Certificate Details */}
        <div className="flex flex-col justify-center">
          <h3 data-aos="fade-up" className="text-2xl font-semibold text-white">
            MongoDB Associate Database Administrator
          </h3>

          <p data-aos="fade-up" className="mt-2 text-gray-400">
            Issued by MongoDB University · Aug 2025
          </p>

          <p data-aos="fade-up" className="mt-4 text-gray-300 leading-relaxed">
            Earned certification demonstrating strong understanding of MongoDB
            administration, data modeling, indexing, performance optimization,
            and operational best practices.
          </p>

          <a
            data-aos="fade-up"
            href="https://www.credly.com/badges/f3b572b7-ab69-4b31-8535-5ca4d16945ec/public_url"
            target="_blank"
            className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium"
          >
            View credential →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certification;
