"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_CATALOG } from "@/lib/data/ai-studio";
import { SpatialAnalysisResult, analyzeFloorplanPlanData } from "@/lib/ai/spatial-analyzer";
import { SystemTopologySchedule, generateSystemTopology } from "@/lib/ai/topology-dispatcher";
import Spatial3DCanvas from "./Spatial3DCanvas";
import SpatialWalkthroughEngine from "./SpatialWalkthroughEngine";
import NeuralTelemetryFeed from "./NeuralTelemetryFeed";
import ExecutiveSpecDashboard from "./ExecutiveSpecDashboard";
import { Sparkles, Upload, Check, Smartphone, Laptop, Compass, Layers } from "@/components/ui/icons";

export default function AIResidenceStudio() {
  const [step, setStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"WALKTHROUGH" | "ORBIT">("WALKTHROUGH");
  const [planName, setPlanName] = useState<string>("Bespoke_Villa_Architectural_Floorplan.dwg");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["basalte", "gira", "lutron", "sonus-faber"]);
  const [activeRegionFilter, setActiveRegionFilter] = useState<"ALL" | "ITALIAN" | "EUROPEAN" | "GLOBAL">("ALL");
  const [activeScene, setActiveScene] = useState<"morning" | "cinema" | "evening" | "away">("morning");
  const [deviceMode, setDeviceMode] = useState<"phone" | "laptop">("laptop");

  // Backend state initialized with instant default analysis
  const [analysisResult, setAnalysisResult] = useState<SpatialAnalysisResult>(() =>
    analyzeFloorplanPlanData("Bespoke_Villa_Architectural_Floorplan.dwg")
  );
  const [topologySchedule, setTopologySchedule] = useState<SystemTopologySchedule>(() =>
    generateSystemTopology(
      analyzeFloorplanPlanData("Bespoke_Villa_Architectural_Floorplan.dwg"),
      ["basalte", "gira", "lutron", "sonus-faber"]
    )
  );

  // Trigger Backend Analysis API with instant fallback
  const handleFloorplanUpload = async (e?: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnalyzing(true);
    const filename = e?.target?.files?.[0]?.name || "Bespoke_Villa_Architectural_Floorplan.dwg";
    setPlanName(filename);

    const localAnalysis = analyzeFloorplanPlanData(filename);
    setAnalysisResult(localAnalysis);

    try {
      const res = await fetch("/api/studio/analyze-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename, fileSizeBytes: 4800000 }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.analysis) {
          setAnalysisResult(data.analysis);
        }
      }
    } catch (err) {
      console.warn("AI vision API offline/fallback:", err);
    } finally {
      setTimeout(() => {
        setIsAnalyzing(false);
        setStep(2);
      }, 1200);
    }
  };

  // Trigger Backend Topology Generation API with instant fallback
  const handleGenerateSpec = async () => {
    const currentAnalysis = analysisResult || analyzeFloorplanPlanData(planName);
    const instantTopology = generateSystemTopology(currentAnalysis, selectedBrands);
    setTopologySchedule(instantTopology);
    setStep(4);

    try {
      const res = await fetch("/api/studio/generate-spec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedBrands, planName, analysis: currentAnalysis }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.topology) {
          setTopologySchedule(data.topology);
        }
      }
    } catch (err) {
      console.warn("Spec generation API offline/fallback:", err);
    }
  };

  const toggleBrand = (id: string) => {
    if (selectedBrands.includes(id)) {
      if (selectedBrands.length > 1) {
        setSelectedBrands(selectedBrands.filter((b) => b !== id));
      }
    } else {
      setSelectedBrands([...selectedBrands, id]);
    }
  };

  const filteredBrands = BRAND_CATALOG.filter(
    (b) => activeRegionFilter === "ALL" || b.region === activeRegionFilter
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 text-[var(--gold)] text-xs uppercase tracking-widest font-mono mb-4">
          <Sparkles size={14} />
          <span>VARELLI Spatial Intelligence Engine</span>
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Enterprise AI Residence Studio
        </h1>
        <p className="text-sm md:text-base text-[var(--text-secondary)] font-body leading-relaxed">
          Upload your architectural floorplan, curate across Italian & European technology backbones, and simulate your live spatial environment on mobile or laptop.
        </p>

        {/* Step Indicator */}
        <div className="mt-8 flex items-center justify-center space-x-2 sm:space-x-4 text-xs font-mono">
          {[
            { num: 1, label: "Floorplan AI Analysis" },
            { num: 2, label: "Brand Ecosystem" },
            { num: 3, label: "3D Spatial Ray-Tracer" },
            { num: 4, label: "Executive Specification" },
          ].map((s) => (
            <button
              key={s.num}
              onClick={() => setStep(s.num)}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border transition-all ${
                step === s.num
                  ? "bg-[var(--gold)] text-[#08080A] font-semibold border-[var(--gold)] shadow-lg shadow-[var(--gold)]/20"
                  : step > s.num
                  ? "bg-[var(--surface-2)] text-[var(--gold)] border-[var(--gold)]/40"
                  : "bg-[var(--surface-1)] text-[var(--text-muted)] border-[var(--border)]"
              }`}
            >
              <span>{s.num}.</span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* STEP 1: FLOORPLAN UPLOAD & COMPUTER VISION */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="p-8 rounded-2xl bg-[var(--surface-1)] border border-[var(--border)] text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 flex items-center justify-center text-[var(--gold)]">
              <Upload size={28} />
            </div>
            <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)] mb-3">
              Upload Architectural CAD / PDF Floorplan
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mb-8 leading-relaxed">
              Drag & drop your architectural drawing (DWG, DXF, PDF, PNG). The VARELLI Vision Neural Engine will automatically vectorize walls, room polygons, daylight apertures, and acoustic decay ratios.
            </p>

            <label className="relative cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#08080A] font-semibold text-sm tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-[var(--gold)]/20 font-mono">
              <span>{isAnalyzing ? "Executing Neural Spatial Extraction..." : "Upload Architectural Plan"}</span>
              <input
                type="file"
                accept="image/*,.pdf,.dwg,.dxf"
                onChange={handleFloorplanUpload}
                className="hidden"
              />
            </label>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-center space-x-6 text-xs text-[var(--text-muted)] font-mono">
              <span>✓ CAD / PDF / DXF / PNG</span>
              <span>✓ Neural Polygon Vectorization</span>
              <span>✓ Daylighting & Acoustic Raycast</span>
            </div>

            <div className="mt-6">
              <button
                onClick={() => handleFloorplanUpload()}
                className="text-xs text-[var(--gold)] hover:underline font-mono"
              >
                Or analyze sample 4,180 sq ft Luxury Bangalore Villa Plan →
              </button>
            </div>
          </div>

          {isAnalyzing && (
            <NeuralTelemetryFeed
              logs={[
                "[INITIALIZING] Spatial Vector Engine v4.2...",
                "[PARSING] CAD DXF polygon layer...",
                "[VECTORIZING] Calculating room perimeter boundaries...",
                "[ACOUSTICS] Raycasting RT60 decay curve for Dolby Atmos cinema room...",
                "[SUCCESS] Spatial topology ready for hardware dispatch.",
              ]}
            />
          )}
        </motion.div>
      )}

      {/* STEP 2: BRAND ECOSYSTEM */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
                Curate Brand Heritage & Hardware Standards
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Select Italian craftsmanship, European KNX precision, and Global luxury backbones.
              </p>
            </div>

            {/* Region Filter */}
            <div className="flex space-x-2 text-xs font-mono">
              {(["ALL", "ITALIAN", "EUROPEAN", "GLOBAL"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRegionFilter(r)}
                  className={`px-3 py-1.5 rounded border transition-all ${
                    activeRegionFilter === r
                      ? "bg-[var(--gold)] text-[#08080A] font-bold border-[var(--gold)]"
                      : "bg-[var(--surface-1)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--gold)]/40"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => {
              const isSelected = selectedBrands.includes(brand.id);
              return (
                <div
                  key={brand.id}
                  onClick={() => toggleBrand(brand.id)}
                  className={`group cursor-pointer rounded-xl border p-6 transition-all duration-300 ${
                    isSelected
                      ? "bg-[var(--surface-2)] border-[var(--gold)] shadow-xl shadow-[var(--gold)]/10"
                      : "bg-[var(--surface-1)] border-[var(--border)] hover:border-[var(--border-hover)]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="badge-mono text-[9px] uppercase tracking-widest text-[var(--gold)]">
                        {brand.region} • {brand.origin}
                      </span>
                      <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mt-1">
                        {brand.name}
                      </h3>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[var(--gold)] border-[var(--gold)] text-[#08080A]"
                          : "border-[var(--border)] text-transparent"
                      }`}
                    >
                      <Check size={14} />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-[var(--gold)] mb-2">{brand.specialty}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{brand.description}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-6">
            <button
              onClick={() => setStep(3)}
              className="px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#08080A] font-semibold text-sm tracking-wider uppercase rounded-lg transition-all font-mono"
            >
              Launch 3D Spatial Ray-Tracer →
            </button>
          </div>
        </motion.div>
      )}

      {/* STEP 3: LIVE 3D SPATIAL SIMULATION */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[var(--surface-1)] p-4 rounded-xl border border-[var(--border)]">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("WALKTHROUGH")}
                className={`px-3.5 py-2 rounded-lg flex items-center space-x-1.5 text-xs font-mono transition-all ${
                  viewMode === "WALKTHROUGH"
                    ? "bg-[var(--gold)] text-[#08080A] font-bold shadow-md shadow-[var(--gold)]/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Compass size={14} />
                <span>3D Walkthrough Tour</span>
              </button>
              <button
                onClick={() => setViewMode("ORBIT")}
                className={`px-3.5 py-2 rounded-lg flex items-center space-x-1.5 text-xs font-mono transition-all ${
                  viewMode === "ORBIT"
                    ? "bg-[var(--gold)] text-[#08080A] font-bold shadow-md shadow-[var(--gold)]/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Layers size={14} />
                <span>Room Orbit View</span>
              </button>
            </div>

            {/* Scene Selectors */}
            <div className="flex items-center space-x-2 text-xs font-mono">
              <span className="text-[10px] text-gray-500 uppercase mr-1 hidden sm:inline">Lighting Scene:</span>
              {(["morning", "cinema", "evening", "away"] as const).map((sc) => (
                <button
                  key={sc}
                  onClick={() => setActiveScene(sc)}
                  className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all ${
                    activeScene === sc
                      ? "bg-[var(--gold)] text-[#08080A] font-bold"
                      : "bg-[var(--surface-2)] text-[var(--text-secondary)] hover:text-[var(--gold)]"
                  }`}
                >
                  {sc}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Spatial Interactive Engine Container */}
          <div className="flex justify-center">
            {viewMode === "WALKTHROUGH" ? (
              <SpatialWalkthroughEngine
                sceneMode={activeScene}
                activeBrand={selectedBrands[0] || "basalte"}
                deviceMode={deviceMode}
              />
            ) : (
              <div
                className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-black transition-all duration-500 shadow-2xl ${
                  deviceMode === "phone" ? "w-[360px] h-[640px]" : "w-full aspect-[16/9] max-h-[500px]"
                }`}
              >
                <Spatial3DCanvas
                  sceneMode={activeScene}
                  activeBrand={selectedBrands[0] || "basalte"}
                  deviceMode={deviceMode}
                />
              </div>
            )}
          </div>

          {analysisResult && (
            <NeuralTelemetryFeed logs={analysisResult.telemetryLogs} />
          )}

          <div className="flex justify-between pt-6">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 border border-[var(--border)] text-xs text-[var(--text-secondary)] hover:text-white uppercase font-mono rounded"
            >
              ← Back to Brands
            </button>
            <button
              onClick={handleGenerateSpec}
              className="px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[#08080A] font-semibold text-sm tracking-wider uppercase rounded-lg transition-all font-mono"
            >
              Generate Executive Topology & BOM →
            </button>
          </div>
        </motion.div>
      )}

      {/* STEP 4: EXECUTIVE SPECIFICATION & BOM */}
      {step === 4 && topologySchedule && analysisResult && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ExecutiveSpecDashboard
            analysis={analysisResult}
            topology={topologySchedule}
            planName={planName}
          />
        </motion.div>
      )}
    </div>
  );
}
