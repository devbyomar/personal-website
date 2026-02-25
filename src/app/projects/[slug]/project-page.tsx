"use client";

import { Project } from "@/types";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <Section className="pt-32 md:pt-40 pb-12">
          <FadeIn>
            <a
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to all work
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-sm text-primary font-medium mb-3">
              {project.subtitle}
            </p>
            <h1 className="text-display font-bold text-foreground">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex gap-3">
              <Button
                href={project.githubUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                View Source
              </Button>
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              )}
            </div>
          </FadeIn>
        </Section>

        {/* Screenshot placeholder */}
        <div className="mx-auto max-w-5xl px-6 lg:px-8 mb-16">
          <FadeIn delay={0.3}>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="h-96 bg-muted/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-muted flex items-center justify-center mb-4">
                    <div className="w-8 h-8 rounded-lg bg-muted-foreground/20" />
                  </div>
                  <p className="text-muted-foreground">
                    Application Screenshot
                  </p>
                  <p className="text-sm text-muted-foreground/60 mt-1">
                    Replace with actual screenshot
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Problem & Why it matters */}
        <Section className="py-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Problem
                </h2>
                <p className="text-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Why It Matters
                </h2>
                <p className="text-foreground leading-relaxed">
                  {project.whyItMatters}
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Architecture */}
        <Section className="py-16 border-t border-border">
          <FadeIn>
            <h2 className="text-heading font-bold text-foreground mb-4">
              Architecture Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {project.architectureOverview}
            </p>
          </FadeIn>

          {/* Architecture diagram placeholder */}
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground font-mono text-sm">
                    ┌──────────────────────────────────────┐
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architecture Diagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Replace with actual diagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    └──────────────────────────────────────┘
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* Stack breakdown */}
        <Section className="py-16 border-t border-border">
          <FadeIn>
            <h2 className="text-heading font-bold text-foreground mb-8">
              Stack Breakdown
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-3">
            {project.stack.map((s) => (
              <StaggerItem key={s.name}>
                <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                  <Badge variant="outline" className="mt-0.5 flex-shrink-0 font-mono">
                    {s.name}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{s.purpose}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* Technical decisions */}
        <Section className="py-16 border-t border-border">
          <FadeIn>
            <h2 className="text-heading font-bold text-foreground mb-8">
              Technical Decisions
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {project.technicalDecisions.map((td, i) => (
              <StaggerItem key={i}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-mono text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {td.decision}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {td.reasoning}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>

        {/* Tradeoffs */}
        <Section className="py-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <FadeIn>
                <h2 className="text-heading font-bold text-foreground mb-6">
                  Tradeoffs
                </h2>
              </FadeIn>
              <StaggerContainer className="space-y-3">
                {project.tradeoffs.map((t, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div>
              <FadeIn>
                <h2 className="text-heading font-bold text-foreground mb-6">
                  Scaling Considerations
                </h2>
              </FadeIn>
              <StaggerContainer className="space-y-3">
                {project.scalingConsiderations.map((s, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {s}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="py-16 border-t border-border">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-heading font-bold text-foreground mb-4">
                Explore the code
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                The full source code, documentation, and architecture decisions
                are available on GitHub.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  href={project.githubUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Button>
                <Button href="/#work" variant="secondary">
                  <ArrowLeft className="w-4 h-4" />
                  All Projects
                </Button>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </>
  );
}
