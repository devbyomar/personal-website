"use client";

export function HistoryTalesDiagram() {
  const nodes = [
    { id: "topic_discovery", label: "Topic Discovery", tier: "fast", phase: "research" },
    { id: "format_rotation", label: "Format Guard", tier: "none", phase: "research" },
    { id: "topic_scoring", label: "Topic Scoring", tier: "fast", phase: "research" },
    { id: "research_fetch", label: "Research Fetch", tier: "none", phase: "research" },
    { id: "source_cred", label: "Source Credibility", tier: "none", phase: "analysis" },
    { id: "claims", label: "Claims Extraction", tier: "fast", phase: "analysis" },
    { id: "cross_check", label: "Cross-Check", tier: "fast", phase: "analysis" },
    { id: "timeline", label: "Timeline Builder", tier: "fast", phase: "analysis" },
    { id: "emotional", label: "Emotional Extraction", tier: "fast", phase: "writing" },
    { id: "outline", label: "Outline", tier: "creative", phase: "writing" },
    { id: "guardrails", label: "Hard Guardrails", tier: "gate", phase: "writing" },
    { id: "script_gen", label: "Script Generation", tier: "creative", phase: "writing" },
    { id: "fact_tighten", label: "Fact-Tighten", tier: "creative", phase: "refinement" },
    { id: "retention", label: "Retention Pass", tier: "creative", phase: "refinement" },
    { id: "intensity", label: "Emotional Intensity", tier: "fast", phase: "refinement" },
    { id: "sensory", label: "Sensory Density", tier: "fast", phase: "refinement" },
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

  // Layout constants — generous spacing to avoid overlaps
  const nodeW = 170;
  const nodeH = 44;
  const colGap = 30;    // horizontal gap between nodes
  const rowGap = 40;    // vertical gap between rows
  const padX = 40;      // left padding
  const titleH = 50;    // space for title
  const phaseH = 28;    // space for phase labels
  const topY = titleH + phaseH;

  // 4 columns
  const colX = (col: number) => padX + col * (nodeW + colGap);
  const rowY = (row: number) => topY + row * (nodeH + rowGap);

  // Explicit grid positions for each node
  const positions: Record<string, { x: number; y: number }> = {};
  nodes.forEach((n, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    positions[n.id] = { x: colX(col), y: rowY(row) };
  });

  // Total dimensions
  const totalW = padX * 2 + 4 * nodeW + 3 * colGap;
  const lastRowY = rowY(4); // row 4 = last row (QC, Finalize)
  const retryLoopExtra = 40;
  const legendH = 30;
  const totalH = lastRowY + nodeH + retryLoopExtra + legendH + 20;

  // Arrow connections (sequential flow)
  const connections = nodes.slice(0, -1).map((_, i) => ({
    from: nodes[i].id,
    to: nodes[i + 1].id,
  }));

  return (
    <div className="w-full overflow-x-auto py-4 px-4">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[640px]"
      >
        {/* Defs */}
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
        <rect width={totalW} height={totalH} fill="url(#ht-grid)" />

        {/* Title */}
        <text
          x={totalW / 2}
          y={30}
          textAnchor="middle"
          fill="hsl(0 0% 98%)"
          fontSize="14"
          fontWeight="600"
          fontFamily="var(--font-inter), system-ui"
        >
          History Tales — 18-Node LangGraph Pipeline
        </text>

        {/* Phase labels across top */}
        {[
          { label: "RESEARCH", cols: [0, 1] },
          { label: "ANALYSIS", cols: [2, 3] },
        ].map((phase) => {
          const x1 = colX(phase.cols[0]);
          const x2 = colX(phase.cols[1]) + nodeW;
          const cx = (x1 + x2) / 2;
          return (
            <g key={phase.label}>
              <text
                x={cx}
                y={titleH + 12}
                textAnchor="middle"
                fill="hsl(0 0% 45%)"
                fontSize="9"
                fontWeight="500"
                letterSpacing="1.5"
                fontFamily="var(--font-inter), system-ui"
              >
                {phase.label}
              </text>
              <line x1={x1} y1={titleH + 18} x2={x2} y2={titleH + 18} stroke="hsl(0 0% 100% / 0.06)" strokeWidth="0.5" />
            </g>
          );
        })}

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
                fontSize="10.5"
                fontWeight="500"
                fontFamily="var(--font-inter), system-ui"
              >
                {node.label}
              </text>
              <text
                x={pos.x + nodeW / 2}
                y={pos.y + 34}
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

          // Same row → horizontal arrow
          if (Math.abs(from.y - to.y) < 5) {
            return (
              <line
                key={i}
                x1={from.x + nodeW + 1}
                y1={fromCy}
                x2={to.x - 1}
                y2={toCy}
                stroke="hsl(0 0% 30%)"
                strokeWidth="1"
                markerEnd="url(#ht-arrow)"
              />
            );
          }

          // Row wrap: last col → first col of next row
          // Route: down from source center bottom, then left to target center
          const fromBotX = from.x + nodeW / 2;
          const fromBotY = from.y + nodeH;
          const toBotY = to.y + nodeH / 2;
          const toLeftX = to.x;
          const midY = fromBotY + rowGap / 2;
          return (
            <path
              key={i}
              d={`M ${fromBotX} ${fromBotY} L ${fromBotX} ${midY} L ${toLeftX - 14} ${midY} L ${toLeftX - 14} ${toBotY} L ${toLeftX} ${toBotY}`}
              fill="none"
              stroke="hsl(0 0% 30%)"
              strokeWidth="1"
              markerEnd="url(#ht-arrow)"
            />
          );
        })}

        {/* QC → Script Generation retry loop */}
        {(() => {
          const qc = positions.quality_check;
          const sg = positions.script_gen;
          const loopBottomY = qc.y + nodeH + retryLoopExtra / 1.5;
          const qcCx = qc.x + nodeW / 2;
          const sgCx = sg.x + nodeW + 10; // right side of script gen
          return (
            <>
              <path
                d={`M ${qcCx} ${qc.y + nodeH} L ${qcCx} ${loopBottomY} L ${sgCx} ${loopBottomY} L ${sgCx} ${sg.y + nodeH / 2}`}
                fill="none"
                stroke="hsl(0 72% 51% / 0.5)"
                strokeWidth="1"
                strokeDasharray="5 3"
                markerEnd="url(#ht-arrow-red)"
              />
              <text
                x={(qcCx + sgCx) / 2}
                y={loopBottomY - 5}
                textAnchor="middle"
                fill="hsl(0 72% 51% / 0.7)"
                fontSize="8"
                fontFamily="var(--font-mono), monospace"
              >
                QC fail → retry (max 2)
              </text>
            </>
          );
        })()}

        {/* Dual model architecture annotation — positioned top-right, clear of nodes */}
        {(() => {
          const annoX = colX(3) + nodeW + 16;
          // If annotation would go off-canvas, place it below the title instead
          const fitsRight = annoX + 180 < totalW;
          const ax = fitsRight ? annoX : colX(2);
          const ay = fitsRight ? topY : titleH - 20;
          // Only render if it fits; otherwise omit to avoid overlap
          if (!fitsRight) return null;
          return (
            <g>
              <rect x={ax} y={ay} width="176" height="64" rx="6" fill="hsl(0 0% 100% / 0.02)" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1" strokeDasharray="3 3" />
              <text x={ax + 88} y={ay + 16} textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="8" fontWeight="600" letterSpacing="0.5" fontFamily="var(--font-inter), system-ui">
                DUAL-MODEL ARCHITECTURE
              </text>
              <text x={ax + 88} y={ay + 30} textAnchor="middle" fill="hsl(217 91% 60%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
                Creative: GPT-5 (prose)
              </text>
              <text x={ax + 88} y={ay + 42} textAnchor="middle" fill="hsl(142 71% 45%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
                Fast: GPT-5.2 (structured)
              </text>
              <text x={ax + 88} y={ay + 55} textAnchor="middle" fill="hsl(0 0% 45%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
                60% cost + latency reduction
              </text>
            </g>
          );
        })()}

        {/* Legend */}
        {(() => {
          const ly = totalH - 24;
          const items = [
            { label: "Creative Tier (GPT-5)", tier: "creative" },
            { label: "Fast Tier (GPT-5.2)", tier: "fast" },
            { label: "Deterministic Gate", tier: "gate" },
            { label: "No LLM", tier: "none" },
          ];
          const spacing = (totalW - padX * 2) / (items.length + 1);
          return (
            <g>
              {items.map((item, i) => {
                const lx = padX + i * spacing;
                return (
                  <g key={item.tier}>
                    <rect x={lx} y={ly} width="12" height="12" rx="2" fill={tierColors[item.tier].fill} stroke={tierColors[item.tier].stroke} strokeWidth="1" />
                    <text x={lx + 18} y={ly + 10} fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">
                      {item.label}
                    </text>
                  </g>
                );
              })}
              {/* Retry loop legend item */}
              {(() => {
                const rlx = padX + items.length * spacing;
                return (
                  <g>
                    <line x1={rlx} y1={ly + 6} x2={rlx + 30} y2={ly + 6} stroke="hsl(0 72% 51% / 0.5)" strokeWidth="1" strokeDasharray="5 3" />
                    <text x={rlx + 36} y={ly + 10} fill="hsl(0 0% 55%)" fontSize="8.5" fontFamily="var(--font-inter), system-ui">
                      Retry Loop
                    </text>
                  </g>
                );
              })()}
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
