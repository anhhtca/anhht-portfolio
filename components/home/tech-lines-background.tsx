import React from "react";

export function TechLinesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Deep dark tech base with ambient lighting */}
      <div className="absolute inset-0 bg-[#080b11]" />

      {/* Ambient radial glow centered behind avatar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,rgba(30,41,59,0.55)_0%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.12)_0%,rgba(99,102,241,0.05)_45%,transparent_75%)]" />

      {/* Cyber Tech Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 90%)",
        }}
      />

      {/* Moving Horizontal Tech Beams */}
      <div
        className="absolute left-0 w-64 sm:w-96 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-white shadow-[0_0_12px_rgba(56,189,248,0.9),0_0_24px_rgba(56,189,248,0.4)] animate-tech-h1"
        style={{ top: "22%" }}
      />
      <div
        className="absolute left-0 w-72 sm:w-80 h-[1.5px] bg-gradient-to-l from-transparent via-slate-200 to-white shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-tech-h2"
        style={{ top: "52%" }}
      />
      <div
        className="absolute left-0 w-60 sm:w-72 h-[1.5px] bg-gradient-to-r from-transparent via-sky-400 to-white shadow-[0_0_10px_rgba(56,189,248,0.7)] animate-tech-h3"
        style={{ top: "78%" }}
      />

      {/* Moving Vertical Tech Beams */}
      <div
        className="absolute top-0 w-[1.5px] h-48 sm:h-64 bg-gradient-to-b from-transparent via-cyan-400 to-white shadow-[0_0_10px_rgba(56,189,248,0.7)] animate-tech-v1"
        style={{ left: "18%" }}
      />
      <div
        className="absolute top-0 w-[1.5px] h-48 sm:h-60 bg-gradient-to-t from-transparent via-slate-300 to-white shadow-[0_0_10px_rgba(255,255,255,0.7)] animate-tech-v2"
        style={{ left: "82%" }}
      />
      <div
        className="absolute top-0 w-[1px] h-40 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-tech-v3"
        style={{ left: "50%" }}
      />

      {/* Subtle pulsing grid nodes */}
      <div className="absolute top-[22%] left-[30%] w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-pulse" />
      <div
        className="absolute top-[52%] left-[70%] w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(56,189,248,0.9)] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[78%] left-[25%] w-1.5 h-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[35%] left-[82%] w-1.5 h-1.5 rounded-full bg-cyan-300/80 shadow-[0_0_8px_rgba(56,189,248,0.8)] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Clean hairline tech divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
    </div>
  );
}
