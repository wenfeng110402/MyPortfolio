"use client";

import { useState } from "react";
import HeroSection2 from "../components/HeroSection2";

type Entry = {
  name: string;
  message: string;
  createdAt: Date;
  avatarUrl?: string;
};

const initialEntries: Entry[] = [
  {
    name: "Visitor",
    message: "Loved exploring your work — keep building!",
    createdAt: new Date(),
  },
];

export default function GuestbookPage() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;

    setEntries((current) => [
      {
        name: name.trim() || "Anonymous",
        message: message.trim(),
        createdAt: new Date(),
        avatarUrl: undefined,
      },
      ...current,
    ]);
    setName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
            LEAVE YOUR SIGNATURE
          </p>

          <h1 className="text-[80px] md:text-[140px] font-bold leading-none">
            GUEST
          </h1>

          <h2 className="text-[60px] md:text-[100px] font-serif italic text-white/60 -mt-6">
            book
          </h2>
        </div>

        <div className="bg-[#0b0b0b] border border-white/10 rounded-[28px] px-8 py-8 w-full max-w-md ml-auto">
          <h3 className="text-[26px] leading-8 font-semibold mb-4">
            Leave your{" "}
            <span className="font-serif italic text-white/70">Signature!</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-white/50">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="text-xs text-white/50">Message *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Say hello..."
                className="w-full mt-2 p-3 bg-white/5 border border-white/10 rounded-xl outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-linear-to-r from-gray-600 via-gray-400 to-gray-700 text-white text-sm hover:scale-[1.02] transition"
            >
              Sign Guestbook →
            </button>
          </form>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-center text-white/40 text-sm tracking-widest mb-10">
          RECENT SIGNATURES
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {entries.map((entry, index) => (
            <div
              key={`${entry.name}-${entry.createdAt.toISOString()}-${index}`}
              className="relative bg-[#0b0b0b] border border-white/10 rounded-2xl p-5 transition hover:bg-white/5 hover:border-white/20"
            >
              <div className="absolute top-4 right-4 text-white/5 text-5xl font-serif">
                “
              </div>

              <div className="flex items-center gap-3 mb-3">
                {entry.avatarUrl ? (
                  <img
                    src={entry.avatarUrl}
                    alt={entry.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : null}

                <div>
                  <p className="text-sm font-semibold">{entry.name}</p>
                  <p className="text-[11px] text-white/40">
                    {entry.createdAt.toDateString().slice(4, 10)}
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed">
                {entry.message}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-40">
        <HeroSection2 />
      </div>
    </div>
  );
}
