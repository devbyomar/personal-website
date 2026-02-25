"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Modernizing Legacy Analytics: On-Prem to Databricks + Delta Lake",
    description:
      "Lessons from leading a full platform migration — replacing brittle on-prem pipelines with Databricks, ADLS Gen2, Delta Lake, and Azure Data Factory, while keeping the business running.",
    tag: "Platform Engineering",
    date: "Coming soon",
  },
  {
    title: "Medallion Architecture in Practice: Modeling Tens of Millions of Records",
    description:
      "How I structured bronze, silver, and gold layers with PySpark and Delta Lake for an operational analytics product — partitioned semantic models, incremental loads, and optimized refresh strategies.",
    tag: "Data Engineering",
    date: "Coming soon",
  },
  {
    title: "Re-Architecting Enterprise Data Quality to Save $30K/Year",
    description:
      "The before and after of rebuilding a data quality platform — moving from manual checks and legacy tooling to automated validation gates, freshness monitoring, and cost-aware infrastructure.",
    tag: "Architecture",
    date: "Coming soon",
  },
  {
    title: "Deterministic Validation Gates for AI Agent Pipelines",
    description:
      "LLMs can produce structurally invalid output that looks correct. Here's how I built validation gates with pydantic and pytest that no hallucination can bypass.",
    tag: "AI Engineering",
    date: "Coming soon",
  },
];

export function Writing() {
  return (
    <Section id="writing" className="border-t border-border">
      <FadeIn>
        <SectionHeader
          label="Writing & Thinking"
          title="Technical writing"
          description="Long-form thinking on architecture, systems design, and engineering decisions. Coming soon."
        />
      </FadeIn>

      <StaggerContainer className="space-y-4">
        {posts.map((post) => (
          <StaggerItem key={post.title}>
            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-muted-foreground/30 cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {post.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
