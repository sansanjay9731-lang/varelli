/**
 * VARELLI Hardware Topology Dispatcher & Executive Specification Engine
 * Calculates industrial-grade hardware schedules, DIN-rail loads, and investment tiers.
 */

import { SpatialAnalysisResult } from "./spatial-analyzer";

export interface HardwareSKU {
  sku: string;
  brand: string;
  category: "KNX_DIN" | "LIGHTING_KEYPAD" | "SHADING_ACTUATOR" | "AUDIO_ACOUSTIC" | "CLIMATE_IAQ" | "SECURITY_ACCESS" | "NETWORK_CORE";
  name: string;
  unitCostInr: number;
  quantity: number;
  totalCostInr: number;
  origin: string;
  specification: string;
}

export interface SystemTopologySchedule {
  knxBusPowerSupplyMa: number;
  knxBusCurrentDrawMa: number;
  knxLineCouplers: number;
  daliAddressableLoops: number;
  daliBallastsConfigured: number;
  dolbyAtmosLayout: string;
  dolbyAtmosSpeakerCount: number;
  freshAirCfmRequired: number;
  centralVacuumDropPoints: number;
  networkBackboneSpeedGbps: number;
  estimatedLaborHours: number;
  bomItems: HardwareSKU[];
  financialSummary: {
    hardwareTotalInr: number;
    engineeringAndIntegrationInr: number;
    acousticTreatmentInr: number;
    projectTotalInr: number;
    formattedTotalRange: string;
  };
}

export function generateSystemTopology(
  analysis: SpatialAnalysisResult,
  selectedBrandIds: string[]
): SystemTopologySchedule {
  const isBasalte = selectedBrandIds.includes("basalte");
  const isEkinex = selectedBrandIds.includes("ekinex");
  const isGira = selectedBrandIds.includes("gira");
  const isLutron = selectedBrandIds.includes("lutron");
  const isSonusFaber = selectedBrandIds.includes("sonus-faber");

  const totalDaliCircuits = analysis.rooms.reduce((acc, r) => acc + r.estimatedCircuits.lightingDali, 0);
  const totalShades = analysis.rooms.reduce((acc, r) => acc + r.estimatedCircuits.motorizedShades, 0);
  const totalAudioChannels = analysis.rooms.reduce((acc, r) => acc + r.estimatedCircuits.audioChannels, 0);

  // Industrial BOM calculation
  const bom: HardwareSKU[] = [
    {
      sku: "KNX-PS-640-REG",
      brand: "ABB / Jung",
      category: "KNX_DIN",
      name: "KNX System Power Supply with Choke (640mA / 30V DC)",
      unitCostInr: 42000,
      quantity: 2,
      totalCostInr: 84000,
      origin: "Germany",
      specification: "ISO/IEC 14543 Decentralized bus controller with integrated diagnostics.",
    },
    {
      sku: isBasalte ? "BAS-SEN-4B-BRASS" : isEkinex ? "EK-EF2-TP-FENIX" : "GIR-ESP-GLASS-04",
      brand: isBasalte ? "Basalte (Belgium/Italy)" : isEkinex ? "Ekinex (Italy)" : "Gira (Germany)",
      category: "LIGHTING_KEYPAD",
      name: isBasalte ? "Sentido Brushed Brass 4-Way Multi-Touch Keypad" : isEkinex ? "20EF2 Fenix NTM Matte Touch Sensor" : "Gira Esprit Glass KNX Touch Sensor 4-Gang",
      unitCostInr: isBasalte ? 94000 : isEkinex ? 62000 : 48000,
      quantity: 14,
      totalCostInr: (isBasalte ? 94000 : isEkinex ? 62000 : 48000) * 14,
      origin: isBasalte ? "Belgium / Italy" : isEkinex ? "Italy" : "Germany",
      specification: "Integrated temperature probe, RGB LED status feedback, multi-touch multitouch gestures.",
    },
    {
      sku: "DALI-GW-64X2-IP",
      brand: "Jung / ABB",
      category: "KNX_DIN",
      name: "KNX-to-DALI-2 Tunable White Gateway (2 x 64 Channels)",
      unitCostInr: 78000,
      quantity: 1,
      totalCostInr: 78000,
      origin: "Germany",
      specification: "IEC 62386 certified, emergency lighting broadcast, DT8 colour temperature management.",
    },
    {
      sku: "LUT-QS-SHADE-MTR",
      brand: "Lutron Sivoia / Somfy",
      category: "SHADING_ACTUATOR",
      name: "Ultra-Quiet Sivoia QS Motorized Drapery Actuation Track",
      unitCostInr: 86000,
      quantity: totalShades,
      totalCostInr: 86000 * totalShades,
      origin: "USA",
      specification: "Sound level < 38 dBA at 1m, electronic drive unit with soft start/stop.",
    },
    {
      sku: isSonusFaber ? "SF-PW-662-REF" : "BW-CT-8.2-LCR",
      brand: isSonusFaber ? "Sonus Faber (Italy)" : "Bowers & Wilkins (UK)",
      category: "AUDIO_ACOUSTIC",
      name: isSonusFaber ? "Sonus Faber Palladio Level 6 In-Wall Architectural Reference LCR" : "Bowers & Wilkins Custom Theatre 800 Reference In-Wall Speaker",
      unitCostInr: 165000,
      quantity: totalAudioChannels,
      totalCostInr: 165000 * totalAudioChannels,
      origin: isSonusFaber ? "Vicenza, Italy" : "Worthing, UK",
      specification: "Diamond/silk dome tweeter, voice-matched timber enclosures for CEDIA RP22 compliance.",
    },
    {
      sku: "VENT-HRV-450-IAQ",
      brand: "Zehnder / VARELLI IAQ",
      category: "CLIMATE_IAQ",
      name: "Centralized Heat Recovery Fresh Air System with HEPA/Carbon Filter (450 m³/h)",
      unitCostInr: 385000,
      quantity: 1,
      totalCostInr: 385000,
      origin: "Switzerland",
      specification: "Constant positive pressure ventilation, PM2.5 filtration efficiency > 99.4%, silent ECM fans.",
    },
    {
      sku: "NET-CORE-10G-RACK",
      brand: "Ruckus / Cisco Enterprise",
      category: "NETWORK_CORE",
      name: "Enterprise Multi-Gigabit Managed Switch (10Gbps SFP+ Uplink) + Wi-Fi 7 APs",
      unitCostInr: 295000,
      quantity: 1,
      totalCostInr: 295000,
      origin: "USA",
      specification: "VLAN IoT isolation, automated RF beamforming, seamless roaming across 5,000+ sq ft.",
    },
  ];

  const hardwareTotal = bom.reduce((acc, item) => acc + item.totalCostInr, 0);
  const engineeringTotal = Math.round(hardwareTotal * 0.18);
  const acousticTotal = 420000;
  const grandTotal = hardwareTotal + engineeringTotal + acousticTotal;

  const minLakhs = (grandTotal * 0.9 / 100000).toFixed(1);
  const maxLakhs = (grandTotal * 1.15 / 100000).toFixed(1);

  return {
    knxBusPowerSupplyMa: 1280,
    knxBusCurrentDrawMa: 480,
    knxLineCouplers: 2,
    daliAddressableLoops: 2,
    daliBallastsConfigured: totalDaliCircuits,
    dolbyAtmosLayout: "9.1.6 Reference 3D Spatial Audio",
    dolbyAtmosSpeakerCount: 16,
    freshAirCfmRequired: Math.round(analysis.totalVolumeM3 * 0.35 * 0.588),
    centralVacuumDropPoints: 6,
    networkBackboneSpeedGbps: 10,
    estimatedLaborHours: 180,
    bomItems: bom,
    financialSummary: {
      hardwareTotalInr: hardwareTotal,
      engineeringAndIntegrationInr: engineeringTotal,
      acousticTreatmentInr: acousticTotal,
      projectTotalInr: grandTotal,
      formattedTotalRange: `₹${minLakhs} Lakhs – ₹${maxLakhs} Lakhs`,
    },
  };
}
