"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import Navbar from "./Navbar";

type Lang = "zh" | "en";

const translations = {
  zh: {
    nav: {
      home: "首页",
      about: "关于",
      projects: "项目",
      stack: "技术栈",
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
            "一个功能完整的图形化 Apple Music 下载工具，已获得 252+ 星标，被 GitHub Education Newsletter 推荐，帮助数万用户下载高保真音乐。",
          tags: ["Python", "GUI", "开源"],
          href: "https://github.com/wenfeng110402/AppleMusic-Downloader",
        },
        {
          name: "HackPod",
          description:
            "设计一个轻量化的 ESP32 MP3 播放器，仿 iPod shuffle 交互。从 PCB 设计、固件开发到外壳设计全程自主完成，展示完整的硬件开发流程。",
          tags: ["C++", "嵌入式", "硬件"],
          href: "https://github.com/wenfeng110402/HackPod",
        },
        {
          name: "Hack-Club-App",
          description:
            "用 SwiftUI 打造的 Hack Club 社区应用，为全球青少年开发者提供一个高效的活动管理和协作平台，支持实时通知和社区互动。",
          tags: ["SwiftUI", "iOS", "社区"],
          href: "https://github.com/wenfeng110402/Hack-Club-App",
        },
        {
          name: "Authenticator",
          description:
            "为 Hack Club 社区开发的双因素认证工具，支持 iOS App 和 CLI 版本。实现密钥管理、TOTP 生成和安全验证，在 Flavortown 活动中担任 Chef 主导产品迭代。",
          tags: ["SwiftUI", "Python", "安全"],
          href: "https://github.com/wenfeng110402/Authenticator",
        },
      ],
    },
    footer: {
      title: "Cret · 全栈开发者 / 开源创作者",
      note: "Hack Club 成员 · 2027 Apple Swift Student Challenge 冲刺中",
    },
    stack: {
      title: "技术栈",
      label: "精通的技术",
      categories: [
        { name: "语言", skills: ["Python", "Swift", "TypeScript", "C++", "JavaScript"] },
        { name: "前端", skills: ["React", "Next.js", "SwiftUI", "Tailwind CSS"] },
        { name: "后端", skills: ["Node.js", "CLI 工具", "REST API"] },
        { name: "其他", skills: ["Git", "硬件编程", "Linux", "Docker"] },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      stack: "Stack",
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
            "A full-featured GUI for downloading high-fidelity music from Apple Music. 252+ stars on GitHub, featured in GitHub Education Newsletter. Serves thousands of users daily.",
          tags: ["Python", "GUI", "Open Source"],
          href: "https://github.com/wenfeng110402/AppleMusic-Downloader",
        },
        {
          name: "HackPod",
          description:
            "A lightweight ESP32-based portable MP3 player inspired by iPod shuffle. Self-designed PCB, firmware, and enclosure from scratch—complete hardware development journey.",
          tags: ["C++", "Embedded", "Hardware"],
          href: "https://github.com/wenfeng110402/HackPod",
        },
        {
          name: "Hack-Club-App",
          description:
            "Built with SwiftUI, a community app for Hack Club connecting global teen developers. Real-time notifications, event management, and collaborative features at scale.",
          tags: ["SwiftUI", "iOS", "Community"],
          href: "https://github.com/wenfeng110402/Hack-Club-App",
        },
        {
          name: "Authenticator",
          description:
            "2FA tool for the Hack Club community with iOS app and CLI. Secure key management, TOTP generation, and multi-platform support. Led product iterations as Chef during Flavortown.",
          tags: ["SwiftUI", "Python", "Security"],
          href: "https://github.com/wenfeng110402/Authenticator",
        },
      ],
    },
    footer: {
      title: "Cret · Full Stack Developer / Open Source Creator",
      note: "Hack Club member · chasing the 2027 Apple Swift Student Challenge",
    },
    stack: {
      title: "Tech Stack",
      label: "Skills & expertise",
      categories: [
        { name: "Languages", skills: ["Python", "Swift", "TypeScript", "C++", "JavaScript"] },
        { name: "Frontend", skills: ["React", "Next.js", "SwiftUI", "Tailwind CSS"] },
        { name: "Backend", skills: ["Node.js", "CLI Tools", "REST API"] },
        { name: "Other", skills: ["Git", "Hardware Programming", "Linux", "Docker"] },
      ],
    },
  },
} as const;

type Project = {
  name: string;
  description: string;
  tags: readonly string[];
  href: string;
};

function ProjectCard({
  project,
  index,
  lang,
}: {
  project: Project;
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
  const { lang } = useLanguage();
  const content = translations[lang];

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

      <Navbar />

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

      <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
            {content.stack.label}
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            {content.stack.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {content.stack.categories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-gray-300 hover:border-white/20 hover:bg-white/10 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
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
