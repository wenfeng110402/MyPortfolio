import Link from "next/link";
import fs from "fs";
import path from "path";
import { parseMarkdown } from "../../../lib/markdown";

type Props = { params: { slug: string } };

// Required for static export mode: enumerate all available slugs
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "data", "markdown");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const dir = path.join(process.cwd(), "data", "markdown");
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return (
      <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p className="text-white/60 mb-6">The post you are looking for does not exist.</p>
          <Link href="/blogs" className="inline-block rounded-full bg-white px-6 py-3 text-black">Back to blogs</Link>
        </div>
      </main>
    );
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { html, data } = await parseMarkdown(raw);

  let title = (data?.title as string) || "Untitled";
  if (!data?.title) {
    const h1 = raw.split(/\r?\n/).find((l) => l.trim().startsWith("# "));
    if (h1) title = h1.replace(/^#\s+/, "").trim();
  }

  const stat = fs.statSync(filePath);
  const date = stat.mtime.toISOString().slice(0, 10);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xs text-white/40 mb-6">{date}</p>
        <article className="prose prose-invert text-white/90" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="mt-8">
          <Link href="/blogs" className="inline-block rounded-full bg-white px-6 py-3 text-black">Back to blogs</Link>
        </div>
      </div>
    </main>
  );
}
