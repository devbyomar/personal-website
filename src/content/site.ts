import { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Omar Baher",
  title: "Software & Data Engineer · Systems Builder",
  description:
    "I build cloud-native data platforms at enterprise scale and ship production software end to end. From medallion-architecture pipelines on Databricks to multi-tenant SaaS and AI agent systems — I engineer across the full stack because great systems don't respect layer boundaries.",
  url: "https://omarbaher.dev",
  ogImage: "/og.png",
  email: "obaher@uwaterloo.ca",
  github: "https://github.com/devbyomar",
  linkedin: "https://linkedin.com/in/omarbaher",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: siteConfig.github, label: "devbyomar" },
  { platform: "LinkedIn", url: siteConfig.linkedin, label: "omarbaher" },
  { platform: "Email", url: `mailto:${siteConfig.email}`, label: siteConfig.email },
];
