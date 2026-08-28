"use client";

import React, { useEffect, useState } from "react";
import { Terminal, Activity } from "@/components/ui/icons";

interface NeuralTelemetryFeedProps {
  logs: string[];
}

export default function NeuralTelemetryFeed({ logs }: NeuralTelemetryFeedProps) {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);

  useEffect(() => {
    setDisplayedLogs([]);
    logs.forEach((log, index) => {
      const timer = setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, log]);
      }, index * 350);
      return () => clearTimeout(timer);
    });
  }, [logs]);

  return (
    <div className="w-full rounded-xl bg-[#07080A] border border-[var(--border)] p-4 font-mono text-xs overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-800/80 pb-2.5 mb-3 text-[var(--text-muted)]">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-[var(--gold)]" />
          <span className="text-[11px] uppercase tracking-widest text-[var(--gold)] font-bold">
            NEURAL REASONING & PROTOCOL STREAM
          </span>
        </div>
        <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>REALTIME TENSOR THREAD</span>
        </div>
      </div>

      <div className="space-y-1.5 max-h-36 overflow-y-auto font-mono text-[11px] scrollbar-thin">
        {displayedLogs.map((line, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <span className="text-gray-600 select-none">[{String(idx + 1).padStart(2, "0")}]</span>
            <span className={line.includes("Detected") || line.includes("Target") ? "text-emerald-300" : "text-gray-300"}>
              {line}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
