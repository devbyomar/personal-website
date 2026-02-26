"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/content/projects";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { CoiVaultDiagram, HistoryTalesDiagram } from "@/components/diagrams";

export function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <Section id="work" className="border-t border-border">
      <FadeIn>
        <SectionHeader
          label="Featured Work"
          title="Systems I've shipped"
          description="Full-stack production software with real architecture decisions, real tradeoffs, and real users. I don't just design data platforms — I build products."
        />
      </FadeIn>

      <StaggerContainer className="space-y-16">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <Card className="p-0 overflow-hidden">
              {/* Project header */}
              <div className="p-8 pb-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm text-primary font-medium mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      href={project.githubUrl}
                      variant="secondary"
                      size="sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        variant="secondary"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="mx-8 mt-6 rounded-lg border border-border bg-muted/30 overflow-hidden">
                {project.slug === "coi-vault" && <CoiVaultDiagram />}
                {project.slug === "history-tales-script-generator" && <HistoryTalesDiagram />}
              </div>

              {/* Problem & Architecture */}
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Problem
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Architecture
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.architectureOverview}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="px-8 pb-4">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <Badge key={s.name} variant="outline">
                      {s.name}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key decisions */}
              <div className="px-8 pb-8">
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Key Technical Decisions
                </h4>
                <div className="space-y-3">
                  {project.technicalDecisions.slice(0, 3).map((td, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border bg-background p-4"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {td.decision}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {td.reasoning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case study link */}
              <div className="px-8 pb-8">
                <a
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Full case study
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
