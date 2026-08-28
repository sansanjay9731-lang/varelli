"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, X, Sparkles, ShieldCheck } from "@/components/ui/icons";

interface WhatsAppFloatingCTAProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppFloatingCTA({
  phoneNumber = "+919900000000",
  defaultMessage = "Hello VARELLI, I would like to schedule an architectural consultation for our residence.",
}: WhatsAppFloatingCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createWhatsAppLink = (customText?: string) => {
    const text = customText || defaultMessage;
    // Replace with the clean numerical phone number (e.g., 91XXXXXXXXXX)
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Popup Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0F1117]/95 border border-[var(--gold)]/40 backdrop-blur-2xl shadow-2xl p-5 text-white animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <MessageCircle size={18} />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm tracking-wide text-white">
                  VARELLI Private Desk
                </h4>
                <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Senior Systems Architect Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Inquiry Options */}
          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            Connect directly with our engineering team for floorplan reviews, brand cut-sheets, or private showroom visits.
          </p>

          <div className="space-y-2 mb-4">
            {[
              { label: "Request Villa System BOM & Estimate", msg: "Hello VARELLI, I would like to request an architectural BOM and budget estimate for our luxury residence." },
              { label: "Book Private Dolby Atmos Demo (Bangalore)", msg: "Hello VARELLI, I would like to book a private audition at your Dolby Atmos Reference Cinema in Bangalore." },
              { label: "Consult on European KNX & Lighting Design", msg: "Hello VARELLI, I am an architect/homeowner looking for KNX building automation and DALI lighting design." },
            ].map((opt, i) => (
              <a
                key={i}
                href={createWhatsAppLink(opt.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-left px-3.5 py-2 rounded-lg bg-[#161922] hover:bg-[var(--gold)] text-gray-300 hover:text-[#08080A] border border-gray-800 hover:border-[var(--gold)] text-xs font-mono transition-all duration-200"
              >
                → {opt.label}
              </a>
            ))}
          </div>

          {/* Direct Actions */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-800/80">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg shadow-emerald-900/30 transition-all font-mono"
            >
              <MessageCircle size={14} />
              <span>Chat WhatsApp</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-white border border-gray-700 font-medium text-xs transition-all font-mono"
            >
              <Phone size={14} />
              <span>Call Architect</span>
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-3 px-4 py-3 rounded-full bg-[#0F1117]/90 hover:bg-[#151922] border border-[var(--gold)]/50 backdrop-blur-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Contact VARELLI on WhatsApp"
      >
        {/* Pulsing Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>

        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-mono font-bold tracking-wider text-white">
            WhatsApp Desk
          </span>
        </div>

        <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/40">
          Instant
        </span>
      </button>
    </div>
  );
}
