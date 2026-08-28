"use client";

import React, { useState } from "react";
import { X, Check, MessageCircle, Sparkles, MapPin, Volume2, Calendar, Clock, ShieldCheck } from "@/components/ui/icons";

interface AuditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CITIES = [
  { id: "blr-lavelle", name: "Bangalore", area: "Lavelle Road Flagship", tag: "Primary Experience Center" },
  { id: "blr-indira", name: "Bangalore", area: "Indiranagar Experience Lab", tag: "Dolby Atmos 9.4.6" },
  { id: "bom-worli", name: "Mumbai", area: "Worli Sea Face Studio", tag: "By Appointment" },
  { id: "del-golf", name: "Delhi NCR", area: "Golf Course Road, Gurugram", tag: "By Appointment" },
  { id: "hyd-jubilee", name: "Hyderabad", area: "Jubilee Hills Road No. 36", tag: "By Appointment" },
];

const EXPERIENCE_SUITES = [
  {
    id: "dolby-atmos",
    title: "Reference Dolby Atmos 9.4.6 Cinema",
    tech: "Sonus Faber Palladio • Stewart 150″ Cinemascope • Barco DCI Laser",
    desc: "Experience zero-distortion studio reference audio with quad active subwoofers and calibrated acoustic decoupling.",
  },
  {
    id: "knx-lighting",
    title: "European KNX & DALI-2 Circadian Salon",
    tech: "Basalte Solid Raw Brass • Ekinex Fenix • Tunable White 1800K-6000K",
    desc: "Audition precision motorized Italian drapery, automated glass partitions, and tactile multi-touch switches.",
  },
  {
    id: "audiophile-stereo",
    title: "Audiophile Reference Hi-Fi Lounge",
    tech: "Bowers & Wilkins 800 Series Diamond • Pure Class-A Amplification",
    desc: "Uncompressed vinyl and high-resolution master audio streaming in an acoustically optimized salon.",
  },
  {
    id: "iaq-cleanroom",
    title: "Swiss Zehnder IAQ & Invisible Audio Suite",
    tech: "Zehnder ComfoAir Q ERV • Flush Invisible Plaster-In Loudspeakers",
    desc: "Feel positive-pressure pure filtered mountain air and listen to invisible sound concealed within Venetian plaster.",
  },
];

export default function AuditionModal({ isOpen, onClose }: AuditionModalProps) {
  const [selectedCity, setSelectedCity] = useState("blr-lavelle");
  const [selectedSuite, setSelectedSuite] = useState("dolby-atmos");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Afternoon (2 PM - 5 PM)");

  if (!isOpen) return null;

  const cityName = CITIES.find((c) => c.id === selectedCity)?.name || "Bangalore";
  const cityArea = CITIES.find((c) => c.id === selectedCity)?.area || "Lavelle Road";
  const suiteTitle = EXPERIENCE_SUITES.find((s) => s.id === selectedSuite)?.title || "Dolby Atmos Cinema";

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello VARELLI, I would like to book a private audition session at your ${cityName} Experience Center (${cityArea}).\n\n• Experience Suite: ${suiteTitle}\n• Name: ${clientName || "Discerning Client"}\n• Preferred Date: ${preferredDate || "Earliest Available"}\n• Preferred Time: ${preferredTime}\n• Phone: ${clientPhone || "Provided on WhatsApp"}\n\nPlease confirm availability with a Senior Systems Architect.`;
    const url = `https://wa.me/919900000000?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0D0F14] border border-[var(--gold)]/50 p-6 md:p-8 text-white shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-[var(--gold)] text-xs font-mono mb-1.5">
            <Sparkles size={14} />
            <span className="font-bold uppercase tracking-widest">PRIVATE SANCTUARY AUDITIONS</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
            Book an Experiential Audition Session
          </h3>
          <p className="text-xs md:text-sm text-gray-400 mt-1 font-body">
            Audition studio-mastered Dolby Atmos 9.4.6 acoustics, Italian Basalte brass switches, and Swiss clean air in person.
          </p>
        </div>

        <form onSubmit={handleWhatsAppBooking} className="space-y-6">
          {/* Step 1: Select Experience Center */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2.5">
              1. Select Experience Center City
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CITIES.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setSelectedCity(c.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedCity === c.id
                      ? "bg-[var(--gold)]/10 border-[var(--gold)] text-white shadow-md shadow-[var(--gold)]/10"
                      : "bg-[#141720] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                    <span>{c.name}</span>
                    <span className="text-[9px] font-mono text-[var(--gold)]">{c.tag}</span>
                  </div>
                  <p className="text-[11px] text-gray-400">{c.area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Select Experience Suite */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2.5">
              2. Select Experience Suite to Audition
            </label>
            <div className="space-y-2">
              {EXPERIENCE_SUITES.map((s) => (
                <div
                  key={s.id}
                  onClick={() => setSelectedSuite(s.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    selectedSuite === s.id
                      ? "bg-[var(--gold)]/10 border-[var(--gold)] text-white shadow-md shadow-[var(--gold)]/10"
                      : "bg-[#141720] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-display font-semibold text-white text-sm">{s.title}</h4>
                    {selectedSuite === s.id && <Check size={14} className="text-emerald-400" />}
                  </div>
                  <p className="text-[10px] font-mono text-[var(--gold)] mb-1">{s.tech}</p>
                  <p className="text-[11px] text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Contact & Slot Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-mono text-gray-400 block mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g., Aditya Roy"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-gray-800 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--gold)] font-mono"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-gray-400 block mb-1">Phone / WhatsApp Number</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-gray-800 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[var(--gold)] font-mono"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-gray-400 block mb-1">Preferred Date</label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-gray-800 text-xs text-white focus:outline-none focus:border-[var(--gold)] font-mono"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-gray-400 block mb-1">Preferred Time Window</label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-gray-800 text-xs text-white focus:outline-none focus:border-[var(--gold)] font-mono"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              </select>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-xl shadow-emerald-950/50 cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Confirm Audition Slot via WhatsApp Desk</span>
            </button>
            <p className="text-center text-[10px] text-gray-500 font-mono mt-2">
              🔒 100% Private Session • Zero Walk-ins • Dedicated Systems Architect Assigned
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
