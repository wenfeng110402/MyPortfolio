"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";


export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-black text-white px-6 md:px-15 pt-10 pb-20">

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-15 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* SMALL LABEL */}
          <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-500">
            {t("about.label")}
          </p>

          {/* HEADING */}
          <h2 className="text-[56px] md:text-[48px] font-semibold leading-[1.05] tracking-tight">
            {t("about.title")}
            <br />
            {t("about.intro")}{" "}
            <span className="italic bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 text-transparent bg-clip-text">
              {t("about.name")}
            </span>
          </h2>

          {/* TEXT */}
          <div className="space-y-6 max-w-xl">
            <p className="text-gray-400 text-[14px] leading-relaxed">
              {t("about.p1")}
            </p>

            <p className="text-gray-400 text-[14px] leading-relaxed">
              {t("about.p2")}
            </p>

            <p className="text-gray-400 text-[14px] leading-relaxed">
              {t("about.p3")}
            </p>
          </div>

         {/* SOCIAL + BUTTON */}
<div className="pt-4 flex flex-col gap-6">

  {/* CONTACT INFO */}
  <div className="flex flex-col gap-3">
    {/* Email */}
    <a
      href="mailto:wenfeng110402@icloud.com"
      className="flex items-center gap-3 text-gray-400 hover:text-white transition group"
    >
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
      <span className="text-sm">wenfeng110402@icloud.com</span>
    </a>

    {/* X / Twitter Button */}
    <a
      href="https://x.com/110402wenfeng"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition"
    >
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      <span>Follow on X</span>
    </a>
  </div>

  {/* GITHUB ICON */}
  <div className="flex justify-start gap-6 text-gray-400">
    <a
      href="https://github.com/wenfeng110402"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <svg width="18" height="18" fill="currentColor">
        <path d="M9 0C4 0 0 4 0 9c0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.2-3-1.2-.4-1-.9-1.3-.9-1.3-.8-.5 0-.5 0-.5.9.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4-1-4-4.4 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.6 1 1.5 1 2.5 0 3.4-2 4.2-4 4.4.3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5C15.4 16.4 18 13 18 9c0-5-4-9-9-9z" />
      </svg>
    </a>
  </div>

</div>
        </motion.div>

        {/* RIGHT SIDE - REMOVED IMAGESTACK */}

      </div>
    </section>
  );
}
