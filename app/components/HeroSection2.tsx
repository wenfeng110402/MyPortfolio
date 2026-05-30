"use client";

import CubeHero from "./CubeHero";
import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";

const githubUrl = "https://github.com/wenfeng110402";
const siteUrl = "https://cret.uk";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-black px-6 md:px-16 lg:px-24 flex flex-col justify-between">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-4">
            <img
              src="/cret.JPG"
              alt="profile"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />

            <h1 className="text-[42px] md:text-[72px] font-semibold text-white tracking-tight">
              {t("hero.title")}
            </h1>
          </div>

          <h1 className="text-[42px] md:text-[72px] font-semibold tracking-tight bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 text-transparent bg-clip-text">
            {t("hero.subtitle")}
          </h1>
        </div>

        <div className="flex items-center justify-center w-[220px] h-[220px]">
          <CubeHero />
        </div>
      </div>

      <div className="mt-20 bg-[#0a0a0a] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 max-w-6xl mx-auto">
        <div className="max-w-sm">
          <h2 className="text-[44px] md:text-[52px] text-white leading-none italic font-serif">
            {t("hero.name")}
          </h2>
          <p className="text-white/60 text-[15px] leading-[1.6] font-medium tracking-tight">
            {t("hero.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          <div>
            <h3 className="text-white/50 mb-4">{t("nav.more")}</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="block text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition"
                >
                  {t("nav.home")}
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="block text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition"
                >
                  {t("nav.projects")}
                </Link>
              </li>

              <li>
                <Link
                  href="/uses"
                  className="block text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition"
                >
                  {t("nav.uses")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/50 mb-4">{t("nav.about")}</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="block text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition"
                >
                  {t("nav.about")}
                </Link>
              </li>

              <li>
                <Link
                  href="/guestbook"
                  className="block text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition"
                >
                  {t("nav.guestbook")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/50 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="block text-white text-[15px] font-medium tracking-tight hover:text-white/70 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 pb-2 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 -mx-6 md:-mx-16 lg:-mx-24 px-6 md:px-16 lg:px-24">
        <p className="text-white/40 text-xs tracking-tight">
          © {new Date().getFullYear()} CRET. {t("footer.rights")}
        </p>

        <div className="flex items-center gap-5 text-white/60">
          {/* Email */}
          <a
            href="mailto:wenfeng110402@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="Email"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/110402wenfeng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="X (Twitter)"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <i className="ri-github-line text-lg"></i>
          </a>

          {/* Site Link */}
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="Website"
          >
            <i className="ri-link text-lg"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
