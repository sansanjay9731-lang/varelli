"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_MATERIAL_SHADERS } from "@/lib/ai/brand-materials";
import { Sparkles, Check, Volume2, Zap, ShieldCheck, Wind, Layers } from "@/components/ui/icons";

interface Spatial3DCanvasProps {
  sceneMode: "morning" | "cinema" | "evening" | "away";
  activeBrand: string;
  deviceMode: "phone" | "laptop";
}

interface RoomSceneAsset {
  id: string;
  name: string;
  sqFt: number;
  image: {
    morning: string;
    cinema: string;
    evening: string;
    away: string;
  };
  hotspots: {
    x: number; // percentage
    y: number; // percentage
    title: string;
    brandType: string;
    desc: string;
  }[];
}

const ROOM_ASSETS: Record<string, RoomSceneAsset> = {
  living: {
    id: "living",
    name: "Grand Living & Reception Salon",
    sqFt: 1450,
    image: {
      morning: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      cinema: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85",
      evening: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      away: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85",
    },
    hotspots: [
      { x: 18, y: 55, title: "Sentido Touch Keypad", brandType: "Basalte / Ekinex", desc: "4-Way Multi-touch lighting & motorized drapery scene selector." },
      { x: 50, y: 15, title: "Linear IAQ Diffuser", brandType: "Zehnder Fresh Air", desc: "Positive-pressure silent filtered outdoor air circulation." },
      { x: 82, y: 45, title: "Architectural In-Wall LCR", brandType: "Sonus Faber / B&W", desc: "Flush-mount timber acoustic enclosure, studio timbre matched." },
    ],
  },
  cinema: {
    id: "cinema",
    name: "Reference Dolby Atmos Private Cinema",
    sqFt: 580,
    image: {
      morning: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85",
      cinema: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=85",
      evening: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85",
      away: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1600&q=85",
    },
    hotspots: [
      { x: 50, y: 35, title: "4K Laser Cinemascope Screen", brandType: "Stewart Filmscreen", desc: "Acoustically transparent micro-perforated reference projection." },
      { x: 22, y: 65, title: "Motorized Recliner Control", brandType: "KNX Comfort Bus", desc: "Tiered seating integration with motorized footrest presets." },
      { x: 78, y: 30, title: "Dolby Atmos 9.1.6 Array", brandType: "Sonus Faber Custom", desc: "CEDIA RP22 compliant studio reference spatial audio." },
    ],
  },
  master: {
    id: "master",
    name: "Master Sanctuary Suite",
    sqFt: 920,
    image: {
      morning: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
      cinema: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      evening: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      away: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=85",
    },
    hotspots: [
      { x: 25, y: 60, title: "Circadian Bedside Switch", brandType: "Gira / Jung KNX", desc: "Goodnight Master scene with one-touch whole-residence shutdown." },
      { x: 80, y: 40, title: "Motorized Dual Blackout Shading", brandType: "Lutron Sivoia QS", desc: "Whisper-quiet acoustic drapery track with zero solar leak." },
    ],
  },
};

export default function Spatial3DCanvas({ sceneMode, activeBrand, deviceMode }: Spatial3DCanvasProps) {
  const [selectedRoom, setSelectedRoom] = useState<"living" | "cinema" | "master">("living");
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const currentRoom = ROOM_ASSETS[selectedRoom];
  const currentImage = currentRoom.image[sceneMode];
  const mat = BRAND_MATERIAL_SHADERS[activeBrand] || BRAND_MATERIAL_SHADERS["basalte-brass"];

  // Scene Lighting Color Matrix Profiles
  const lightingProfiles = {
    morning: {
      cct: "4500K Circadian Daylight",
      dimming: "85% Solar Balance",
      filterOverlay: "from-amber-400/10 via-transparent to-blue-500/10",
      glowColor: "rgba(255, 235, 180, 0.22)",
      statusText: "Morning Routine Active • Curtains 90% Open • 4500K Circadian",
    },
    cinema: {
      cct: "1800K Deep Amber & Indigo",
      dimming: "5% Cove Ambient",
      filterOverlay: "from-indigo-950/70 via-black/40 to-blue-950/60",
      glowColor: "rgba(80, 110, 255, 0.40)",
      statusText: "Dolby Atmos Cinema Mode • Blackout Sealed • Projector Active",
    },
    evening: {
      cct: "2200K Warm Architectural Glow",
      dimming: "45% Relaxed Scene",
      filterOverlay: "from-amber-950/40 via-transparent to-orange-950/30",
      glowColor: "rgba(255, 180, 80, 0.28)",
      statusText: "Evening Ambience Active • Architectural DALI Keypads 2200K",
    },
    away: {
      cct: "0K Armed & Secure",
      dimming: "0% All Inactive",
      filterOverlay: "from-blue-950/80 via-black/70 to-black/90",
      glowColor: "rgba(30, 60, 120, 0.3)",
      statusText: "Away & Fortified Mode • Perimeter AI Armed • HVAC Eco 26°C",
    },
  };

  const profile = lightingProfiles[sceneMode];

  return (
    <div className="relative w-full h-full flex flex-col bg-black overflow-hidden select-none">
      {/* 3D Photorealistic Room Canvas Container */}
      <div className="relative w-full h-full min-h-[460px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedRoom}-${sceneMode}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Base Photorealistic 3D Spatial Render */}
            <Image
              src={currentImage}
              alt={currentRoom.name}
              fill
              priority
              unoptimized
              className="object-cover object-center transition-all duration-1000"
            />

            {/* Dynamic Photometric Lighting Shader Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${profile.filterOverlay} mix-blend-color-burn pointer-events-none transition-all duration-1000`} />
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-1000"
              style={{
                background: `radial-gradient(ellipse at 50% 30%, ${profile.glowColor} 0%, transparent 75%)`,
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Top HUD: Real-time Photometric Lighting & Material Telemetry */}
        <div className="absolute top-4 left-4 z-20 flex flex-col space-y-1 p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-[var(--gold)]/40 text-xs font-mono shadow-2xl">
          <div className="flex items-center space-x-2 text-[var(--gold)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold uppercase tracking-wider">PHOTOREALISTIC SPATIAL 3D ENGINE</span>
          </div>
          <p className="text-[11px] text-gray-200 font-semibold">{profile.cct} • {profile.dimming}</p>
          <p className="text-[10px] text-gray-400">
            Hardware Finish: <span className="text-[var(--gold)] font-bold">{mat.brandName} {mat.finishName}</span>
          </p>
        </div>

        {/* Top Right: Zone & Room Selector */}
        <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 p-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-gray-800 text-xs font-mono">
          {(
            [
              { id: "living", label: "Living Salon" },
              { id: "cinema", label: "Private Cinema" },
              { id: "master", label: "Master Suite" },
            ] as const
          ).map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedRoom(r.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedRoom === r.id
                  ? "bg-[var(--gold)] text-[#08080A] font-bold shadow-md shadow-[var(--gold)]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Interactive Hardware Hotspots */}
        {currentRoom.hotspots.map((spot, idx) => (
          <div
            key={idx}
            className="absolute z-20 cursor-pointer group"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onClick={() => setActiveHotspot(activeHotspot === idx ? null : idx)}
          >
            {/* Pulsing Hotspot Target */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-[var(--gold)]/30 animate-ping" />
              <div
                className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-125"
                style={{ backgroundColor: mat.colorHex }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Hotspot Card Details */}
            <AnimatePresence>
              {activeHotspot === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-8 w-60 p-3.5 rounded-xl bg-black/90 backdrop-blur-xl border border-[var(--gold)]/60 text-xs shadow-2xl z-30 pointer-events-auto"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="badge-mono text-[9px] text-[var(--gold)] uppercase tracking-wider">
                      {spot.brandType}
                    </span>
                    <Check size={12} className="text-emerald-400" />
                  </div>
                  <h4 className="font-display font-semibold text-white text-sm">
                    {spot.title}
                  </h4>
                  <p className="text-[11px] text-gray-300 mt-1 leading-snug font-body">
                    {spot.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Bottom Floating Status Banner */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-2 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-gray-800 text-xs font-mono">
          <div className="flex items-center space-x-2 text-gray-300">
            <span className="text-[var(--gold)] font-bold">[{selectedRoom.toUpperCase()}]</span>
            <span className="text-white font-medium">{profile.statusText}</span>
          </div>
          <span className="text-[10px] text-gray-400">
            Click pulsing targets to inspect architectural hardware integrations
          </span>
        </div>
      </div>
    </div>
  );
}
