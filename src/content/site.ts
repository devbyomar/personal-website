import { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Omar Baher",
  title: "Senior Data Solutions Engineer · Analytics Engineer · Builder",
  description:
    "I architect cloud-native data platforms and analytics systems at enterprise scale. Databricks, Azure, PySpark, Delta Lake, dbt — from legacy modernization to medallion-architecture pipelines serving tens of millions of records to senior leadership.",
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
