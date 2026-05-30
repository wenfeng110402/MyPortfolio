"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import RotatingBadge from "./RotatingBadge";
import { Playfair_Display } from "next/font/google";
import {
  SiPython,
  SiFfmpeg,
  SiGithubactions,
  SiCplusplus,
  SiArduino,
  SiBlender,
  SiPypi,
} from "react-icons/si";
import { FaMicrochip, FaTerminal, FaLock, FaBox } from "react-icons/fa";
import { TbUserScreen } from "react-icons/tb";
import { IoMusicalNotes } from "react-icons/io5";
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});
// ─── DATA ─────────────────────────────────────────────
interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  link: string;
  desc: string;
  gradient: string;
  image: string;
  tech?: TechItem[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AppleMusic Downloader",
    link: "https://github.com/wenfeng110402/AppleMusic-Downloader",
    desc: "A graphical Apple Music downloader built with Python. Features high-quality audio download (AAC 256kbps), HD music video support (up to 1080p), batch download for artist works, and highly customizable configuration options. Includes Windows installer and cross-platform CLI support.",
    gradient: "from-pink-500 to-red-600",
    image: "/projects/applemusic1.png",
    tech: [
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "PyQt/PySide", icon: <TbUserScreen className="text-blue-400" /> },
      { name: "FFmpeg", icon: <SiFfmpeg className="text-green-400" /> },
      { name: "yt-dlp", icon: <FaTerminal className="text-red-400" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-purple-400" /> },
      { name: "PyInstaller", icon: <FaBox className="text-orange-400" /> },
    ],
  },
  {
    id: 2,
    title: "HackPod",
    link: "https://github.com/wenfeng110402/HackPod",
    desc: "A portable MP3 player inspired by iPod shuffle, built using ESP32 microcontroller. Plays MP3 songs from micro SD card with physical buttons for control (Play/Pause, Next, Previous, Volume). Features I2S audio output, LED status indicator, and battery monitoring via ADC. Includes custom PCB design and 3D printed shell.",
    gradient: "from-orange-500 to-yellow-500",
    image: "/projects/hackpod1.png",
    tech: [
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "ESP32", icon: <FaMicrochip className="text-green-500" /> },
      { name: "Arduino", icon: <SiArduino className="text-teal-400" /> },
      { name: "I2S Audio", icon: <IoMusicalNotes className="text-purple-400" /> },
      { name: "PCB Design", icon: <FaMicrochip className="text-yellow-400" /> },
      { name: "3D Modeling", icon: <SiBlender className="text-pink-400" /> },
    ],
  },
  {
    id: 3,
    title: "Authenticator",
    link: "https://github.com/wenfeng110402/Authenticator",
    desc: "A polished CLI tool for managing and viewing TOTP (Time-based One-Time Password) codes. Features a modern Textual-based dashboard UI, secret management (add/rename/delete/list), live continuously updating TOTP codes display, and multiple export formats (JSON, plain text). Installable via pip as 'hackauth'.",
    gradient: "from-blue-500 to-purple-600",
    image: "/projects/authenticator1.png",
    tech: [
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "Textual TUI", icon: <TbUserScreen className="text-cyan-400" /> },
      { name: "TOTP", icon: <FaLock className="text-red-400" /> },
      { name: "CLI", icon: <FaTerminal className="text-green-400" /> },
      { name: "pip package", icon: <SiPypi className="text-blue-400" /> },
      { name: "Conda", icon: <FaBox className="text-orange-400" /> },
    ],
  },
];

// ─── LEFT PANEL ───────────────────────────────────────
function LeftPanel({ activeIndex }: { activeIndex: number }) {
  const project = projects[activeIndex];

  return (
    <div className="sticky top-24 h-[70vh] flex flex-col justify-start pt-10 px-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
         <h3 className={`${playfair.className} text-3xl italic font-semibold text-white tracking-tight mb-4`}>
  {project.title}
</h3>

          <p className="text-gray-400 text-[13px] leading-7 max-w-xl mb-6">
            🚀 {project.desc}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.tech?.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-white/10 text-xs text-gray-300 hover:bg-white/10 transition"
              >
                {t.icon}
                {t.name}
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────
function ProjectCard({ 
  project, 
  onVisible 
}: { 
  project: Project; 
  onVisible: (id: number) => void; 
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(project.id);
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [project.id, onVisible]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="h-[70vh] flex items-center justify-center"
    >
      <div className="relative w-full max-w-3xl">
        {/* Main Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
        />

        {/* Rotating Badge */}
        <div className="absolute -top-8 -right-8">
          <RotatingBadge link={project.link} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Showcase() {
  const [activeId, setActiveId] = useState(1);
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  return (
    <section className="relative bg-black h-full">
      <div className="flex min-h-screen">
        <div className="hidden lg:block w-[45%]">
          <LeftPanel activeIndex={activeIndex} />
        </div>

        <div className="w-full lg:w-[55%] px-6 py-16 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onVisible={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}