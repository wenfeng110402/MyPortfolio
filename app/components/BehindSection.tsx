"use client";

import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSpotify } from "react-icons/fa";
import { ActivityCalendar } from "react-activity-calendar";
import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function BehindSection() {
  const router = useRouter();
  const { t } = useLanguage();
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub contributions using GitHub API
    fetch("https://github-contributions-api.jogruber.de/v4/wenfeng110402?y=last")
      .then((res) => res.json())
      .then((data) => {
        if (data.contributions) {
          setContributions(data.contributions);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch contributions:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-16">

      {/* HEADING */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
          {t("behind.label")}
        </p>

        <h2 className="text-[42px] md:text-[64px] font-semibold leading-tight">
          {t("behind.title")} <br />
          <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
            {t("behind.subtitle")}
          </span>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* 🔥 LEFT CARD (GITHUB) */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition">

          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("behind.githubTitle")}
            </h3>

            {/* GitHub Contribution Heatmap */}
            <div className="mb-4">
              {loading ? (
                <div className="h-32 flex items-center justify-center text-white/40 text-sm">
                  {t("behind.loading")}
                </div>
              ) : (
                <ActivityCalendar
                  data={contributions}
                  theme={{
                    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                  }}
                  colorScheme="dark"
                  blockSize={10}
                  blockMargin={3}
                  fontSize={10}
                  showWeekdayLabels={false}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              )}
            </div>

            <p className="text-xs text-white/50 mb-2">
              {t("behind.totalContributions")} {contributions.reduce((sum, day) => sum + day.count, 0)}
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-white/60 text-lg">
            <a
              href="https://github.com/wenfeng110402"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* 🔥 CENTER CARD */}
        <div className="relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden hover:border-white/20 transition">

          {/* glow */}
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 blur-3xl pointer-events-none" />

          <div>
            <p className="text-xs text-white/50 tracking-widest mb-4">
              {t("behind.visitorsLabel")}
            </p>

            <h3 className="text-3xl font-semibold leading-tight">
              {t("behind.leaveSignature")}{" "}
              <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
                {t("behind.signature")}
              </span>
            </h3>

            <p className="text-white/60 mt-4 text-sm">
              {t("behind.letMeKnow")}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">

            {/* avatars */}
            <div className="flex -space-x-3">
              <img src="/guestbook1.jpg" className="w-8 h-8 rounded-full border border-black" />
              <img src="/guestbook2.jpg" className="w-8 h-8 rounded-full border border-black" />
              <img src="/guestbook3.jpg" className="w-8 h-8 rounded-full border border-black" />
            </div>

            {/* BUTTON */}
            

<button
  onClick={() => router.push("/guestbook")}
  className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition shadow-[0_0_20px_rgba(255,140,0,0.3)]"
>
  {t("behind.signGuestbook")}
</button>

          </div>
        </div>

        {/* 🔥 RIGHT CARD (SPOTIFY CLICKABLE) */}
        <a
          href="https://open.spotify.com/track/3hEfpBHxgieRLz4t3kLNEg"
          target="_blank"
          className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition group"
        >

          {/* background image */}
          <img
            src="/aboutyou.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition"
          />

          <div className="relative p-6 backdrop-md">

            <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    className="w-4 h-4 fill-green-500"
  >
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 
    248-248S385 8 248 8zm100.8 365.6c-4 6.6-12.6 8.6-19.2 
    4.6-52.8-32.2-119.4-39.5-198-21.7-7.6 1.7-15.2-3-16.9-10.6-1.7-7.6 
    3-15.2 10.6-16.9 85.4-19.3 158.4-11.2 219.5 
    25.9 6.6 4 8.6 12.6 4 18.7zm27.4-61.1c-5 8.2-15.8 
    10.8-24 5.8-60.4-37.1-152.4-47.9-223.8-26.2-9.2 
    2.8-18.9-2.4-21.7-11.6-2.8-9.2 2.4-18.9 
    11.6-21.7 80.7-24.5 181-12.6 254.7 
    32.3 8.2 5 10.8 15.8 5.8 21.4zm2.4-63.5c-72.3-43-191.6-47-260.6-26.2-11 
    3.3-22.7-2.9-26-13.9-3.3-11 2.9-22.7 
    13.9-26 79.3-23.8 210.8-19.2 294.6 
    30.1 10.1 6 13.4 19.1 7.4 29.2-6 10.1-19.1 
    13.4-29.3 6.8z"/>
  </svg>
  <span>{t("behind.lastPlayed")}</span>
</div>

            <h3 className="text-lg font-semibold">
              About You - From &quot;The 1975&quot;
            </h3>

            <p className="text-xs text-white/50 mt-2">
              The 1975 • Album
            </p>

            <p className="text-s text-green-400 mt-3">
              {t("behind.playSpotify")}
            </p>

          </div>
        </a>

      </div>
    </section>
  );
}
