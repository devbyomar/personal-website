"use client";

export function HistoryTalesDiagram() {
  const nodes = [
    { id: "topic_discovery", label: "Topic Discovery", tier: "fast", phase: "research" },
    { id: "format_rotation", label: "Format Guard", tier: "none", phase: "research" },
    { id: "topic_scoring", label: "Topic Scoring", tier: "fast", phase: "research" },
    { id: "research_fetch", label: "Research Fetch", tier: "none", phase: "research" },
    { id: "source_cred", label: "Source Credibility", tier: "none", phase: "research" },
    { id: "claims", label: "Claims Extraction", tier: "fast", phase: "analysis" },
    { id: "cross_check", label: "Cross-Check", tier: "fast", phase: "analysis" },
    { id: "timeline", label: "Timeline Builder", tier: "fast", phase: "analysis" },
    { id: "emotional", label: "Emotional Extraction", tier: "fast", phase: "analysis" },
    { id: "outline", label: "Outline", tier: "creative", phase: "writing" },
    { id: "guardrails", label: "Hard Guardrails", tier: "gate", phase: "writing" },
    { id: "script_gen", label: "Script Generation", tier: "creative", phase: "writing" },
    { id: "fact_tighten", label: "Fact-Tighten", tier: "creative", phase: "writing" },
    { id: "retention", label: "Retention Pass", tier: "creative", phase: "qa" },
    { id: "intensity", label: "Emotional Intensity", tier: "fast", phase: "qa" },
    { id: "sensory", label: "Sensory Density", tier: "fast", phase: "qa" },
    { id: "quality_check", label: "Quality Check", tier: "fast", phase: "qa" },
    { id: "finalize", label: "Finalize", tier: "none", phase: "qa" },
  ];

  const tierColors: Record<string, { fill: string; stroke: string; text: string }> = {
    creative: { fill: "hsl(217 91% 60% / 0.08)", stroke: "hsl(217 91% 60% / 0.25)", text: "hsl(217 91% 60%)" },
    fast: { fill: "hsl(142 71% 45% / 0.06)", stroke: "hsl(142 71% 45% / 0.2)", text: "hsl(142 71% 45%)" },
    gate: { fill: "hsl(0 72% 51% / 0.06)", stroke: "hsl(0 72% 51% / 0.25)", text: "hsl(0 72% 51%)" },
    none: { fill: "hsl(0 0% 100% / 0.04)", stroke: "hsl(0 0% 100% / 0.12)", text: "hsl(0 0% 55%)" },
  };

  const tierLabels: Record<string, string> = {
    creative: "Creative Tier",
    fast: "Fast Tier",
    gate: "Validation Gate",
    none: "No LLM",
  };

  // Layout: 4 columns × 5 rows, with some spanning
  const cols = [80, 280, 480, 680];
  const startY = 80;
  const rowH = 62;
  const nodeW = 160;
  const nodeH = 42;

  // Position each node in a flow
  const positions: Record<string, { x: number; y: number }> = {};
  nodes.forEach((n, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    positions[n.id] = { x: cols[col], y: startY + row * rowH };
  });

  // Arrow connections (sequential)
  const connections = nodes.slice(0, -1).map((_, i) => ({
    from: nodes[i].id,
    to: nodes[i + 1].id,
  }));

  return (
    <div className="w-full overflow-x-auto py-2 px-4">
      <svg
        viewBox="0 0 920 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[600px]"
      >
        {/* Grid */}
        <defs>
          <pattern id="ht-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(0 0% 100% / 0.03)" strokeWidth="0.5" />
          </pattern>
          <marker id="ht-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(0 0% 45%)" />
          </marker>
          <marker id="ht-arrow-red" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(0 72% 51%)" />
          </marker>
        </defs>
        <rect width="920" height="440" fill="url(#ht-grid)" />

        {/* Title */}
        <text x="460" y="28" textAnchor="middle" fill="hsl(0 0% 98%)" fontSize="13" fontWeight="600" fontFamily="var(--font-inter), system-ui">
          History Tales — 18-Node LangGraph Pipeline
        </text>

        {/* Phase labels */}
        <text x="180" y="58" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="9" fontWeight="500" letterSpacing="1.5" fontFamily="var(--font-inter), system-ui">
          RESEARCH
        </text>
        <line x1="80" y1="63" x2="440" y2="63" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="0.5" />

        <text x="580" y="58" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="9" fontWeight="500" letterSpacing="1.5" fontFamily="var(--font-inter), system-ui">
          ANALYSIS
        </text>
        <line x1="440" y1="63" x2="840" y2="63" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="0.5" />

        {/* Render nodes */}
        {nodes.map((node) => {
          const pos = positions[node.id];
          const colors = tierColors[node.tier];
          return (
            <g key={node.id}>
              <rect
                x={pos.x}
                y={pos.y}
                width={nodeW}
                height={nodeH}
                rx="6"
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth="1"
              />
              <text
                x={pos.x + nodeW / 2}
                y={pos.y + 18}
                textAnchor="middle"
                fill="hsl(0 0% 88%)"
                fontSize="10"
                fontWeight="500"
                fontFamily="var(--font-inter), system-ui"
              >
                {node.label}
              </text>
              <text
                x={pos.x + nodeW / 2}
                y={pos.y + 33}
                textAnchor="middle"
                fill={colors.text}
                fontSize="8"
                fontFamily="var(--font-mono), monospace"
              >
                {tierLabels[node.tier]}
              </text>
            </g>
          );
        })}

        {/* Render arrows */}
        {connections.map((conn, i) => {
          const from = positions[conn.from];
          const to = positions[conn.to];
          const fromCy = from.y + nodeH / 2;
          const toCy = to.y + nodeH / 2;

          // Same row: horizontal arrow
          if (Math.abs(fromCy - toCy) < 10) {
            return (
              <line
                key={i}
                x1={from.x + nodeW}
                y1={fromCy}
                x2={to.x}
                y2={toCy}
                stroke="hsl(0 0% 30%)"
                strokeWidth="1"
                markerEnd="url(#ht-arrow)"
              />
            );
          }

          // Different row: L-shaped connector
          // Go right from source, then down to next row start
          const midX = from.x + nodeW + 20;
          return (
            <path
              key={i}
              d={`M ${from.x + nodeW} ${fromCy} L ${midX} ${fromCy} L ${midX} ${toCy} L ${to.x} ${toCy}`}
              fill="none"
              stroke="hsl(0 0% 30%)"
              strokeWidth="1"
              markerEnd="url(#ht-arrow)"
            />
          );
        })}

        {/* QC → Script Generation retry loop (the conditional edge) */}
        <path
          d={`M ${positions.quality_check.x + nodeW / 2} ${positions.quality_check.y + nodeH}
              L ${positions.quality_check.x + nodeW / 2} ${positions.quality_check.y + nodeH + 24}
              L ${positions.script_gen.x + nodeW / 2} ${positions.quality_check.y + nodeH + 24}
              L ${positions.script_gen.x + nodeW / 2} ${positions.script_gen.y + nodeH}`}
          fill="none"
          stroke="hsl(0 72% 51% / 0.5)"
          strokeWidth="1"
          strokeDasharray="5 3"
          markerEnd="url(#ht-arrow-red)"
        />
        <text
          x={(positions.quality_check.x + positions.script_gen.x + nodeW) / 2}
          y={positions.quality_check.y + nodeH + 20}
          textAnchor="middle"
          fill="hsl(0 72% 51% / 0.7)"
          fontSize="8"
          fontFamily="var(--font-mono), monospace"
        >
          QC fail → retry (max 2)
        </text>

        {/* Legend */}
        <g transform="translate(60, 395)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill={tierColors.creative.fill} stroke={tierColors.creative.stroke} strokeWidth="1" />
          <text x="18" y="10" fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">Creative Tier (GPT-5)</text>

          <rect x="160" y="0" width="12" height="12" rx="2" fill={tierColors.fast.fill} stroke={tierColors.fast.stroke} strokeWidth="1" />
          <text x="178" y="10" fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">Fast Tier (GPT-5.2)</text>

          <rect x="330" y="0" width="12" height="12" rx="2" fill={tierColors.gate.fill} stroke={tierColors.gate.stroke} strokeWidth="1" />
          <text x="348" y="10" fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">Deterministic Gate</text>

          <rect x="500" y="0" width="12" height="12" rx="2" fill={tierColors.none.fill} stroke={tierColors.none.stroke} strokeWidth="1" />
          <text x="518" y="10" fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">No LLM</text>

          <line x1="650" y1="6" x2="680" y2="6" stroke="hsl(0 72% 51% / 0.5)" strokeWidth="1" strokeDasharray="5 3" />
          <text x="688" y="10" fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">Retry Loop</text>
        </g>

        {/* Dual model architecture annotation */}
        <rect x="660" y="60" width="200" height="64" rx="6" fill="hsl(0 0% 100% / 0.02)" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1" strokeDasharray="3 3" />
        <text x="760" y="77" textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="8.5" fontWeight="500" letterSpacing="0.5" fontFamily="var(--font-inter), system-ui">
          DUAL-MODEL ARCHITECTURE
        </text>
        <text x="760" y="92" textAnchor="middle" fill="hsl(217 91% 60%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Creative: GPT-5 (prose quality)
        </text>
        <text x="760" y="104" textAnchor="middle" fill="hsl(142 71% 45%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          Fast: GPT-5.2 (structured JSON)
        </text>
        <text x="760" y="116" textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="8" fontFamily="var(--font-mono), monospace">
          60% cost + latency reduction
        </text>
      </svg>
    </div>
  );
}
