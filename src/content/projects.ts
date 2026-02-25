import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "coi-vault",
    title: "COI Vault",
    subtitle: "B2B SaaS — Vendor Compliance & Document Tracking",
    description:
      "A multi-tenant SaaS platform that tracks vendor certificates of insurance, expirations, and compliance — with automated reminders and full audit trails. Built for property managers, condo boards, and general contractors.",
    problem:
      "Property managers and contractors manually track vendor COIs in spreadsheets. They miss expirations, exposing themselves to liability gaps. There's no purpose-built tool for this — just generic document managers that don't understand compliance workflows.",
    whyItMatters:
      "A single lapsed certificate of insurance can expose a property management company to six-figure liability. This isn't a nice-to-have — it's a compliance requirement that most teams handle with spreadsheets and prayer. COI Vault turns a reactive, error-prone process into a proactive system with automated enforcement.",
    architectureOverview:
      "Server-first Next.js application using the App Router pattern. Dashboard pages are Server Components that fetch data directly from Prisma — no client-side fetching, no loading spinners, no waterfall requests. All mutations go through Server Actions with Zod validation and auth checks at every boundary. Multi-tenant isolation is enforced at the data layer: every query filters by organization ID, and every server action verifies org membership before proceeding.",
    stack: [
      { name: "Next.js 16 (App Router)", purpose: "Server Components + Server Actions for zero-waterfall data fetching" },
      { name: "TypeScript", purpose: "End-to-end type safety from database schema to UI" },
      { name: "Prisma + PostgreSQL", purpose: "Type-safe ORM with relational data model for multi-tenant architecture" },
      { name: "NextAuth (JWT)", purpose: "Credentials-based auth with JWT sessions — no session table overhead" },
      { name: "Stripe", purpose: "Checkout, Billing Portal, and Webhooks for subscription lifecycle" },
      { name: "Resend", purpose: "Transactional email for expiry reminders" },
      { name: "Vercel + Cron", purpose: "Edge deployment with scheduled cron jobs for automated reminders" },
      { name: "Vitest", purpose: "Unit and integration testing" },
      { name: "Tailwind CSS v4", purpose: "Utility-first styling with zero runtime overhead" },
    ],
    technicalDecisions: [
      {
        decision: "Server Components for dashboard pages",
        reasoning:
          "Dashboard data doesn't need interactivity on initial render. By keeping pages as Server Components, we eliminate client-side fetching entirely — the HTML arrives with data already rendered. This removes loading states, reduces JavaScript bundle size, and makes the app feel instant.",
      },
      {
        decision: "Server Actions for all mutations",
        reasoning:
          "Every write operation (create vendor, upload document, change plan) goes through a Server Action with Zod validation. This creates a single enforcement layer — auth checks, plan limits, input validation, and audit logging all happen in one place. No API routes to maintain separately.",
      },
      {
        decision: "JWT sessions over database sessions",
        reasoning:
          "For a B2B SaaS with moderate user counts, JWT sessions eliminate a database query on every request. The tradeoff is that session revocation requires token expiry rather than instant invalidation — acceptable for this use case.",
      },
      {
        decision: "Soft deletes with audit trail",
        reasoning:
          "In a compliance-focused product, data should never disappear. Every deletion is a soft delete (setting deletedAt), and every action creates an audit log entry. This satisfies B2B compliance requirements and enables full traceability.",
      },
      {
        decision: "Plan enforcement at the action layer",
        reasoning:
          "Plan limits (max vendors, documents, seats) are checked inside Server Actions — not in the UI. The UI shows limits for UX, but the server enforces them. This prevents any bypass through direct API calls or UI manipulation.",
      },
    ],
    tradeoffs: [
      "Chose NextAuth credentials provider over OAuth for simplicity — limits social login options but reduces third-party dependencies",
      "In-memory rate limiting instead of Redis — sufficient for current scale, would need Redis for horizontal scaling",
      "Stripe webhook verification happens synchronously — keeps the handler simple but adds latency to webhook processing",
      "Single-region deployment on Vercel — acceptable latency for North American users, would need edge functions for global distribution",
    ],
    scalingConsiderations: [
      "Database connection pooling via Prisma + Neon's serverless driver for handling concurrent connections",
      "Audit log table will grow unbounded — needs a retention policy or archival strategy at scale",
      "Cron-based reminders work for hundreds of orgs; at thousands, would need a queue-based system (BullMQ, SQS)",
      "Multi-tenant query isolation relies on application-level orgId filtering — Row-Level Security (RLS) would add database-level enforcement",
    ],
    githubUrl: "https://github.com/devbyomar/coi-vault",
    liveUrl: "https://coi-vault.vercel.app",
    featured: true,
  },
  {
    slug: "history-tales-script-generator",
    title: "History Tales Script Generator",
    subtitle: "AI Agent Pipeline — Documentary Script Generation",
    description:
      "A production-ready LangGraph agent that autonomously generates high-retention, evidence-led history documentary scripts. 18-node pipeline with dual-model architecture, deterministic validation gates, cross-run learning, and a full web interface.",
    problem:
      "Creating a high-quality documentary script requires weeks of research, fact-checking, narrative structuring, and multiple editing passes. Content creators need to cross-reference primary sources, maintain factual accuracy, engineer viewer retention, and hit precise timing targets — all while writing in a compelling cinematic style.",
    whyItMatters:
      "The YouTube documentary space generates millions of views per video, but the bottleneck isn't production — it's scriptwriting. A single 15-minute script can take 40+ hours of research and writing. This agent compresses that to minutes while maintaining source provenance, factual accuracy, and narrative quality that matches hand-written scripts.",
    architectureOverview:
      "An 18-node LangGraph workflow that separates concerns into distinct processing stages: research, analysis, writing, and quality assurance. Uses a dual-model architecture — creative tier (GPT-5) for writing nodes, fast tier (GPT-5.2) for analytical nodes. Deterministic validation gates between stages enforce structural constraints that no LLM hallucination can bypass. A feedback memory system learns from past runs and injects lessons into future prompts.",
    stack: [
      { name: "LangGraph", purpose: "Stateful workflow orchestration with conditional edges and retry loops" },
      { name: "Python", purpose: "Core pipeline logic, prompt engineering, and validation" },
      { name: "OpenAI API (Dual-Model)", purpose: "Creative tier for writing, fast tier for structured extraction" },
      { name: "FastAPI", purpose: "REST API server with SSE streaming for real-time progress" },
      { name: "Next.js 14 + shadcn/ui", purpose: "Professional web interface with live pipeline tracking" },
      { name: "Pydantic", purpose: "Strict state schema validation across all 18 nodes" },
      { name: "Wikipedia + Archives API", purpose: "Evidence-led research from Library of Congress, National Archives, Europeana" },
      { name: "Vitest + Pytest", purpose: "41 deterministic validator tests + integration coverage" },
    ],
    technicalDecisions: [
      {
        decision: "Dual-model architecture",
        reasoning:
          "Writing quality and analytical speed have different requirements. Creative nodes (Outline, ScriptGeneration, RetentionPass) use a high-quality model for nuanced prose. Analytical nodes (scoring, extraction, QC) use a faster model for structured JSON output. This cuts cost and latency by 60% without sacrificing script quality.",
      },
      {
        decision: "Deterministic validation gates",
        reasoning:
          "LLMs can hallucinate structural compliance. The HardGuardrailsNode and FactTightenNode use deterministic Python validators — word count, entity provenance, tension escalation, rehook cadence — that cannot be bypassed by model output. If validation fails, the pipeline loops back with specific feedback.",
      },
      {
        decision: "Two-stage script generation (Draft → Fact-Tighten)",
        reasoning:
          "Stage A writes the creative draft. Stage B rewrites with per-paragraph trace tags ([Beat B03 | Claims C001,C012]) that create an auditable link between every statement and its source evidence. Tags are stripped from the final script but available for verification.",
      },
      {
        decision: "Cross-run feedback memory",
        reasoning:
          "After every run, QC issues and recommendations are saved to .memory/. On the next run, distilled lessons are prepended to Outline and ScriptGeneration prompts. The agent learns to avoid recurring issues — pass rate improves over successive runs without any code changes.",
      },
      {
        decision: "Surgery-only retention pass",
        reasoning:
          "The RetentionPassNode can only modify existing text — it cannot introduce new named entities or events. A deterministic guard checks for entity provenance: if the retention pass introduces a person not in the original script, the edit is rejected and the original is used instead.",
      },
    ],
    tradeoffs: [
      "Claims capped at 5 sources × 10 claims (50 max) to prevent token bloat — may miss niche facts",
      "QC retry loop limited to 2 iterations — prevents infinite loops but may produce slightly off-target word counts",
      "Wikipedia as primary research source — broad coverage but lower credibility than academic databases",
      "In-process state management — works for single-user runs; would need Redis/PostgreSQL state persistence for concurrent multi-user",
    ],
    scalingConsiderations: [
      "Batch processing via async loop for bulk generation — wrap run_agent() for parallel pipelines",
      "HTTP response caching to .cache/ reduces API costs on reruns by 70%+",
      "LangGraph state can be persisted for resumption — enables long-running pipelines across server restarts",
      "FastAPI with SSE streaming handles 50+ concurrent viewers; would need WebSocket upgrade for 500+",
    ],
    githubUrl: "https://github.com/devbyomar/history-tales-script-generator",
    liveUrl: "https://history-tales-script-generator.vercel.app",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
