"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";
import TopLeft from "./components/TopLeft";
import Showcase from "./Showcase";
import SkillsSection from "./components/SkillsSection";
import Ticker from "./components/Ticker";
import HeroSection from "./components/HeroSection";
import BehindSection from "./components/BehindSection";
import HeroSection2 from "./components/HeroSection2";
import PremiumCube from "./components/PremiumCube";
import { useLanguage } from "./hooks/useLanguage";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
});

export default function Home() {
  const { t } = useLanguage();
  const text = "CRET";
  const [activeTab, setActiveTab] = useState("Motion");
  const githubUsername = "wenfeng110402";

  return (
    <>
      <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        <TopLeft />
        <Navbar />

        <div className="max-w-4xl text-center z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-sm tracking-widest text-gray-400 mb-6"
          >
            CREATIVE DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[90px] md:text-[150px] font-extrabold tracking-tight leading-none text-center"
          >
            {text}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 text-3xl md:text-5xl font-semibold"
          >
            Crafting digital{" "}
            <span className={`${playfair.className} text-gray-400`}>
              experiences
            </span>{" "}
            that matter
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 text-gray-400 max-w-2xl mx-auto"
          >
            I build products from scratch, focusing on clean systems, fast
            performance, and experiences that feel effortless to use.
          </motion.p>
        </div>

        <div className="absolute bottom-6 left-6 z-50">
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-lg">📍</span>

            <div className="flex flex-col leading-tight">
              <span className="text-white text-[12px] uppercase tracking-[0.15em]">
                Based online,
              </span>
              <span className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
                China
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-50 text-center">
          <div className="flex justify-center mb-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-blue-500"
            >
              <path
                d="M12 3L3 8L12 13L21 8L12 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="leading-tight">
            <p className="text-white text-[12px] uppercase tracking-[0.15em]">
              FULL STACK DEV,
            </p>
            <p className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
              & DESIGNER
            </p>
          </div>
        </div>
      </main>

      <div className="relative">
        <section className="bg-black py-16 w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 h-[520px] bg-white/[0.03] border border-white/10 rounded-4xl p-6 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <h2 className="text-[26px] font-semibold">
                Cret{" "}
                <span className={`${playfair.className} italic text-gray-400`}>
                  .uk
                </span>
              </h2>

              <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest">
                Full Stack · Open Source
              </p>
            </div>

            <div className="flex justify-center items-center h-[220px] mt-2">
              <PremiumCube containerSize={220} />
            </div>

            {/* Social Icons - Only Email, GitHub, X */}
            <div className="flex justify-center gap-6 text-gray-400">
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

              {/* GitHub */}
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                title="GitHub"
              >
                <svg width="18" height="18" fill="currentColor">
                  <path d="M9 0C4 0 0 4 0 9c0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.2-3-1.2-.4-1-.9-1.3-.9-1.3-.8-.5 0-.5 0-.5.9.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4-1-4-4.4 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.6 1 1.5 1 2.5 0 3.4-2 4.2-4 4.4.3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5C15.4 16.4 18 13 18 9c0-5-4-9-9-9z" />
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 h-[520px] relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

            <div className="relative z-10 p-12 flex flex-col h-full justify-start">
              <div className="flex justify-between text-xs text-gray-500 tracking-widest mb-10">
                <span>DETAIL-DRIVEN UI</span>
                <span>PHILOSOPHY ✦</span>
              </div>

              <div className="grid grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-4xl md:text-[42px] font-semibold leading-tight">
                    Interfaces <br />
                    <span
                      className={`${playfair.className} italic text-gray-400 text-[28px] md:text-[32px]`}
                    >
                      you can feel.
                    </span>
                  </h2>

                  <p className="mt-5 text-gray-400 text-[13px] leading-relaxed">
                    I design experiences that feel organic, responsive, and
                    purposeful.
                  </p>
                </div>

                <div className="text-right">
                  <div className="flex flex-wrap justify-end gap-1.5 mb-2">
                    {["Motion", "Type", "Feedback", "Craft"].map((tab) => (
                      <span
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-2 py-[2px] text-[10px] rounded-full border cursor-pointer transition ${
                          activeTab === tab
                            ? "border-purple-500 text-purple-400"
                            : "border-white/10 text-gray-300 hover:border-white/30"
                        }`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  <p className="text-white text-xs font-medium">
                    {activeTab === "Motion" && "Micro-interactions"}
                    {activeTab === "Type" && "Typography"}
                    {activeTab === "Feedback" && "Responsiveness"}
                    {activeTab === "Craft" && "Attention to detail"}
                  </p>

                  <p className="mt-3 text-gray-400 text-xs max-w-[260px] leading-relaxed">
                    {activeTab === "Motion" &&
                      "Subtle movement that confirms intent — never distracting."}

                    {activeTab === "Type" &&
                      "Clean hierarchy and rhythm for effortless scanning."}

                    {activeTab === "Feedback" &&
                      "Every hover, click, and focus gets a crisp response."}

                    {activeTab === "Craft" &&
                      "Polish lives in the edges: spacing, timing, and states."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-1 h-[520px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

            <div className="flex justify-between">
              <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="flex items-center gap-2 text-xs px-3 py-1 border border-white/10 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Available
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold leading-tight">
                LET&apos;S BUILD <br />
                SOMETHING <br />
                <span className={`${playfair.className} italic text-gray-400`}>
                  that works.
                </span>
              </h2>
            </div>

            <a
              href="mailto:wenfeng110402@icloud.com"
              className="w-full py-2.5 px-5 rounded-full relative overflow-hidden bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white text-sm font-semibold tracking-[0.12em] border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(255,255,255,0.06)] hover:from-gray-600 hover:via-gray-400 hover:to-gray-700 active:scale-[0.98] block text-center"
            >
              CONNECT NOW ↗
            </a>
          </motion.div>
        </section>

        <div className="">
          <Showcase />
          <SkillsSection />
          <Ticker />
          <HeroSection />
          <BehindSection />

          {/* Project Stats Section - Replaced Heatmap */}
          <section className="bg-black text-white py-24 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 text-center">
                <p className="text-xs tracking-[0.3em] text-white/60 mb-4">
                  PROJECT STATISTICS
                </p>
                <h2 className="text-[40px] md:text-[64px] font-semibold">
                  Open Source{" "}
                  <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
                    Impact
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* AppleMusic Downloader */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.05] transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                      <svg width="20" height="20" fill="currentColor" className="text-pink-400">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">AppleMusic DL</h3>
                      <p className="text-xs text-gray-500">Python · GUI</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Stars</span>
                      <span className="text-white font-medium">252+</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Forks</span>
                      <span className="text-white font-medium">17</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Users</span>
                      <span className="text-white font-medium">10k+</span>
                    </div>
                  </div>
                </div>

                {/* HackPod */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.05] transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <svg width="20" height="20" fill="currentColor" className="text-orange-400">
                        <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">HackPod</h3>
                      <p className="text-xs text-gray-500">C++ · ESP32</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Hardware</span>
                      <span className="text-white font-medium">Custom PCB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Features</span>
                      <span className="text-white font-medium">I2S Audio</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Design</span>
                      <span className="text-white font-medium">3D Printed</span>
                    </div>
                  </div>
                </div>

                {/* Authenticator */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.05] transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg width="20" height="20" fill="currentColor" className="text-blue-400">
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Authenticator</h3>
                      <p className="text-xs text-gray-500">Python · CLI</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Package</span>
                      <span className="text-white font-medium">PyPI</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Interface</span>
                      <span className="text-white font-medium">Textual TUI</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Security</span>
                      <span className="text-white font-medium">TOTP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <HeroSection2 />
        </div>
      </div>
    </>
  );
}
