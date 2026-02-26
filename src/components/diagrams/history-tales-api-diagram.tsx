"use client";

export function HistoryTalesApiDiagram() {
  // Layout constants
  const padX = 40;
  const padY = 50;
  const totalW = 880;
  const totalH = 520;

  // Colors
  const colors = {
    next: { fill: "hsl(0 0% 100% / 0.06)", stroke: "hsl(0 0% 100% / 0.15)", text: "hsl(0 0% 85%)", label: "hsl(217 91% 60%)" },
    api: { fill: "hsl(142 71% 45% / 0.06)", stroke: "hsl(142 71% 45% / 0.2)", text: "hsl(0 0% 85%)", label: "hsl(142 71% 45%)" },
    pipeline: { fill: "hsl(280 65% 60% / 0.06)", stroke: "hsl(280 65% 60% / 0.2)", text: "hsl(0 0% 85%)", label: "hsl(280 65% 60%)" },
    external: { fill: "hsl(38 92% 50% / 0.06)", stroke: "hsl(38 92% 50% / 0.2)", text: "hsl(0 0% 85%)", label: "hsl(38 92% 50%)" },
    store: { fill: "hsl(0 72% 51% / 0.06)", stroke: "hsl(0 72% 51% / 0.2)", text: "hsl(0 0% 85%)", label: "hsl(0 72% 51%)" },
  };

  return (
    <div className="w-full overflow-x-auto py-4 px-4">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[640px]"
      >
        <defs>
          <pattern id="api-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(0 0% 100% / 0.03)" strokeWidth="0.5" />
          </pattern>
          <marker id="api-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(0 0% 45%)" />
          </marker>
          <marker id="api-arrow-green" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(142 71% 45% / 0.6)" />
          </marker>
        </defs>
        <rect width={totalW} height={totalH} fill="url(#api-grid)" />

        {/* Title */}
        <text x={totalW / 2} y={28} textAnchor="middle" fill="hsl(0 0% 98%)" fontSize="14" fontWeight="600" fontFamily="var(--font-inter), system-ui">
          History Tales — Full-Stack API Architecture
        </text>

        {/* ── Column 1: Next.js Frontend ── */}
        <rect x={padX} y={padY} width={180} height={340} rx="8" fill="hsl(217 91% 60% / 0.03)" stroke="hsl(217 91% 60% / 0.1)" strokeWidth="1" strokeDasharray="4 3" />
        <text x={padX + 90} y={padY + 20} textAnchor="middle" fill={colors.next.label} fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="var(--font-inter), system-ui">
          NEXT.JS 14 FRONTEND
        </text>
        <text x={padX + 90} y={padY + 33} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
          Vercel · shadcn/ui
        </text>

        {/* Frontend components */}
        {[
          { label: "GenerateForm", y: 110 },
          { label: "PipelineTracker", y: 160 },
          { label: "ScriptViewer", y: 210 },
          { label: "RunHistory", y: 260 },
          { label: "API Client (lib/api.ts)", y: 310 },
        ].map((comp) => (
          <g key={comp.label}>
            <rect x={padX + 12} y={comp.y} width={156} height={36} rx="5" fill={colors.next.fill} stroke={colors.next.stroke} strokeWidth="1" />
            <text x={padX + 90} y={comp.y + 16} textAnchor="middle" fill={colors.next.text} fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
              {comp.label}
            </text>
            {comp.label === "PipelineTracker" && (
              <text x={padX + 90} y={comp.y + 28} textAnchor="middle" fill="hsl(142 71% 45% / 0.7)" fontSize="7" fontFamily="var(--font-mono), monospace">
                SSE consumer
              </text>
            )}
            {comp.label === "ScriptViewer" && (
              <text x={padX + 90} y={comp.y + 28} textAnchor="middle" fill="hsl(217 91% 60% / 0.6)" fontSize="7" fontFamily="var(--font-mono), monospace">
                Tabs: Script · Sources · QC
              </text>
            )}
            {comp.label === "API Client (lib/api.ts)" && (
              <text x={padX + 90} y={comp.y + 28} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7" fontFamily="var(--font-mono), monospace">
                fetch + EventSource
              </text>
            )}
          </g>
        ))}

        {/* Arrow from API Client → to FastAPI */}
        <line x1={padX + 168} y1={328} x2={280} y2={328} stroke="hsl(0 0% 30%)" strokeWidth="1" markerEnd="url(#api-arrow)" />
        <text x={235} y={322} textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="7" fontFamily="var(--font-mono), monospace">
          HTTP / SSE
        </text>

        {/* ── Column 2: FastAPI Server ── */}
        <rect x={285} y={padY} width={260} height={420} rx="8" fill="hsl(142 71% 45% / 0.02)" stroke="hsl(142 71% 45% / 0.08)" strokeWidth="1" strokeDasharray="4 3" />
        <text x={415} y={padY + 20} textAnchor="middle" fill={colors.api.label} fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="var(--font-inter), system-ui">
          FASTAPI SERVER
        </text>
        <text x={415} y={padY + 33} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
          Fly.io · uvicorn · CORS
        </text>

        {/* API Endpoints */}
        {[
          { method: "GET", path: "/health", desc: "model info", y: 100 },
          { method: "POST", path: "/generate", desc: "fire-and-forget", y: 145 },
          { method: "GET", path: "/runs/{id}/stream", desc: "SSE progress", y: 190 },
          { method: "GET", path: "/runs", desc: "list recent", y: 235 },
          { method: "GET", path: "/runs/{id}", desc: "full detail", y: 280 },
          { method: "POST", path: "/runs/{id}/cancel", desc: "cancellation", y: 325 },
          { method: "GET", path: "/runs/{id}/export/*", desc: "script + sources", y: 370 },
        ].map((ep) => {
          const methodColor = ep.method === "POST" ? "hsl(38 92% 50%)" : "hsl(142 71% 45%)";
          return (
            <g key={ep.path}>
              <rect x={298} y={ep.y} width={234} height={34} rx="5" fill={colors.api.fill} stroke={colors.api.stroke} strokeWidth="1" />
              <text x={310} y={ep.y + 15} fill={methodColor} fontSize="8" fontWeight="700" fontFamily="var(--font-mono), monospace">
                {ep.method}
              </text>
              <text x={ep.method === "POST" ? 342 : 334} y={ep.y + 15} fill={colors.api.text} fontSize="8.5" fontWeight="500" fontFamily="var(--font-mono), monospace">
                {ep.path}
              </text>
              <text x={310} y={ep.y + 27} fill="hsl(0 0% 45%)" fontSize="7" fontFamily="var(--font-mono), monospace">
                {ep.desc}
              </text>
            </g>
          );
        })}

        {/* RunStore */}
        <rect x={298} y={418} width={234} height={38} rx="5" fill={colors.store.fill} stroke={colors.store.stroke} strokeWidth="1" />
        <text x={415} y={434} textAnchor="middle" fill={colors.store.text} fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          RunStore (in-memory)
        </text>
        <text x={415} y={447} textAnchor="middle" fill="hsl(0 72% 51% / 0.6)" fontSize="7" fontFamily="var(--font-mono), monospace">
          runs · events · task handles · pub/sub queues
        </text>

        {/* Arrow: /generate → Pipeline Runner */}
        <line x1={532} y1={162} x2={578} y2={162} stroke="hsl(142 71% 45% / 0.4)" strokeWidth="1" markerEnd="url(#api-arrow-green)" />
        <text x={556} y={155} textAnchor="middle" fill="hsl(142 71% 45% / 0.5)" fontSize="6.5" fontFamily="var(--font-mono), monospace">
          async
        </text>

        {/* ── Column 3: Pipeline + External ── */}
        <rect x={583} y={padY} width={260} height={280} rx="8" fill="hsl(280 65% 60% / 0.02)" stroke="hsl(280 65% 60% / 0.08)" strokeWidth="1" strokeDasharray="4 3" />
        <text x={713} y={padY + 20} textAnchor="middle" fill={colors.pipeline.label} fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="var(--font-inter), system-ui">
          LANGGRAPH PIPELINE
        </text>
        <text x={713} y={padY + 33} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
          18 nodes · stateful workflow
        </text>

        {/* Pipeline runner */}
        <rect x={596} y={100} width={234} height={36} rx="5" fill={colors.pipeline.fill} stroke={colors.pipeline.stroke} strokeWidth="1" />
        <text x={713} y={116} textAnchor="middle" fill={colors.pipeline.text} fontSize="9.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
          pipeline_runner.py
        </text>
        <text x={713} y={128} textAnchor="middle" fill="hsl(280 65% 60% / 0.6)" fontSize="7" fontFamily="var(--font-mono), monospace">
          asyncio.create_task → compile_graph().invoke()
        </text>

        {/* Pipeline stages */}
        {[
          { label: "Research (4 nodes)", color: "hsl(142 71% 45%)", y: 150 },
          { label: "Analysis (4 nodes)", color: "hsl(217 91% 60%)", y: 190 },
          { label: "Writing (4 nodes)", color: "hsl(280 65% 60%)", y: 230 },
          { label: "QA + Finalize (6 nodes)", color: "hsl(38 92% 50%)", y: 270 },
        ].map((stage) => (
          <g key={stage.label}>
            <rect x={596} y={stage.y} width={234} height={30} rx="4" fill="hsl(0 0% 100% / 0.03)" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1" />
            <circle cx={612} cy={stage.y + 15} r="4" fill={stage.color} opacity={0.5} />
            <text x={624} y={stage.y + 19} fill={colors.pipeline.text} fontSize="9" fontWeight="500" fontFamily="var(--font-inter), system-ui">
              {stage.label}
            </text>
          </g>
        ))}

        {/* Progress events arrow from pipeline back to /stream */}
        <path
          d="M 596 290 L 596 302 L 555 302 L 555 207 L 532 207"
          fill="none"
          stroke="hsl(142 71% 45% / 0.3)"
          strokeWidth="1"
          strokeDasharray="4 3"
          markerEnd="url(#api-arrow-green)"
        />
        <text x={570} y={298} textAnchor="middle" fill="hsl(142 71% 45% / 0.5)" fontSize="6.5" fontFamily="var(--font-mono), monospace">
          NodeProgress events
        </text>

        {/* ── External Services ── */}
        <rect x={583} y={345} width={260} height={125} rx="8" fill="hsl(38 92% 50% / 0.02)" stroke="hsl(38 92% 50% / 0.08)" strokeWidth="1" strokeDasharray="4 3" />
        <text x={713} y={363} textAnchor="middle" fill={colors.external.label} fontSize="9" fontWeight="600" letterSpacing="1" fontFamily="var(--font-inter), system-ui">
          EXTERNAL SERVICES
        </text>

        {[
          { label: "OpenAI API", sub: "GPT-5 + GPT-5.2", y: 378 },
          { label: "Wikipedia API", sub: "primary research", y: 408 },
          { label: "Archives (LoC · NARA · Europeana)", sub: "institutional sources", y: 438 },
        ].map((svc) => (
          <g key={svc.label}>
            <rect x={596} y={svc.y} width={234} height={24} rx="4" fill={colors.external.fill} stroke={colors.external.stroke} strokeWidth="1" />
            <text x={612} y={svc.y + 15} fill={colors.external.text} fontSize="8.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
              {svc.label}
            </text>
            <text x={820} y={svc.y + 15} textAnchor="end" fill="hsl(0 0% 40%)" fontSize="7" fontFamily="var(--font-mono), monospace">
              {svc.sub}
            </text>
          </g>
        ))}

        {/* ── Data Flow Annotations ── */}
        {/* Pydantic schemas annotation */}
        <rect x={padX} y={410} width={180} height={58} rx="6" fill="hsl(0 0% 100% / 0.02)" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1" strokeDasharray="3 3" />
        <text x={padX + 90} y={428} textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="8" fontWeight="600" letterSpacing="0.5" fontFamily="var(--font-inter), system-ui">
          SHARED SCHEMAS
        </text>
        <text x={padX + 90} y={442} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7" fontFamily="var(--font-mono), monospace">
          Pydantic: GenerateRequest
        </text>
        <text x={padX + 90} y={453} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7" fontFamily="var(--font-mono), monospace">
          RunSummary · RunDetail · NodeProgress
        </text>
        <text x={padX + 90} y={464} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7" fontFamily="var(--font-mono), monospace">
          TS types mirror Python schemas
        </text>

        {/* Legend */}
        <g transform={`translate(${padX}, ${totalH - 22})`}>
          {[
            { label: "Next.js Frontend", color: colors.next },
            { label: "FastAPI Server", color: colors.api },
            { label: "LangGraph Pipeline", color: colors.pipeline },
            { label: "External APIs", color: colors.external },
            { label: "State Store", color: colors.store },
          ].map((item, i) => (
            <g key={item.label} transform={`translate(${i * 160}, 0)`}>
              <rect x={0} y={0} width="12" height="12" rx="2" fill={item.color.fill} stroke={item.color.stroke} strokeWidth="1" />
              <text x={18} y={10} fill="hsl(0 0% 55%)" fontSize="8" fontFamily="var(--font-inter), system-ui">
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
