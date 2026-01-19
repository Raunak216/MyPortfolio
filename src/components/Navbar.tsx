"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  id: string;
};

type CursorProps = {
  position: Position;
};

const Navbar = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-30 ">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({ ...pv, opacity: 0 }));
        }}
        className="relative flex items-center h-12 px-8 rounded-full bg-white w-fit border border-black "
      >
        <Cursor position={position} />

        <Tab id={"about"} setPosition={setPosition}>
          About
        </Tab>
        <Tab id={"projects"} setPosition={setPosition}>
          Projects
        </Tab>
        <Tab id={"tech"} setPosition={setPosition}>
          Tech
        </Tab>
        <a
          href="https://drive.google.com/uc?export=download&id=1IiKQbz3vjhbbTvEjaqUoQJcyo5nzhgbP"
          target="_blank"
        >
          <Tab id={""} setPosition={setPosition}>
            Resume
          </Tab>
        </a>
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition, id }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();

    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  };

  return (
    <li
      onClick={() => {
        scrollToSection(id);
      }}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="flex relative z-50 font-bold md:uppercase cursor-pointer p-3 text-white mix-blend-difference"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      className="absolute top-1/2 -translate-y-1/2 h-10 rounded-full bg-black z-40"
      animate={position}
    />
  );
};

export default Navbar;
