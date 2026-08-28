export interface Capability {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  videoUrl?: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  subheadline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  capabilities: Capability[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: "home-automation",
    name: "Home Automation",
    shortName: "Automation",
    headline: "Intelligent Systems. Invisible Architecture.",
    subheadline: "Whole-home automation engineered for luxury villas and private residences across India.",
    description:
      "VARELLI designs and integrates comprehensive home automation systems that disappear into your architecture. From KNX wired infrastructure to wireless platforms, every system is engineered around your residence.",
    metaTitle: "Luxury Home Automation India — Intelligent Residential Systems | VARELLI",
    metaDescription:
      "VARELLI engineers luxury home automation systems for villas and private residences across India. Whole-home automation, smart lighting, motorized curtains, climate control and more.",
    keywords: [
      "home automation India",
      "luxury home automation",
      "smart home automation",
      "home automation company India",
      "whole home automation",
      "KNX home automation",
      "home automation systems",
    ],
    capabilities: [
      {
        title: "Lighting & Ambience",
        description: "DALI and KNX-based architectural lighting control. Scene-based environments from morning routines to cinema mode.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Glass touch smart home switch panel for lighting scene control",
      },
      {
        title: "Motorized Curtains & Shading",
        description: "Precision-engineered motorized curtains and blinds integrated into the automation ecosystem. Voice, app, and scene control.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Motorized luxury drapery track and automated solar shading",
      },
      {
        title: "Climate & Air Quality",
        description: "Intelligent HVAC management with occupancy sensing, schedule-based automation, and fresh air system integration.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Concealed linear AC air diffuser in modern villa ceiling",
      },
      {
        title: "Security & Access",
        description: "Biometric access, smart door locks, video door phones, and CCTV integrated into a unified security layer.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Smart biometric door lock and digital access control",
      },
      {
        title: "Single-App Control",
        description: "One interface. Every system. Compatible with Apple HomeKit, Google Home, Amazon Alexa, and dedicated control apps.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Tablet interface displaying whole home automation controls",
      },
      {
        title: "Voice & AI",
        description: "Natural voice control across every room. Automation routines that learn from your living patterns.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Voice control smart speaker integrated into luxury residence",
      },
    ],
    faqs: [
      {
        question: "When should home automation be planned for a new residence?",
        answer: "Home automation infrastructure — particularly wired systems such as KNX — must be planned before electrical work begins.",
      },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Luxury home automation control panel integrated into a contemporary residence",
    icon: "home",
  },
  {
    slug: "private-cinema",
    name: "Private Cinema",
    shortName: "Cinema",
    headline: "Reference Cinema. Private Residence.",
    subheadline: "Purpose-designed private cinemas with Dolby Atmos audio, 4K laser projection, and acoustic treatment.",
    description:
      "A VARELLI private cinema is an engineered acoustic environment designed to reference standards.",
    metaTitle: "Private Cinema Design & Installation India — Dolby Atmos | VARELLI",
    metaDescription: "VARELLI designs and installs private cinemas for luxury residences across India.",
    keywords: ["private cinema India", "home cinema design", "Dolby Atmos home theatre"],
    capabilities: [
      {
        title: "Acoustic Design & Treatment",
        description: "Room geometry analysis, RT60 calculation, bass traps, and diffusion panels concealed within luxury architectural finishes.",
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Studio acoustic wall panels in a private cinema room",
      },
      {
        title: "Dolby Atmos Audio",
        description: "Reference-grade Dolby Atmos configurations from 7.1.4 to 9.1.6. Speaker calibration to studio reference standards.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Dolby Atmos architectural cinema speaker setup",
      },
      {
        title: "4K Laser Projection",
        description: "4K laser projectors with Cinemascope aspect ratios and motorized masking screens.",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        imageAlt: "4K laser projection screen in dedicated home theatre",
      },
      {
        title: "Seating & Ergonomics",
        description: "Motorized luxury recliners, tiered platform design, and aisle lighting integrated into room architecture.",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Motorized leather recliner cinema seating in tiered auditorium",
      },
      {
        title: "Automation Integration",
        description: "Single-touch cinema mode: lights dim, curtains close, projector lifts, AVR activates.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Cinema mode scene control touch keypad",
      },
      {
        title: "Room Design & Coordination",
        description: "Complete architectural layout, acoustic specification, and coordination with interior designers.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Architectural cinema layout blueprint and interior design",
      },
    ],
    faqs: [
      {
        question: "What room size is required for a private cinema?",
        answer: "A dedicated private cinema can be realised in rooms from 300 sq. ft. upward.",
      },
    ],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Luxury private cinema with Dolby Atmos home theatre and 4K laser projection",
    icon: "film",
  },
  {
    slug: "home-theatre",
    name: "Home Theatre",
    shortName: "Theatre",
    headline: "Cinematic Excellence. Designed for Living.",
    subheadline: "High-performance home theatre systems integrated into luxury living spaces.",
    description: "High-performance home theatre systems that integrate seamlessly into living rooms.",
    metaTitle: "Luxury Home Theatre Systems India | VARELLI",
    metaDescription: "VARELLI designs luxury home theatre systems for living rooms across India.",
    keywords: ["home theatre India", "luxury home theatre"],
    capabilities: [
      {
        title: "Architectural Speaker Integration",
        description: "In-wall and in-ceiling speakers that disappear into your interiors.",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
        imageAlt: "In-wall concealed architectural speaker installation",
      },
      {
        title: "4K & Laser Display",
        description: "4K OLED, MicroLED, and laser projector solutions.",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=800&q=80",
        imageAlt: "4K laser TV display in living room home theatre",
      },
      {
        title: "Dolby Atmos & DTS:X",
        description: "Object-based surround sound in living room configurations.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Living room Dolby Atmos audio installation",
      },
      {
        title: "Acoustic Optimisation",
        description: "Targeted acoustic treatment that improves performance without altering room aesthetics.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Concealed acoustic wall panels in living room",
      },
      {
        title: "Unified Control",
        description: "One-touch scene control integrated with whole-home automation.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Smart remote and touch scene keypad",
      },
      {
        title: "Concealed Equipment",
        description: "All AV equipment housed in ventilated, acoustically isolated millwork cabinetry.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Concealed AV equipment rack in bespoke cabinet",
      },
    ],
    faqs: [],
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Luxury home theatre with concealed architectural speakers",
    icon: "tv",
  },
  {
    slug: "fresh-air-ventilation",
    name: "Fresh Air Ventilation",
    shortName: "Fresh Air",
    headline: "Breathe Better. Live Better.",
    subheadline: "Mechanical fresh air ventilation systems for luxury homes.",
    description: "VARELLI engineers whole-home fresh air ventilation systems maintaining optimal IAQ.",
    metaTitle: "Fresh Air Ventilation for Luxury Homes India | VARELLI",
    metaDescription: "VARELLI designs mechanical fresh air ventilation systems across India.",
    keywords: ["fresh air ventilation India", "indoor air quality"],
    capabilities: [
      {
        title: "Continuous Fresh Air Supply",
        description: "Constant supply of filtered outdoor air maintaining optimal CO2 levels.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Fresh air ceiling linear diffuser in luxury villa",
      },
      {
        title: "Heat Recovery Ventilation",
        description: "Energy-efficient heat recovery pre-conditioning incoming air.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Heat recovery ventilation unit and ductwork",
      },
      {
        title: "Fine Particle Filtration",
        description: "HEPA and activated carbon filtration removing PM2.5 particulates.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
        imageAlt: "HEPA air filtration module and IAQ monitor",
      },
      {
        title: "Humidity Management",
        description: "Balanced ventilation maintaining optimal indoor humidity levels.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Indoor climate and humidity controlled luxury room",
      },
      {
        title: "Silent Ductwork Design",
        description: "Acoustic duct lining ensuring inaudible air circulation.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Acoustically lined concealed ventilation ducting",
      },
      {
        title: "Automation Integration",
        description: "CO2 and IAQ sensors trigger automatic ventilation adjustments.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Smart air quality sensor and control panel",
      },
    ],
    faqs: [],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Fresh air ventilation system concept for a luxury villa",
    icon: "wind",
  },
  {
    slug: "central-vacuum",
    name: "Central Vacuum",
    shortName: "Central Vacuum",
    headline: "Built-In Cleanliness. Absolute Silence.",
    subheadline: "Central vacuum systems for luxury villas and large residences.",
    description: "Concealed network of ducts terminating in discreet wall inlets throughout the residence.",
    metaTitle: "Central Vacuum Systems for Luxury Villas India | VARELLI",
    metaDescription: "VARELLI installs central vacuum systems for luxury homes across India.",
    keywords: ["central vacuum India", "built-in vacuum system"],
    capabilities: [
      {
        title: "Concealed Duct Network",
        description: "PVC ductwork routed through walls and ceiling voids during construction.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
        imageAlt: "In-wall central vacuum PVC duct installation",
      },
      {
        title: "Remote Power Unit",
        description: "High-power vacuum motor located in utility area away from living spaces.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Central vacuum power motor unit in utility room",
      },
      {
        title: "Low-Profile Wall Inlets",
        description: "Flush-mounted wall inlets in every room. Plug in lightweight hose to clean.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Discreet central vacuum wall inlet plate in villa corridor",
      },
      {
        title: "Improved Air Quality",
        description: "All dust and allergens exhausted completely outside the residence.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Dust-free clean marble floor in luxury villa",
      },
      {
        title: "Quiet Operation",
        description: "Cleaning is virtually silent with motor isolated in garage or utility room.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Silent luxury bedroom cleaning with lightweight hose",
      },
      {
        title: "Long Service Life",
        description: "Permanent architectural installation designed for decades of operation.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Architectural central vacuum system hardware",
      },
    ],
    faqs: [],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Central vacuum system installation in a luxury home",
    icon: "zap",
  },
  {
    slug: "home-security",
    name: "Smart Security",
    shortName: "Security",
    headline: "Protection Without Presence.",
    subheadline: "Integrated smart security systems for luxury residences.",
    description: "VARELLI designs integrated security ecosystems that protect luxury residences.",
    metaTitle: "Smart Home Security Integration India | VARELLI",
    metaDescription: "VARELLI integrates smart security systems for luxury homes across India.",
    keywords: ["smart home security India", "biometric access"],
    capabilities: [
      {
        title: "Biometric Access Control",
        description: "Fingerprint and face recognition entry for main gates and doors.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Biometric fingerprint and face recognition door lock",
      },
      {
        title: "Smart Locks",
        description: "Architectural-grade smart locks with keypad, biometric, and app integration.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Digital keyless smart door lock on wooden villa door",
      },
      {
        title: "Video Surveillance",
        description: "High-resolution CCTV with remote viewing and AI motion detection.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
        imageAlt: "AI smart CCTV camera mounted on villa exterior",
      },
      {
        title: "Video Door Phone",
        description: "Video intercoms with remote global smartphone access.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Touch screen video door phone intercom system",
      },
      {
        title: "Perimeter & Gate Automation",
        description: "Smart gate automation with vehicle detection and intercom integration.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Automated luxury villa main security gate",
      },
      {
        title: "Intrusion Detection",
        description: "Glass break sensors, door contacts, and PIR motion detectors.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Security intrusion monitoring panel",
      },
    ],
    faqs: [],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Smart home security control panel and CCTV integration",
    icon: "shield",
  },
  {
    slug: "home-networking",
    name: "Home Networking",
    shortName: "Networking",
    headline: "Connectivity as Infrastructure.",
    subheadline: "Enterprise-grade networking designed for large villas.",
    description: "VARELLI installs premium home networking infrastructure for connected lifestyles.",
    metaTitle: "Premium Home Networking & WiFi for Luxury Villas | VARELLI",
    metaDescription: "VARELLI designs enterprise-grade home networking across India.",
    keywords: ["home networking India", "enterprise WiFi for home"],
    capabilities: [
      {
        title: "Structured Cabling",
        description: "Cat6A and Cat7 cabling infrastructure designed for future bandwidth demands.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Structured Cat6A cabling and patch panel rack",
      },
      {
        title: "Enterprise WiFi",
        description: "Flush-mount access points delivering high-performance coverage everywhere.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Ceiling mounted wireless access point in villa",
      },
      {
        title: "Network Architecture",
        description: "VLAN segmentation for IoT, AV, and personal devices.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Managed network switch and gateway rack",
      },
      {
        title: "AV Networking",
        description: "Dedicated network infrastructure for IP AV distribution and multi-room audio.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
        imageAlt: "High-resolution IP audio distribution network",
      },
      {
        title: "Rack & Infrastructure",
        description: "Clean network rack with UPS, managed switches, and remote monitoring.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Professional AV network rack installation",
      },
      {
        title: "Future Proofing",
        description: "Designed with 10Gbps backbone for next-generation smart home demands.",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        imageAlt: "High speed fiber optic network infrastructure",
      },
    ],
    faqs: [],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Professional home networking infrastructure for luxury villa",
    icon: "wifi",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
