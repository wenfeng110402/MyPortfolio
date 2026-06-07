export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      projects: "Projects",
      uses: "Uses",
      guestbook: "Guestbook",
      more: "More",
      devTools: "DevTools, AI & Socials",
      signWall: "Sign my wall",
    },
    
    // Hero Section
    hero: {
      title: "Let's create",
      subtitle: "something real.",
      description: "Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality.",
      name: "CRET",
    },
    
    // About Section
    about: {
      label: "A LITTLE ABOUT ME",
      title: "Nice to meet you.",
      intro: "I'm",
      name: "Cret",
      p1: "I'm a 15-year-old middle school student and a creator with 4 years of coding experience. Since I first touched Linux in 6th grade, I've been obsessed with building things from scratch — whether it's an open-source tool serving tens of thousands of users, or a hardware music player I can hold in my hand.",
      p2: "I'm a Hack Club member, active in the international teen developer community, received grants, and was featured on GitHub Education Newsletter. I believe the best way to learn is by building, and the fastest way to grow is alongside cooler people.",
      p3: "Currently learning iOS development and SwiftUI, aiming for the 2027 Apple Swift Student Challenge Distinguished Award.",
    },
    
    // Blog Section
    blog: {
      label: "THOUGHTS & IDEAS",
      title: "Latest Articles",
      readMore: "Read More",
    },
    
    // Blog Posts
    blogs: {
      "getting-started-with-nextjs": {
        title: "Getting Started with Next.js 16",
        date: "June 2026",
        content: "Next.js 16 brings exciting new features including improved Server Components, better routing, and enhanced performance optimizations. In this article, we'll explore how to leverage these features to build modern web applications.\n\n## Key Features\n\n- **App Router**: The new file-system based router provides better organization and nested layouts.\n- **Server Components**: Render components on the server for better performance and SEO.\n- **Streaming**: Progressive rendering allows faster page loads.\n\n## Getting Started\n\nTo start a new Next.js project:\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\nThis will set up a new project with all the latest features enabled by default.",
      },
    },
    
    // Projects Section
    projects: {
      label: "SELECTED WORKS",
      title: "Featured Projects",
      intro: "A collection of my recent work spanning open-source tools, hardware projects, and web applications.",
      viewAll: "View All Projects",
      items: [
        {
          name: "AppleMusic Downloader",
          href: "https://github.com/wenfeng110402/AppleMusic-Downloader",
          description: "A graphical Apple Music downloader built with Python. Features high-quality audio download (AAC 256kbps), HD music video support (up to 1080p), batch download for artist works, and highly customizable configuration options.",
          tags: ["Python", "PyQt", "FFmpeg", "GitHub Actions"],
        },
        {
          name: "HackPod",
          href: "https://github.com/wenfeng110402/HackPod",
          description: "A portable MP3 player inspired by iPod shuffle, built using ESP32 microcontroller. Plays MP3 songs from micro SD card with physical buttons for control. Features I2S audio output, LED status indicator, and battery monitoring.",
          tags: ["C++", "ESP32", "Arduino", "PCB Design"],
        },
        {
          name: "Authenticator",
          href: "https://github.com/wenfeng110402/Authenticator",
          description: "A polished CLI tool for managing and viewing TOTP codes. Features a modern Textual-based dashboard UI, secret management, live continuously updating TOTP codes display, and multiple export formats.",
          tags: ["Python", "Textual TUI", "TOTP", "Security"],
        },
        {
          name: "Portfolio Website",
          href: "https://github.com/wenfeng110402/My-Portfolio",
          description: "A modern portfolio website built with Next.js, React, and Tailwind CSS. Features 3D animations, bilingual support, and responsive design.",
          tags: ["Next.js", "React", "Tailwind", "Three.js"],
        },
      ],
    },
    
    // Stack Section
    stack: {
      label: "TECH STACK",
      title: "Skills & Technologies",
      description: "Technologies I work with daily to bring ideas to life.",
      categories: [
        {
          name: "Frontend Development",
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
        },
        {
          name: "Backend Development",
          skills: ["Node.js", "Python", "MongoDB", "Mongoose", "REST API", "GraphQL"],
        },
        {
          name: "Tools & Platforms",
          skills: ["Git", "GitHub", "Vercel", "Docker", "Linux", "VS Code"],
        },
        {
          name: "Hardware & IoT",
          skills: ["ESP32", "Arduino", "C++", "PCB Design", "3D Modeling", "I2S Audio"],
        },
      ],
    },
    
    // Behind Section
    behind: {
      label: "BEHIND THE CURTAINS",
      title: "Decoding logic",
      subtitle: "&& the lyrics",
      githubTitle: "Cret's Github",
      loading: "Loading...",
      totalContributions: "Total Contributions:",
      visitorsLabel: "VISITORS",
      leaveSignature: "Leave your",
      signature: "signature",
      letMeKnow: "Let me know you were here.",
      signGuestbook: "Sign Guestbook →",
      lastPlayed: "Last Played",
      playSpotify: "▶ Play on Spotify",
    },
    
    // Footer
    footer: {
      rights: "ALL RIGHTS RESERVED.",
    },
  },
  
  zh: {
    // Navbar
    nav: {
      home: "首页",
      about: "关于",
      blog: "博客",
      projects: "项目",
      uses: "工具",
      guestbook: "留言簿",
      more: "更多",
      devTools: "开发工具、AI & 社交",
      signWall: "留下你的留言",
    },
    
    // Hero Section
    hero: {
      title: "让我们一起创造",
      subtitle: "真实的东西。",
      description: "用每一行代码构建有意义的数字体验。打造生动的界面，解决真正的问题，将想法变为现实。",
      name: "CRET",
    },
    
    // About Section
    about: {
      label: "关于我",
      title: "很高兴认识你。",
      intro: "我是",
      name: "Cret",
      p1: "我是一名15岁的初中生，也是一名有着4年码龄的创造者。从六年级接触 Linux 开始，我就痴迷于从零搭建东西——不管是服务数万用户的开源工具，还是能拿在手里的硬件播放器。",
      p2: "我是 Hack Club 成员，活跃于国际青少年开发者社区，拿过 Grant，上过 GitHub Education Newsletter。我相信最好的学习就是动手做，最快成长的方式就是和更酷的人一起创造。",
      p3: "目前我正在学习 iOS 开发与 SwiftUI，全力冲刺 2027 Apple Swift Student Challenge 杰出奖。",
    },
    
    // Blog Section
    blog: {
      label: "想法与思考",
      title: "最新文章",
      readMore: "阅读更多",
    },
    
    // Blog Posts
    blogs: {
      "getting-started-with-nextjs": {
        title: "Next.js 16 入门指南",
        date: "2026年6月",
        content: "Next.js 16 带来了令人兴奋的新特性，包括改进的服务器组件、更好的路由和增强的性能优化。在本文中，我们将探讨如何利用这些特性来构建现代 Web 应用程序。\n\n## 主要特性\n\n- **App Router**：新的基于文件系统的路由器提供了更好的组织和嵌套布局。\n- **Server Components**：在服务器上渲染组件以获得更好的性能和 SEO。\n- **Streaming**：渐进式渲染允许更快的页面加载。\n\n## 快速开始\n\n要启动一个新的 Next.js 项目：\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n这将设置一个新项目，默认启用所有最新功能。",
      },
    },
    
    // Projects Section
    projects: {
      label: "精选作品",
      title: "重点项目",
      intro: "我最近的作品集，涵盖开源工具、硬件项目和 Web 应用。",
      viewAll: "查看所有项目",
      items: [
        {
          name: "AppleMusic Downloader",
          href: "https://github.com/wenfeng110402/AppleMusic-Downloader",
          description: "使用 Python 构建的图形化 Apple Music 下载器。支持高质量音频下载（AAC 256kbps）、高清音乐视频支持（最高 1080p）、批量下载艺术家作品和高度可定制的配置选项。",
          tags: ["Python", "PyQt", "FFmpeg", "GitHub Actions"],
        },
        {
          name: "HackPod",
          href: "https://github.com/wenfeng110402/HackPod",
          description: "受 iPod shuffle 启发的便携式 MP3 播放器，使用 ESP32 微控制器构建。从 micro SD 卡播放 MP3 歌曲，通过物理按钮控制。具有 I2S 音频输出、LED 状态指示器和电池监控功能。",
          tags: ["C++", "ESP32", "Arduino", "PCB Design"],
        },
        {
          name: "Authenticator",
          href: "https://github.com/wenfeng110402/Authenticator",
          description: "一个精致的 CLI 工具，用于管理和查看 TOTP 代码。具有基于 Textual 的现代仪表板 UI、密钥管理、实时持续更新的 TOTP 代码显示和多种导出格式。",
          tags: ["Python", "Textual TUI", "TOTP", "Security"],
        },
        {
          name: "Portfolio Website",
          href: "https://github.com/wenfeng110402/My-Portfolio",
          description: "使用 Next.js、React 和 Tailwind CSS 构建的现代作品集网站。具有 3D 动画、双语支持和响应式设计。",
          tags: ["Next.js", "React", "Tailwind", "Three.js"],
        },
      ],
    },
    
    // Stack Section
    stack: {
      label: "技术栈",
      title: "技能与技术",
      description: "我每天用来实现想法的技术。",
      categories: [
        {
          name: "前端开发",
          skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
        },
        {
          name: "后端开发",
          skills: ["Node.js", "Python", "MongoDB", "Mongoose", "REST API", "GraphQL"],
        },
        {
          name: "工具与平台",
          skills: ["Git", "GitHub", "Vercel", "Docker", "Linux", "VS Code"],
        },
        {
          name: "硬件与物联网",
          skills: ["ESP32", "Arduino", "C++", "PCB Design", "3D Modeling", "I2S Audio"],
        },
      ],
    },
    
    // Behind Section
    behind: {
      label: "幕后故事",
      title: "解码逻辑",
      subtitle: "与旋律",
      githubTitle: "Cret 的 GitHub",
      loading: "加载中...",
      totalContributions: "总贡献数：",
      visitorsLabel: "访客",
      leaveSignature: "留下你的",
      signature: "签名",
      letMeKnow: "让我知道你来过。",
      signGuestbook: "签署留言簿 →",
      lastPlayed: "最近播放",
      playSpotify: "▶ 在 Spotify 上播放",
    },
    
    // Footer
    footer: {
      rights: "保留所有权利。",
    },
  },
};