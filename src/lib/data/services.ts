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
        answer:
          "Home automation infrastructure — particularly wired KNX systems — must be planned before electrical work begins. The KNX data bus cable (TP) is laid in conduit during the rough-in electrical phase, alongside power wiring. Planning at the MEP (Mechanical, Electrical, Plumbing) design stage allows all conduit routes to be coordinated with the architect and electrical consultant. Last-minute addition of wired automation after civil work is complete significantly increases installation cost and complexity.",
      },
      {
        question: "What is KNX home automation?",
        answer:
          "KNX is an open international wired smart home automation standard (ISO/IEC 14543) developed in Germany. It uses a dedicated 24V twisted-pair data bus that operates completely independently of the internet — meaning your home automation works even during WiFi or internet outages. With over 550,000 installations in 190 countries and 500+ certified manufacturers, KNX is the world's most widely deployed home automation protocol. VARELLI engineers all new construction automation with KNX.",
      },
      {
        question: "What is the cost of home automation in India?",
        answer:
          "Home automation cost in India ranges from ₹4.8 Lakhs (KNX lighting control, 3BHK apartment) to ₹65 Lakhs+ (complete KNX ecosystem for a grand estate above 8,000 sq. ft.). A typical whole-home KNX system for a 4,000–5,000 sq. ft. luxury villa — covering lighting, curtains, AC integration, security, cinema control, and multi-room audio — costs ₹14–₹24 Lakhs with VARELLI. See our transparent package tiers on this page.",
      },
      {
        question: "What does home automation include?",
        answer:
          "A comprehensive home automation system includes: (1) Lighting control — DALI-2 dimming, scene-based environments; (2) Motorized curtains and blinds; (3) HVAC and AC integration; (4) Security — CCTV, biometric locks, video door phone; (5) Single-app and keypad control (Basalte); (6) Cinema and AV integration; (7) Multi-room audio; (8) Energy monitoring. VARELLI designs all systems to integrate into a single coherent platform.",
      },
      {
        question: "Is home automation worth it for a luxury villa in India?",
        answer:
          "Yes. A well-engineered home automation system increases property value by 8–15% in the luxury segment. Energy savings from automated HVAC, lighting, and curtain control typically return 12–18% of the automation investment annually. Luxury property buyers in the ₹3 Crore+ segment increasingly expect intelligent systems as standard — homes without automation are becoming harder to sell at premium prices. The key is choosing the right protocol (KNX for new builds) and integrator.",
      },
      {
        question: "KNX vs WiFi smart home: what is the difference?",
        answer:
          "KNX uses a dedicated wired data bus independent of WiFi or internet. WiFi smart home systems (Alexa, Google Home, Matter) use your home's internet network and depend on cloud servers. KNX is more reliable (no internet required), more scalable (65,000+ devices), and has a 30+ year lifecycle. WiFi systems are faster to install and better suited for retrofit projects. VARELLI recommends KNX for all new construction above 3,000 sq. ft.",
      },
      {
        question: "What smart home brands does VARELLI use?",
        answer:
          "VARELLI exclusively uses European-origin hardware: Basalte (Belgium) for keypads and interfaces; Ekinex (Italy) for architectural switch plates; Schneider/ABB for KNX actuators; DALI-2 certified luminaire drivers for lighting control; DoorBird (Germany) for video door phones; Mobotix for CCTV; Zehnder (Switzerland) for fresh air ventilation. All brands are chosen for 10–30 year product lifecycle and engineering grade reliability.",
      },
      {
        question: "Can home automation be added to a completed home?",
        answer:
          "Yes. Retrofit home automation is possible using wireless protocols (Zigbee, Matter, Z-Wave) or hybrid wired-wireless approaches. VARELLI evaluates each completed residence individually. In some renovations, partial rewiring through false ceilings can enable KNX in key areas. For fully completed homes, VARELLI recommends wireless or hybrid systems that don't require breaking walls. A site assessment is always conducted before specifying the protocol.",
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
    faqs: [
      {
        question: "What is the difference between a home theatre and a private cinema?",
        answer: "A home theatre uses an existing living or media room adapted for cinema use — typically a large TV or projector, 5.1–7.1 audio, and minimal acoustic treatment. A private cinema is a dedicated purpose-built room designed from scratch for film with full acoustic treatment (RT60: 0.3–0.5s), Dolby Atmos audio (7.1.4+), and 4K laser projection on an acoustically transparent screen. Home theatres suit multi-purpose rooms; private cinemas deliver the superior cinematic experience.",
      },
      {
        question: "How much does a home theatre cost in Bangalore?",
        answer: "Home theatre cost in Bangalore ranges from Rs 2.5 Lakhs for a basic 5.1 setup with a large OLED TV, to Rs 12-18 Lakhs for a reference 7.1.4 Dolby Atmos system with architectural in-wall speakers, 4K laser projection, and acoustic treatment. A mid-range Dolby Atmos living room system with quality architectural in-wall speakers and a premium AV processor costs Rs 5-8 Lakhs with VARELLI.",
      },
      {
        question: "What speakers does VARELLI use for home theatre?",
        answer: "VARELLI specifies reference-grade architectural speakers from Sonus Faber (Italy) and Trinnov Audio (France). For living room home theatre, we use in-wall and in-ceiling architectural speakers from Sonus Faber Palladio and KEF Ci series, paired with Trinnov Altitude AV processors for reference Dolby Atmos calibration. All speaker placements are specified by our cinema engineers.",
      },
      {
        question: "Can in-wall speakers match the performance of freestanding speakers?",
        answer: "Yes. Premium architectural in-wall speakers (Sonus Faber Palladio, KEF Ci series) achieve reference-grade performance when installed with correct bespoke baffle construction and acoustic backing boxes. VARELLI designs custom baffle enclosures for each in-wall speaker installation. The key advantage is complete visual disappearance — the room remains a living space without visible speaker towers.",
      },
      {
        question: "Does VARELLI install home theatre in apartments?",
        answer: "Yes. VARELLI designs Dolby Atmos home theatre for apartments, including multi-storey buildings where structural noise isolation is a concern. For apartments, we specify 5.1.2 or 7.1.2 Dolby Atmos with in-ceiling height speakers, a premium AV receiver, and targeted acoustic panel placement. We coordinate with building management for structural drilling and isolation requirements.",
      },
    ],
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
    faqs: [
      {
        question: "What is fresh air ventilation and why is it needed in Indian homes?",
        answer: "Mechanical fresh air ventilation (ERV/HRV) continuously exhausts stale indoor air and introduces filtered outdoor air while recovering up to 95% of thermal energy. In modern air-conditioned homes with sealed windows, indoor CO2 accumulates above 1,500–2,500 ppm, causing fatigue, poor sleep, and reduced cognitive focus. Zehnder ERV systems maintain clean, oxygen-rich indoor air with balanced humidity and low PM2.5 levels.",
      },
      {
        question: "How does an ERV differ from a standard air purifier?",
        answer: "An air purifier only recirculates and filters the same indoor air, which removes particulates but cannot reduce CO2 or introduce oxygen. An ERV (Energy Recovery Ventilator) continuously exchanges indoor air with fresh outdoor air, expelling CO2, volatile organic compounds (VOCs), and moisture while filtering PM2.5 at the intake.",
      },
      {
        question: "How much does a Zehnder ERV system cost in India?",
        answer: "A complete Swiss Zehnder ComfoAir Q fresh air ventilation system for a 4,000–6,000 sq. ft. luxury villa typically ranges from ₹2.5 Lakhs to ₹4.5 Lakhs depending on duct routing, room counts, and active sensor integration (CO2, VOC, RH).",
      },
      {
        question: "Does fresh air ventilation increase air conditioning electricity costs?",
        answer: "No. Because Zehnder ERVs utilize high-efficiency counterflow heat exchangers with up to 95% thermal recovery, incoming fresh air is pre-cooled (or pre-warmed) by outgoing exhaust air. This drastically reduces the thermal load on your HVAC system compared to opening windows.",
      },
      {
        question: "When should ventilation ductwork be planned during construction?",
        answer: "Fresh air ductwork should be coordinated during the structural and MEP (Mechanical, Electrical, Plumbing) phase before false ceilings and AC ducting are installed. VARELLI coordinates closely with HVAC consultants and architects to ensure silent, concealed duct layouts.",
      },
    ],
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
    keywords: ["central vacuum India", "built-in vacuum system", "central vacuum system cost India"],
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
    faqs: [
      {
        question: "How does a central vacuum system work in a residential villa?",
        answer: "A heavy-duty central motor unit is installed in a garage, basement, or utility area and connected to dedicated in-wall PVC tubing leading to strategically placed wall inlets. When a lightweight hose is plugged into any inlet, the motor activates automatically, pulling dust through the walls directly into the central canister.",
      },
      {
        question: "Why is a central vacuum superior to standard robotic or stick vacuums?",
        answer: "Unlike portable vacuums that exhaust microscopic dust particles back into the room air, central vacuums exhaust 100% of collected dust and allergens outside the living envelope or through industrial HEPA filtration, dramatically improving indoor hypoallergenic standards with 3–5× stronger suction power (600–750 AirWatts).",
      },
      {
        question: "What is the typical cost of a central vacuum system in India?",
        answer: "A central vacuum installation for a 4,000–8,000 sq. ft. luxury residence typically ranges from ₹1.8 Lakhs to ₹3.5 Lakhs, covering the central power unit, in-wall piping network, 8–15 designer wall inlets, automatic dustpan sweep inlets in kitchens, and premium retractable hose sets.",
      },
      {
        question: "Can central vacuum be installed in completed residences?",
        answer: "While central vacuum infrastructure is ideally laid during MEP construction, retrofit installations are achievable utilizing utility shafts, false ceiling cavities, and closet chases. VARELLI provides site surveys to evaluate non-invasive routing.",
      },
    ],
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
    keywords: ["smart home security India", "biometric access", "villa security Bangalore", "DoorBird India"],
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
    faqs: [
      {
        question: "What components are included in a luxury villa smart security system?",
        answer: "A comprehensive VARELLI security deployment integrates DoorBird (Germany) IP video intercoms, 4K AI-powered optical surveillance with perimeter intrusion detection, German/Italian architectural smart locks, motorized gate actuators, glass-break sensors, and isolated local storage NVRs with secure encrypted mobile streaming.",
      },
      {
        question: "How does smart security integrate with KNX home automation?",
        answer: "Security triggers communicate directly with lighting and HVAC scenes. For example, disarming the main entry door can trigger arrival lighting and comfort climate scenes; an alarm event can flood perimeter spotlights, lower blackout shutters, and notify homeowners instantly via push and audio broadcast.",
      },
      {
        question: "Is security camera footage stored locally or in the cloud?",
        answer: "VARELLI prioritizes private residential privacy by utilizing enterprise local on-premise NVRs (Network Video Recorders) with RAID redundancy. Video feeds remain inside your private local network with encrypted remote access, ensuring zero cloud dependency or subscription vulnerabilities.",
      },
      {
        question: "What is the cost of smart security integration for a villa in India?",
        answer: "A complete security and biometric access control package for a 4,000–10,000 sq. ft. villa typically costs ₹2.5 Lakhs to ₹5.5 Lakhs depending on camera counts, perimeter sensor coverage, and motorized gate integration.",
      },
    ],
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
    keywords: ["home networking India", "enterprise WiFi for home", "villa networking Bangalore", "UniFi India"],
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
    faqs: [
      {
        question: "Why do luxury villas require enterprise-grade networking over consumer mesh routers?",
        answer: "A modern connected residence often operates 150+ network clients simultaneously (smart keypads, streaming endpoints, IP cameras, laptops, smart TVs). Consumer mesh routers suffer from channel congestion, latency spikes, and dead zones through thick concrete walls. Enterprise networks utilize wired PoE (Power over Ethernet) access points with seamless 802.11k/v/r roaming and 10GbE backbones.",
      },
      {
        question: "How does network segmentation (VLANs) protect residential privacy?",
        answer: "VARELLI configures dedicated isolated VLANs (Virtual Local Area Networks): one for vulnerable IoT and smart home devices, one for high-bitrate AV/streaming, one for security cameras/NVRs, and one for private family computers/banking. This ensures an infected smart gadget cannot compromise personal devices.",
      },
      {
        question: "What hardware brands does VARELLI specify for residential networking?",
        answer: "VARELLI deploys enterprise-grade hardware including Ubiquiti UniFi (Dream Machine Special Edition gateways, Pro PoE switches, WiFi 6/7 access points), Araknis, and Cisco Small Business hardware housed in clean, thermal-managed server racks with battery backup.",
      },
      {
        question: "What is the cost of enterprise home networking for a villa in India?",
        answer: "Turnkey enterprise network design, Cat6A structured cabling, server rack assembly, patch panels, managed PoE switches, and multi-access-point WiFi coverage for a 5,000–10,000 sq. ft. villa typically costs ₹1.8 Lakhs to ₹3.8 Lakhs.",
      },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Professional home networking infrastructure for luxury villa",
    icon: "wifi",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
