export interface ProductCategory {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  brands: string[];
  productItems: {
    name: string;
    brand: string;
    specs: string;
    description: string;
  }[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'architectural-keypads',
    title: 'Architectural Keypads & Touch Displays',
    subtitle: 'Tactile Precision Milled in Solid Metals',
    description: 'Say goodbye to wall acne and cluttered switchplates. VARELLI installs minimalist European keypads milled from solid brass, basalt, titanium, and bronze, orchestrating lighting scenes, shading, and climate from a single flush plate.',
    icon: 'sliders',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
    imageAlt: 'Custom architectural touch switchplate in brushed bronze finish',
    highlights: ['Solid Milled Metals (Brass, Bronze, Aluminum)', 'Circadian Light Scene Triggers', 'Integrated Temperature & Humidity Sensors', 'Subtle Multicolored Ambient LED Backlighting'],
    brands: ['Basalte', 'Lutron Palladiom', 'Ekinex', 'Jung KNX', 'Control4'],
    productItems: [
      { name: 'Basalte Sentido', brand: 'Basalte (Belgium)', specs: 'Dual & Quad Touch / Temperature Sensor', description: 'Touch-sensitive surface divided into 2 or 4 zones with multitouch scene toggles.' },
      { name: 'Lutron Palladiom Keypad', brand: 'Lutron (USA)', specs: 'Custom Engraved Buttons / Backlit', description: 'Architectural flush keypad with dynamic backlighting that automatically adjusts to ambient light.' },
      { name: 'Ekinex 71 Series', brand: 'Ekinex (Italy)', specs: 'KNX Native / Fenix NTM & Metal Finishes', description: 'Italian designer switchgear with customized icons and integrated temperature sensors.' },
    ],
  },
  {
    slug: 'reference-cinema-audio',
    title: 'Reference Private Cinema Audio',
    subtitle: 'Dolby Atmos 9.4.6 & 3D Spatial Acoustic Arrays',
    description: 'Engineered for visceral physical impact, pristine vocal clarity, and three-dimensional sound localization that mirrors commercial Hollywood mastering studios.',
    icon: 'volume-2',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80',
    imageAlt: 'Dolby Atmos custom private cinema room with hidden architectural surround speakers',
    highlights: ['THX Ultra Certified In-Wall Loudspeakers', 'Trinnov 3D Acoustic Optimization', 'Multi-Subwoofer Active Bass Management', 'Hidden Acoustic Fabric Wall Finishing'],
    brands: ['KEF', 'JBL Synthesis', 'Trinnov Audio', 'Bowers & Wilkins', 'Wisdom Audio'],
    productItems: [
      { name: 'KEF Ci5160REFM-THX', brand: 'KEF (UK)', specs: '12th Gen Uni-Q with Metamaterial / THX Ultra', description: 'Flagship architectural in-wall loudspeaker delivering reference studio acoustic output.' },
      { name: 'Trinnov Altitude32', brand: 'Trinnov (France)', specs: '32-Channel Discrete Dolby Atmos / DTS:X Pro', description: 'The absolute pinnacle of audio processing and spatial acoustic room correction.' },
      { name: 'JBL Synthesis SSW-1 Subwoofer', brand: 'JBL Synthesis (USA)', specs: 'Dual 15" Drivers / 5,000W RMS Capacity', description: 'Sub-bass pressure capable of reproducing 10Hz low-frequency cinematic effects.' },
    ],
  },
  {
    slug: 'laser-projection-screens',
    title: '4K/8K Laser Projection & Micro-Perforated Screens',
    subtitle: 'DCI-Grade Visual Precision & Pure Color Volumes',
    description: 'Native 4K and 8K laser light engines matched with acoustically transparent, optically coated micro-perforated screens for flawless color fidelity and infinite contrast.',
    icon: 'tv',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?w=1200&q=80',
    imageAlt: 'Sony 4K laser projector throwing crystal clear picture in dark cinema room',
    highlights: ['Native 4K/8K SXRD & DLP Laser Engines', '10,000 Lumens Peak Brightness for HDR', 'Cinemascope 2.40:1 Motorized Masking Screens', 'Acoustically Transparent Weave Fabrics'],
    brands: ['Sony Cinema', 'Barco Residential', 'JVC Reference', 'Stewart Filmscreen', 'Screen Research'],
    productItems: [
      { name: 'Sony BRAVIA Theater Projector 9', brand: 'Sony (Japan)', specs: 'Native 4K SXRD / 3,400 Lumens / XR Processor', description: 'Unrivaled contrast and HDR processing for reference home cinema spaces.' },
      { name: 'Stewart StudioTek 130 G4', brand: 'Stewart Filmscreen (USA)', specs: '1.3 Gain / 4K/8K Ultra-Perforated', description: 'The worldwide reference screen material used by film studios and grading facilities.' },
      { name: 'Barco Njord Cinemascope', brand: 'Barco (Belgium)', specs: '5K Resolution / 12,000 ANSI Lumens', description: 'Uncompromising laser illumination engineered for expansive private auditoriums.' },
    ],
  },
  {
    slug: 'motorized-shading-drapery',
    title: 'Motorized Architectural Shading & Drapery',
    subtitle: 'Silent Micro-Motors Synchronized to Solar Cycles',
    description: 'Precision motorized roller shades, Roman blinds, and heavy luxury drapery tracks operating at whisper-quiet decibel levels (<38 dBA) with automated astronomical time clock synchronization.',
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80',
    imageAlt: 'Motorized sheer and blackout curtains in luxury double-height villa living room',
    highlights: ['Ultra-Quiet Operation (<38 dBA)', 'Solar Astronomical Tracking & Auto-Glaze', 'Dual Blackout + Sheer Dual-Roller Pockets', 'Pocket-Concealed Hardware in False Ceilings'],
    brands: ['Lutron Sivoia QS', 'Somfy Digital Network', 'Silent Gliss', 'Forest Drapery'],
    productItems: [
      { name: 'Lutron Sivoia QS Wireless', brand: 'Lutron (USA)', specs: 'Precision Movement to 1/16" / Near Silent', description: 'Simultaneous multi-shade alignment across expansive villa window facades.' },
      { name: 'Somfy Glydea Ultra', brand: 'Somfy (France)', specs: 'Heavy Load Tracks up to 100kg / Touch Motion', description: 'Heavy velvet and silk motorized curtain tracks with soft start and stop.' },
    ],
  },
  {
    slug: 'fresh-air-ventilation-erv',
    title: 'Mechanical Fresh Air & ERV Ventilation Units',
    subtitle: 'Hospital-Grade IAQ & Continuous Oxygenation',
    description: 'Balanced mechanical fresh air distribution that continuously expels indoor VOCs, CO2, and humidity while recovering up to 92% of thermal energy and filtering incoming outdoor air through multi-stage HEPA filters.',
    icon: 'wind',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    imageAlt: 'Architectural flush air diffusers integrated into minimalist ceiling',
    highlights: ['Continuous Filtered Fresh Air Replacement', 'HEPA 13 & Activated Carbon Filtration (PM2.5 Removal)', 'Up to 92% Heat & Enthalpy Energy Recovery', 'Acoustically Attenuated Inaudible Air Delivery'],
    brands: ['Zehnder Group', 'Daikin ERV', 'Panasonic IAQ', 'Honeywell'],
    productItems: [
      { name: 'Zehnder ComfoAir Q600 ERV', brand: 'Zehnder (Switzerland)', specs: '600 m3/h Capacity / 92% Efficiency / Enthalpy', description: 'High-performance fresh air ventilation unit with humidity balancing and smart app control.' },
      { name: 'Zehnder ComfoTube Acoustic Ducting', brand: 'Zehnder (Switzerland)', specs: 'Food-grade Smooth Core / Antibacterial', description: 'Silently routes pure air through false ceilings with zero microbial accumulation.' },
    ],
  },
  {
    slug: 'central-vacuum-systems',
    title: 'Built-In Central Vacuum Power Units',
    subtitle: 'Zero Airborne Dust Recirculation & Absolute Silence',
    description: 'Whole-house built-in vacuum systems with wall-recessed inlets and retractable Hide-A-Hose infrastructure that exhausts 100% of fine dust, mites, and allergens completely outside the living environment.',
    icon: 'zap',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    imageAlt: 'Built-in central vacuum system wall inlet and retractable hose in luxury residence',
    highlights: ['5x More Suction Than Portable Vacuums', '100% Outdoor Exhaust — Zero Allergen Recirculation', 'Hide-A-Hose In-Wall Retractable Hose Storage', 'Whisper-Quiet Remote Motor in Utility Plant Room'],
    brands: ['Drainvac', 'Beam Electrolux', 'Cyclovac'],
    productItems: [
      { name: 'Drainvac Automatik Wet/Dry Unit', brand: 'Drainvac (Canada)', specs: '1,080 Airwatts / Direct Sewer Drain Connection', description: 'Picks up dry dust and liquid spills with automatic flushing to the drainage system.' },
      { name: 'Hide-A-Hose Rapid System', brand: 'Hide-A-Hose (USA)', specs: '50-Foot Retractable Hose / Discreet Wall Valve', description: 'Hose stores automatically inside the wall vacuum piping using natural system suction.' },
    ],
  },
  {
    slug: 'enterprise-wifi-networking',
    title: 'Enterprise Villa Networking & 10G Structured Cabling',
    subtitle: 'Zero Dead Zones Across 15,000+ Sq. Ft. Properties',
    description: 'Commercial-grade network infrastructure with high-density WiFi 7 access points, enterprise managed switches, Cat6A/Cat7 shielded cabling, and VLAN security segmentation for IoT and personal networks.',
    icon: 'wifi',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
    imageAlt: 'Enterprise network rack with UniFi switches and patch panels in server room',
    highlights: ['WiFi 7 Tri-Band Roaming Across Indoor & Landscape Zones', '10Gbps Fiber-Optic Backbone Routing', 'Dedicated IoT / Surveillance / AV VLAN Isolation', 'Rack-Mounted UPS Battery Backup & Remote Monitoring'],
    brands: ['Ubiquiti UniFi', 'Ruckus Wireless', 'Cisco Business', 'Pakedge'],
    productItems: [
      { name: 'UniFi Dream Machine Pro Max', brand: 'Ubiquiti (USA)', specs: '10G SFP+ Gateway / Dual WAN / AI Threat Protection', description: 'Enterprise security gateway handling multi-gigabit fiber connections with zero bottleneck.' },
      { name: 'UniFi U7 Pro WiFi 7 AP', brand: 'Ubiquiti (USA)', specs: 'WiFi 7 / 6GHz Support / 9.3 Gbps Throughput', description: 'Discreet ceiling-mounted access points providing uninterrupted gigabit roaming.' },
    ],
  },
];
