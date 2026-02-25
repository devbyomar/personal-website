"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/motion";
import { siteConfig } from "@/content/site";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <Section className="pt-32 md:pt-44 pb-20 md:pb-28 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-primary" />
            <span className="text-sm text-primary font-medium tracking-wide">
              Senior Data Solutions Engineer at Manulife
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-display-lg font-bold text-foreground max-w-4xl">
            {siteConfig.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium tracking-tight">
            {siteConfig.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {siteConfig.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#work" variant="primary" size="lg">
              View Work
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href={siteConfig.github}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button
              href="/resume.pdf"
              variant="ghost"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
