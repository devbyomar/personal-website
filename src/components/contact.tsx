"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/motion";
import { socialLinks } from "@/content/site";
import { Github, Linkedin, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-5 h-5" />,
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
};

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <FadeIn>
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="I'm always open to discussing data platform architecture, analytics engineering, and interesting technical challenges."
        />
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="grid sm:grid-cols-3 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform !== "Email" ? "_blank" : undefined}
              rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-muted-foreground/30 hover:bg-card/80"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted text-muted-foreground group-hover:text-primary transition-colors">
                {iconMap[link.platform]}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {link.platform}
                </p>
                <p className="text-sm text-muted-foreground">{link.label}</p>
              </div>
            </a>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
