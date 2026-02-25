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
    "Pandas",
    "SQL (T-SQL · Spark SQL)",
    "Scala",
    "Bash / Shell",
    "TypeScript",
    "Next.js",
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
  "Practices & Tooling": [
    "CI/CD Pipelines",
    "Git",
    "pytest",
    "pydantic",
    "Docker",
    "Data Quality Engineering",
    "ELT / ETL Design",
    "Data Contracts",
  ],
};

const highlights = [
  {
    metric: "10M+",
    label: "Records Modeled",
    detail: "Operational analytics across medallion architecture layers",
  },
  {
    metric: "~$30K",
    label: "Annual Cost Reduction",
    detail: "Re-architected enterprise data quality platform",
  },
  {
    metric: "36%",
    label: "Cost Reduction",
    detail: "ML-based patent landscape maps at ISED Canada",
  },
  {
    metric: "2+ yrs",
    label: "Enterprise Scale",
    detail: "Cloud-native platform modernization at Manulife",
  },
];

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionHeader
          label="About"
          title="Cloud-native data platforms at enterprise scale"
          description="I design, build, and own end-to-end analytics platforms — from legacy modernization to production pipelines serving senior leadership."
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
              ADLS with Delta Lake, and Azure SQL MI — processing tens of millions of
              records through medallion-architecture pipelines using PySpark and Pandas.
            </p>
            <p>
              I built the high-performance operational analytics product that senior
              leadership uses daily — partitioned semantic models, optimized refresh
              strategies, and data pipelines designed for both reliability and speed.
              I also re-architected the enterprise data quality platform, cutting costs
              by approximately $30K per year.
            </p>
            <p>
              Before Manulife, I worked as an Associate Data Scientist at{" "}
              <span className="text-foreground font-medium">Innovation, Science and Economic Development Canada</span>,
              building ML-based patent landscape maps that reduced costs by 36% using
              NLP techniques including word embeddings and text vectorization. I hold a{" "}
              <span className="text-foreground font-medium">Bachelor of Mathematics in Computational Mathematics</span>{" "}
              with a Statistics Minor from the University of Waterloo.
            </p>
            <p>
              Beyond enterprise data, I build production software —
              multi-tenant SaaS platforms and AI agent pipelines with deterministic
              validation gates. I also run{" "}
              <span className="text-foreground font-medium">ScrubHouse Inc.</span>,
              an owner-operated services business I founded in 2024.
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
