export interface Project {
  id: string;
  title: string;
  location: string;
  city: string;
  type: string;
  services: string[];
  description: string;
  image: string;
  imageAlt: string;
  featured: boolean;
  specs?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "koramangala-villa-01",
    title: "Koramangala Villa",
    location: "Koramangala, Bangalore",
    city: "Bangalore",
    type: "Private Villa",
    services: ["Home Automation", "Private Cinema", "Fresh Air Ventilation", "Home Networking"],
    description:
      "A complete intelligent living environment for a 6,200 sq. ft. contemporary villa. Whole-home KNX automation, a 12-seat Dolby Atmos private cinema, and mechanical fresh air ventilation.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    imageAlt: "Contemporary luxury villa with integrated home automation in Koramangala Bangalore",
    featured: true,
    specs: [
      { label: "Area", value: "6,200 sq. ft." },
      { label: "Cinema", value: "12-seat Dolby Atmos 7.1.4" },
      { label: "Platform", value: "KNX + Apple HomeKit" },
      { label: "Location", value: "Koramangala, Bangalore" },
    ],
  },
  {
    id: "whitefield-estate-01",
    title: "Whitefield Estate",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    type: "Private Estate",
    services: ["Home Automation", "Smart Security", "Central Vacuum", "Home Networking"],
    description:
      "A sprawling 9,000 sq. ft. estate with comprehensive automation, perimeter security, central vacuum throughout, and enterprise-grade WiFi for seamless connectivity across the entire property.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Luxury estate with smart home automation and security systems in Whitefield Bangalore",
    featured: true,
    specs: [
      { label: "Area", value: "9,000 sq. ft." },
      { label: "Automation", value: "Whole-home KNX" },
      { label: "Security", value: "Biometric + Smart Optical CCTV" },
      { label: "Location", value: "Whitefield, Bangalore" },
    ],
  },
  {
    id: "sadashivanagar-residence-01",
    title: "Sadashivanagar Residence",
    location: "Sadashivanagar, Bangalore",
    city: "Bangalore",
    type: "Luxury Residence",
    services: ["Private Cinema", "Home Theatre", "Home Automation"],
    description:
      "A dedicated 8-seat private cinema and integrated living room home theatre within a classic Sadashivanagar residence. Dolby Atmos 9.1.4 audio, 4K laser projection, and acoustic treatment concealed within traditional architectural finishes.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    imageAlt: "Private cinema with Dolby Atmos and 4K laser projection in Sadashivanagar Bangalore",
    featured: true,
    specs: [
      { label: "Cinema", value: "8-seat Dolby Atmos 9.1.4" },
      { label: "Projection", value: "4K Laser, 150 inch Screen" },
      { label: "Acoustic", value: "Full acoustic treatment" },
      { label: "Location", value: "Sadashivanagar, Bangalore" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
