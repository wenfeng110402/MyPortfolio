# My Portfolio

A modern personal portfolio website built with Next.js, featuring 3D animations, bilingual support (English/Chinese), and a blog system.

## Features

- **Modern UI**: Clean, minimalist design with smooth animations using Framer Motion
- **3D Graphics**: Interactive 3D elements powered by Three.js and React Three Fiber
- **Bilingual Support**: Toggle between English and Chinese with persistent language preference
- **Blog System**: Dynamic blog posts with markdown-style content rendering
- **Responsive Design**: Fully responsive across all devices
- **Guestbook**: Interactive message board for visitors
- **Project Showcase**: Featured projects with detailed descriptions

## Tech Stack

- **Framework**: Next.js 16.2.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, Three.js, React Three Fiber
- **Icons**: Lucide React, React Icons
- **Database**: MongoDB with Mongoose (for guestbook)
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd My-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── about/              # About page
├── blogs/              # Blog pages
│   ├── [slug]/         # Dynamic blog post pages
│   │   ├── page.tsx    # Server component with generateStaticParams
│   │   └── BlogContent.tsx  # Client component for rendering
│   └── page.tsx        # Blog listing page
├── components/         # Reusable UI components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   └── ...             # Other components
├── data/               # Static data
│   └── translations.ts # Bilingual translations and blog content
├── guestbook/          # Guestbook page
├── projects/           # Projects page
├── uses/               # Uses/tools page
└── page.tsx            # Home page
```

## Adding Blog Posts - Complete Guide

To add a new blog post, follow these steps:

### Step 1: Add Blog Content to translations.ts

Open `app/data/translations.ts` and add your blog post to both `en.blogs` and `zh.blogs` sections.

**Example:**

```typescript
// In the 'en' section
blogs: {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js 16",
    date: "June 2026",
    content: "Next.js 16 brings exciting new features...\n\n## Key Features\n\n- **App Router**: The new file-system based router...\n- **Server Components**: Render components on the server...",
  },
  // Add your new blog post here
  "your-new-post-slug": {
    title: "Your New Post Title",
    date: "Month Year",
    content: "Your post content goes here. Use \\n\\n for paragraphs.\n\n## Section Title\n\nWrite your content here.\n\n- **Point 1**: Description\n- **Point 2**: Description",
  },
},

// In the 'zh' section
blogs: {
  "getting-started-with-nextjs": {
    title: "Next.js 16 入门指南",
    date: "2026年6月",
    content: "Next.js 16 带来了令人兴奋的新特性...\n\n## 主要特性\n\n- **App Router**：新的基于文件系统的路由器...\n- **Server Components**：在服务器上渲染组件...",
  },
  // Add your new blog post here (same slug as English)
  "your-new-post-slug": {
    title: "你的新文章标题",
    date: "年月",
    content: "你的文章内容。使用 \\n\\n 分隔段落。\n\n## 章节标题\n\n在这里写内容。\n\n- **要点1**：描述\n- **要点2**：描述",
  },
},
```

**Important Notes:**
- The slug (e.g., `"your-new-post-slug"`) must be identical in both languages
- Use `\n\n` to create paragraph breaks
- Use `## ` for section headings
- Use `- **Bold Text**: Description` for bullet points
- Use triple backticks for code blocks (simplified support)

### Step 2: Add Blog to the Listing Page

Open `app/blogs/page.tsx` and add your new post to the `blogs` array in both language sections.

**Example:**

```typescript
const blogs: BlogPost[] = lang === "zh" ? [
  {
    slug: "getting-started-with-nextjs",
    title: "Next.js 16 入门指南",
    date: "2026年6月",
    desc: "探索 Next.js 16 的新特性，包括改进的服务器组件、更好的路由和性能优化。",
  },
  // Add your new blog post here
  {
    slug: "your-new-post-slug",
    title: "你的新文章标题",
    date: "年月",
    desc: "文章的简短描述（50-100字）",
  },
] : [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 16",
    date: "June 2026",
    desc: "Explore the new features of Next.js 16, including improved Server Components, better routing, and performance optimizations.",
  },
  // Add your new blog post here
  {
    slug: "your-new-post-slug",
    title: "Your New Post Title",
    date: "Month Year",
    desc: "A brief description of your post (50-100 words)",
  },
];
```

### Step 3: Test Your New Post

1. Save all files
2. If running `npm run dev`, the changes will appear automatically
3. Visit `http://localhost:3000/blogs` to see your post in the list
4. Click on the post to view the full article
5. Test language switching to ensure both versions work

### Step 4: Build for Production

When ready to deploy:

```bash
npm run build
```

The `generateStaticParams()` function will automatically generate static pages for all your blog posts.

## Content Formatting Guide

### Paragraphs
Use `\n\n` to separate paragraphs:
```
"First paragraph.\n\nSecond paragraph."
```

### Headings
Use `## ` for section headings:
```
"## Introduction\n\nYour content here."
```

### Bullet Points
Use `- **Bold**: Description`:
```
"- **Feature 1**: Description of feature 1\n- **Feature 2**: Description of feature 2"
```

### Code Blocks
Use triple backticks (simplified support):
```
"Here's some code:\n\n```\nconst x = 10;\nconsole.log(x);\n```"
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy

### Cloudflare Pages

For static export deployment:

1. Build the project:
```bash
npm run build
```

2. Configure in Cloudflare Dashboard:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `out`

## Environment Variables

Create a `.env.local` file for sensitive configuration:

```env
# MongoDB (for guestbook)
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Contact

- Email: wenfeng110402@icloud.com
- X (Twitter): [@110402wenfeng](https://x.com/110402wenfeng)
- GitHub: [wenfeng110402](https://github.com/wenfeng110402)

## License

All rights reserved. © 2026 Cret