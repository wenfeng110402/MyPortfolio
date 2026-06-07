import Link from "next/link";
import Navbar from "../components/Navbar";
import fs from "fs";
import path from "path";
import { parseMarkdown } from "../../lib/markdown";

type PostMeta = { slug: string; title: string; date: string; excerpt: string };

async function readPosts(): Promise<PostMeta[]> {
  const dir = path.join(process.cwd(), "data", "markdown");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts: PostMeta[] = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { html, data } = await parseMarkdown(raw);

    const excerptMatch = html.match(/<p>(.*?)<\/p>/);
    const excerpt = excerptMatch ? excerptMatch[1] : "";

    const stat = fs.statSync(path.join(dir, file));
    const date = stat.mtime.toISOString().slice(0, 10);

    posts.push({ slug, title: (data?.title as string) || slug, date, excerpt });
  }

  return posts;
}

export default async function BlogsIndex() {
  const posts = await readPosts();

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-16 py-20">
        <Navbar />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blogs</h1>

        <ul className="space-y-6">
          {posts.map((p) => (
            <li key={p.slug} className="border border-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blogs/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="text-white/60">{p.excerpt}</p>
              <p className="text-xs text-white/40 mt-3">{p.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
