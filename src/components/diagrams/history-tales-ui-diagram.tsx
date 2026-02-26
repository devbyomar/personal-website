"use client";

export function HistoryTalesUiDiagram() {
  const totalW = 880;
  const totalH = 480;
  const padX = 40;
  const padY = 50;

  // Color palette
  const c = {
    card: { fill: "hsl(0 0% 100% / 0.04)", stroke: "hsl(0 0% 100% / 0.12)" },
    header: { fill: "hsl(217 91% 60% / 0.06)", stroke: "hsl(217 91% 60% / 0.2)" },
    form: { fill: "hsl(142 71% 45% / 0.06)", stroke: "hsl(142 71% 45% / 0.2)" },
    tracker: { fill: "hsl(280 65% 60% / 0.06)", stroke: "hsl(280 65% 60% / 0.2)" },
    script: { fill: "hsl(38 92% 50% / 0.06)", stroke: "hsl(38 92% 50% / 0.2)" },
    history: { fill: "hsl(0 72% 51% / 0.06)", stroke: "hsl(0 72% 51% / 0.2)" },
    tab: { fill: "hsl(0 0% 100% / 0.06)", stroke: "hsl(0 0% 100% / 0.1)" },
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
          <pattern id="ui-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(0 0% 100% / 0.03)" strokeWidth="0.5" />
          </pattern>
          <marker id="ui-arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="7" markerHeight="5" orient="auto-start-auto">
            <path d="M 0 0 L 10 3.5 L 0 7" fill="hsl(0 0% 45%)" />
          </marker>
        </defs>
        <rect width={totalW} height={totalH} fill="url(#ui-grid)" />

        {/* Title */}
        <text x={totalW / 2} y={28} textAnchor="middle" fill="hsl(0 0% 98%)" fontSize="14" fontWeight="600" fontFamily="var(--font-inter), system-ui">
          History Tales — Web Interface Layout
        </text>

        {/* ── Browser chrome ── */}
        <rect x={padX} y={padY} width={totalW - padX * 2} height={totalH - padY - 30} rx="10" fill="hsl(0 0% 8%)" stroke="hsl(0 0% 20%)" strokeWidth="1" />

        {/* Browser dots */}
        <circle cx={padX + 18} cy={padY + 14} r="5" fill="hsl(0 72% 51% / 0.6)" />
        <circle cx={padX + 34} cy={padY + 14} r="5" fill="hsl(38 92% 50% / 0.6)" />
        <circle cx={padX + 50} cy={padY + 14} r="5" fill="hsl(142 71% 45% / 0.6)" />

        {/* URL bar */}
        <rect x={padX + 70} y={padY + 6} width={300} height={16} rx="4" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 25%)" strokeWidth="0.5" />
        <text x={padX + 80} y={padY + 18} fill="hsl(0 0% 45%)" fontSize="7.5" fontFamily="var(--font-mono), monospace">
          localhost:3000
        </text>

        {/* ── App header bar ── */}
        <rect x={padX + 2} y={padY + 28} width={totalW - padX * 2 - 4} height={30} rx="0" fill={c.header.fill} stroke={c.header.stroke} strokeWidth="0.5" />
        <text x={padX + 22} y={padY + 48} fill="hsl(0 0% 60%)" fontSize="12" fontFamily="var(--font-inter), system-ui">
          🎬
        </text>
        <text x={padX + 40} y={padY + 47} fill="hsl(217 91% 60%)" fontSize="10" fontWeight="600" fontFamily="var(--font-inter), system-ui">
          History Tales
        </text>
        <text x={padX + 114} y={padY + 47} fill="hsl(0 0% 50%)" fontSize="8" fontFamily="var(--font-inter), system-ui">
          Script Generator
        </text>
        <text x={totalW - padX - 20} y={padY + 47} textAnchor="end" fill="hsl(0 0% 45%)" fontSize="8" fontFamily="var(--font-inter), system-ui">
          API Docs
        </text>

        {/* ── Content area ── */}
        {/* 12-col grid: left panel (4 cols), right panel (8 cols) */}
        {(() => {
          const contentX = padX + 12;
          const contentY = padY + 66;
          const contentW = totalW - padX * 2 - 24;
          const leftW = contentW * 0.33;
          const rightW = contentW * 0.64;
          const rightX = contentX + leftW + contentW * 0.03;
          const contentH = totalH - padY - 30 - 74;

          return (
            <>
              {/* ── LEFT PANEL ── */}
              {/* Generate Form card */}
              <rect x={contentX} y={contentY} width={leftW} height={contentH * 0.55} rx="6" fill={c.form.fill} stroke={c.form.stroke} strokeWidth="1" />
              <text x={contentX + 12} y={contentY + 20} fill="hsl(142 71% 45%)" fontSize="9" fontWeight="600" fontFamily="var(--font-inter), system-ui">
                ⚡ Generate Script
              </text>
              <text x={contentX + 12} y={contentY + 33} fill="hsl(0 0% 45%)" fontSize="7" fontFamily="var(--font-inter), system-ui">
                Configure your documentary script parameters
              </text>

              {/* Form fields */}
              {[
                { label: "Video Length", value: "12 min → ~1860 words", y: 44 },
                { label: "Era Focus", value: "World War II", y: 64 },
                { label: "Tone", value: "Cinematic Serious", y: 84 },
                { label: "Sensitivity", value: "General Audiences", y: 104 },
                { label: "Format", value: "Auto (rotation)", y: 124 },
                { label: "Narrative Lens", value: "civilians", y: 144 },
              ].map((field) => (
                <g key={field.label}>
                  <text x={contentX + 12} y={contentY + field.y + 9} fill="hsl(0 0% 55%)" fontSize="7" fontFamily="var(--font-inter), system-ui">
                    {field.label}
                  </text>
                  <rect x={contentX + 90} y={contentY + field.y} width={leftW - 104} height={14} rx="3" fill="hsl(0 0% 15%)" stroke="hsl(0 0% 25%)" strokeWidth="0.5" />
                  <text x={contentX + 95} y={contentY + field.y + 10} fill="hsl(0 0% 50%)" fontSize="6.5" fontFamily="var(--font-mono), monospace">
                    {field.value}
                  </text>
                </g>
              ))}

              {/* Generate button */}
              <rect x={contentX + 12} y={contentY + contentH * 0.55 - 32} width={leftW - 24} height={22} rx="4" fill="hsl(217 91% 60% / 0.2)" stroke="hsl(217 91% 60% / 0.4)" strokeWidth="1" />
              <text x={contentX + leftW / 2} y={contentY + contentH * 0.55 - 17} textAnchor="middle" fill="hsl(217 91% 60%)" fontSize="8" fontWeight="600" fontFamily="var(--font-inter), system-ui">
                ▶ Generate
              </text>

              {/* Run History card */}
              <rect x={contentX} y={contentY + contentH * 0.58} width={leftW} height={contentH * 0.42} rx="6" fill={c.history.fill} stroke={c.history.stroke} strokeWidth="1" />
              <text x={contentX + 12} y={contentY + contentH * 0.58 + 20} fill="hsl(0 72% 51% / 0.8)" fontSize="9" fontWeight="600" fontFamily="var(--font-inter), system-ui">
                📋 Run History
              </text>

              {/* History items */}
              {[
                { title: "The Fall of Constantinople", status: "✅", y: 32 },
                { title: "Operation Market Garden", status: "✅", y: 52 },
                { title: "The Siege of Leningrad", status: "❌", y: 72 },
              ].map((run, i) => (
                <g key={run.title}>
                  <rect x={contentX + 10} y={contentY + contentH * 0.58 + run.y} width={leftW - 20} height={16} rx="3" fill={i === 0 ? "hsl(217 91% 60% / 0.08)" : "hsl(0 0% 100% / 0.02)"} stroke={i === 0 ? "hsl(217 91% 60% / 0.15)" : "hsl(0 0% 100% / 0.05)"} strokeWidth="0.5" />
                  <text x={contentX + 16} y={contentY + contentH * 0.58 + run.y + 11} fill="hsl(0 0% 70%)" fontSize="6.5" fontFamily="var(--font-inter), system-ui">
                    {run.status} {run.title}
                  </text>
                </g>
              ))}

              {/* ── RIGHT PANEL ── */}
              {/* Pipeline Tracker card */}
              <rect x={rightX} y={contentY} width={rightW} height={contentH * 0.38} rx="6" fill={c.tracker.fill} stroke={c.tracker.stroke} strokeWidth="1" />
              <text x={rightX + 12} y={contentY + 20} fill="hsl(280 65% 60%)" fontSize="9" fontWeight="600" fontFamily="var(--font-inter), system-ui">
                🔄 Pipeline Progress
              </text>

              {/* Progress bar */}
              <rect x={rightX + 12} y={contentY + 30} width={rightW - 24} height={6} rx="3" fill="hsl(0 0% 15%)" />
              <rect x={rightX + 12} y={contentY + 30} width={(rightW - 24) * 0.67} height={6} rx="3" fill="hsl(217 91% 60% / 0.5)" />
              <text x={rightX + rightW - 12} y={contentY + 35} textAnchor="end" fill="hsl(0 0% 50%)" fontSize="6.5" fontFamily="var(--font-mono), monospace">
                12 / 18
              </text>

              {/* Node list */}
              {[
                { icon: "✅", label: "Topic Discovery", tier: "Fast", color: "hsl(142 71% 45%)", y: 44 },
                { icon: "✅", label: "Format Guard", tier: "No LLM", color: "hsl(0 0% 50%)", y: 58 },
                { icon: "✅", label: "Topic Scoring", tier: "Fast", color: "hsl(142 71% 45%)", y: 72 },
                { icon: "✅", label: "Research Fetch", tier: "No LLM", color: "hsl(0 0% 50%)", y: 86 },
                { icon: "⏳", label: "Script Generation", tier: "Creative", color: "hsl(217 91% 60%)", y: 100 },
                { icon: "○", label: "Fact-Tighten", tier: "Creative", color: "hsl(217 91% 60%)", y: 114 },
              ].map((node) => (
                <g key={node.label}>
                  <text x={rightX + 16} y={node.y + contentY + 9} fill="hsl(0 0% 55%)" fontSize="8" fontFamily="var(--font-inter), system-ui">
                    {node.icon}
                  </text>
                  <text x={rightX + 32} y={node.y + contentY + 9} fill={node.icon === "○" ? "hsl(0 0% 40%)" : "hsl(0 0% 75%)"} fontSize="8" fontWeight="500" fontFamily="var(--font-inter), system-ui">
                    {node.label}
                  </text>
                  <rect x={rightX + rightW - 60} y={node.y + contentY} width={44} height={12} rx="3" fill="hsl(0 0% 100% / 0.04)" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="0.5" />
                  <text x={rightX + rightW - 38} y={node.y + contentY + 9} textAnchor="middle" fill={node.color} fontSize="6" fontFamily="var(--font-mono), monospace">
                    {node.tier}
                  </text>
                </g>
              ))}

              {/* Cancel button */}
              <rect x={rightX + rightW - 80} y={contentY + contentH * 0.38 - 26} width={66} height={16} rx="4" fill="hsl(0 72% 51% / 0.15)" stroke="hsl(0 72% 51% / 0.3)" strokeWidth="0.5" />
              <text x={rightX + rightW - 47} y={contentY + contentH * 0.38 - 15} textAnchor="middle" fill="hsl(0 72% 51%)" fontSize="7" fontWeight="500" fontFamily="var(--font-inter), system-ui">
                ⏹ Cancel
              </text>

              {/* Script Viewer card */}
              <rect x={rightX} y={contentY + contentH * 0.42} width={rightW} height={contentH * 0.58} rx="6" fill={c.script.fill} stroke={c.script.stroke} strokeWidth="1" />

              {/* Script header */}
              <text x={rightX + 12} y={contentY + contentH * 0.42 + 20} fill="hsl(38 92% 50% / 0.8)" fontSize="9" fontWeight="600" fontFamily="var(--font-inter), system-ui">
                📜 The Fall of Constantinople
              </text>

              {/* Badges */}
              {[
                { label: "Countdown", color: "hsl(0 0% 100% / 0.1)" },
                { label: "QC Pass", color: "hsl(142 71% 45% / 0.15)" },
                { label: "1,860 words", color: "hsl(0 0% 100% / 0.08)" },
              ].map((badge, i) => (
                <g key={badge.label}>
                  <rect x={rightX + 12 + i * 72} y={contentY + contentH * 0.42 + 28} width={64} height={14} rx="4" fill={badge.color} stroke="hsl(0 0% 100% / 0.1)" strokeWidth="0.5" />
                  <text x={rightX + 12 + i * 72 + 32} y={contentY + contentH * 0.42 + 38} textAnchor="middle" fill="hsl(0 0% 65%)" fontSize="6.5" fontWeight="500" fontFamily="var(--font-inter), system-ui">
                    {badge.label}
                  </text>
                </g>
              ))}

              {/* Export buttons */}
              <rect x={rightX + rightW - 108} y={contentY + contentH * 0.42 + 14} width={44} height={14} rx="3" fill="hsl(0 0% 100% / 0.04)" stroke="hsl(0 0% 100% / 0.1)" strokeWidth="0.5" />
              <text x={rightX + rightW - 86} y={contentY + contentH * 0.42 + 24} textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="6" fontFamily="var(--font-inter), system-ui">
                ↓ Script
              </text>
              <rect x={rightX + rightW - 58} y={contentY + contentH * 0.42 + 14} width={44} height={14} rx="3" fill="hsl(0 0% 100% / 0.04)" stroke="hsl(0 0% 100% / 0.1)" strokeWidth="0.5" />
              <text x={rightX + rightW - 36} y={contentY + contentH * 0.42 + 24} textAnchor="middle" fill="hsl(0 0% 55%)" fontSize="6" fontFamily="var(--font-inter), system-ui">
                ↓ Sources
              </text>

              {/* Tabs */}
              {[
                { label: "📝 Script", active: true },
                { label: "📚 Sources", active: false },
                { label: "🛡 QC Report", active: false },
                { label: "📊 Stats", active: false },
              ].map((tab, i) => (
                <g key={tab.label}>
                  <rect x={rightX + 12 + i * 80} y={contentY + contentH * 0.42 + 50} width={72} height={16} rx="3" fill={tab.active ? "hsl(217 91% 60% / 0.1)" : "hsl(0 0% 100% / 0.03)"} stroke={tab.active ? "hsl(217 91% 60% / 0.2)" : "hsl(0 0% 100% / 0.06)"} strokeWidth="0.5" />
                  <text x={rightX + 12 + i * 80 + 36} y={contentY + contentH * 0.42 + 61} textAnchor="middle" fill={tab.active ? "hsl(217 91% 60%)" : "hsl(0 0% 50%)"} fontSize="7" fontWeight={tab.active ? "600" : "400"} fontFamily="var(--font-inter), system-ui">
                    {tab.label}
                  </text>
                </g>
              ))}

              {/* Script content area */}
              <rect x={rightX + 12} y={contentY + contentH * 0.42 + 74} width={rightW - 24} height={contentH * 0.58 - 86} rx="4" fill="hsl(0 0% 6%)" stroke="hsl(0 0% 15%)" strokeWidth="0.5" />

              {/* Fake script text lines */}
              {[0, 1, 2, 3, 4, 5, 6].map((line) => (
                <rect
                  key={line}
                  x={rightX + 24}
                  y={contentY + contentH * 0.42 + 84 + line * 12}
                  width={line === 0 ? rightW * 0.5 : line === 6 ? rightW * 0.3 : rightW * 0.7 + (line % 3) * 20 - 80}
                  height={4}
                  rx="2"
                  fill={line === 0 ? "hsl(0 0% 35%)" : "hsl(0 0% 18%)"}
                />
              ))}

              {/* Layout annotations */}
              {/* Left panel annotation */}
              <text x={contentX + leftW / 2} y={totalH - 38} textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="7" fontFamily="var(--font-mono), monospace">
                lg:col-span-4
              </text>
              {/* Right panel annotation */}
              <text x={rightX + rightW / 2} y={totalH - 38} textAnchor="middle" fill="hsl(0 0% 40%)" fontSize="7" fontFamily="var(--font-mono), monospace">
                lg:col-span-8
              </text>
            </>
          );
        })()}

        {/* Legend */}
        <g transform={`translate(${padX}, ${totalH - 18})`}>
          {[
            { label: "Generate Form", color: c.form },
            { label: "Pipeline Tracker (SSE)", color: c.tracker },
            { label: "Script Viewer (Tabbed)", color: c.script },
            { label: "Run History", color: c.history },
          ].map((item, i) => (
            <g key={item.label} transform={`translate(${i * 200}, 0)`}>
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
