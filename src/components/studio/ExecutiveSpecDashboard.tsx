"use client";

import React, { useState } from "react";
import { SystemTopologySchedule } from "@/lib/ai/topology-dispatcher";
import { SpatialAnalysisResult } from "@/lib/ai/spatial-analyzer";
import { FileText, Download, CheckCircle2, ShieldCheck, Cpu, PhoneCall, Zap, Volume2, Wind } from "@/components/ui/icons";

interface ExecutiveSpecDashboardProps {
  analysis: SpatialAnalysisResult;
  topology: SystemTopologySchedule;
  planName: string;
}

export default function ExecutiveSpecDashboard({ analysis, topology, planName }: ExecutiveSpecDashboardProps) {
  const [activeTab, setActiveTab] = useState<"BOM" | "TOPOLOGY" | "FINANCIAL">("BOM");

  const handleDownloadPDF = () => {
    alert("Generating Executive Architectural Technology Schedule (PDF with Watermark)...");
  };

  return (
    <div className="w-full space-y-8">
      {/* Executive Summary Header */}
      <div className="p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--gold)]/40 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
          <div>
            <span className="badge-mono text-[10px] text-[var(--gold)] uppercase tracking-widest">
              INVESTOR & ARCHITECTURAL EXECUTIVE SPECIFICATION
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-1">
              Project Technology Matrix & BOM
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
              Spec ID: {analysis.planId} • Plan: {planName} ({analysis.totalAreaSqFt.toLocaleString()} sq ft)
            </p>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
              ENGINEERED BUDGET RANGE
            </span>
            <span className="font-display text-2xl font-bold text-[var(--gold)]">
              {topology.financialSummary.formattedTotalRange}
            </span>
          </div>
        </div>

        {/* System Metric KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="flex items-center space-x-2 text-[var(--gold)] mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider">KNX BUS LOAD</span>
            </div>
            <span className="font-display text-xl font-bold text-white">
              {topology.knxBusCurrentDrawMa} mA
            </span>
            <span className="text-[10px] text-[var(--text-muted)] block font-mono">
              Limit: {topology.knxBusPowerSupplyMa} mA
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="flex items-center space-x-2 text-[var(--gold)] mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider">DALI CIRCUITS</span>
            </div>
            <span className="font-display text-xl font-bold text-white">
              {topology.daliBallastsConfigured} Channels
            </span>
            <span className="text-[10px] text-[var(--text-muted)] block font-mono">
              {topology.daliAddressableLoops} Broadcast Loops
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="flex items-center space-x-2 text-[var(--gold)] mb-1">
              <Volume2 className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider">DOLBY ATMOS</span>
            </div>
            <span className="font-display text-xl font-bold text-white">
              9.1.6 3D
            </span>
            <span className="text-[10px] text-[var(--text-muted)] block font-mono">
              16 Calibrated Channels
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="flex items-center space-x-2 text-[var(--gold)] mb-1">
              <Wind className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-wider">FRESH AIR IAQ</span>
            </div>
            <span className="font-display text-xl font-bold text-white">
              {topology.freshAirCfmRequired} CFM
            </span>
            <span className="text-[10px] text-[var(--text-muted)] block font-mono">
              Positive Pressure
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[var(--border)] space-x-4 text-xs font-mono">
          {(["BOM", "TOPOLOGY", "FINANCIAL"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 font-semibold tracking-wider transition-all border-b-2 ${
                activeTab === tab
                  ? "border-[var(--gold)] text-[var(--gold)]"
                  : "border-transparent text-[var(--text-muted)] hover:text-white"
              }`}
            >
              {tab === "BOM" && "ITEMIZED BILL OF MATERIALS (BOM)"}
              {tab === "TOPOLOGY" && "SINGLE-LINE TOPOLOGY SPEC"}
              {tab === "FINANCIAL" && "INVESTMENT BREAKDOWN & ROI"}
            </button>
          ))}
        </div>

        {/* Tab 1: Itemized BOM */}
        {activeTab === "BOM" && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-gray-800 text-[var(--gold)]">
                  <th className="pb-3">SKU & HARDWARE COMPONENT</th>
                  <th className="pb-3">ORIGIN</th>
                  <th className="pb-3 text-center">QTY</th>
                  <th className="pb-3 text-right">UNIT (INR)</th>
                  <th className="pb-3 text-right">TOTAL (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-850">
                {topology.bomItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-3">
                      <span className="font-bold text-white block">{item.name}</span>
                      <span className="text-[10px] text-gray-500">{item.sku} • {item.specification}</span>
                    </td>
                    <td className="py-3 text-gray-400">{item.origin}</td>
                    <td className="py-3 text-center text-white font-bold">{item.quantity}</td>
                    <td className="py-3 text-right text-gray-300">₹{item.unitCostInr.toLocaleString()}</td>
                    <td className="py-3 text-right text-[var(--gold)] font-bold">₹{item.totalCostInr.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Single-Line Topology Spec */}
        {activeTab === "TOPOLOGY" && (
          <div className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] space-y-4 font-mono text-xs text-gray-300">
            <p className="text-[var(--gold)] font-bold uppercase">Multi-Protocol Architectural Schedule:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded bg-black/60 border border-gray-800 space-y-2">
                <span className="font-bold text-white block">1. KNX Bus Line (ISO/IEC 14543-3)</span>
                <p className="text-[11px] text-gray-400">• Cable: Green EIB-Y(St)Y 2x2x0.8mm shielded twisted pair</p>
                <p className="text-[11px] text-gray-400">• Voltage: 29V DC SELV with choke</p>
                <p className="text-[11px] text-gray-400">• Max length: 1,000m per segment without repeater</p>
              </div>

              <div className="p-4 rounded bg-black/60 border border-gray-800 space-y-2">
                <span className="font-bold text-white block">2. DALI-2 Lighting Loops (IEC 62386)</span>
                <p className="text-[11px] text-gray-400">• 128 Addressable Channels across 2 broadcast lines</p>
                <p className="text-[11px] text-gray-400">• Tunable White DT8 Circadian rhythm curve</p>
                <p className="text-[11px] text-gray-400">• 16 ms smooth logarithmic dimming transition</p>
              </div>

              <div className="p-4 rounded bg-black/60 border border-gray-800 space-y-2">
                <span className="font-bold text-white block">3. CEDIA RP22 Reference Immersive Cinema</span>
                <p className="text-[11px] text-gray-400">• Target RT60: 0.28s across 250Hz - 4kHz</p>
                <p className="text-[11px] text-gray-400">• Bass modal smoothing: 4 discrete subwoofers</p>
                <p className="text-[11px] text-gray-400">• Sound pressure level: 105 dB reference peak at listener</p>
              </div>

              <div className="p-4 rounded bg-black/60 border border-gray-800 space-y-2">
                <span className="font-bold text-white block">4. Indoor Air Quality & Central Vacuum</span>
                <p className="text-[11px] text-gray-400">• Positive pressure: 450 m³/h fresh air exchange</p>
                <p className="text-[11px] text-gray-400">• Central Vacuum: 650 AirWatts utility extraction</p>
                <p className="text-[11px] text-gray-400">• HEPA H13 Filtration: 99.97% particulate arrestance</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Financial & ROI */}
        {activeTab === "FINANCIAL" && (
          <div className="p-6 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 rounded bg-black/60 border border-gray-800">
                <span className="text-gray-400 block mb-1">HARDWARE BILL</span>
                <span className="text-xl font-bold text-white">₹{topology.financialSummary.hardwareTotalInr.toLocaleString()}</span>
              </div>
              <div className="p-4 rounded bg-black/60 border border-gray-800">
                <span className="text-gray-400 block mb-1">ENGINEERING & PROGRAMMING</span>
                <span className="text-xl font-bold text-[var(--gold)]">₹{topology.financialSummary.engineeringAndIntegrationInr.toLocaleString()}</span>
              </div>
              <div className="p-4 rounded bg-black/60 border border-gray-800">
                <span className="text-gray-400 block mb-1">ACOUSTIC & IAQ COMMISSIONING</span>
                <span className="text-xl font-bold text-white">₹{topology.financialSummary.acousticTreatmentInr.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] font-body leading-relaxed pt-2">
              All components are specified with genuine manufacturer warranties (5–10 years for KNX bus units, 20+ years for structured cabling infrastructure). VARELLI guarantees zero wireless latency and absolute privacy with local on-premise logic controllers.
            </p>
          </div>
        )}

        {/* Actions & Export */}
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleDownloadPDF}
            className="w-full sm:w-auto px-6 py-3.5 border border-[var(--gold)] text-[var(--gold)] font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-[var(--gold)]/10 flex items-center justify-center space-x-2 transition-all font-mono"
          >
            <Download className="w-4 h-4" />
            <span>Download Architectural BOM (PDF)</span>
          </button>

          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#08080A] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all text-center flex items-center justify-center space-x-2 font-mono shadow-lg shadow-[var(--gold)]/20"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book VARELLI Engineering Site Inspection</span>
          </a>
        </div>
      </div>
    </div>
  );
}
