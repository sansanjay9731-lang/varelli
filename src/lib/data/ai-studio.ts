export interface BrandOption {
  id: string;
  name: string;
  region: "ITALIAN" | "EUROPEAN" | "GLOBAL";
  origin: string;
  specialty: string;
  description: string;
  image: string;
  logoText: string;
}

export interface RoomPreset {
  id: string;
  name: string;
  squareFeet: number;
  image: string;
  scenes: {
    morning: { lighting: string; curtains: string; audio: string };
    cinema: { lighting: string; curtains: string; audio: string };
    evening: { lighting: string; curtains: string; audio: string };
    away: { lighting: string; curtains: string; audio: string };
  };
}

export const BRAND_CATALOG: BrandOption[] = [
  // ITALIAN LUXURY
  {
    id: "basalte",
    name: "Basalte",
    region: "ITALIAN",
    origin: "Belgium / Italy",
    specialty: "Handcrafted Metal Touch Keypads",
    description: "Sleek brass, bronze, and aluminum touch keypads engineered for architectural minimalism.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    logoText: "BASALTE DESIGN",
  },
  {
    id: "ekinex",
    name: "Ekinex",
    region: "ITALIAN",
    origin: "Novara, Italy",
    specialty: "Italian Architectural KNX Switches",
    description: "Fenix NTM® matte finishes and vintage metal toggles designed and manufactured in Italy.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    logoText: "EKINEX ITALY",
  },
  {
    id: "vimar",
    name: "Vimar",
    region: "ITALIAN",
    origin: "Marostica, Italy",
    specialty: "Luxury Italian Cover Plates & Automation",
    description: "Murano glass and solid wood cover plates integrated with KNX bus technology.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    logoText: "VIMAR MAROSTICA",
  },
  {
    id: "sonus-faber",
    name: "Sonus Faber",
    region: "ITALIAN",
    origin: "Vicenza, Italy",
    specialty: "Hand-Crafted High-End Italian Speakers",
    description: "Natural walnut wood and leather acoustic speakers for reference audio quality.",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    logoText: "SONUS FABER",
  },

  // EUROPEAN PRECISION
  {
    id: "gira",
    name: "Gira",
    region: "EUROPEAN",
    origin: "Radevormwald, Germany",
    specialty: "German KNX Tactile Switches & Door Systems",
    description: "Award-winning Gira Esprit glass and stainless steel keypads with KNX bus precision.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    logoText: "GIRA GERMANY",
  },
  {
    id: "jung",
    name: "Jung",
    region: "EUROPEAN",
    origin: "Schalksmühle, Germany",
    specialty: "Les Couleurs® Le Corbusier KNX Switches",
    description: "Official architectural color palette switches matching luxury interior finishes.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    logoText: "JUNG KNX",
  },
  {
    id: "bang-olufsen",
    name: "Bang & Olufsen",
    region: "EUROPEAN",
    origin: "Struer, Denmark",
    specialty: "Sculptural Danish Architectural Audio",
    description: "Aluminum acoustic sculptures and motorized television displays.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    logoText: "BANG & OLUFSEN",
  },

  // GLOBAL LUXURY
  {
    id: "lutron",
    name: "Lutron Homeworks",
    region: "GLOBAL",
    origin: "Coopersburg, USA",
    specialty: "Architectural Lighting & Shading Controls",
    description: "Palladiom metal keypads and whisper-quiet motorized drapery actuation.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    logoText: "LUTRON HOMEWORKS",
  },
  {
    id: "crestron",
    name: "Crestron Horizon",
    region: "GLOBAL",
    origin: "Rockleigh, USA",
    specialty: "Enterprise Residential Orchestration",
    description: "Custom engraved Horizon keypads and multi-gigabit digital media processing.",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=800&q=80",
    logoText: "CRESTRON HORIZON",
  },
  {
    id: "bowers-wilkins",
    name: "Bowers & Wilkins",
    region: "GLOBAL",
    origin: "Worthing, UK",
    specialty: "Reference Dolby Atmos Cinema Speakers",
    description: "Diamond dome tweeters and matrix acoustic enclosures for dedicated private cinemas.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
    logoText: "BOWERS & WILKINS",
  },
];

export const DEFAULT_ROOM_PRESET: RoomPreset = {
  id: "living-suite",
  name: "Grand Living Suite",
  squareFeet: 1250,
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  scenes: {
    morning: { lighting: "80% Warm Circadian (2700K)", curtains: "Sheer 90% Open", audio: "Acoustic Morning Lounge" },
    cinema: { lighting: "5% Deep Indigo Ambient", curtains: "100% Blackout Sealing", audio: "Dolby Atmos 9.1.4 Surround" },
    evening: { lighting: "Warm Amber Glow (2200K)", curtains: "Architectural Drapery 100% Closed", audio: "Hi-Fi Jazz Stream" },
    away: { lighting: "0% All Off / Security Active", curtains: "Solar Guard Closed", audio: "Muted / Perimeter Active" },
  },
};
