"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

const experience: ExperienceEntry[] = [
  {
    role: "Senior Data Solutions Engineer",
    company: "Manulife Investment Management",
    location: "Toronto, ON",
    period: "Dec 2022 — Present",
    highlights: [
      "Own end-to-end modernization of a legacy on-prem analytics platform to a cloud-native architecture using Databricks, Azure Data Factory, ADLS with Delta Lake, Azure SQL MI, PySpark, and Pandas",
      "Built high-performance operational analytics product for senior leadership — modeling tens of millions of records across medallion architecture layers with partitioned semantic models and optimized refresh strategies",
      "Re-architected enterprise data quality platform, reducing infrastructure and operational costs by approximately $30K per year",
    ],
    technologies: [
      "Databricks",
      "PySpark",
      "Azure Data Factory",
      "Delta Lake",
      "Azure SQL MI",
      "ADLS Gen2",
      "Power BI",
      "dbt",
    ],
  },
  {
    role: "Associate Data Scientist",
    company: "Innovation, Science and Economic Development Canada",
    location: "Remote",
    period: "Sep 2021 — Apr 2022",
    highlights: [
      "Developed ML-based patent landscape maps that reduced operational costs by 36% through automated classification and clustering",
      "Applied NLP techniques including word embeddings and text vectorization for patent document analysis at scale",
    ],
    technologies: [
      "Python",
      "NLP",
      "Machine Learning",
      "Word Embeddings",
      "Text Vectorization",
    ],
  },
  {
    role: "Data Science Developer Intern",
    company: "Government of Ontario",
    location: "Remote",
    period: "Jan 2021 — Apr 2021",
    highlights: [
      "Built Power BI dashboard prototypes for internal stakeholder reporting and decision support",
      "Designed Python text-processing pipeline for document classification using logistic regression models",
    ],
    technologies: ["Python", "Power BI", "Logistic Regression", "NLP"],
  },
];

const education = {
  degree: "Bachelor of Mathematics — Computational Mathematics",
  minor: "Statistics Minor",
  school: "University of Waterloo",
  year: "2022",
};

const leadership = {
  role: "President",
  company: "ScrubHouse Inc.",
  location: "Toronto, ON",
  period: "May 2024 — Present",
  description:
    "Founded and operate a services business alongside my full-time engineering role — managing operations, client acquisition, and growth strategy.",
};

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <FadeIn>
        <SectionHeader
          label="Experience"
          title="Where I've built"
          description="Enterprise data platforms, government ML systems, and a business of my own."
        />
      </FadeIn>

      <StaggerContainer className="space-y-6 mb-16">
        {experience.map((exp) => (
          <StaggerItem key={`${exp.company}-${exp.role}`}>
            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-muted-foreground/30">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {exp.company}
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      · {exp.location}
                    </span>
                  </p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-muted-foreground/50 mt-1.5 flex-shrink-0">
                      ▹
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Education & Leadership */}
      <FadeIn delay={0.3}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
              Education
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {education.minor}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {education.school} · {education.year}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
              Leadership
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {leadership.role} — {leadership.company}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {leadership.location} · {leadership.period}
            </p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              {leadership.description}
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
