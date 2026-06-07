"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";

export default function Footer() {
  const [lang, setLang] = useState<"zh" | "en">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as "zh" | "en";
      return saved || "en";
    }
    return "en";
  });

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<"zh" | "en">) => {
      setLang(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-sm text-white/50">
            © 2026 Cret. {lang === "zh" ? "保留所有权利。" : "All rights reserved."}
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:wenfeng110402@icloud.com"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-white/60 hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/wenfeng110402"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-white/60 hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://x.com/110402wenfeng"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition text-white/60 hover:text-white"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}