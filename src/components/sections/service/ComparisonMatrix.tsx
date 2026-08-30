"use client";

import React from "react";
import { Check, X, ShieldCheck, Sparkles, MessageCircle } from "@/components/ui/icons";

interface ComparisonMatrixProps {
  title?: string;
  subtitle?: string;
}

export default function ComparisonMatrix({
  title = "Why India’s Top Architects & Discerning Clients Choose VARELLI",
  subtitle = "How our engineering-led approach fundamentally differs from conventional retail AV shops and local electrical contractors.",
}: ComparisonMatrixProps) {
  const rows = [
    {
      feature: "Hardware Architecture",
      varelli: "Open-Protocol Industrial KNX / DALI-2 (Decentralized, 30+ year lifespan)",
      others: "Proprietary wireless hubs (Cloud-dependent, discontinued in 3-5 years)",
    },
    {
      feature: "Acoustic & Daylighting Engineering",
      varelli: "Computational RT60 raytracing, CEDIA CTA/RP22, and DALI circadian tuning",
      others: "Trial-and-error speaker placement without room impulse measurement",
    },
    {
      feature: "Team & Commissioning",
      varelli: "In-house certified KNX & THX acoustic engineers (Zero outsourcing)",
      others: "Subcontracted electricians with no protocol-level training",
    },
    {
      feature: "Documentation & Schematics",
      varelli: "AutoCAD architectural single-line wiring diagrams & load schedules provided",
      others: "Unlabeled cables with no schematic handover",
    },
    {
      feature: "Warranty & Support SLA",
      varelli: "5-Year comprehensive hardware warranty + lifetime acoustic calibration",
      others: "1-Year vendor warranty with high hourly service call charges",
    },
    {
      feature: "Direct WhatsApp Private Desk",
      varelli: "Direct line to Senior Systems Architect with <15 min response time",
      others: "Call center ticketing systems with delayed turnaround",
    },
  ];

  return (
    <section className="section-padding bg-[#08080A] border-t border-[var(--border)] relative overflow-hidden">
      <div className="container-varelli">
        <div className="max-w-3xl mb-14">
          <span className="badge-mono mb-4 block">The Engineering Difference</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-[-0.02em]">
            {title}
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-body">
            {subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-1)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-[#0F1117]">
                <th className="p-5 md:p-6 text-xs font-mono uppercase tracking-wider text-gray-400 w-1/3">
                  Engineering Criterion
                </th>
                <th className="p-5 md:p-6 text-xs font-mono uppercase tracking-wider text-[var(--gold)] w-1/3 bg-[var(--gold)]/5 border-x border-[var(--gold)]/20">
                  <div className="flex items-center space-x-2">
                    <Sparkles size={14} />
                    <span className="font-bold">VARELLI Standard</span>
                  </div>
                </th>
                <th className="p-5 md:p-6 text-xs font-mono uppercase tracking-wider text-gray-500 w-1/3">
                  Typical Retail / Local Integrators
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 font-body text-xs md:text-sm">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-5 md:p-6 font-semibold text-white">
                    {row.feature}
                  </td>
                  <td className="p-5 md:p-6 text-gray-200 bg-[var(--gold)]/[0.02] border-x border-[var(--gold)]/20">
                    <div className="flex items-start space-x-2.5">
                      <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{row.varelli}</span>
                    </div>
                  </td>
                  <td className="p-5 md:p-6 text-gray-400">
                    <div className="flex items-start space-x-2.5">
                      <X size={16} className="text-rose-400/70 flex-shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Direct CTA */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[var(--surface-1)] via-[#141822] to-[var(--surface-1)] border border-[var(--gold)]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck size={24} className="text-[var(--gold)] flex-shrink-0" />
            <div>
              <h4 className="font-display font-semibold text-white text-base">Ready for an uncompromising residential system?</h4>
              <p className="text-xs text-gray-400">Connect directly with our senior engineering desk on WhatsApp.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919964984695?text=Hello%20VARELLI%2C%20I%20would%20like%20to%20discuss%20an%20engineering-grade%20smart%20home%20solution%20for%20our%20residence."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs font-mono transition-all shadow-lg shadow-emerald-950/40 flex-shrink-0"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
