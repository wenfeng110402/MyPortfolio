"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./Navbar";

type Lang = "zh" | "en";

const translations = {
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      projects: "项目",
      github: "GitHub",
    },
    hero: {
      title: "Cret",
      subtitle: "15岁 · 全栈开发者 · 开源创作者",
      description:
        "我是一名15岁的初中生，也是一名有着4年码龄的创造者。从六年级接触 Linux 开始，我就痴迷于从零搭建东西——不管是服务数万用户的开源工具，还是能拿在手里的硬件播放器。",
      cta: "查看 GitHub",
    },
    about: {
      title: "关于",
      label: "关于我",
      description:
        "我是一名15岁的初中生，也是一名有着4年码龄的创造者。从六年级接触 Linux 开始，我就痴迷于从零搭建东西——不管是服务数万用户的开源工具，还是能拿在手里的硬件播放器。\n\n我是 Hack Club 成员，活跃于国际青少年开发者社区，拿过 Grant，上过 GitHub Education Newsletter。我相信最好的学习就是动手做，最快成长的方式就是和更酷的人一起创造。\n\n目前我正在学习 iOS 开发与 SwiftUI，全力冲刺 2027 Apple Swift Student Challenge 杰出奖。",
    },
    projects: {
      title: "项目",
      label: "核心项目",
      intro: "只保留我最重要的 4 个项目。",
      items: [
        {
          name: "AppleMusic-Downloader",
          description:
            "开源音乐下载工具，累计服务数万用户，曾获 GitHub Education Newsletter 收录。",
          tags: ["Python", "CLI", "开源"],
          href: "https://github.com/wenfeng110402/AppleMusic-Downloader",
        },
        {
          name: "HackPod",
          description:
            "从零到一设计的独立 MP3 播放器，独立完成 PCB、固件与 3D 外壳，获 Hack Club Grant。",
          tags: ["硬件", "PCB", "嵌入式", "3D建模"],
          href: "https://github.com/wenfeng110402/HackPod",
        },
        {
          name: "YOLOv8 智能识别系统",
          description:
            "基于 YOLOv8 的实时物体识别与计数系统，针对边缘设备优化；获佛山市南海区科创大赛一等奖（街道第一名）、市赛二等奖。",
          tags: ["Python", "计算机视觉", "边缘计算"],
          href: "https://github.com/wenfeng110402",
        },
        {
          name: "Hack Club 生态工具",
          description:
            "为 Hack Club 社区开发的 iOS App 与 CLI 双因素认证工具 Authenticator；在 Flavortown 活动中担任 Chef 主导多个项目迭代。",
          tags: ["SwiftUI", "iOS", "CLI", "安全"],
          href: "https://github.com/wenfeng110402",
        },
      ],
    },
    footer: {
      title: "Cret · 全栈开发者 / 开源创作者",
      note: "Hack Club 成员 · 2027 Apple Swift Student Challenge 冲刺中",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      github: "GitHub",
    },
    hero: {
      title: "Cret",
      subtitle: "15 y/o · Full Stack Developer · Open Source Creator",
      description:
        "I'm a 15-year-old middle school student and a creator with 4 years of coding experience. Since I first touched Linux in 6th grade, I've been obsessed with building things from scratch — whether it's an open-source tool serving tens of thousands of users, or a hardware music player I can hold in my hand.",
      cta: "View GitHub",
    },
    about: {
      title: "About",
      label: "Who I am",
      description:
        "I'm a 15-year-old middle school student and a creator with 4 years of coding experience. Since I first touched Linux in 6th grade, I've been obsessed with building things from scratch — whether it's an open-source tool serving tens of thousands of users, or a hardware music player I can hold in my hand.\n\nI'm a Hack Club member, active in the international teen developer community, received grants, and was featured on GitHub Education Newsletter. I believe the best way to learn is by building, and the fastest way to grow is alongside cooler people.\n\nCurrently learning iOS development and SwiftUI, aiming for the 2027 Apple Swift Student Challenge Distinguished Award.",
    },
    projects: {
      title: "Projects",
      label: "Core work",
      intro: "Only the 4 projects that matter most.",
      items: [
        {
          name: "AppleMusic-Downloader",
          description:
            "Open-source music downloader serving tens of thousands of users. Featured on GitHub Education Newsletter.",
          tags: ["Python", "CLI", "Open Source"],
          href: "https://github.com/wenfeng110402/AppleMusic-Downloader",
        },
        {
          name: "HackPod",
          description:
            "Independent MP3 player built from scratch. Designed PCB, firmware, and 3D enclosure. Received Hack Club Grant.",
          tags: ["Hardware", "PCB", "Embedded", "3D Modeling"],
          href: "https://github.com/wenfeng110402/HackPod",
        },
        {
          name: "YOLOv8 Smart Recognition",
          description:
            "Real-time object detection and counting system optimized for edge devices. Won 1st Prize in District Science Fair and 2nd Prize at city level.",
          tags: ["Python", "Computer Vision", "Edge Computing"],
          href: "https://github.com/wenfeng110402",
        },
        {
          name: "Hack Club Ecosystem",
          description:
            "iOS app and CLI 2FA tool Authenticator for the Hack Club community. Served as Chef during Flavortown to drive multiple project iterations.",
          tags: ["SwiftUI", "iOS", "CLI", "Security"],
          href: "https://github.com/wenfeng110402",
        },
      ],
    },
    footer: {
      title: "Cret · Full Stack Developer / Open Source Creator",
      note: "Hack Club member · chasing the 2027 Apple Swift Student Challenge",
    },
  },
} as const;

function ProjectCard({
  project,
  index,
  lang,
}: {
  project: (typeof translations)["zh"]["projects"]["items"][number];
  index: number;
  lang: Lang;
}) {
  const content = translations[lang];

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              0{index + 1}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {project.name}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gray-400">
            {content.projects.label}
          </span>
        </div>

        <div className="h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />

        <p className="text-sm leading-7 text-gray-400">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function PortfolioSite() {
  const [lang, setLang] = useState<Lang>("zh");
  const content = translations[lang];

  const toggleLang = () => setLang((current) => (current === "zh" ? "en" : "zh"));

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="fixed left-6 top-6 z-40 hidden flex-col gap-1 text-xs uppercase tracking-[0.3em] text-gray-400 md:flex">
        <span className="text-white">Cret</span>
        <span>Full Stack / Open Source</span>
      </div>

      <Navbar
        lang={lang}
        labels={content.nav}
        onToggleLang={toggleLang}
      />

      <section
        id="top"
        className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm uppercase tracking-[0.4em] text-gray-400"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-[72px] font-extrabold leading-none tracking-tight md:text-[140px]"
        >
          {content.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-8 max-w-3xl text-base leading-8 text-gray-300 md:text-lg"
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="https://github.com/wenfeng110402"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            {content.hero.cta}
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            {content.nav.about}
          </a>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              {content.about.label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {content.about.title}
            </h2>
          </div>
          <p className="whitespace-pre-line text-base leading-8 text-gray-300">
            {content.about.description}
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
              {content.projects.label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {content.projects.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-gray-400">
            {content.projects.intro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {content.projects.items.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              lang={lang}
            />
          ))}
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">{content.footer.title}</p>
            <p className="mt-1 text-sm text-gray-400">{content.footer.note}</p>
          </div>
          <a
            href="https://github.com/wenfeng110402"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            {content.nav.github}
          </a>
        </div>
      </footer>
    </main>
  );
}
