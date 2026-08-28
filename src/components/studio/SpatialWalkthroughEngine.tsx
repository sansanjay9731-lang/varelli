"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_MATERIAL_SHADERS } from "@/lib/ai/brand-materials";
import {
  Compass,
  Eye,
  Maximize2,
  Minimize2,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Sparkles,
  Check,
  Volume2,
  VolumeX,
} from "@/components/ui/icons";

export interface WalkthroughNode {
  id: string;
  name: string;
  zoneCode: string;
  sqFt: number;
  floorplanCoords: { x: number; y: number; angle: number };
  scenes: {
    morning: string;
    cinema: string;
    evening: string;
    away: string;
  };
  audioTrackName: string;
  connectedNodes: { nodeId: string; label: string; direction: "FORWARD" | "LEFT" | "RIGHT" | "BACK" }[];
  hotspots: {
    yaw: number; // horizontal angle 0-360
    pitch: number; // vertical angle -50 to 50
    title: string;
    brandType: string;
    specification: string;
  }[];
}

export const WALKTHROUGH_NODES: Record<string, WalkthroughNode> = {
  foyer: {
    id: "foyer",
    name: "Architectural Grand Foyer & Gallery",
    zoneCode: "ZONE 01",
    sqFt: 420,
    floorplanCoords: { x: 20, y: 75, angle: 0 },
    scenes: {
      morning: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      cinema: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      evening: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
      away: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=85",
    },
    audioTrackName: "Ambient Welcoming Acoustic Tone",
    connectedNodes: [
      { nodeId: "living", label: "Walk to Grand Living Salon", direction: "FORWARD" },
      { nodeId: "dining", label: "Enter Dining Enclave", direction: "RIGHT" },
    ],
    hotspots: [
      { yaw: 25, pitch: 10, title: "Biometric Smart Entry Lock", brandType: "Ekinex / Vimar", specification: "Face recognition + KNX Welcome scene trigger" },
      { yaw: -30, pitch: -5, title: "Welcome Scene Touch Keypad", brandType: "Basalte Sentido Brass", specification: "One-touch whole-house circadian lighting unlock" },
    ],
  },
  living: {
    id: "living",
    name: "Grand Living & Reception Salon",
    zoneCode: "ZONE 02",
    sqFt: 1450,
    floorplanCoords: { x: 45, y: 55, angle: 45 },
    scenes: {
      morning: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
      cinema: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=85",
      evening: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      away: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=85",
    },
    audioTrackName: "Spatial Hi-Fi Lounge Stream",
    connectedNodes: [
      { nodeId: "foyer", label: "Return to Grand Foyer", direction: "BACK" },
      { nodeId: "cinema", label: "Walk to Private Cinema Suite", direction: "RIGHT" },
      { nodeId: "master", label: "Walk to Master Sanctuary", direction: "FORWARD" },
    ],
    hotspots: [
      { yaw: -40, pitch: 5, title: "Sentido Multitouch Brass Keypad", brandType: "Basalte Belgium", specification: "DALI logarithmic dimming + motorized curtain scene" },
      { yaw: 10, pitch: 25, title: "Linear IAQ Ventilation Slot", brandType: "Zehnder IAQ", specification: "Silent 80 m³/h filtered positive pressure" },
      { yaw: 55, pitch: -10, title: "In-Wall Architectural Speakers", brandType: "Sonus Faber Palladio", specification: "Voice-matched timber acoustic enclosures" },
    ],
  },
  cinema: {
    id: "cinema",
    name: "Reference Dolby Atmos Private Cinema",
    zoneCode: "ZONE 03",
    sqFt: 580,
    floorplanCoords: { x: 80, y: 40, angle: 90 },
    scenes: {
      morning: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=85",
      cinema: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1920&q=85",
      evening: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=85",
      away: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1920&q=85",
    },
    audioTrackName: "Dolby Atmos 9.1.6 3D Spatial Demo",
    connectedNodes: [
      { nodeId: "living", label: "Return to Grand Living Salon", direction: "LEFT" },
      { nodeId: "master", label: "Walk to Master Sanctuary Suite", direction: "FORWARD" },
    ],
    hotspots: [
      { yaw: 0, pitch: 0, title: "4K Laser Cinemascope Screen", brandType: "Stewart Filmscreen", specification: "Micro-perforated acoustic reference projection" },
      { yaw: -60, pitch: -15, title: "Motorized Recliner Automation", brandType: "KNX Comfort", specification: "Tiered platform seating with synchronized footrests" },
      { yaw: 65, pitch: 20, title: "Dolby Atmos Overhead Array", brandType: "Sonus Faber / B&W", specification: "Studio reference spatial calibration (RT60: 0.28s)" },
    ],
  },
  master: {
    id: "master",
    name: "Master Sanctuary Suite",
    zoneCode: "ZONE 04",
    sqFt: 920,
    floorplanCoords: { x: 50, y: 15, angle: 180 },
    scenes: {
      morning: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85",
      cinema: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      evening: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
      away: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=85",
    },
    audioTrackName: "Circadian Relaxation Soundscape",
    connectedNodes: [
      { nodeId: "living", label: "Walk to Grand Living Salon", direction: "BACK" },
      { nodeId: "cinema", label: "Walk to Private Cinema", direction: "LEFT" },
    ],
    hotspots: [
      { yaw: -35, pitch: 10, title: "Bedside Circadian Master Switch", brandType: "Gira Esprit Glass", specification: "One-touch Goodnight Master shutdown sequence" },
      { yaw: 45, pitch: 0, title: "Dual Blackout Motorized Shading", brandType: "Lutron Sivoia QS", specification: "100% Light-seal whisper quiet drapery track" },
    ],
  },
  dining: {
    id: "dining",
    name: "Formal Dining & Wine Enclave",
    zoneCode: "ZONE 05",
    sqFt: 480,
    floorplanCoords: { x: 20, y: 35, angle: 270 },
    scenes: {
      morning: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      cinema: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85",
      evening: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85",
      away: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1920&q=85",
    },
    audioTrackName: "Acoustic Dining Ambience",
    connectedNodes: [
      { nodeId: "foyer", label: "Return to Grand Foyer", direction: "BACK" },
      { nodeId: "living", label: "Walk to Grand Living Salon", direction: "FORWARD" },
    ],
    hotspots: [
      { yaw: 0, pitch: 15, title: "Chandelier DALI-2 Dimming", brandType: "Jung KNX DT8", specification: "Circadian color temperature tuning from 1800K to 3000K" },
      { yaw: 40, pitch: -10, title: "Wine Enclave Climate Regulator", brandType: "VARELLI Climate", specification: "Precision 14°C / 65% RH cellar stabilization" },
    ],
  },
};

interface SpatialWalkthroughEngineProps {
  sceneMode: "morning" | "cinema" | "evening" | "away";
  activeBrand: string;
  deviceMode: "phone" | "laptop";
}

export default function SpatialWalkthroughEngine({
  sceneMode,
  activeBrand,
  deviceMode,
}: SpatialWalkthroughEngineProps) {
  const [currentNodeId, setCurrentNodeId] = useState<string>("foyer");
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const [isGyroActive, setIsGyroActive] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentNode = WALKTHROUGH_NODES[currentNodeId] || WALKTHROUGH_NODES.living;
  const currentImage = currentNode.scenes[sceneMode];
  const mat = BRAND_MATERIAL_SHADERS[activeBrand] || BRAND_MATERIAL_SHADERS["basalte-brass"];

  // Handle Drag / Pan Looking around 360 degrees
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    // Bound pitch and wrap yaw
    setPanOffset({
      x: newX,
      y: Math.max(-100, Math.min(100, newY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for Mobile / Smartphone
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const newX = e.touches[0].clientX - dragStart.x;
    const newY = e.touches[0].clientY - dragStart.y;
    setPanOffset({
      x: newX,
      y: Math.max(-100, Math.min(100, newY)),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const navigateToNode = (nodeId: string) => {
    setCurrentNodeId(nodeId);
    setPanOffset({ x: 0, y: 0 });
    setActiveHotspot(null);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none bg-black ${
        isFullscreen ? "fixed inset-0 z-50 h-screen w-screen" : "h-[540px] rounded-2xl border border-[var(--border)]"
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 360 Panoramic Room View Layer */}
      <div
        className="absolute inset-0 w-[130%] h-[120%] -left-[15%] -top-[10%] cursor-grab active:cursor-grabbing transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${panOffset.x * 0.4}px, ${panOffset.y * 0.4}px, 0) scale(1.05)`,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentNodeId}-${sceneMode}`}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={currentImage}
              alt={currentNode.name}
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
            {/* Cinematic Ambience Grade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* 3D In-Scene Doorway Navigation Portals */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none z-20">
          {currentNode.connectedNodes.map((conn) => (
            <button
              key={conn.nodeId}
              onClick={(e) => {
                e.stopPropagation();
                navigateToNode(conn.nodeId);
              }}
              className="pointer-events-auto group flex items-center space-x-2 px-5 py-3 rounded-full bg-black/80 hover:bg-[var(--gold)] text-white hover:text-[#08080A] border border-[var(--gold)]/60 backdrop-blur-xl shadow-2xl transition-all duration-300 transform hover:scale-110"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] group-hover:bg-[#08080A] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                {conn.label}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ))}
        </div>

        {/* In-Scene Interactive Hardware Hotspots */}
        {currentNode.hotspots.map((spot, i) => {
          const screenX = 50 + spot.yaw + panOffset.x * 0.05;
          const screenY = 50 + spot.pitch + panOffset.y * 0.05;
          return (
            <div
              key={i}
              className="absolute z-20 cursor-pointer pointer-events-auto"
              style={{ left: `${screenX}%`, top: `${screenY}%` }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveHotspot(activeHotspot === i ? null : i);
              }}
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-[var(--gold)]/30 animate-ping" />
                <div
                  className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-2xl transition-transform hover:scale-125"
                  style={{ backgroundColor: mat.colorHex }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>

              {activeHotspot === i && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-64 p-3.5 rounded-xl bg-black/90 backdrop-blur-xl border border-[var(--gold)] text-xs shadow-2xl z-30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="badge-mono text-[9px] text-[var(--gold)] uppercase">
                      {spot.brandType}
                    </span>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="font-display font-semibold text-white text-sm">{spot.title}</h4>
                  <p className="text-[11px] text-gray-300 mt-1">{spot.specification}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Top HUD: Spatial Location Bar */}
      <div className="absolute top-4 left-4 z-30 flex items-center space-x-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-[var(--gold)]/40 text-xs font-mono shadow-2xl">
        <div className="flex items-center space-x-2 text-[var(--gold)]">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span className="font-bold">{currentNode.zoneCode}</span>
        </div>
        <span className="text-white font-medium">{currentNode.name}</span>
        <span className="text-gray-400">({currentNode.sqFt} sq ft)</span>
      </div>

      {/* Top Right Controls: Audio, AR Mode, Fullscreen */}
      <div className="absolute top-4 right-4 z-30 flex items-center space-x-2 p-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-gray-800 text-xs font-mono">
        <button
          onClick={() => setAudioMuted(!audioMuted)}
          className="p-2 rounded hover:bg-white/10 text-gray-300"
          title="Toggle Spatial Audio"
        >
          {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[var(--gold)]" />}
        </button>

        <button
          onClick={() => setIsGyroActive(!isGyroActive)}
          className={`px-3 py-1.5 rounded flex items-center space-x-1.5 transition-all ${
            isGyroActive ? "bg-[var(--gold)] text-[#08080A] font-bold" : "text-gray-300 hover:text-white"
          }`}
          title="Toggle Mobile On-Site Gyro AR Mode"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="text-[10px] hidden sm:inline">On-Site AR Gyro</span>
        </button>

        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 rounded hover:bg-white/10 text-gray-300"
          title="Toggle Fullscreen Walkthrough"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Bottom Right: Real-time 2D Floorplan Minimap Radar */}
      <div className="absolute bottom-4 right-4 z-30 p-3.5 rounded-xl bg-black/90 backdrop-blur-xl border border-[var(--gold)]/40 shadow-2xl hidden sm:block">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--gold)] font-bold">
            FLOORPLAN RADAR MINIMAP
          </span>
        </div>
        <div className="relative w-36 h-28 border border-gray-800 rounded bg-[#0A0D14] overflow-hidden">
          {/* Room Boundaries */}
          <div className="absolute left-2 top-2 w-14 h-10 border border-gray-700/60 text-[7px] text-gray-600 p-0.5">Dining</div>
          <div className="absolute left-18 top-2 w-14 h-10 border border-gray-700/60 text-[7px] text-gray-600 p-0.5">Master</div>
          <div className="absolute left-2 top-14 w-14 h-10 border border-gray-700/60 text-[7px] text-gray-600 p-0.5">Foyer</div>
          <div className="absolute left-18 top-14 w-16 h-12 border border-gray-700/60 text-[7px] text-gray-600 p-0.5">Living</div>

          {/* Current Position Marker with Vision Cone */}
          <div
            className="absolute w-3 h-3 rounded-full bg-[var(--gold)] border border-white shadow-lg transition-all duration-500 flex items-center justify-center"
            style={{
              left: `${currentNode.floorplanCoords.x}%`,
              top: `${currentNode.floorplanCoords.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Pulsing Radar Wave */}
            <span className="absolute w-6 h-6 rounded-full bg-[var(--gold)]/40 animate-ping" />
          </div>
        </div>
      </div>

      {/* Bottom Left: Walkthrough Instruction Prompt */}
      <div className="absolute bottom-4 left-4 z-30 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-gray-800 text-xs font-mono text-gray-300 flex items-center space-x-2">
        <Eye className="w-4 h-4 text-[var(--gold)]" />
        <span className="text-[11px]">
          Drag to look 360° • Click glowing portals to walk into next room
        </span>
      </div>
    </div>
  );
}
