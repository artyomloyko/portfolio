# Artyom Loiko Blog ⚡️

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://artyom.work)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat&logo=next.js)](https://nextjs.org)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

My personal website showcasing my projects, blog posts, and professional experience. Built with modern web technologies and best practices.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for blog posts
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) & [Speed Insights](https://vercel.com/docs/speed-insights)
- **Code Quality**: ESLint, Prettier, Husky

## 📂 Project Structure

```
/src
  /app                 # Next.js App Router pages
    /about             # About page
    /api               # API routes
    /blog              # Blog pages and posts
    /projects          # Projects page
  /components          # Reusable UI components
  /constants           # Constant values and metadata
/public                # Static assets
```

## 🔍 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Blog**: MDX-powered blog with code syntax highlighting
- **Command Palette**: Quick navigation with keyboard shortcuts (⌘+K)
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **RSS Feed**: Automatically generated feed for blog posts
- **Performance**: Optimized for Core Web Vitals
- **Animations**: Smooth page transitions and UI interactions

## 🛠️ Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [bun](https://bun.sh/) (recommended)

### Installation

1. Clone this repo

```bash
git clone git@github.com:artyomloyko/portfolio.git
```

2. Change directory

```bash
cd portfolio
```

3. Install dependencies

```bash
bun install
# or
npm install
# or
yarn install
```

4. Create a `.env.local` file following the `.env.example`

```bash
cp .env.example .env.local
```

5. Add your environment variables to `.env.local`

```txt
NEXT_PUBLIC_VARIABLE=<Your env>
# Add any other required environment variables
```

6. Run the development server

```bash
bun run dev
# or
npm run dev
# or
yarn dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Adding Content

### Blog Posts

Create a new MDX file in `src/app/blog/posts` with the following frontmatter:

```mdx
---
title: Your Post Title
publishedAt: 2025-03-01
summary: A brief summary of your post
draft: false
---

Your content here...
```

## 🚢 Deployment

This project is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Import the repository in Vercel
3. Configure environment variables if needed
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For any questions or feedback, feel free to reach out:

- Website: [artyom.work](https://artyom.work)
- Email: [loiko.artyom@gmail.com](mailto:loiko.artyom@gmail.com)
- GitHub: [@artyomloyko](https://github.com/artyomloyko)
- LinkedIn: [Artyom Loiko](https://www.linkedin.com/in/loiko-artyom)
