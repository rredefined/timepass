/**
 * SITE CONFIGURATION
 *
 * This is the only file you need to edit for day to day content changes.
 * Every string, link, image path and list rendered on the page comes from here.
 * No component contains hardcoded copy.
 */

import type { NavLink, Social, Stat, Card, Tech } from "@/types";

/** Core identity: name, roles and the paragraph in the About section. */
export const profile = {
  name: "Ayle",
  /** Shown directly under the name inside the hero panel. */
  title: "AeroX Dev",
  /** Shown under the page heading. */
  tagline: "DEVELOPER · DESIGNER",
  /** Large heading at the top of the page. */
  heading: "Portfolio",
  about:
    "I'm Ayle, a developer and designer who builds fast, clean, responsive products for the web. I work mainly in TypeScript and JavaScript across the Node.js ecosystem, and reach for Python when a job calls for automation, scripting or data work. Alongside code I've spent years in design, editing, motion graphics and graphics work, so I can take an idea from a rough sketch all the way through to a shipped interface. I care about performance, accessible layouts that hold up on every screen size, and details that make an interface feel considered rather than assembled.",
} as const;

/** Browser tab title, meta description and social share card. */
export const meta = {
  url: "https://ayle-dev-portfolio.netlify.app",
  title: "Ayle / Dev",
  description: "I love pancakes",
  /** Image used as the link preview thumbnail on Discord, X, WhatsApp etc. */
  thumbnail: "/banner.gif",
  thumbnailSize: { width: 498, height: 280 },
} as const;

/** Image paths, all relative to the public folder. */
export const assets = {
  background: "/bg.jpg",
  /** Main artwork inside the hero panel. */
  avatar: "/avatar.png",
} as const;

/**
 * Navbar tabs. Empty by default.
 * Add entries like { label: "Work", href: "#work", showOnMobile: true } to bring
 * the tab row back. showOnMobile controls whether it also appears in the mobile menu.
 */
export const navLinks: NavLink[] = [];

/** Social profiles. Rendered in the navbar and in the mobile menu. */
export const socials: Social[] = [
  { name: "Discord", href: "https://discord.gg/aerox", handle: "discord.gg/aerox" },
  { name: "Github", href: "https://github.com/ayliee", handle: "github.com/ayliee" },
  { name: "Youtube", href: "https://youtube.com/@AeroXDev", handle: "@AeroXDev" },
];

/** Main call to action, used by the hero button and the mobile menu button. */
export const callToAction = {
  label: "Projects",
  mobileLabel: "View Projects",
  href: "https://github.com/ayliee",
} as const;

/** Four small cards sitting above the About section. */
export const stats: Stat[] = [
  { label: "Experience", value: "4+ Years" },
  { label: "Projects", value: "10+" },
  { label: "Family", value: "5K" },
  { label: "Age", value: "22 Years" },
];

/** Tech Stack grid. The icon key must exist in components/ui/Icon.tsx. */
export const techStack: Tech[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Python", icon: "python" },
  { name: "Node.js", icon: "node" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Adobe Suite", icon: "pen" },
];

/** Right column, top section. Cards expand on click. */
export const skills: Card[] = [
  {
    title: "Web Development",
    body: "Building responsive, production ready web apps with TypeScript, React and Next.js. Component architecture, routing, API integration and clean, maintainable code.",
    icon: "code",
  },
  {
    title: "Backend & Automation",
    body: "Node.js APIs and services plus Python scripting for automation, data processing and tooling that removes repetitive work from the pipeline.",
    icon: "server",
  },
];

/** Right column, bottom section. */
export const designTools: Card[] = [
  {
    title: "Photoshop",
    body: "Photo manipulation, poster and thumbnail design, compositing, colour grading and detailed retouching for social and brand work.",
    icon: "photoshop",
  },
  {
    title: "Alight Motion",
    body: "Motion graphics, keyframe animation, transitions and visual effects for short form video edits and animated promos.",
    icon: "motion",
  },
  {
    title: "PixelLab & Adobe Suite",
    body: "Typography, logo and layout design in PixelLab, plus the wider Adobe toolset including Illustrator, Premiere and After Effects for vector art and video work.",
    icon: "pen",
  },
];

/** Section headings, kept together so wording stays consistent. */
export const sections = {
  about: "About Me",
  techStack: "Tech Stack",
  skills: "Skills",
  designTools: "Design Tools",
  connect: "Connect",
} as const;

export const footer = {
  copyright: `© ${profile.name} 2026`,
} as const;
