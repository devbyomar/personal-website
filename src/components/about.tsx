"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";

const skills = {
  "Data & Cloud Platforms": [
    "Azure Databricks",
    "Azure Data Factory",
    "Azure Synapse Analytics",
    "ADLS Gen2",
    "Azure SQL MI",
    "Delta Lake",
    "Unity Catalog",
    "Apache Spark",
  ],
  "Languages & Frameworks": [
    "Python",
    "PySpark",
    "TypeScript",
    "SQL (T-SQL · Spark SQL)",
    "Scala",
    "Next.js (App Router)",
    "FastAPI",
    "Node.js",
  ],
  "Analytics & Modeling": [
    "dbt (Core & Cloud)",
    "Power BI",
    "Tabular Editor",
    "Medallion Architecture",
    "Dimensional Modeling",
    "Semantic Models",
    "DAX",
  ],
  "Software Engineering": [
    "System Design",
    "Multi-Tenant SaaS",
    "Server Actions / API Design",
    "Prisma / PostgreSQL",
    "Stripe Billing",
    "AI Agent Pipelines (LangGraph)",
    "CI/CD",
    "Docker",
    "Git",
    "pytest · pydantic · Vitest",
  ],
};

const highlights = [
  {
    metric: "10M+",
    label: "Records Modeled",
    detail: "Medallion-architecture pipelines at Manulife",
  },
  {
    metric: "~$30K",
    label: "Annual Cost Reduction",
    detail: "Re-architected enterprise data quality platform",
  },
  {
    metric: "2",
    label: "Production Systems",
    detail: "SaaS platform & AI agent pipeline shipped end to end",
  },
  {
    metric: "41",
    label: "Validation Gates",
    detail: "Deterministic tests no LLM hallucination can bypass",
  },
];

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionHeader
          label="About"
          title="Data platforms and production systems - end to end"
          description="I build enterprise analytics pipelines by day and ship production software by night. The common thread: systems thinking, clean architecture, and code that works at scale."
        />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <FadeIn delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Senior Data Solutions Engineer at{" "}
              <span className="text-foreground font-medium">Manulife Investment Management</span>,
              where I own the end-to-end modernization of a legacy on-prem analytics
              platform into a cloud-native architecture on Databricks, Azure Data Factory,
              ADLS with Delta Lake, and Azure SQL MI - processing tens of millions of
              records through medallion-architecture pipelines using PySpark and Pandas.
            </p>
            <p>
              But I&apos;m also a software engineer who builds real products.{" "}
              <span className="text-foreground font-medium">COI Vault</span> is a
              multi-tenant SaaS platform with Stripe billing, audit trails, and
              server-side plan enforcement.{" "}
              <span className="text-foreground font-medium">History Tales</span> is
              an AI agent pipeline with 18 LangGraph nodes and 41 deterministic
              validation gates that no hallucination can bypass. Both are deployed,
              tested, and running in production.
            </p>
            <p>
              I think in systems - whether that means designing a dimensional model
              for an analytics warehouse or architecting a Server Actions layer with
              Zod validation and auth boundaries. The same engineering rigor applies:
              clean abstractions, strict type safety, exhaustive testing, and
              deployment pipelines from day one.
            </p>
            <p>
              I hold a{" "}
              <span className="text-foreground font-medium">Bachelor of Mathematics in Computational Mathematics</span>{" "}
              with a Statistics Minor from the University of Waterloo, and I also
              run <span className="text-foreground font-medium">ScrubHouse Inc.</span>,
              a services business I founded in 2024 alongside my full-time engineering role.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <StaggerItem key={h.label}>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-3xl font-bold text-foreground">{h.metric}</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {h.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
