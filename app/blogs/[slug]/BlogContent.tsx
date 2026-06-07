"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogContent({ 
  params, 
  enContent, 
  zhContent 
}: { 
  params: { slug: string };
  enContent: { title: string; date: string; content: string };
  zhContent: { title: string; date: string; content: string };
}) {
  const [lang, setLang] = useState<"zh" | "en">("en");
  const content = lang === "zh" ? zhContent : enContent;

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "zh" | "en";
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(saved);
    }

    const handleLanguageChange = (event: CustomEvent<"zh" | "en">) => {
      setLang(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange as EventListener);
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="flex-grow pt-32 px-6 md:px-20 pb-32">
        <article className="max-w-[800px] mx-auto">
          {/* Header */}
          <header className="mb-12">
            <p className="text-xs text-gray-500 tracking-widest mb-4">
              {content.date}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {content.title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {content.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("- **")) {
                // Handle list items
                const items = paragraph.split("\n").filter(line => line.startsWith("- "));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {items.map((item, i) => {
                      const text = item.replace("- **", "").replace("**:", "");
                      const [bold, rest] = text.split("** ");
                      return (
                        <li key={i}>
                          <strong>{bold}</strong>{rest && `: ${rest}`}
                        </li>
                      );
                    })}
                  </ul>
                );
              }
              if (paragraph.startsWith("```")) {
                // Handle code blocks (simplified)
                const codeLines = paragraph.split("\n").slice(1, -1);
                return (
                  <pre key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 my-4 overflow-x-auto">
                    <code className="text-sm text-white/90">
                      {codeLines.join("\n")}
                    </code>
                  </pre>
                );
              }
              return (
                <p key={index} className="text-white/80 leading-relaxed my-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}