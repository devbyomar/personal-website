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
    title: "Server-Side Enforcement",
    description:
      "The UI suggests, the server enforces. Plan limits, auth boundaries, input validation, and business rules all live in Server Actions or API handlers — never in client code. A beautiful button means nothing if the mutation behind it doesn't check permissions.",
    icon: "△",
  },
  {
    title: "Clean Architecture",
    description:
      "Clear boundaries between layers — whether it's bronze → silver → gold in Delta Lake, staging → intermediate → marts in dbt, or data fetching → business logic → presentation in application code. Separation makes systems debuggable at 2 AM.",
    icon: "⬡",
  },
  {
    title: "Type Safety End to End",
    description:
      "From database schema to API response to UI component — types should flow without breaks. Prisma generates them from the schema, Zod validates at boundaries, and TypeScript catches the rest at compile time. Runtime surprises are a design failure.",
    icon: "○",
  },
  {
    title: "Deterministic Over Probabilistic",
    description:
      "AI pipelines need guardrails that LLMs can't hallucinate past. Structural validation, schema conformance checks, and rule-based gates ensure that every output is verified before it moves downstream — 41 validators in History Tales exist for exactly this reason.",
    icon: "□",
  },
  {
    title: "Production-First Mentality",
    description:
      "Error handling, audit logging, data freshness checks, input validation, and CI/CD ship with v1 — not as tech debt. Whether it's a data pipeline at 6 AM or a SaaS endpoint under load, production doesn't wait for your refactor sprint.",
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
          description="Principles forged from enterprise data platforms, production SaaS, and AI agent systems — the same engineering rigor, regardless of the layer."
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
