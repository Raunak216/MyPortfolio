import Image from "next/image";
import SplashCursor from "@/utils/splashCursor";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import Certification from "@/components/Certification";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* <SplashCursor /> */}
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
