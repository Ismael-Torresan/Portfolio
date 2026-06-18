import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiLinux,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const profile = {
  name: "Ismael Torresan",
  firstName: "Ismael",
  role: "Software Engineer",
  tagline: "Backend-focused full-stack engineer building reliable web products.",
  location: "Brazil · Remote",
  email: "ismaeltorresan1@gmail.com",
  altEmail: "ismael_torresan@live.com",
  github: "https://github.com/Ismael-Torresan",
  linkedin: "https://www.linkedin.com/in/Ismael-Torresan/",
  resume: "",
  available: true,
};

export const about = {
  intro:
    "I'm a software engineer who likes turning fuzzy product ideas into systems that hold up in production. I started in backend with Python and Django, picked up the frontend along the way, and today I work mostly across the backend of a SaaS product — APIs, data models, integrations, and the unglamorous plumbing that makes a product feel fast and trustworthy.",
  paragraphs: [
    "My career started in 2022 at Concordia Labs, building backends with Django — apps, data models, and APIs — and soon moved into the frontend with JavaScript, React and Sass. Tools like Poetry, Docker and Postgres became part of my daily workflow.",
    "Since 2024 I've been a Software Engineer at TestBox, working primarily on the backend of the platform. I care about clean data models, well-shaped APIs, and code that's easy for the next person to reason about.",
  ],
  highlights: [
    { value: "4+", label: "Years building software" },
    { value: "2+", label: "Years at TestBox" },
    { value: "∞", label: "Bugs turned into features" },
  ],
};

export type Skill = { name: string; icon: IconType };

export const skills: { group: string; items: Skill[] }[] = [
  {
    group: "Backend",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Sass", icon: SiSass },
    ],
  },
  {
    group: "Tooling",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  description: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "TestBox",
    companyUrl: "https://www.testbox.com/",
    period: "2024 — Present",
    current: true,
    description:
      "Mid-level engineer working mostly on the backend of TestBox's platform — building and maintaining APIs, data models and integrations, and shipping features end-to-end across the stack.",
    stack: ["Python", "Django", "PostgreSQL", "TypeScript", "React"],
  },
  {
    role: "Full Stack Developer",
    company: "Manp Tecnologia",
    period: "2023 — 2024",
    description:
      "Built Agronix Web Service — a platform to manage a proprietary Android device and its app, with app version control, over-the-air updates and real-time device control over WebSockets. Worked across the web stack (Next.js, Node.js) and the Android mobile app.",
    stack: ["Next.js", "Node.js", "Android", "WebSockets"],
  },
  {
    role: "Full Stack Developer",
    company: "Dip System",
    period: "2023 — 2024",
    description:
      "Built Hapolo, a vehicle GPS tracking platform — real-time location tracking and fleet monitoring on the web, with a Django backend and JavaScript frontend.",
    stack: ["Django", "Python", "JavaScript"],
  },
  {
    role: "Full Stack Developer",
    company: "Concordia Labs",
    period: "2022 — 2023",
    description:
      "Started in backend with Django — building apps, data models and APIs — then moved into the frontend with JavaScript, React and Sass. Worked with Poetry, Pip and Docker day to day.",
    stack: ["Django", "Python", "React", "JavaScript", "Sass"],
  },
];

export type Project = {
  name: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    name: "TestBox",
    title: "Interactive Demo Platform",
    description:
      "TestBox builds demo agents that generate realistic data and auto-maintain product environments for testing, live demos and sandboxes — so B2B SaaS teams can sell with their actual product instead of faked screenshots. I work primarily on the backend: APIs, data models and integrations.",
    image: "/images/testbox.png",
    tags: ["Python", "Django", "PostgreSQL", "TypeScript", "React"],
    liveUrl: "https://www.testbox.com/",
  },
  {
    name: "PrevenX",
    title: "Maintenance Management SaaS",
    description:
      "A CMMS (Computerized Maintenance Management System) for asset management and preventive maintenance. It keeps all maintenance data in the cloud and centralized on a single Web and Mobile platform. I worked across the Django backend — data models and APIs — and the React frontend.",
    image: "/images/preven.png",
    tags: ["Django", "Python", "React", "SaaS"],
    liveUrl: "https://landing.prevenx.com/",
  },
  {
    name: "Hall",
    title: "Sports Club Management SaaS",
    description:
      "An all-in-one management platform for sports clubs, gyms and personal trainers. It handles workouts, activity classes, finances, banking sync and physical access control — replacing several disconnected tools with one product. Built across Django and React.",
    image: "/images/hall.png",
    tags: ["Django", "Python", "React", "SaaS"],
  },
  {
    name: "Hapolo",
    title: "GPS Tracking Platform",
    description:
      "A vehicle GPS tracking system — real-time location tracking and fleet monitoring through a web platform. Built at Dip System with a Django backend and JavaScript frontend.",
    image: "/images/hapolo.jpg",
    tags: ["Django", "Python", "JavaScript"],
    liveUrl: "https://web.hapolo.com.br/",
  },
  {
    name: "Agronix Web Service",
    title: "IoT Device Management",
    description:
      "A web service for an agriculture company to manage a proprietary Android device and its app — registering app versions, pushing over-the-air updates, and controlling devices in real time over WebSockets. Built at Manp Tecnologia.",
    image: "/images/agronix.png",
    tags: ["Next.js", "Node.js", "Android", "WebSockets"],
  },
  {
    name: "Portfolio",
    title: "This Website",
    description:
      "The site you're looking at — rebuilt from the ground up with Next.js, TypeScript, Tailwind CSS and Framer Motion. Dark/light theme, scroll animations, statically exported and deployed to GitHub Pages.",
    image: "/images/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    codeUrl: "https://github.com/Ismael-Torresan/Portfolio",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
