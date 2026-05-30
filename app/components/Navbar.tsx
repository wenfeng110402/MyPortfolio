"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Monitor, Book, Globe } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [showMore, setShowMore] = useState(false);
  // Always initialize with "en" to match server rendering
  // Language will be updated from localStorage after mount
  const [lang, setLang] = useState<"zh" | "en">("en");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Read language from localStorage after component mounts
    // This ensures SSR and initial CSR match (hydration fix)
    const saved = localStorage.getItem("lang") as "zh" | "en";
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    const handleClick = () => setShowMore(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }));
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "zh" ? "en" : "zh"));
  };

  const openMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowMore(true);
  };

  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMore(false);
    }, 180);
  };

  const navItems = [
    { name: lang === "zh" ? "首页" : "Home", path: "/" },
    { name: lang === "zh" ? "关于" : "About", path: "/about" },
    { name: lang === "zh" ? "项目" : "Projects", path: "/projects" },
  ];

  const handleNavigation = (path: string) => {
    if (pathname === path) return;
    router.push(path);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        <div className="flex items-center gap-2 text-sm relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="relative px-3 py-1 rounded-full overflow-hidden group"
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-full border border-white/60" />
                )}

                <span
                  className={`relative z-10 transition ${
                    isActive ? "text-black" : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* Language Toggle Button */}
          <button
            onClick={toggleLang}
            className="px-3 py-1 rounded-full text-xs bg-white/10 hover:bg-white/20 transition text-gray-300 flex items-center gap-1.5"
            title={lang === "zh" ? "Switch to English" : "切换到中文"}
          >
            <Globe size={14} />
            <span>{lang === "zh" ? "EN" : "中文"}</span>
          </button>

          <button
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            className="px-3 py-1 rounded-full text-xs bg-white/10 hover:bg-white/20 transition text-gray-300"
          >
            More ▾
          </button>
        </div>
      </div>

      {showMore && (
        <div
          onMouseEnter={openMenu}
          onMouseLeave={closeMenu}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-14 right-0 w-[300px] bg-[#0b0b0b] border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-2 gap-3">
            <Link href="/uses">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Monitor size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">{lang === "zh" ? "工具" : "Uses"}</p>
                  <p className="text-[10px] text-gray-400">
                    {lang === "zh" ? "开发工具、AI & 社交" : "DevTools, AI & Socials"}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/guestbook">
              <div className="flex flex-col items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Book size={18} className="text-white/80" />
                </div>
                <div>
                  <p className="text-xs font-medium">{lang === "zh" ? "留言簿" : "Guestbook"}</p>
                  <p className="text-[10px] text-gray-400">{lang === "zh" ? "留下你的留言" : "Sign my wall"}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}