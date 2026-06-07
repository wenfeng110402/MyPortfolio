# 博客撰写指南

## 快速开始

1. 在 `data/markdown/` 新建 `.md` 文件（例如 `my-post.md` → `/blogs/my-post`）
2. 文件格式（可选 frontmatter）：
```markdown
---
title: 文章标题
---

# 标题

正文内容...
```
3. 保存后访问 http://localhost:3000/blogs/my-post

## 支持的 Markdown

- 标题、段落、列表、表格、代码块
- GitHub Flavored Markdown（任务列表等）

## 图片

```markdown
![描述](/images/example.png)
```
（把图片放到 `public/` 下）

## 故障排查

- **Post not found**: 检查文件在 `data/markdown/` 下，确认 dev 在运行（`npm run dev`）
- 不要在 slug 中使用空格或非 ASCII 字符
