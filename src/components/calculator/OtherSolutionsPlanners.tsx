"use client";

import React, { useState, useMemo } from "react";
import {
  Film,
  Volume2,
  Armchair,
  Sparkles,
  Wind,
  Shield,
  Wifi,
  Lock,
  Camera,
  Check,
  MessageCircle,
  ChevronRight,
  RotateCcw,
  Home,
  Trash2,
} from "lucide-react";

const WHATSAPP_NUM = "919964984695";

// ============================================================================
// 1. PRIVATE CINEMA & DOLBY ATMOS PLANNER
// ============================================================================
export function CinemaPlanner() {
  const [roomSize, setRoomSize] = useState<"boutique" | "villa" | "grand">("villa");
  const [audioTier, setAudioTier] = useState<"5.2.2" | "7.4.4" | "9.4.6">("7.4.4");
  const [visualTier, setVisualTier] = useState<"sony" | "barco-loki" | "barco-ref">("barco-loki");
  const [addons, setAddons] = useState<string[]>([
    "acoustics",
    "recliners",
    "knx-sync",
  ]);

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const ADDONS = [
    {
      id: "acoustics",
      label: "RT60 Acoustic Panels & Bass Traps",
      desc: "Custom fabric broadband absorbers + corner bass traps (0.35s target)",
      costL: roomSize === "boutique" ? 3.5 : roomSize === "villa" ? 6.5 : 11.0,
    },
    {
      id: "soundproofing",
      label: "STC-65 Room-in-Room Soundproofing",
      desc: "Acoustic decoupling & double-layer isolation so bass stays inside",
      costL: roomSize === "boutique" ? 4.0 : roomSize === "villa" ? 7.5 : 14.0,
    },
    {
      id: "recliners",
      label: "Motorised Leather Cinema Recliners",
      desc: "Tiered seating risers with Italian leather recliners",
      costL: roomSize === "boutique" ? 3.5 : roomSize === "villa" ? 6.0 : 12.0,
    },
    {
      id: "star-ceiling",
      label: "Fibre-Optic Starlight Ceiling",
      desc: "Custom acoustic ceiling cloud with twinkling constellation fibres",
      costL: roomSize === "boutique" ? 1.8 : roomSize === "villa" ? 2.8 : 4.5,
    },
    {
      id: "knx-sync",
      label: "KNX Cinema Lighting & Curtain Sync",
      desc: "One-touch 'Movie Start' dims lights, closes drapes & lowers screen",
      costL: 2.2,
    },
    {
      id: "silent-ac",
      label: "Silent NC-25 HVAC Ducting",
      desc: "Acoustically lined AC ducting for whisper-quiet dialogue scenes",
      costL: roomSize === "boutique" ? 2.0 : roomSize === "villa" ? 3.2 : 5.5,
    },
  ];

  const estimate = useMemo(() => {
    const audioCost = audioTier === "5.2.2" ? 5.5 : audioTier === "7.4.4" ? 13.5 : 28.0;
    const visualCost = visualTier === "sony" ? 6.5 : visualTier === "barco-loki" ? 14.5 : 32.0;
    const addonCost = addons.reduce((sum, id) => {
      const found = ADDONS.find((a) => a.id === id);
      return sum + (found ? found.costL : 0);
    }, 0);

    const total = audioCost + visualCost + addonCost;
    const minL = Math.round(total * 0.9 * 2) / 2;
    const maxL = Math.round(total * 1.15 * 2) / 2;
    return { minL, maxL, audioCost, visualCost, addonCost };
  }, [roomSize, audioTier, visualTier, addons]);

  const sizeLabel =
    roomSize === "boutique"
      ? "220 – 350 sq ft (6 Seats)"
      : roomSize === "villa"
      ? "400 – 750 sq ft (8–10 Seats)"
      : "800 – 1,500+ sq ft (12+ Seats)";

  const waUrl = useMemo(() => {
    const addonNames = addons
      .map((id) => ADDONS.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const text = `Hello VARELLI! I planned my Private Cinema on your website:\n\n🎬 Room Size: ${sizeLabel}\n🔊 Audio: Dolby Atmos ${audioTier}\n📽️ Projection: ${
      visualTier === "sony"
        ? 'Sony 4K Laser + 120" Screen'
        : visualTier === "barco-loki"
        ? 'Barco Loki 4K Laser + 150" Cinemascope'
        : "Barco Reference DCI + Trinnov"
    }\n✨ Room Treatments: ${addonNames || "Equipment only"}\n💰 Est. Turnkey Package: ₹${estimate.minL}L – ₹${estimate.maxL}L`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
  }, [sizeLabel, audioTier, visualTier, addons, estimate]);

  const speakerDots =
    audioTier === "5.2.2" ? 7 : audioTier === "7.4.4" ? 11 : 15;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 space-y-6">
        {/* Room Size */}
        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-3">
            1. Select Cinema Room Size
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "boutique" as const, title: "Boutique Cinema", sub: "220–350 sq ft · 6 Seats" },
              { id: "villa" as const, title: "Villa Master Theatre", sub: "400–750 sq ft · 8–10 Seats" },
              { id: "grand" as const, title: "Grand Screening Hall", sub: "800+ sq ft · 12+ Seats" },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setRoomSize(s.id)}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  roomSize === s.id
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35] hover:border-[#C5A880]/40"
                }`}
              >
                <div className={`text-sm font-bold ${roomSize === s.id ? "text-[#C5A880]" : "text-white"}`}>
                  {s.title}
                </div>
                <div className="text-xs text-[#C2C2C8] mt-1">{s.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Visual Cinema Diagram */}
        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-4">
            Live Room Layout Preview
          </span>
          <div className="relative bg-[#08080A] border border-[#2A2A35] rounded-xl p-6 overflow-hidden">
            {addons.includes("star-ceiling") && (
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            )}
            {/* Screen */}
            <div className="mx-auto max-w-md h-3 rounded-full bg-gradient-to-r from-[#C5A880]/40 via-[#C5A880] to-[#C5A880]/40 shadow-[0_0_25px_rgba(197,168,128,0.5)] mb-2" />
            <div className="text-center text-[10px] font-mono text-[#C5A880] uppercase tracking-widest mb-6">
              {visualTier === "sony"
                ? '120" Stewart Acoustically Transparent Screen'
                : visualTier === "barco-loki"
                ? '150" 2.35:1 Cinemascope Screen · Barco 4K'
                : '180" DCI Reference Screen · Barco Laser'}
            </div>

            {/* Seating Rows */}
            <div className="flex flex-col items-center gap-3 my-4">
              {[0, 1].map((row) => (
                <div key={row} className="flex items-center gap-2.5">
                  {Array.from({ length: roomSize === "boutique" ? 3 : roomSize === "villa" ? 4 : 5 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-7 rounded-md border flex items-center justify-center transition-all ${
                        addons.includes("recliners")
                          ? "bg-[#C5A880]/20 border-[#C5A880] text-[#C5A880]"
                          : "bg-[#121216] border-[#2A2A35] text-[#C2C2C8]/50"
                      }`}
                    >
                      <Armchair size={14} />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Active Badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-5 pt-4 border-t border-[#2A2A35] text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-[#C5A880]/15 border border-[#C5A880]/40 text-[#C5A880]">
                {audioTier} Atmos ({speakerDots} Channels)
              </span>
              {addons.includes("acoustics") && (
                <span className="px-2.5 py-1 rounded bg-[#1A1A22] border border-[#C5A880]/30 text-white">
                  RT60 Tuned
                </span>
              )}
              {addons.includes("soundproofing") && (
                <span className="px-2.5 py-1 rounded bg-[#1A1A22] border border-[#C5A880]/30 text-white">
                  STC-65 Isolated
                </span>
              )}
              {addons.includes("silent-ac") && (
                <span className="px-2.5 py-1 rounded bg-[#1A1A22] border border-[#C5A880]/30 text-white">
                  NC-25 Silent AC
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Audio & Visual Tier */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Volume2 size={15} className="text-[#C5A880]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                2. Dolby Atmos Array
              </span>
            </div>
            <div className="space-y-2">
              {[
                { id: "5.2.2" as const, label: "5.2.2 Reference", sub: "KEF THX + Dual Sub" },
                { id: "7.4.4" as const, label: "7.4.4 Master", sub: "Sonus Faber + Quad Sub" },
                { id: "9.4.6" as const, label: "9.4.6 Flagship", sub: "JBL Synthesis + Trinnov" },
              ].map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAudioTier(a.id)}
                  className={`w-full p-3 rounded-lg border text-left cursor-pointer ${
                    audioTier === a.id
                      ? "bg-[#C5A880]/15 border-[#C5A880]"
                      : "bg-[#08080A] border-[#2A2A35]"
                  }`}
                >
                  <div className="text-sm font-bold text-white">{a.label}</div>
                  <div className="text-xs text-[#C2C2C8]">{a.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Film size={15} className="text-[#C5A880]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
                3. Laser Projection
              </span>
            </div>
            <div className="space-y-2">
              {[
                { id: "sony" as const, label: "Sony 4K HDR Laser", sub: '120" MicroPerf Screen' },
                { id: "barco-loki" as const, label: "Barco Loki 4K Laser", sub: '150" 2.35:1 Cinemascope' },
                { id: "barco-ref" as const, label: "Barco Residential DCI", sub: "180\" Reference Engine" },
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVisualTier(v.id)}
                  className={`w-full p-3 rounded-lg border text-left cursor-pointer ${
                    visualTier === v.id
                      ? "bg-[#C5A880]/15 border-[#C5A880]"
                      : "bg-[#08080A] border-[#2A2A35]"
                  }`}
                >
                  <div className="text-sm font-bold text-white">{v.label}</div>
                  <div className="text-xs text-[#C2C2C8]">{v.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Turnkey Add-ons + Quote */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-4">
            4. Turnkey Room Execution
          </span>
          <div className="space-y-2.5">
            {ADDONS.map((item) => {
              const active = addons.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleAddon(item.id)}
                  className={`w-full flex items-center justify-between gap-3 p-3.5 rounded-lg border text-left cursor-pointer ${
                    active
                      ? "bg-[#C5A880]/10 border-[#C5A880]"
                      : "bg-[#08080A] border-[#2A2A35] hover:border-[#C5A880]/40"
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-[#C2C2C8] mt-0.5">{item.desc}</div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                      active
                        ? "bg-[#C5A880] border-[#C5A880] text-[#08080A]"
                        : "border-[#2A2A35] bg-[#121216]"
                    }`}
                  >
                    {active && <Check size={13} strokeWidth={3} />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#1A1A22] to-[#121216] border border-[#C5A880]/60 rounded-xl p-6 shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-1">
            Estimated Private Cinema Package
          </div>
          <div className="font-display text-3xl sm:text-4xl font-bold text-white my-2">
            ₹{estimate.minL}L – ₹{estimate.maxL}L
          </div>
          <p className="text-xs text-[#C2C2C8] mb-5">
            Turnkey AV, {audioTier} Atmos calibration, and selected room engineering ({sizeLabel}).
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#C5A880] hover:bg-[#d8be98] text-[#08080A] font-semibold text-sm transition-all"
          >
            <MessageCircle size={18} />
            <span>Send Cinema Plan to WhatsApp</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. FRESH AIR VENTILATION (VAAYOO) PLANNER
// ============================================================================
export function FreshAirPlanner() {
  const [homeSize, setHomeSize] = useState<"2bhk" | "3bhk" | "4bhk" | "villa">("3bhk");
  const [model, setModel] = useState<"pro1" | "cool">("pro1");
  const [selectedZones, setSelectedZones] = useState<string[]>([
    "living",
    "master",
  ]);

  const zonesByHome: Record<
    typeof homeSize,
    { id: string; name: string; sqft: number; span: string }[]
  > = {
    "2bhk": [
      { id: "living", name: "Living & Dining", sqft: 650, span: "col-span-12 md:col-span-7" },
      { id: "master", name: "Master Suite", sqft: 450, span: "col-span-6 md:col-span-5" },
      { id: "bed2", name: "Bedroom 2", sqft: 300, span: "col-span-6 md:col-span-12" },
    ],
    "3bhk": [
      { id: "living", name: "Living & Dining Hall", sqft: 900, span: "col-span-12 md:col-span-6" },
      { id: "master", name: "Master Bedroom", sqft: 550, span: "col-span-6 md:col-span-6" },
      { id: "bed2", name: "Bedroom 2", sqft: 400, span: "col-span-6 md:col-span-6" },
      { id: "bed3", name: "Bedroom 3 / Study", sqft: 350, span: "col-span-6 md:col-span-6" },
    ],
    "4bhk": [
      { id: "living", name: "Formal Living & Dining", sqft: 1200, span: "col-span-12 md:col-span-6" },
      { id: "master", name: "Master Suite", sqft: 650, span: "col-span-6 md:col-span-6" },
      { id: "bed2", name: "Bedroom 2", sqft: 450, span: "col-span-6 md:col-span-4" },
      { id: "bed3", name: "Bedroom 3", sqft: 450, span: "col-span-6 md:col-span-4" },
      { id: "lounge", name: "Family Lounge / Bed 4", sqft: 600, span: "col-span-12 md:col-span-4" },
    ],
    villa: [
      { id: "living", name: "Ground Floor Living & Dining", sqft: 1500, span: "col-span-12 md:col-span-6" },
      { id: "master", name: "Master Pavilion", sqft: 900, span: "col-span-6 md:col-span-6" },
      { id: "bedrooms", name: "Upper Floor Bedrooms (2–4)", sqft: 1400, span: "col-span-6 md:col-span-6" },
      { id: "cinema", name: "Private Cinema / Basement", sqft: 700, span: "col-span-12 md:col-span-6" },
    ],
  };

  const zones = zonesByHome[homeSize];

  const toggleZone = (id: string) => {
    setSelectedZones((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleHomeSwitch = (h: typeof homeSize) => {
    setHomeSize(h);
    setSelectedZones(["living", "master"]);
  };

  const stats = useMemo(() => {
    const active = zones.filter((z) => selectedZones.includes(z.id));
    const totalSqft = active.reduce((s, z) => s + z.sqft, 0);
    // Each VaaYoo unit covers up to 1,500 sq ft
    const unitsNeeded = totalSqft === 0 ? 0 : Math.max(1, Math.ceil(totalSqft / 1500));
    const airflow = unitsNeeded * (model === "pro1" ? 1000 : 765);
    return { activeCount: active.length, totalSqft, unitsNeeded, airflow };
  }, [zones, selectedZones, model]);

  const waUrl = useMemo(() => {
    const zoneList = zones
      .filter((z) => selectedZones.includes(z.id))
      .map((z) => `• ${z.name} (~${z.sqft} sq ft)`)
      .join("\n");

    const text = `Hello VARELLI! I planned my VaaYoo Fresh Air system on your website:\n\n🏠 Residence: ${homeSize.toUpperCase()}\n🌬️ System: ${
      model === "pro1"
        ? "VaaYoo PRO1 (Smart App, No Indoor Ducting, 1000 m³/h)"
        : "VaaYoo COOL (DX Cooling + Gas Filtration, 765 m³/h)"
    }\n📦 Recommended Units: ${stats.unitsNeeded} unit(s) (${stats.airflow} m³/h total airflow)\n📍 Zones (${stats.totalSqft} sq ft):\n${zoneList || "• Exploring options"}\n\nPlease share a site assessment and quote.`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
  }, [homeSize, model, zones, selectedZones, stats]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-3">
              1. Residence Size
            </span>
            <div className="grid grid-cols-2 gap-2">
              {(["2bhk", "3bhk", "4bhk", "villa"] as const).map((h) => (
                <button
                  key={h}
                  onClick={() => handleHomeSwitch(h)}
                  className={`py-2.5 px-3 rounded-lg border text-xs font-bold uppercase cursor-pointer ${
                    homeSize === h
                      ? "bg-[#C5A880]/15 border-[#C5A880] text-[#C5A880]"
                      : "bg-[#08080A] border-[#2A2A35] text-white"
                  }`}
                >
                  {h === "villa" ? "Luxury Villa" : h}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-3">
              2. VaaYoo System
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setModel("pro1")}
                className={`p-2.5 rounded-lg border text-left cursor-pointer ${
                  model === "pro1"
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35]"
                }`}
              >
                <div className="text-xs font-bold text-white">VaaYoo PRO1</div>
                <div className="text-[10px] text-[#C2C2C8]">1000 m³/h · App · No Duct</div>
              </button>
              <button
                onClick={() => setModel("cool")}
                className={`p-2.5 rounded-lg border text-left cursor-pointer ${
                  model === "cool"
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35]"
                }`}
              >
                <div className="text-xs font-bold text-white">VaaYoo COOL</div>
                <div className="text-[10px] text-[#C2C2C8]">765 m³/h · DX Cool + Gas</div>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Zone Floor Plan */}
        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              3. Tap Zones to Oxygenate (CO₂ &lt; 800 ppm)
            </span>
            <button
              onClick={() => setSelectedZones(zones.map((z) => z.id))}
              className="text-xs font-mono text-[#C5A880] hover:underline cursor-pointer"
            >
              Select Whole Home
            </button>
          </div>

          <div className="p-4 rounded-xl bg-[#08080A] border border-[#2A2A35] grid grid-cols-12 gap-3">
            {zones.map((zone) => {
              const active = selectedZones.includes(zone.id);
              return (
                <button
                  key={zone.id}
                  onClick={() => toggleZone(zone.id)}
                  className={`${zone.span} p-4 rounded-lg border text-left transition-all cursor-pointer min-h-[96px] flex flex-col justify-between ${
                    active
                      ? "border-[#C5A880] bg-gradient-to-br from-[#C5A880]/15 to-[#121216] shadow-[0_0_20px_rgba(197,168,128,0.15)]"
                      : "border-[#2A2A35] bg-[#0E0E12] hover:border-[#C5A880]/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-display text-sm font-bold text-white">{zone.name}</div>
                    <Wind size={15} className={active ? "text-[#C5A880]" : "text-[#2A2A35]"} />
                  </div>
                  <div className="text-[11px] font-mono text-[#C2C2C8]">
                    ~{zone.sqft} sq ft · {active ? "4-Stage HEPA Active" : "Tap to add"}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Summary */}
      <div className="lg:col-span-5 bg-gradient-to-b from-[#1A1A22] to-[#121216] border border-[#C5A880]/60 rounded-xl p-6 shadow-2xl space-y-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
            Recommended VaaYoo Configuration
          </span>
          <div className="font-display text-3xl font-bold text-white mt-2">
            {stats.unitsNeeded} × {model === "pro1" ? "VaaYoo PRO1" : "VaaYoo COOL"}
          </div>
          <p className="text-xs text-[#C2C2C8] mt-1">
            Covers {stats.totalSqft} sq ft across {stats.activeCount} zones · Up to{" "}
            {stats.airflow.toLocaleString()} m³/h continuous fresh air.
          </p>
        </div>

        <div className="space-y-2 text-xs bg-[#08080A] border border-[#2A2A35] rounded-lg p-4">
          <div className="flex justify-between">
            <span className="text-[#C2C2C8]">Filtration</span>
            <span className="text-white font-medium">
              {model === "pro1" ? "4-Stage (Pre + 2× HEPA)" : "4-Stage (Pre + 2× HEPA + Gas)"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#C2C2C8]">Supply Cooling</span>
            <span className="text-white font-medium">
              {model === "cool" ? "Yes (Integrated DX Coil)" : "Ambient Filtered"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#C2C2C8]">Indoor Floor Space Used</span>
            <span className="text-[#C5A880] font-semibold">Zero (Wall / Outside Install)</span>
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#C5A880] hover:bg-[#d8be98] text-[#08080A] font-semibold text-sm transition-all"
        >
          <MessageCircle size={18} />
          <span>Get Site Assessment &amp; Quote on WhatsApp</span>
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// 3. CENTRAL VACUUM (DRAINV AC) PLANNER
// ============================================================================
export function CentralVacuumPlanner() {
  const [homeSize, setHomeSize] = useState<"2bhk" | "3bhk" | "4bhk" | "villa">("3bhk");
  const [powerUnit, setPowerUnit] = useState<"dry" | "automatik">("automatik");
  const [inletType, setInletType] = useState<"standard" | "hideahose">("hideahose");
  const [selectedRooms, setSelectedRooms] = useState<string[]>([
    "living",
    "master",
    "kitchen",
  ]);

  const rooms = [
    { id: "living", name: "Living & Dining", span: "col-span-12 md:col-span-6", isKitchen: false },
    { id: "kitchen", name: "Kitchen (VacPan Toe-Kick)", span: "col-span-6 md:col-span-6", isKitchen: true },
    { id: "master", name: "Master Bedroom Corridor", span: "col-span-6 md:col-span-4", isKitchen: false },
    { id: "bed2", name: "Bedrooms 2 & 3 Zone", span: "col-span-6 md:col-span-4", isKitchen: false },
    ...(homeSize === "4bhk" || homeSize === "villa"
      ? [{ id: "upper", name: "Upper Lounge / Guest Floor", span: "col-span-12 md:col-span-4", isKitchen: false }]
      : []),
    ...(homeSize === "villa"
      ? [{ id: "garage", name: "Garage / Car Detailing Bay", span: "col-span-12 md:col-span-12", isKitchen: false }]
      : []),
  ];

  const toggleRoom = (id: string) => {
    setSelectedRooms((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    const unitBase = powerUnit === "dry" ? 1.6 : 2.6;
    const perInlet = inletType === "hideahose" ? 0.85 : 0.45;
    const pipingBase = homeSize === "2bhk" ? 0.6 : homeSize === "3bhk" ? 0.9 : homeSize === "4bhk" ? 1.2 : 1.7;
    const total = unitBase + pipingBase + selectedRooms.length * perInlet;
    const minL = Math.round(total * 0.9 * 2) / 2;
    const maxL = Math.round(total * 1.15 * 2) / 2;
    return { minL, maxL };
  }, [homeSize, powerUnit, inletType, selectedRooms]);

  const waUrl = useMemo(() => {
    const list = rooms
      .filter((r) => selectedRooms.includes(r.id))
      .map((r) => `• ${r.name}`)
      .join("\n");
    const text = `Hello VARELLI! I planned my Drainvac Central Vacuum system:\n\n🏠 Residence: ${homeSize.toUpperCase()}\n⚙️ Power Unit: ${
      powerUnit === "automatik" ? "Drainvac Automatik Wet & Dry (Self-Draining)" : "Drainvac Generation 2 Cyclonic"
    }\n🔌 Inlet Style: ${
      inletType === "hideahose" ? "Hide-A-Hose In-Wall Retractable" : "Standard Wall Inlets"
    }\n📍 Inlet Zones (${selectedRooms.length}):\n${list || "• Exploring"}\n💰 Est. Installed Range: ₹${estimate.minL}L – ₹${estimate.maxL}L`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
  }, [homeSize, powerUnit, inletType, rooms, selectedRooms, estimate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-3">
              1. Drainvac Power Unit
            </span>
            <div className="space-y-2">
              <button
                onClick={() => setPowerUnit("automatik")}
                className={`w-full p-3 rounded-lg border text-left cursor-pointer ${
                  powerUnit === "automatik"
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35]"
                }`}
              >
                <div className="text-xs font-bold text-white">Automatik Wet &amp; Dry</div>
                <div className="text-[11px] text-[#C2C2C8]">Self-draining into plumbing · spills &amp; dust</div>
              </button>
              <button
                onClick={() => setPowerUnit("dry")}
                className={`w-full p-3 rounded-lg border text-left cursor-pointer ${
                  powerUnit === "dry"
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35]"
                }`}
              >
                <div className="text-xs font-bold text-white">Generation 2 Cyclonic</div>
                <div className="text-[11px] text-[#C2C2C8]">Bagless exterior exhaust · 700+ Air Watts</div>
              </button>
            </div>
          </div>

          <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-3">
              2. Hose &amp; Home Size
            </span>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => setInletType("hideahose")}
                className={`p-2.5 rounded-lg border text-left cursor-pointer ${
                  inletType === "hideahose"
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35]"
                }`}
              >
                <div className="text-xs font-bold text-white">Hide-A-Hose</div>
                <div className="text-[10px] text-[#C2C2C8]">Retracts into wall</div>
              </button>
              <button
                onClick={() => setInletType("standard")}
                className={`p-2.5 rounded-lg border text-left cursor-pointer ${
                  inletType === "standard"
                    ? "bg-[#C5A880]/15 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35]"
                }`}
              >
                <div className="text-xs font-bold text-white">Standard Inlet</div>
                <div className="text-[10px] text-[#C2C2C8]">Plug-in 30ft hose</div>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {(["2bhk", "3bhk", "4bhk", "villa"] as const).map((h) => (
                <button
                  key={h}
                  onClick={() => setHomeSize(h)}
                  className={`py-1.5 rounded border text-[11px] font-bold uppercase cursor-pointer ${
                    homeSize === h
                      ? "bg-[#1A1A22] border-[#C5A880] text-[#C5A880]"
                      : "bg-[#08080A] border-[#2A2A35] text-[#C2C2C8]"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Inlet Placement Grid */}
        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-4">
            3. Tap Zones to Place Wall Inlets
          </span>
          <div className="p-4 rounded-xl bg-[#08080A] border border-[#2A2A35] grid grid-cols-12 gap-3">
            {rooms.map((r) => {
              const active = selectedRooms.includes(r.id);
              return (
                <button
                  key={r.id}
                  onClick={() => toggleRoom(r.id)}
                  className={`${r.span} p-4 rounded-lg border text-left transition-all cursor-pointer min-h-[88px] flex flex-col justify-between ${
                    active
                      ? "border-[#C5A880] bg-gradient-to-br from-[#C5A880]/15 to-[#121216]"
                      : "border-[#2A2A35] bg-[#0E0E12]"
                  }`}
                >
                  <div className="flex justify-between items-start gap-2">
                    <span className="font-display text-sm font-bold text-white">{r.name}</span>
                    <Trash2 size={14} className={active ? "text-[#C5A880]" : "text-[#2A2A35]"} />
                  </div>
                  <span className="text-[11px] font-mono text-[#C2C2C8]">
                    {active
                      ? r.isKitchen
                        ? "VacPan Kick-Plate Active"
                        : `${inletType === "hideahose" ? "Hide-A-Hose" : "Wall"} Inlet Active`
                      : "Tap to place inlet"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Quote */}
      <div className="lg:col-span-5 bg-gradient-to-b from-[#1A1A22] to-[#121216] border border-[#C5A880]/60 rounded-xl p-6 shadow-2xl space-y-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
            Estimated Central Vacuum Package
          </span>
          <div className="font-display text-3xl sm:text-4xl font-bold text-white my-2">
            ₹{estimate.minL}L – ₹{estimate.maxL}L
          </div>
          <p className="text-xs text-[#C2C2C8]">
            Includes Canadian Drainvac utility unit, Schedule-40 anti-static PVC piping, {selectedRooms.length} inlets &amp; commissioning.
          </p>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#C5A880] hover:bg-[#d8be98] text-[#08080A] font-semibold text-sm transition-all"
        >
          <MessageCircle size={18} />
          <span>Send Vacuum Plan to WhatsApp</span>
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// 4. SMART SECURITY & WIFI 7 NETWORKING PLANNER
// ============================================================================
export function SecurityNetworkPlanner() {
  const [homeSize, setHomeSize] = useState<"2bhk" | "3bhk" | "4bhk" | "villa">("3bhk");
  const [selected, setSelected] = useState<string[]>([
    "doorbird",
    "biometric-lock",
    "cameras",
    "wifi7",
    "rack",
  ]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const floorMult = homeSize === "2bhk" ? 1 : homeSize === "3bhk" ? 1.25 : homeSize === "4bhk" ? 1.6 : 2.3;

  const ITEMS = [
    {
      id: "doorbird",
      label: "DoorBird Brass IP Video Intercom",
      desc: "German solid brass gate/door station with mobile video call & RFID",
      costL: 1.4,
      icon: Shield,
    },
    {
      id: "biometric-lock",
      label: "Biometric Mortise Smart Locks",
      desc: "Fingerprint, PIN & KNX welcome-scene trigger on main & master doors",
      costL: 0.85 * (homeSize === "villa" ? 2 : 1),
      icon: Lock,
    },
    {
      id: "cameras",
      label: "4K PoE Perimeter & Indoor Cameras",
      desc: `Local encrypted NVR storage (zero cloud leak) — ${
        homeSize === "2bhk" ? "3" : homeSize === "3bhk" ? "4" : homeSize === "4bhk" ? "6" : "10+"
      } cameras`,
      costL: 1.3 * floorMult,
      icon: Camera,
    },
    {
      id: "wifi7",
      label: "Enterprise WiFi 7 Ceiling Access Points",
      desc: `Zero dead-zone roaming across RCC slabs — ${
        homeSize === "2bhk" ? "2" : homeSize === "3bhk" ? "3" : homeSize === "4bhk" ? "4" : "6+"
      } UniFi APs`,
      costL: 1.2 * floorMult,
      icon: Wifi,
    },
    {
      id: "rack",
      label: "10GbE Fiber Core Rack, Firewall & UPS",
      desc: "Dream Machine Pro Max, PoE+ switch, isolated IoT VLANs & surge UPS",
      costL: 1.6 * (homeSize === "villa" ? 1.5 : 1),
      icon: Home,
    },
  ];

  const estimate = useMemo(() => {
    const total = selected.reduce((sum, id) => {
      const f = ITEMS.find((i) => i.id === id);
      return sum + (f ? f.costL : 0);
    }, 0);
    const minL = Math.max(1.5, Math.round(total * 0.9 * 2) / 2);
    const maxL = Math.max(minL + 1.0, Math.round(total * 1.15 * 2) / 2);
    return { minL, maxL };
  }, [selected, ITEMS]);

  const waUrl = useMemo(() => {
    const list = ITEMS.filter((i) => selected.includes(i.id))
      .map((i) => `• ${i.label}`)
      .join("\n");
    const text = `Hello VARELLI! I planned my Security & WiFi 7 Network:\n\n🏠 Residence: ${homeSize.toUpperCase()}\n🛡️ Selected Systems:\n${list || "• Exploring"}\n💰 Est. Installed Range: ₹${estimate.minL}L – ₹${estimate.maxL}L`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
  }, [homeSize, ITEMS, selected, estimate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-3">
            1. Select Residence Size
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {(["2bhk", "3bhk", "4bhk", "villa"] as const).map((h) => (
              <button
                key={h}
                onClick={() => setHomeSize(h)}
                className={`py-3 px-4 rounded-lg border text-xs font-bold uppercase cursor-pointer ${
                  homeSize === h
                    ? "bg-[#C5A880]/15 border-[#C5A880] text-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35] text-white"
                }`}
              >
                {h === "villa" ? "Luxury Villa" : h}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#121216] border border-[#2A2A35] rounded-xl p-6 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880] block mb-2">
            2. Toggle Security &amp; Networking Layers
          </span>
          {ITEMS.map((item) => {
            const active = selected.includes(item.id);
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`w-full flex items-center justify-between gap-3 p-4 rounded-lg border text-left cursor-pointer ${
                  active
                    ? "bg-[#C5A880]/10 border-[#C5A880]"
                    : "bg-[#08080A] border-[#2A2A35] hover:border-[#C5A880]/40"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${
                      active ? "bg-[#C5A880] text-[#08080A]" : "bg-[#1A1A22] text-[#C2C2C8]"
                    }`}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-[#C2C2C8] mt-0.5">{item.desc}</div>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                    active
                      ? "bg-[#C5A880] border-[#C5A880] text-[#08080A]"
                      : "border-[#2A2A35] bg-[#121216]"
                  }`}
                >
                  {active && <Check size={13} strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-[#1A1A22] to-[#121216] border border-[#C5A880]/60 rounded-xl p-6 shadow-2xl space-y-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
            Estimated Security &amp; WiFi 7 Package
          </span>
          <div className="font-display text-3xl sm:text-4xl font-bold text-white my-2">
            ₹{estimate.minL}L – ₹{estimate.maxL}L
          </div>
          <p className="text-xs text-[#C2C2C8]">
            Includes DoorBird / UniFi enterprise hardware, structured Cat6A cabling, VLAN configuration &amp; NVR setup.
          </p>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#C5A880] hover:bg-[#d8be98] text-[#08080A] font-semibold text-sm transition-all"
        >
          <MessageCircle size={18} />
          <span>Send Security &amp; Network Plan</span>
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}
