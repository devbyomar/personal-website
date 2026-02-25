"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const principles = [
  {
    title: "Medallion Architecture",
    description:
      "Bronze, silver, gold — every pipeline I build follows a clear layered progression. Raw ingestion lands untouched, transformations are explicit and auditable, and the gold layer serves a single purpose: trusted data ready for consumption. No shortcuts between layers.",
    icon: "◇",
  },
  {
    title: "Data Quality as a Gate",
    description:
      "Quality isn't a dashboard you check after something breaks. It's an enforcement layer — dbt tests, schema validation with pydantic, freshness checks, and row-count assertions that block bad data before it reaches production. I've built enterprise-grade quality platforms that saved ~$30K/year.",
    icon: "△",
  },
  {
    title: "Clean Architecture",
    description:
      "Clear boundaries between layers — whether it's bronze → silver → gold in Delta Lake, staging → intermediate → marts in dbt, or data fetching → business logic → presentation in application code. Separation makes systems debuggable at 2 AM.",
    icon: "⬡",
  },
  {
    title: "Platform Modernization",
    description:
      "Legacy systems don't need patches — they need thoughtful re-architecture. I've led full on-prem to cloud-native migrations, replacing brittle manual processes with Databricks, ADF orchestration, Delta Lake storage, and automated pipeline monitoring. The goal is zero-touch reliability.",
    icon: "○",
  },
  {
    title: "Pipeline Orchestration at Scale",
    description:
      "Pipelines that process tens of millions of records need more than a scheduler. Partitioned loads, incremental processing, optimized refresh strategies, and idempotent designs — every pipeline I build handles failure gracefully and scales without rewrites.",
    icon: "□",
  },
  {
    title: "Production-First Mentality",
    description:
      "Error handling, audit logging, data freshness checks, input validation, and CI/CD ship with v1 — not as tech debt. Production doesn't wait for your refactor sprint, and a broken pipeline at 6 AM doesn't care about your backlog.",
    icon: "⬢",
  },
];

export function Philosophy() {
  return (
    <Section id="philosophy" className="border-t border-border">
      <FadeIn>
        <SectionHeader
          label="Engineering Philosophy"
          title="How I build"
          description="Principles forged from modernizing enterprise platforms, building medallion-architecture pipelines, and shipping analytics products at scale."
        />
      </FadeIn>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((p) => (
          <StaggerItem key={p.title}>
            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-muted-foreground/30">
              <span className="text-xl text-muted-foreground group-hover:text-primary transition-colors">
                {p.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
