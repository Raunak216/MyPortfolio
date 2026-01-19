"use client";

import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import Certification from "@/components/Certification";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("seen-loader");
    if (seen) {
      setMinTimeDone(true);
      setForceShow(true);
      return;
    }

    sessionStorage.setItem("seen-loader", "true");
    const minTimer = setTimeout(() => {
      setMinTimeDone(true);
    }, 5000);
    const forceTimer = setTimeout(() => {
      setForceShow(true);
    }, 5000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(forceTimer);
    };
  }, []);
  if (!minTimeDone && !forceShow) {
    return <Preloader />;
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Tech />
      <Certification />
      <Footer />
    </div>
  );
}
