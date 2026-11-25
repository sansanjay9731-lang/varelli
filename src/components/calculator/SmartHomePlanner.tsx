"use client";

import React, { useState, useMemo } from "react";
import {
  Lightbulb,
  ToggleRight,
  Blinds,
  ThermometerSnowflake,
  Lock,
  Camera,
  Sparkles,
  Check,
  MessageCircle,
  RotateCcw,
  Building2,
  Home,
  Layers,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

type HomeTypeId = "1bhk" | "2bhk" | "3bhk" | "4bhk" | "villa";
type TierId = "essential" | "signature" | "reference";
type StageId = "new" | "renovation";
type FeatureId = "lights" | "switches" | "curtains" | "ac" | "locks" | "cameras";

interface RoomDef {
  id: string;
  name: string;
  shortName: string;
  gridArea: string; // Tailwind col-span / row-span classes for floor plan layout
  isLarge?: boolean;
  defaultFeatures: FeatureId[];
  recommendedFeatures: FeatureId[];
}

interface HomeTypeConfig {
  id: HomeTypeId;
  label: string;
  sublabel: string;
  sqft: string;
  backboneCostL: number; // in Lakhs
  rooms: RoomDef[];
}

const FEATURES: {
  id: FeatureId;
  label: string;
  shortLabel: string;
  desc: string;
  baseCostL: number;
  largeMultiplier?: number;
  icon: LucideIcon;
}[] = [
  {
    id: "lights",
    label: "Smart Lighting & Dimming",
    shortLabel: "Lights",
    desc: "DALI-2 dimming, circadian scenes & pathway sensors",
    baseCostL: 0.65,
    largeMultiplier: 1.5,
    icon: Lightbulb,
  },
  {
    id: "switches",
    label: "Designer KNX Keypads",
    shortLabel: "Switches",
    desc: "Tactile metal/glass scene switches (no plastic clutter)",
    baseCostL: 0.55,
    largeMultiplier: 1.4,
    icon: ToggleRight,
  },
  {
    id: "curtains",
    label: "Motorised Curtains & Blinds",
    shortLabel: "Curtains",
    desc: "Whisper-quiet tracks synced with sunset & cinema scenes",
    baseCostL: 0.5,
    largeMultiplier: 1.6,
    icon: Blinds,
  },
  {
    id: "ac",
    label: "AC & Climate Control",
    shortLabel: "AC",
    desc: "KNX HVAC / VRV gateway with room temperature schedules",
    baseCostL: 0.4,
    largeMultiplier: 1.5,
    icon: ThermometerSnowflake,
  },
  {
    id: "locks",
    label: "Smart Locks & Access",
    shortLabel: "Locks",
    desc: "Biometric mortise lock & video door entry integration",
    baseCostL: 0.75,
    largeMultiplier: 1.15,
    icon: Lock,
  },
  {
    id: "cameras",
    label: "Security Cameras & Sensors",
    shortLabel: "Cameras",
    desc: "4K PoE perimeter / indoor cameras & occupancy alerts",
    baseCostL: 0.45,
    largeMultiplier: 1.6,
    icon: Camera,
  },
];

const TIERS: {
  id: TierId;
  name: string;
  brands: string;
  multiplier: number;
  note: string;
}[] = [
  {
    id: "essential",
    name: "Essential KNX",
    brands: "Gira / Jung KNX + DALI",
    multiplier: 1.0,
    note: "Reliable wired European backbone",
  },
  {
    id: "signature",
    name: "Signature European",
    brands: "Ekinex / Basalte + DALI-2",
    multiplier: 1.45,
    note: "Sculpted keypads & circadian lighting",
  },
  {
    id: "reference",
    name: "Reference Bespoke",
    brands: "Basalte + Lutron / Sonus Faber",
    multiplier: 2.1,
    note: "Estate-grade architectural finishes",
  },
];

const HOME_TYPES: HomeTypeConfig[] = [
  {
    id: "1bhk",
    label: "1 BHK",
    sublabel: "Compact Smart Flat",
    sqft: "650 – 950 sq ft",
    backboneCostL: 1.4,
    rooms: [
      {
        id: "foyer",
        name: "Main Entry & Foyer",
        shortName: "Entry",
        gridArea: "col-span-12 md:col-span-4",
        defaultFeatures: ["lights", "locks"],
        recommendedFeatures: ["lights", "locks", "cameras"],
      },
      {
        id: "living",
        name: "Living & Dining",
        shortName: "Living",
        gridArea: "col-span-12 md:col-span-8",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "master",
        name: "Master Bedroom",
        shortName: "Master Bed",
        gridArea: "col-span-12 md:col-span-7",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "kitchen",
        name: "Kitchen & Utility",
        shortName: "Kitchen",
        gridArea: "col-span-12 md:col-span-5",
        defaultFeatures: ["lights"],
        recommendedFeatures: ["lights", "switches", "cameras"],
      },
    ],
  },
  {
    id: "2bhk",
    label: "2 BHK",
    sublabel: "Urban Residence",
    sqft: "1,100 – 1,500 sq ft",
    backboneCostL: 2.0,
    rooms: [
      {
        id: "foyer",
        name: "Main Entry & Foyer",
        shortName: "Entry",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "locks"],
        recommendedFeatures: ["lights", "locks", "cameras"],
      },
      {
        id: "living",
        name: "Living & Dining",
        shortName: "Living",
        gridArea: "col-span-12 md:col-span-6",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "balcony",
        name: "Balcony / Deck",
        shortName: "Balcony",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: [],
        recommendedFeatures: ["lights", "cameras"],
      },
      {
        id: "master",
        name: "Master Bedroom",
        shortName: "Master Bed",
        gridArea: "col-span-12 md:col-span-5",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed2",
        name: "Bedroom 2",
        shortName: "Bed 2",
        gridArea: "col-span-6 md:col-span-4",
        defaultFeatures: ["lights", "switches"],
        recommendedFeatures: ["lights", "switches", "ac"],
      },
      {
        id: "kitchen",
        name: "Kitchen",
        shortName: "Kitchen",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights"],
        recommendedFeatures: ["lights", "switches"],
      },
    ],
  },
  {
    id: "3bhk",
    label: "3 BHK",
    sublabel: "Signature Apartment",
    sqft: "1,800 – 2,600 sq ft",
    backboneCostL: 2.6,
    rooms: [
      {
        id: "foyer",
        name: "Main Entry & Foyer",
        shortName: "Entry",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "locks", "cameras"],
        recommendedFeatures: ["lights", "locks", "cameras"],
      },
      {
        id: "living",
        name: "Living & Dining Hall",
        shortName: "Living & Dining",
        gridArea: "col-span-12 md:col-span-6",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac", "cameras"],
      },
      {
        id: "balcony",
        name: "Sky Deck / Balcony",
        shortName: "Balcony",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights"],
        recommendedFeatures: ["lights", "cameras"],
      },
      {
        id: "master",
        name: "Master Suite",
        shortName: "Master Suite",
        gridArea: "col-span-12 md:col-span-4",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed2",
        name: "Bedroom 2",
        shortName: "Bed 2",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed3",
        name: "Bedroom 3 / Study",
        shortName: "Bed 3",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "switches"],
        recommendedFeatures: ["lights", "switches", "ac"],
      },
      {
        id: "kitchen",
        name: "Kitchen & Utility",
        shortName: "Kitchen",
        gridArea: "col-span-12 md:col-span-2",
        defaultFeatures: ["lights"],
        recommendedFeatures: ["lights", "switches"],
      },
    ],
  },
  {
    id: "4bhk",
    label: "4 BHK",
    sublabel: "Penthouse / Sky Villa",
    sqft: "3,000 – 4,500 sq ft",
    backboneCostL: 3.8,
    rooms: [
      {
        id: "foyer",
        name: "Private Lift Lobby & Foyer",
        shortName: "Foyer",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "locks", "cameras"],
        recommendedFeatures: ["lights", "locks", "cameras"],
      },
      {
        id: "living",
        name: "Formal Living & Dining",
        shortName: "Living & Dining",
        gridArea: "col-span-12 md:col-span-6",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac", "cameras"],
      },
      {
        id: "lounge",
        name: "Family Lounge / Study",
        shortName: "Lounge",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "master",
        name: "Master Suite",
        shortName: "Master Suite",
        gridArea: "col-span-12 md:col-span-4",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac", "locks"],
      },
      {
        id: "bed2",
        name: "Bedroom 2",
        shortName: "Bed 2",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed3",
        name: "Bedroom 3",
        shortName: "Bed 3",
        gridArea: "col-span-6 md:col-span-3",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed4",
        name: "Guest Suite (Bed 4)",
        shortName: "Guest Suite",
        gridArea: "col-span-6 md:col-span-6",
        defaultFeatures: ["lights", "switches"],
        recommendedFeatures: ["lights", "switches", "ac"],
      },
      {
        id: "kitchen",
        name: "Show Kitchen & Utility",
        shortName: "Kitchen",
        gridArea: "col-span-6 md:col-span-6",
        defaultFeatures: ["lights", "switches"],
        recommendedFeatures: ["lights", "switches", "cameras"],
      },
    ],
  },
  {
    id: "villa",
    label: "Luxury Villa",
    sublabel: "Bespoke Estate",
    sqft: "5,000 – 12,000+ sq ft",
    backboneCostL: 7.5,
    rooms: [
      {
        id: "foyer",
        name: "Gate, Porch & Main Entry",
        shortName: "Gate & Entry",
        gridArea: "col-span-6 md:col-span-3",
        isLarge: true,
        defaultFeatures: ["lights", "locks", "cameras"],
        recommendedFeatures: ["lights", "locks", "cameras"],
      },
      {
        id: "living",
        name: "Double-Height Living & Dining",
        shortName: "Grand Living",
        gridArea: "col-span-12 md:col-span-6",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac", "cameras"],
      },
      {
        id: "cinema",
        name: "Private Cinema / Media Room",
        shortName: "Cinema Room",
        gridArea: "col-span-6 md:col-span-3",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "master",
        name: "Master Pavilion",
        shortName: "Master Suite",
        gridArea: "col-span-12 md:col-span-4",
        isLarge: true,
        defaultFeatures: ["lights", "switches", "curtains", "ac", "locks"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac", "locks"],
      },
      {
        id: "bed2",
        name: "Bedroom 2",
        shortName: "Bed 2",
        gridArea: "col-span-6 md:col-span-4",
        defaultFeatures: ["lights", "switches", "curtains", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed3",
        name: "Bedroom 3",
        shortName: "Bed 3",
        gridArea: "col-span-6 md:col-span-4",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "bed4",
        name: "Guest Suite (Bed 4)",
        shortName: "Guest Suite",
        gridArea: "col-span-6 md:col-span-4",
        defaultFeatures: ["lights", "switches", "ac"],
        recommendedFeatures: ["lights", "switches", "curtains", "ac"],
      },
      {
        id: "kitchen",
        name: "Chef's Kitchen & Pantry",
        shortName: "Kitchen",
        gridArea: "col-span-6 md:col-span-4",
        defaultFeatures: ["lights", "switches"],
        recommendedFeatures: ["lights", "switches", "cameras"],
      },
      {
        id: "outdoor",
        name: "Landscape, Pool & Perimeter",
        shortName: "Garden & Perimeter",
        gridArea: "col-span-12 md:col-span-4",
        isLarge: true,
        defaultFeatures: ["lights", "cameras"],
        recommendedFeatures: ["lights", "cameras", "locks"],
      },
    ],
  },
];

function buildInitialSelection(home: HomeTypeConfig): Record<string, FeatureId[]> {
  const map: Record<string, FeatureId[]> = {};
  for (const room of home.rooms) {
    map[room.id] = [...room.defaultFeatures];
  }
  return map;
}

export default function SmartHomePlanner() {
  const [homeTypeId, setHomeTypeId] = useState<HomeTypeId>("3bhk");
  const [tierId, setTierId] = useState<TierId>("essential");
  const [stageId, setStageId] = useState<StageId>("new");

  const activeHome = useMemo(
    () => HOME_TYPES.find((h) => h.id === homeTypeId)!,
    [homeTypeId]
  );

  const [roomSelections, setRoomSelections] = useState<Record<string, FeatureId[]>>(() =>
    buildInitialSelection(HOME_TYPES.find((h) => h.id === "3bhk")!)
  );
  const [selectedRoomId, setSelectedRoomId] = useState<string>("living");

  const handleHomeChange = (newId: HomeTypeId) => {
    const nextHome = HOME_TYPES.find((h) => h.id === newId)!;
    setHomeTypeId(newId);
    setRoomSelections(buildInitialSelection(nextHome));
    setSelectedRoomId(nextHome.rooms[1]?.id || nextHome.rooms[0].id);
  };

  const selectedRoom =
    activeHome.rooms.find((r) => r.id === selectedRoomId) || activeHome.rooms[0];

  const toggleFeature = (roomId: string, featureId: FeatureId) => {
    setRoomSelections((prev) => {
      const current = prev[roomId] || [];
      const exists = current.includes(featureId);
      return {
        ...prev,
        [roomId]: exists
          ? current.filter((f) => f !== featureId)
          : [...current, featureId],
      };
    });
  };

  const applyPreset = (mode: "recommended" | "essentials" | "clear") => {
    const next: Record<string, FeatureId[]> = {};
    for (const room of activeHome.rooms) {
      if (mode === "recommended") {
        next[room.id] = [...room.recommendedFeatures];
      } else if (mode === "essentials") {
        next[room.id] = room.defaultFeatures.filter(
          (f) => f === "lights" || f === "switches" || f === "locks"
        );
      } else {
        next[room.id] = [];
      }
    }
    setRoomSelections(next);
  };

  const activeTier = TIERS.find((t) => t.id === tierId)!;

  // Calculate live investment estimate
  const estimate = useMemo(() => {
    let hardwareTotalL = 0;
    let totalSystemsCount = 0;
    let litRoomsCount = 0;

    for (const room of activeHome.rooms) {
      const chosen = roomSelections[room.id] || [];
      if (chosen.length > 0) litRoomsCount += 1;
      totalSystemsCount += chosen.length;

      for (const fId of chosen) {
        const feat = FEATURES.find((f) => f.id === fId);
        if (!feat) continue;
        const sizeFactor = room.isLarge && feat.largeMultiplier ? feat.largeMultiplier : 1.0;
        hardwareTotalL += feat.baseCostL * sizeFactor;
      }
    }

    const backboneL = activeHome.backboneCostL;
    const stageMultiplier = stageId === "renovation" ? 1.15 : 1.0;
    const rawTotal = (hardwareTotalL * activeTier.multiplier + backboneL) * stageMultiplier;

    const minL = Math.max(2.5, Math.round(rawTotal * 0.9 * 2) / 2);
    const maxL = Math.max(minL + 1.5, Math.round(rawTotal * 1.15 * 2) / 2);

    return {
      minL,
      maxL,
      litRoomsCount,
      totalRooms: activeHome.rooms.length,
      totalSystemsCount,
      backboneL: Math.round(backboneL * stageMultiplier * 10) / 10,
      hardwareL: Math.round(hardwareTotalL * activeTier.multiplier * 10) / 10,
    };
  }, [activeHome, roomSelections, activeTier, stageId]);

  // Build 1-tap WhatsApp message with full room-by-room plan
  const whatsappUrl = useMemo(() => {
    const roomLines = activeHome.rooms
      .map((room) => {
        const chosen = roomSelections[room.id] || [];
        if (chosen.length === 0) return null;
        const labels = chosen
          .map((id) => FEATURES.find((f) => f.id === id)?.shortLabel || id)
          .join(", ");
        return `• ${room.name}: ${labels}`;
      })
      .filter(Boolean)
      .join("\n");

    const text = `Hello VARELLI! I planned my smart home on your website and would like a demo/quote:\n\n🏠 Residence: ${activeHome.label} (${activeHome.sqft})\n✨ Tier: ${activeTier.name} (${activeTier.brands})\n🔨 Stage: ${stageId === "new" ? "New Construction (First-Fix)" : "Renovation / Completed Home"}\n💰 Est. Package: ₹${estimate.minL}L – ₹${estimate.maxL}L\n\n📋 Room Plan (${estimate.litRoomsCount}/${estimate.totalRooms} rooms):\n${roomLines || "• Exploring options"}`;

    return `https://wa.me/919964984695?text=${encodeURIComponent(text)}`;
  }, [activeHome, activeTier, stageId, estimate, roomSelections]);

  return (
    <div className="space-y-10">
      {/* Step 1: Home Type & Tier Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Home Size Picker */}
        <div className="lg:col-span-7 bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Home size={16} className="text-[#C5A880]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                1. Pick Your Home Type
              </span>
            </div>
            <span className="text-xs text-[#C2C2C8] font-mono">{activeHome.sqft}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {HOME_TYPES.map((home) => {
              const active = home.id === homeTypeId;
              return (
                <button
                  key={home.id}
                  onClick={() => handleHomeChange(home.id)}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    active
                      ? "bg-[#C5A880]/15 border-[#C5A880] shadow-[0_0_20px_rgba(197,168,128,0.15)]"
                      : "bg-[#08080A] border-[#2A2A35] hover:border-[#C5A880]/50"
                  }`}
                >
                  <div
                    className={`font-display text-sm font-bold ${
                      active ? "text-[#C5A880]" : "text-white"
                    }`}
                  >
                    {home.label}
                  </div>
                  <div className="text-[11px] text-[#C2C2C8] mt-0.5 truncate">
                    {home.sublabel}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tier & Construction Stage */}
        <div className="lg:col-span-5 bg-[#121216] border border-[#2A2A35] rounded-xl p-6 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={16} className="text-[#C5A880]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                2. Hardware Tier & Stage
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {TIERS.map((tier) => {
                const active = tier.id === tierId;
                return (
                  <button
                    key={tier.id}
                    onClick={() => setTierId(tier.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      active
                        ? "bg-[#C5A880]/15 border-[#C5A880]"
                        : "bg-[#08080A] border-[#2A2A35] hover:border-[#C5A880]/40"
                    }`}
                  >
                    <div
                      className={`text-xs font-semibold ${
                        active ? "text-[#C5A880]" : "text-white"
                      }`}
                    >
                      {tier.name.split(" ")[0]}
                    </div>
                    <div className="text-[10px] text-[#C2C2C8] mt-0.5 leading-tight">
                      {tier.brands.split("+")[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#2A2A35]">
            <Building2 size={14} className="text-[#C5A880] shrink-0" />
            <div className="grid grid-cols-2 gap-2 w-full">
              {[
                { id: "new" as StageId, label: "New Build (First-Fix)" },
                { id: "renovation" as StageId, label: "Renovation / Completed" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStageId(s.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all cursor-pointer ${
                    stageId === s.id
                      ? "bg-[#1A1A22] border-[#C5A880] text-[#C5A880]"
                      : "bg-[#08080A] border-[#2A2A35] text-[#C2C2C8] hover:text-white"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Floor Plan + Room Configurator + Live Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Center: Interactive Floor Plan */}
        <div className="lg:col-span-7 bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block">
                3. Tap Any Room on Your Floor Plan
              </span>
              <p className="text-xs text-[#C2C2C8] mt-1">
                Rooms light up in gold as you add smart systems.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => applyPreset("recommended")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#1A1A22] border border-[#C5A880]/50 text-[#C5A880] hover:bg-[#C5A880] hover:text-[#08080A] transition-colors cursor-pointer"
              >
                <Sparkles size={12} />
                <span>Recommended All</span>
              </button>
              <button
                onClick={() => applyPreset("clear")}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs text-[#C2C2C8] hover:text-white bg-[#08080A] border border-[#2A2A35] transition-colors cursor-pointer"
                title="Clear all rooms"
              >
                <RotateCcw size={12} />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Blueprint Grid */}
          <div className="relative p-4 sm:p-5 rounded-xl bg-[#08080A] border border-[#2A2A35] bg-[radial-gradient(#2A2A35_1px,transparent_1px)] [background-size:18px_18px]">
            <div className="grid grid-cols-12 gap-3">
              {activeHome.rooms.map((room) => {
                const chosen = roomSelections[room.id] || [];
                const isLit = chosen.length > 0;
                const isSelected = room.id === selectedRoom.id;

                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`${room.gridArea} relative text-left p-4 rounded-lg border transition-all duration-300 cursor-pointer min-h-[108px] flex flex-col justify-between overflow-hidden ${
                      isSelected
                        ? "border-[#C5A880] ring-2 ring-[#C5A880]/30 bg-gradient-to-br from-[#C5A880]/20 via-[#1A1A22] to-[#121216] shadow-[0_0_25px_rgba(197,168,128,0.18)]"
                        : isLit
                        ? "border-[#C5A880]/50 bg-gradient-to-br from-[#C5A880]/10 via-[#121216] to-[#0E0E12] hover:border-[#C5A880]"
                        : "border-[#2A2A35] bg-[#0E0E12]/90 hover:border-[#C5A880]/40"
                    }`}
                  >
                    {/* Top row: Room Name + Lit status dot */}
                    <div className="flex items-start justify-between gap-2 w-full">
                      <div>
                        <div
                          className={`font-display text-sm font-bold leading-snug ${
                            isSelected || isLit ? "text-white" : "text-[#C2C2C8]"
                          }`}
                        >
                          {room.shortName}
                        </div>
                        <div className="text-[10px] font-mono text-[#C2C2C8]/70 mt-0.5">
                          {isLit ? `${chosen.length} active` : "Tap to configure"}
                        </div>
                      </div>

                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1 transition-all ${
                          isLit
                            ? "bg-[#C5A880] shadow-[0_0_10px_#C5A880]"
                            : "bg-[#2A2A35]"
                        }`}
                      />
                    </div>

                    {/* Bottom row: Active feature icon pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {FEATURES.map((feat) => {
                        const enabled = chosen.includes(feat.id);
                        if (!enabled) return null;
                        const Icon = feat.icon;
                        return (
                          <span
                            key={feat.id}
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880] text-[10px] font-mono"
                          >
                            <Icon size={10} />
                            <span className="hidden sm:inline">{feat.shortLabel}</span>
                          </span>
                        );
                      })}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Floor Plan Legend */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3 border-t border-[#2A2A35] text-[11px] font-mono text-[#C2C2C8]">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880] shadow-[0_0_8px_#C5A880]" />
                  Lit = Automated
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2A2A35]" />
                  Unlit = Standard
                </span>
              </div>
              <span>
                {estimate.litRoomsCount} of {estimate.totalRooms} rooms automated
              </span>
            </div>
          </div>
        </div>

        {/* Right: Selected Room Configurator + Sticky Quote Summary */}
        <div className="lg:col-span-5 space-y-6">
          {/* Room Controls */}
          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                  4. Configure Room
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  {selectedRoom.name}
                </h3>
              </div>
              <button
                onClick={() =>
                  setRoomSelections((prev) => ({
                    ...prev,
                    [selectedRoom.id]: [...selectedRoom.recommendedFeatures],
                  }))
                }
                className="text-xs font-mono text-[#C5A880] hover:underline cursor-pointer"
              >
                Auto-fill room
              </button>
            </div>

            <div className="space-y-2.5">
              {FEATURES.map((feat) => {
                const enabled = (roomSelections[selectedRoom.id] || []).includes(
                  feat.id
                );
                const Icon = feat.icon;
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(selectedRoom.id, feat.id)}
                    className={`w-full flex items-center justify-between gap-3 p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      enabled
                        ? "bg-[#C5A880]/10 border-[#C5A880]"
                        : "bg-[#08080A] border-[#2A2A35] hover:border-[#C5A880]/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          enabled
                            ? "bg-[#C5A880] text-[#08080A]"
                            : "bg-[#1A1A22] text-[#C2C2C8]"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {feat.label}
                        </div>
                        <div className="text-xs text-[#C2C2C8] mt-0.5">
                          {feat.desc}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                        enabled
                          ? "bg-[#C5A880] border-[#C5A880] text-[#08080A]"
                          : "border-[#2A2A35] bg-[#121216]"
                      }`}
                    >
                      {enabled && <Check size={13} strokeWidth={3} />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Package Price & WhatsApp Export */}
          <div className="bg-gradient-to-b from-[#1A1A22] to-[#121216] border border-[#C5A880]/60 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                Estimated Turnkey Package
              </span>
              <span className="text-xs font-mono text-[#C2C2C8]">
                {activeHome.label} · {activeTier.name}
              </span>
            </div>

            <div className="font-display text-3xl sm:text-4xl font-bold text-white my-2">
              ₹{estimate.minL}L – ₹{estimate.maxL}L
            </div>
            <p className="text-xs text-[#C2C2C8] mb-5">
              Includes {activeTier.brands}, KNX panels, programming &amp; commissioning (
              {estimate.totalSystemsCount} room systems across {estimate.litRoomsCount}{" "}
              rooms).
            </p>

            {/* Quick breakdown */}
            <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[#08080A] border border-[#2A2A35] mb-5 text-xs">
              <div>
                <div className="text-[#C2C2C8]">KNX Backbone &amp; Panels</div>
                <div className="font-semibold text-white mt-0.5">
                  ~₹{estimate.backboneL}L
                </div>
              </div>
              <div>
                <div className="text-[#C2C2C8]">Room Hardware &amp; Devices</div>
                <div className="font-semibold text-[#C5A880] mt-0.5">
                  ~₹{estimate.hardwareL}L
                </div>
              </div>
            </div>

            {/* 1-Tap WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#C5A880] hover:bg-[#d8be98] text-[#08080A] font-semibold text-sm transition-all shadow-lg shadow-[#C5A880]/20"
            >
              <MessageCircle size={18} />
              <span>Send Full Plan to WhatsApp</span>
              <ChevronRight size={16} />
            </a>

            <p className="text-[11px] text-[#C2C2C8]/80 text-center mt-3">
              Sends your exact room-by-room selection to our Bangalore architects (+91 99649 84695) before your demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
