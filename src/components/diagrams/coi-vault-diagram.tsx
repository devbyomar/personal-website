"use client";

export function CoiVaultDiagram() {
  return (
    <div className="w-full overflow-x-auto py-2 px-4">
      <svg
        viewBox="0 0 880 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[600px]"
      >
        {/* ── Background grid pattern ─────────────────── */}
        <defs>
          <pattern id="cv-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(0 0% 100% / 0.03)" strokeWidth="0.5" />
          </pattern>
          {/* Arrow marker */}
          <marker id="cv-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(0 0% 50%)" />
          </marker>
          <marker id="cv-arrow-primary" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(217 91% 60%)" />
          </marker>
        </defs>
        <rect width="880" height="420" fill="url(#cv-grid)" />

        {/* ── Title ──────────────────────────────────── */}
        <text x="440" y="28" textAnchor="middle" fill="hsl(0 0% 98%)" fontSize="13" fontWeight="600" fontFamily="var(--font-inter), system-ui">
          COI Vault - System Architecture
        </text>

        {/* ══════════════════════════════════════════════ */}
        {/* CLIENT LAYER                                   */}
        {/* ══════════════════════════════════════════════ */}
        <rect x="30" y="48" width="200" height="84" rx="8" fill="hsl(0 0% 100% / 0.03)" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1" />
        <text x="130" y="67" textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="9" fontWeight="500" letterSpacing="1.2">
          CLIENT
        </text>

        {/* Browser */}
        <rect x="50" y="78" width="160" height="40" rx="6" fill="hsl(0 0% 100% / 0.05)" stroke="hsl(0 0% 100% / 0.12)" strokeWidth="1" />
        <text x="130" y="95" textAnchor="middle" fill="hsl(0 0% 85%)" fontSize="11" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Browser
        </text>
        <text x="130" y="110" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="9" fontFamily="var(--font-mono), monospace">
          Auth Pages · Dashboard UI
        </text>

        {/* ══════════════════════════════════════════════ */}
        {/* VERCEL EDGE LAYER                              */}
        {/* ══════════════════════════════════════════════ */}
        <rect x="260" y="48" width="360" height="168" rx="8" fill="hsl(217 91% 60% / 0.04)" stroke="hsl(217 91% 60% / 0.15)" strokeWidth="1" />
        <text x="440" y="67" textAnchor="middle" fill="hsl(217 91% 60%)" fontSize="9" fontWeight="500" letterSpacing="1.2">
          VERCEL - NEXT.JS APP ROUTER
        </text>

        {/* Server Components */}
        <rect x="278" y="78" width="150" height="50" rx="6" fill="hsl(217 91% 60% / 0.08)" stroke="hsl(217 91% 60% / 0.2)" strokeWidth="1" />
        <text x="353" y="98" textAnchor="middle" fill="hsl(0 0% 90%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Server Components
        </text>
        <text x="353" y="113" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8.5" fontFamily="var(--font-mono), monospace">
          Dashboard · SSG Landing
        </text>

        {/* Server Actions */}
        <rect x="452" y="78" width="150" height="50" rx="6" fill="hsl(217 91% 60% / 0.08)" stroke="hsl(217 91% 60% / 0.2)" strokeWidth="1" />
        <text x="527" y="98" textAnchor="middle" fill="hsl(0 0% 90%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Server Actions
        </text>
        <text x="527" y="113" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8.5" fontFamily="var(--font-mono), monospace">
          Zod + Auth + Plan Limits
        </text>

        {/* API Routes */}
        <rect x="278" y="140" width="100" height="40" rx="6" fill="hsl(0 0% 100% / 0.05)" stroke="hsl(0 0% 100% / 0.12)" strokeWidth="1" />
        <text x="328" y="157" textAnchor="middle" fill="hsl(0 0% 80%)" fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          NextAuth
        </text>
        <text x="328" y="170" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          JWT Sessions
        </text>

        {/* Middleware */}
        <rect x="396" y="140" width="100" height="40" rx="6" fill="hsl(0 0% 100% / 0.05)" stroke="hsl(0 0% 100% / 0.12)" strokeWidth="1" />
        <text x="446" y="157" textAnchor="middle" fill="hsl(0 0% 80%)" fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Middleware
        </text>
        <text x="446" y="170" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Route Guards
        </text>

        {/* Cron */}
        <rect x="514" y="140" width="88" height="40" rx="6" fill="hsl(0 0% 100% / 0.05)" stroke="hsl(0 0% 100% / 0.12)" strokeWidth="1" />
        <text x="558" y="157" textAnchor="middle" fill="hsl(0 0% 80%)" fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Cron Jobs
        </text>
        <text x="558" y="170" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Reminders
        </text>

        {/* ══════════════════════════════════════════════ */}
        {/* ENFORCEMENT LAYER                              */}
        {/* ══════════════════════════════════════════════ */}
        <rect x="260" y="232" width="360" height="56" rx="8" fill="hsl(142 71% 45% / 0.04)" stroke="hsl(142 71% 45% / 0.15)" strokeWidth="1" />
        <text x="440" y="251" textAnchor="middle" fill="hsl(142 71% 45%)" fontSize="9" fontWeight="500" letterSpacing="1.2">
          ENFORCEMENT LAYER
        </text>
        <text x="440" y="275" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="9" fontFamily="var(--font-mono), monospace">
          Zod Validation · Org Isolation (orgId) · Plan Limits · Soft Deletes · Audit Logging
        </text>

        {/* ══════════════════════════════════════════════ */}
        {/* DATA LAYER                                     */}
        {/* ══════════════════════════════════════════════ */}
        <rect x="260" y="304" width="360" height="100" rx="8" fill="hsl(0 0% 100% / 0.03)" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1" />
        <text x="440" y="323" textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="9" fontWeight="500" letterSpacing="1.2">
          DATA LAYER
        </text>

        {/* Prisma */}
        <rect x="278" y="335" width="110" height="55" rx="6" fill="hsl(0 0% 100% / 0.05)" stroke="hsl(0 0% 100% / 0.12)" strokeWidth="1" />
        <text x="333" y="355" textAnchor="middle" fill="hsl(0 0% 85%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Prisma ORM
        </text>
        <text x="333" y="370" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Type-safe queries
        </text>
        <text x="333" y="382" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          orgId filtering
        </text>

        {/* PostgreSQL */}
        <rect x="408" y="335" width="100" height="55" rx="6" fill="hsl(217 91% 60% / 0.06)" stroke="hsl(217 91% 60% / 0.15)" strokeWidth="1" />
        <text x="458" y="355" textAnchor="middle" fill="hsl(0 0% 85%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          PostgreSQL
        </text>
        <text x="458" y="370" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Neon (serverless)
        </text>
        <text x="458" y="382" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          SSL · Connection Pool
        </text>

        {/* Data Model mini */}
        <rect x="528" y="335" width="74" height="55" rx="6" fill="hsl(0 0% 100% / 0.03)" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1" strokeDasharray="3 3" />
        <text x="565" y="351" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          User
        </text>
        <text x="565" y="362" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Membership
        </text>
        <text x="565" y="373" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Organization
        </text>
        <text x="565" y="384" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Vendor · Doc
        </text>

        {/* ══════════════════════════════════════════════ */}
        {/* EXTERNAL SERVICES                              */}
        {/* ══════════════════════════════════════════════ */}
        <rect x="660" y="48" width="190" height="356" rx="8" fill="hsl(0 0% 100% / 0.02)" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1" />
        <text x="755" y="67" textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="9" fontWeight="500" letterSpacing="1.2">
          EXTERNAL SERVICES
        </text>

        {/* Stripe */}
        <rect x="678" y="82" width="154" height="68" rx="6" fill="hsl(260 80% 60% / 0.06)" stroke="hsl(260 80% 60% / 0.15)" strokeWidth="1" />
        <text x="755" y="102" textAnchor="middle" fill="hsl(260 80% 60%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Stripe
        </text>
        <text x="755" y="118" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Checkout · Billing Portal
        </text>
        <text x="755" y="130" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Webhooks → Plan Sync
        </text>
        <text x="755" y="142" textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
          Free · Pro ($29) · Team ($79)
        </text>

        {/* Resend */}
        <rect x="678" y="164" width="154" height="52" rx="6" fill="hsl(160 60% 45% / 0.06)" stroke="hsl(160 60% 45% / 0.15)" strokeWidth="1" />
        <text x="755" y="184" textAnchor="middle" fill="hsl(160 60% 45%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Resend
        </text>
        <text x="755" y="200" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Expiry Reminder Emails
        </text>
        <text x="755" y="210" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          7-day advance warning
        </text>

        {/* Vitest */}
        <rect x="678" y="230" width="154" height="44" rx="6" fill="hsl(0 0% 100% / 0.04)" stroke="hsl(0 0% 100% / 0.1)" strokeWidth="1" />
        <text x="755" y="250" textAnchor="middle" fill="hsl(40 90% 60%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          Vitest
        </text>
        <text x="755" y="265" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Unit + Integration Tests
        </text>

        {/* GitHub Actions */}
        <rect x="678" y="288" width="154" height="44" rx="6" fill="hsl(0 0% 100% / 0.04)" stroke="hsl(0 0% 100% / 0.1)" strokeWidth="1" />
        <text x="755" y="308" textAnchor="middle" fill="hsl(0 0% 75%)" fontSize="10" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          GitHub Actions
        </text>
        <text x="755" y="323" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          CI/CD → Vercel Deploy
        </text>

        {/* ══════════════════════════════════════════════ */}
        {/* ARROWS                                         */}
        {/* ══════════════════════════════════════════════ */}

        {/* Browser → Server Components */}
        <line x1="210" y1="98" x2="275" y2="98" stroke="hsl(0 0% 35%)" strokeWidth="1" markerEnd="url(#cv-arrow)" />

        {/* Server Components → Enforcement */}
        <line x1="353" y1="128" x2="353" y2="229" stroke="hsl(217 91% 60% / 0.4)" strokeWidth="1" markerEnd="url(#cv-arrow-primary)" strokeDasharray="4 3" />

        {/* Server Actions → Enforcement */}
        <line x1="527" y1="128" x2="527" y2="229" stroke="hsl(217 91% 60% / 0.4)" strokeWidth="1" markerEnd="url(#cv-arrow-primary)" strokeDasharray="4 3" />

        {/* Enforcement → Data Layer */}
        <line x1="440" y1="288" x2="440" y2="301" stroke="hsl(142 71% 45% / 0.4)" strokeWidth="1" markerEnd="url(#cv-arrow)" />

        {/* Server Actions → Stripe */}
        <line x1="602" y1="103" x2="675" y2="116" stroke="hsl(260 80% 60% / 0.3)" strokeWidth="1" markerEnd="url(#cv-arrow)" strokeDasharray="4 3" />

        {/* Cron → Resend */}
        <line x1="602" y1="160" x2="675" y2="180" stroke="hsl(160 60% 45% / 0.3)" strokeWidth="1" markerEnd="url(#cv-arrow)" strokeDasharray="4 3" />
      </svg>
    </div>
  );
}
