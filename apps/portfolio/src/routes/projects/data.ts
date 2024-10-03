import lwWebsiteImage from "@/assets/images/projects/lw-website.png";
import sxyaWebsiteImage from "@/assets/images/projects/sxya-website.png";
import vuWebsiteImage from "@/assets/images/projects/vu-website.png";
import yuehaxguPortfolioImage from "@/assets/images/projects/yuehaxgu-portfolio.png";
import zhamaoLogoImage from "@/assets/images/projects/zhamao-logo.png";
import type { ProjectCardProps } from "./ProjectCard";

const data: (ProjectCardProps & { featured?: boolean })[] = [
  {
    title: "My Portfolio (This Site)",
    description:
      "My own Portfolio site, which also serves as my testing ground for various new technologies. I regularly apply cutting edge technology to this project to make sure I stay up to date. The latest version, this one, uses the Modern.js framework, which is open-sourced by the team behind Tiktok, along with popular technologies such as Monorepo and Micro Frontend.",
    image:
      "https://api.microlink.io?url=https://www.sunxyw.me&screenshot=true&meta=false&embed=screenshot.url",
    links: [
      {
        href: "https://www.sunxyw.me",
        text: "Website",
      },
      {
        href: "https://github.com/sunxyw/project-evoa",
        text: "Source Code (GitHub)",
      },
    ],
    date: "Jun 2024",
    tags: [
      "Modern.js",
      "TailwindCSS",
      "Rspack",
      "Monorepo",
      "Micro Frontend",
      "Garfish",
    ],
    featured: true,
  },
  {
    title: "Portfolio of YueHaxgu",
    description:
      "A personal portfolio site build for YueHaxgu for free, also my first attempt at using PocketBase (Firebase OSS Alternative). Design provided by YueHaxgu, reproduce and tweak by me in TailwindCSS. Includes SSR, ISR, infinite waterfall, and other techniques.",
    image: yuehaxguPortfolioImage,
    links: [
      {
        href: "https://www.yuehaxgu.top",
        text: "Website",
      },
      {
        href: "https://www.figma.com/design/K0NAg2jjShVw6QWO6yBNqy/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99?node-id=7-44&t=iukzNwXTsCTpRWHJ-1",
        text: "Design (Figma)",
      },
    ],
    date: "May 2024",
    tags: ["TailwindCSS", "Next.js", "PocketBase"],
    featured: true,
  },
  {
    title: "Website of SXYA Community",
    description:
      "A project used to pass the time when I am bored. In addition to the standard business website functionality, it includes features such as game polling, activities logging, and also provides login functionality to synchronize with Discord community users, with the backend provided by Supabase. Modern technologies such as React Query, Trpc, etc. are used.",
    image: sxyaWebsiteImage,
    links: [
      {
        href: "https://www.sxya.org",
        text: "Website",
      },
      {
        href: "https://github.com/sxyalliance/new-vegas",
        text: "Source Code (GitHub)",
      },
    ],
    date: "Aug 2023",
    tags: [
      "Next.js",
      "Supabase",
      "Trpc",
      "Tanstack Query",
      "imgix",
      "TailwindCSS",
      "Sentry",
      "Clerk",
    ],
    featured: true,
  },
  {
    title: "Website of VoxelUtopia Community (WIP)",
    description:
      "A community portal site built with design prototypes provided by VoxelUtopia personnel. Developed using the Nuxt.js framework. I18n is expected to be added. Currently still in development.",
    image: vuWebsiteImage,
    links: [
      {
        href: "https://vuv.sunxyw.xyz",
        text: "Preview",
      },
    ],
    date: "Dec 2022",
    tags: ["Nuxt.js", "TailwindCSS", "Golang"],
  },
  {
    title: "Zhamao Framework",
    description:
      "A chatbot development framework written in PHP, featuring modular user code, annotation-based function registration. Optimized for chatbot message processing, providing session management and internal RPC mechanism. With Swoole and Workerman async libraries to support long-running. Supporting dependency injection, container isolation, multiple access points and other features. I have been one of the core contributors since v3.",
    image: zhamaoLogoImage,
    links: [
      {
        href: "https://framework.zhamao.xin",
        text: "Docs",
      },
      {
        href: "https://github.com/zhamao-robot/zhamao-framework",
        text: "Source Code (GitHub)",
      },
    ],
    date: "Jun 2021",
    tags: ["PHP", "Swoole", "Workerman", "QQBot", "go-cqhttp"],
    featured: true,
  },
  {
    title: "Website of LoongWork Team (Repealed)",
    description:
      "A trial run with Next.js that ended when the team disbanded. There have been several previous editions with a high degree of completion, but they have all been abandoned. The preview is for the latest development branch.",
    image: lwWebsiteImage,
    links: [
      {
        href: "https://www.loongwork.net",
        text: "Website",
      },
      {
        href: "https://github.com/sunxyw/nextg-front",
        text: "Source Code (GitHub)",
      },
    ],
    date: "Jul 2020 (Last Updated: Mar 2022)",
    tags: ["Next.js", "TailwindCSS"],
  },
  {
    title: "Basic E-Commerce (Stale)",
    description:
      "A hands-on Laravel e-commerce project with features such as shipping address, RBAC permissions, SKU support, third-parties payment api, order refunds, coupons, etc., applying concepts including delayed queuing, database transactions, and order integrity.",
    date: "Mar 2018",
  },
  {
    title: "API of the Forum project (Stale)",
    description:
      "An API backend based on the forum system, provides RESTFul API that interacts with the Vue frontend. Learned about OAuth and JWT. The project is a good practice for me to understand the separation of frontend and backend.",
    date: "Nov 2017",
  },
  {
    title: "Multi-Usergroup Forum System (Stale)",
    description:
      "A forum system built with Laravel 5.5, with features such as a multi-role user rights system (RBAC), administrator backend, registration CAPTCHA, image cropping, XSS defense, task scheduling, queuing, caching, event distribution, message notification, and more. It's the first project I did to get started with Laravel.",
    date: "Jul 2017",
  },
];

export default data;
