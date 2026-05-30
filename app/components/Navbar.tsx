"use client";

type Lang = "zh" | "en";

type NavLabels = {
  home: string;
  about: string;
  projects: string;
  stack: string;
  github: string;
};

export default function Navbar({
  lang,
  labels,
  onToggleLang,
}: {
  lang: Lang;
  labels: NavLabels;
  onToggleLang: () => void;
}) {
  return (
    <header className="fixed right-4 top-4 z-50">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1.5 backdrop-blur-xl shadow-lg shadow-black/20">
        <a
          href="#top"
          className="rounded-full px-3 py-1 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {labels.home}
        </a>
        <a
          href="#about"
          className="rounded-full px-3 py-1 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {labels.about}
        </a>
        <a
          href="#projects"
          className="rounded-full px-3 py-1 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {labels.projects}
        </a>
        <a
          href="#stack"
          className="rounded-full px-3 py-1 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {labels.stack}
        </a>
        <a
          href="https://github.com/wenfeng110402"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-3 py-1 text-xs text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          {labels.github}
        </a>
        <button
          type="button"
          onClick={onToggleLang}
          aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
          className="ml-1 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white transition hover:border-white/25 hover:bg-white/10"
        >
          <span className={lang === "zh" ? "text-white" : "text-gray-500"}>
            中
          </span>
          <span className="px-1 text-gray-500">/</span>
          <span className={lang === "en" ? "text-white" : "text-gray-500"}>
            EN
          </span>
        </button>
      </div>
    </header>
  );
}
