/**
 * Physically-Based Material Shaders & Texture Definitions for VARELLI Spatial 3D Simulator
 */

export interface MaterialFinish {
  id: string;
  brandName: string;
  finishName: string;
  colorHex: string;
  roughness: number;
  metalness: number;
  emissiveHex?: string;
  reflectionCoefficient: number;
}

export const BRAND_MATERIAL_SHADERS: Record<string, MaterialFinish> = {
  "basalte-brass": {
    id: "basalte-brass",
    brandName: "Basalte",
    finishName: "Brushed Raw Brass",
    colorHex: "#D4AF37",
    roughness: 0.25,
    metalness: 0.92,
    reflectionCoefficient: 0.88,
  },
  "ekinex-fenix": {
    id: "ekinex-fenix",
    brandName: "Ekinex",
    finishName: "Fenix NTM Nero Ingo (Matte Italian)",
    colorHex: "#1C1D1F",
    roughness: 0.85,
    metalness: 0.05,
    reflectionCoefficient: 0.12,
  },
  "vimar-murano": {
    id: "vimar-murano",
    brandName: "Vimar",
    finishName: "Murano Black Pearl Glass",
    colorHex: "#11141A",
    roughness: 0.08,
    metalness: 0.35,
    reflectionCoefficient: 0.95,
  },
  "gira-glass": {
    id: "gira-glass",
    brandName: "Gira",
    finishName: "Gira Esprit Smoked Glass",
    colorHex: "#22252A",
    roughness: 0.15,
    metalness: 0.40,
    reflectionCoefficient: 0.90,
  },
  "lutron-palladiom": {
    id: "lutron-palladiom",
    brandName: "Lutron",
    finishName: "Palladiom Architectural Satin Nickel",
    colorHex: "#B8B9B4",
    roughness: 0.30,
    metalness: 0.85,
    reflectionCoefficient: 0.78,
  },
  "sonus-walnut": {
    id: "sonus-walnut",
    brandName: "Sonus Faber",
    finishName: "Natural Italian Walnut & Hand-Stitched Leather",
    colorHex: "#5C3A21",
    roughness: 0.45,
    metalness: 0.10,
    reflectionCoefficient: 0.40,
  },
};
