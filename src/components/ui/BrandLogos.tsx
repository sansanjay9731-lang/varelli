import React from "react";

interface BrandLogoProps {
  brandId: string;
  className?: string;
}

export default function BrandLogo({ brandId, className = "h-7 w-auto" }: BrandLogoProps) {
  switch (brandId) {
    case "knx":
      return (
        <svg viewBox="0 0 150 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect width="150" height="44" rx="6" fill="#005A9C" fillOpacity="0.2" stroke="#0099FF" strokeWidth="1" />
          <path d="M22 10V34M22 22L36 10M22 22L36 34" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46 34V10L64 34V10" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M74 10L92 34M92 10L74 34" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="100" y="21" fill="#C5A880" fontSize="8" fontFamily="monospace" letterSpacing="1.5">GLOBAL</text>
          <text x="100" y="32" fill="#E4E4E7" fontSize="7" fontFamily="monospace" letterSpacing="1">STANDARD</text>
        </svg>
      );

    case "basalte":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 rounded-sm bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center">
            <span className="font-display font-bold text-xs text-[#C5A880]">b</span>
          </div>
          <span className="font-display tracking-[0.25em] text-base font-bold text-white uppercase">BASALTE</span>
        </div>
      );

    case "ekinex":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 border border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-[#C5A880]" />
          </div>
          <span className="font-display tracking-[0.2em] text-base font-light text-white lowercase">ekinex</span>
        </div>
      );

    case "lutron":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <span className="font-display tracking-[0.18em] text-lg font-black text-white uppercase">LUTRON</span>
          <span className="text-[8px] font-mono tracking-widest text-[#C5A880] uppercase px-1 py-0.5 border border-[#C5A880]/40 rounded">QSX</span>
        </div>
      );

    case "control4":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <span className="font-display tracking-tight text-lg font-bold text-white">Control</span>
          <span className="w-5 h-5 rounded bg-[#E31B23] text-white flex items-center justify-center font-bold text-xs">4</span>
        </div>
      );

    case "crestron":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 bg-[#005596] rounded-sm flex items-center justify-center text-white font-black text-[10px]">C</div>
          <span className="font-display tracking-[0.15em] text-base font-black text-white uppercase">CRESTRON</span>
        </div>
      );

    case "sonus-faber":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <span className="font-serif italic text-lg tracking-wider text-[#C5A880] font-normal">Sonus faber</span>
        </div>
      );

    case "kef":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
          </div>
          <span className="font-display tracking-[0.25em] text-lg font-black text-white uppercase">KEF</span>
        </div>
      );

    case "jbl-synthesis":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <span className="font-display text-lg font-black text-[#FF5A00] tracking-tight">JBL</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white font-semibold">SYNTHESIS</span>
        </div>
      );

    case "trinnov":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center text-[#C5A880] font-bold text-[10px]">T</div>
          <span className="font-display tracking-[0.2em] text-base font-bold text-white uppercase">TRINNOV</span>
        </div>
      );

    case "bowers-wilkins":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <span className="font-display tracking-[0.1em] text-sm font-semibold text-white">Bowers & Wilkins</span>
        </div>
      );

    case "sony-cinema":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <span className="font-serif tracking-[0.18em] text-lg font-black text-white uppercase">SONY</span>
          <span className="font-mono text-[8px] text-[#C5A880] uppercase tracking-widest border border-[#C5A880]/30 px-1 py-0.5 rounded">4K SXRD</span>
        </div>
      );

    case "barco-residential":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 bg-[#C5A880] rounded flex items-center justify-center text-black font-black text-[10px]">B</div>
          <div className="flex flex-col">
            <span className="font-display tracking-[0.18em] text-sm font-bold text-white uppercase leading-none">BARCO</span>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#C5A880] uppercase mt-0.5">RESIDENTIAL</span>
          </div>
        </div>
      );

    case "stewart-filmscreen":
      return (
        <div className={`flex items-center gap-1.5 ${className}`}>
          <span className="font-serif italic text-base font-bold text-white">Stewart</span>
          <span className="font-mono text-[9px] text-[#A0A0AA] uppercase tracking-widest">Filmscreen</span>
        </div>
      );

    case "zehnder":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 bg-[#E30613] rounded-sm flex items-center justify-center text-white font-bold text-[10px]">z</div>
          <span className="font-display tracking-[0.16em] text-base font-bold text-white lowercase">zehnder</span>
        </div>
      );

    case "drainvac":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 bg-[#0072CE] rounded flex items-center justify-center text-white font-black text-[10px]">D</div>
          <span className="font-display tracking-[0.12em] text-base font-black text-white uppercase">DRAINVAC</span>
        </div>
      );

    case "unifi":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 rounded-full bg-[#0559C9] flex items-center justify-center text-white font-black text-[10px]">U</div>
          <span className="font-display tracking-[0.18em] text-sm font-bold text-white uppercase">UniFi</span>
        </div>
      );

    case "doorbird":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 rounded-full border border-[#C5A880] flex items-center justify-center text-[#C5A880] font-bold text-[8px]">DB</div>
          <span className="font-display tracking-[0.12em] text-base font-semibold text-white">DoorBird</span>
        </div>
      );

    case "mobotix":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 bg-[#009944] rounded-sm flex items-center justify-center text-white font-black text-[10px]">M</div>
          <span className="font-display tracking-[0.18em] text-base font-bold text-white uppercase">MOBOTIX</span>
        </div>
      );

    case "bang-olufsen":
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-6 h-6 rounded-full bg-white text-black font-black text-[9px] flex items-center justify-center">B&O</div>
          <span className="font-display tracking-[0.18em] text-sm font-medium text-white uppercase">BANG & OLUFSEN</span>
        </div>
      );

    default:
      return (
        <div className={`flex items-center gap-2 ${className}`}>
          <div className="w-5 h-5 rounded bg-[#C5A880]/20 text-[#C5A880] font-bold text-xs flex items-center justify-center">
            {brandId.charAt(0).toUpperCase()}
          </div>
          <span className="font-display tracking-wider text-sm font-bold text-white capitalize">{brandId}</span>
        </div>
      );
  }
}
