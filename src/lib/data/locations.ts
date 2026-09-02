export interface CityLocation {
  slug: string;
  name: string;
  state: string;
  headline: string;
  description: string;
  metaDescription: string;
  faqs: { question: string; answer: string }[];
  localities?: string[];
}

export const cities: CityLocation[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    headline: "Intelligent Living. Engineered for Bangalore.",
    description:
      "Bangalore's most discerning residences - from Whitefield estates to Koramangala penthouses - demand automation, cinema, and air quality solutions of the highest standard. VARELLI has engineered intelligent environments across the city's premium residential corridors.",
    metaDescription:
      "VARELLI designs luxury home automation, private cinema, and intelligent living systems for premium residences in Bangalore. Whitefield, Koramangala, Indiranagar, Sadashivanagar and across the city.",
    faqs: [
      {
        question: "Does VARELLI serve all areas in Bangalore?",
        answer:
          "Yes. VARELLI works across Bangalore, including Whitefield, Sarjapur, Koramangala, Indiranagar, HSR Layout, Sadashivanagar, Hebbal, Yelahanka, JP Nagar, Jayanagar, Banashankari, and North and South Bangalore.",
      },
      {
        question: "How much does home automation cost in Bangalore?",
        answer:
          "Investment depends on home size, systems scope, and platform selected. VARELLI publishes transparent cost guides in the Journal and provides project-specific estimates following a site consultation.",
      },
      {
        question: "Can I visit a VARELLI project or experience centre in Bangalore?",
        answer:
          "VARELLI conducts private consultations at your residence or project site. Contact us to arrange a meeting with our design team.",
      },
      {
        question: "Why is KNX preferred for Bangalore luxury villas?",
        answer:
          "KNX is an open European wired standard (ISO/IEC 14543) that ensures zero dependency on cloud servers, 30+ year lifespan, and interoperability between Basalte, Ekinex, Zehnder, and DALI-2 lighting.",
      },
    ],
    localities: [
      "Whitefield", "Sarjapur", "HSR Layout", "Koramangala", "Indiranagar",
      "Jayanagar", "JP Nagar", "Yelahanka", "Hebbal", "Sadashivanagar",
      "Malleshwaram", "Rajajinagar", "Banashankari", "Electronic City", "Bellandur", "Devanahalli"
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    headline: "Intelligent Living. Engineered for Mumbai.",
    description:
      "From South Mumbai heritage properties to Bandra penthouses, Worli sea-facing towers, and Juhu luxury bungalows, VARELLI delivers luxury home automation, private cinema, and intelligent living systems across Mumbai's premium residential landscape.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema systems for premium residences in Mumbai. Bandra, Worli, Juhu, Prabhadevi, South Mumbai, Powai and across the city.",
    faqs: [
      {
        question: "Does VARELLI work on projects in Mumbai?",
        answer:
          "Yes. VARELLI undertakes luxury residential projects across Mumbai, including South Mumbai (Malabar Hill, Altamount Road), Worli, Bandra West, Juhu, Prabhadevi, Versova, and Powai.",
      },
      {
        question: "How does coastal humidity in Mumbai affect smart home systems?",
        answer:
          "VARELLI uses marine-grade IP65 enclosures, solid milled aluminium keypads (Basalte, Ekinex), and sealed ceiling-recessed ERV ventilation units engineered to withstand coastal humidity and sea salt exposure.",
      },
      {
        question: "What is the cost of home automation in Mumbai?",
        answer:
          "Luxury apartments and bungalows in Mumbai typically range from ₹4.8L for KNX Core Living to ₹24L+ for full Architectural Villa systems with DALI-2 dimming and Zehnder ventilation.",
      },
      {
        question: "Is Zehnder fresh air ERV suitable for Mumbai sea-facing apartments?",
        answer:
          "Yes. Zehnder ERV continuously exchanges indoor air with filtered outdoor air, maintaining 400-500ppm CO2 and 45-55% relative humidity while filtering out urban PM2.5 and coastal pollutants.",
      },
    ],
    localities: [
      "Bandra West", "Worli", "Juhu", "Prabhadevi", "Malabar Hill", "Altamount Road",
      "Cuffe Parade", "Parel", "Versova", "Santacruz West", "Khar West", "Powai", "Lower Parel"
    ],
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    state: "Delhi / NCR",
    headline: "Intelligent Living. Engineered for Delhi NCR.",
    description:
      "VARELLI designs intelligent residential environments for luxury estates, farmhouses, and penthouse residences across Delhi, Gurgaon (Gurugram), DLF Phase 5, Vasant Vihar, Golf Links, and Noida.",
    metaDescription:
      "VARELLI designs luxury home automation, Dolby Atmos cinema, and Zehnder fresh air systems for premium residences in Delhi NCR - Delhi, Gurgaon, DLF Phase 5, Noida.",
    faqs: [
      {
        question: "Does VARELLI undertake farmhouse projects in Chattarpur and Gurgaon?",
        answer:
          "Yes. VARELLI specializes in large estate and farmhouse automation in Chattarpur, Westend Greens, Sultanpur, and DLF Golf Links Gurgaon, integrating multi-zone KNX, 9.4.6 Dolby Atmos cinemas, and enterprise UniFi fiber networks.",
      },
      {
        question: "Why is Zehnder ERV ventilation critical for Delhi NCR residences?",
        answer:
          "Delhi NCR faces severe winter AQI spikes (PM2.5 > 300). Zehnder Swiss ERV systems with True HEPA filtration maintain clean, oxygen-rich 412ppm indoor air inside sealed luxury residences 24/7.",
      },
      {
        question: "How long does a smart home installation take in Gurgaon / Delhi?",
        answer:
          "Electrical first-fix cabling coordination takes 2-4 weeks during construction. Final commissioning of keypads, cinema, and ventilation takes 10-14 days prior to handover.",
      },
    ],
    localities: [
      "DLF Phase 5", "Golf Course Road", "Vasant Vihar", "Golf Links", "Sundar Nagar",
      "Chattarpur", "Sultanpur", "Westend Greens", "Greater Kailash", "Jor Bagh", "Noida Sector 44", "Gurgaon Sector 42"
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    headline: "Intelligent Living. Engineered for Hyderabad.",
    description:
      "VARELLI brings luxury home automation, private cinema, and intelligent living systems to Hyderabad's grand villas, estates, and high-rise penthouses across Jubilee Hills, Banjara Hills, and Hitec City.",
    metaDescription:
      "VARELLI designs luxury home automation, Dolby Atmos cinema, and Swiss Zehnder ERV for premium residences in Hyderabad - Jubilee Hills, Banjara Hills, Financial District.",
    faqs: [
      {
        question: "Does VARELLI serve Jubilee Hills and Banjara Hills in Hyderabad?",
        answer:
          "Yes. VARELLI provides complete architectural integration for independent luxury villas and gated communities across Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, and Financial District.",
      },
      {
        question: "Can I get a Basalte KNX keypad demo in Hyderabad?",
        answer:
          "Yes. VARELLI conducts private consultations with working finish samples of Basalte (Auro, Sentido, Fibonacci) and Ekinex keypads at your residence or project site.",
      },
    ],
    localities: [
      "Jubilee Hills", "Banjara Hills", "Gachibowli", "Kokapet", "Financial District",
      "Madhapur", "Kondapur", "Nallagandla", "Manikonda", "Gandipet"
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    headline: "Intelligent Living. Engineered for Chennai.",
    description:
      "VARELLI designs intelligent living environments for luxury beach houses, heritage bungalows, and high-rise residences across Chennai's premier coastal and urban addresses.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema for premium residences in Chennai - Boat Club Road, Poes Garden, Adyar, ECR and across the city.",
    faqs: [
      {
        question: "Does VARELLI service ECR beach houses and Poes Garden residences?",
        answer:
          "Yes. VARELLI designs humidity-resistant KNX automation, outdoor acoustics, and sealed ERV fresh air systems for ECR, Neelankarai, Boat Club Road, and Poes Garden residences.",
      },
    ],
    localities: [
      "Boat Club Road", "Poes Garden", "Nungambakkam", "Adyar", "RA Puram",
      "East Coast Road (ECR)", "Neelankarai", "Besant Nagar", "Kotturpuram"
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    headline: "Intelligent Living. Engineered for Pune.",
    description:
      "From Koregaon Park luxury villas to Kalyani Nagar penthouses and Bavdhan hill estates, VARELLI designs intelligent residential systems for Pune's most discerning homeowners.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema for premium residences in Pune - Koregaon Park, Kalyani Nagar, Baner and across the city.",
    faqs: [
      {
        question: "Does VARELLI undertake projects in Koregaon Park and Kalyani Nagar?",
        answer:
          "Yes. VARELLI works on luxury independent villas, duplex penthouses, and heritage bungalows in Koregaon Park, Kalyani Nagar, Baner, Aundh, and Bavdhan.",
      },
    ],
    localities: [
      "Koregaon Park", "Kalyani Nagar", "Baner", "Aundh", "Bavdhan", "Viman Nagar", "Model Colony", "Prabhat Road"
    ],
  },
];

export function getCityBySlug(slug: string): CityLocation | undefined {
  return cities.find((c) => c.slug === slug);
}
