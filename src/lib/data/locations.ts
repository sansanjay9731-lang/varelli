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
    ],
    localities: [
      "Whitefield",
      "Sarjapur",
      "HSR Layout",
      "Koramangala",
      "Indiranagar",
      "Jayanagar",
      "JP Nagar",
      "Yelahanka",
      "Hebbal",
      "Sadashivanagar",
      "Malleshwaram",
      "Rajajinagar",
      "Banashankari",
      "Electronic City",
      "Bellandur",
      "Devanahalli",
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    headline: "Intelligent Living. Engineered for Mumbai.",
    description:
      "From South Mumbai heritage properties to Bandra penthouses and Powai lakefront residences, VARELLI delivers luxury home automation, private cinema, and intelligent living systems across Mumbai's premium residential landscape.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema systems for premium residences in Mumbai. Bandra, South Mumbai, Juhu, Powai and across the city.",
    faqs: [
      {
        question: "Does VARELLI work on projects in Mumbai?",
        answer: "Yes. VARELLI undertakes luxury residential projects across Mumbai, including South Mumbai, Bandra, Juhu, Powai, and other premium residential areas.",
      },
    ],
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    state: "Delhi / NCR",
    headline: "Intelligent Living. Engineered for Delhi NCR.",
    description:
      "VARELLI designs intelligent residential environments for luxury estates, farmhouses, and penthouse residences across Delhi, Gurgaon, Gurugram, and Noida.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema for premium residences in Delhi NCR - Delhi, Gurgaon, Noida and surrounding areas.",
    faqs: [
      {
        question: "Does VARELLI work on projects in Delhi NCR?",
        answer: "Yes. VARELLI undertakes luxury residential projects across Delhi, Gurgaon, Gurugram, Noida, and surrounding NCR areas.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    headline: "Intelligent Living. Engineered for Hyderabad.",
    description:
      "VARELLI brings luxury home automation, private cinema, and intelligent living systems to Hyderabad's premium residential developments, villas, and estates.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema for premium residences in Hyderabad - Jubilee Hills, Banjara Hills, Gachibowli and across the city.",
    faqs: [
      {
        question: "Does VARELLI work on projects in Hyderabad?",
        answer: "Yes. VARELLI undertakes luxury residential projects in Hyderabad, including Jubilee Hills, Banjara Hills, Gachibowli, and surrounding premium areas.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    headline: "Intelligent Living. Engineered for Chennai.",
    description:
      "VARELLI designs intelligent living environments for luxury villas, estates, and premium apartments across Chennai's residential landscape.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema for premium residences in Chennai - Boat Club Road, Adyar, ECR and across the city.",
    faqs: [
      {
        question: "Does VARELLI work on projects in Chennai?",
        answer: "Yes. VARELLI undertakes luxury residential projects across Chennai, including Boat Club Road, Adyar, ECR, and other premium residential areas.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    headline: "Intelligent Living. Engineered for Pune.",
    description:
      "From Koregaon Park luxury villas to Kalyani Nagar penthouses, VARELLI designs intelligent residential systems for Pune's most discerning homes.",
    metaDescription:
      "VARELLI designs luxury home automation and private cinema for premium residences in Pune - Koregaon Park, Kalyani Nagar, Baner and across the city.",
    faqs: [
      {
        question: "Does VARELLI work on projects in Pune?",
        answer: "Yes. VARELLI undertakes luxury residential projects across Pune, including Koregaon Park, Kalyani Nagar, Baner, and other premium areas.",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityLocation | undefined {
  return cities.find((c) => c.slug === slug);
}
