import type { Metadata } from "next";
import { syne, cormorant, inter, jetbrainsMono } from "@/lib/fonts";
import { organizationSchema } from "@/components/seo/schemas/organization";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingCTA from "@/components/ui/WhatsAppFloatingCTA";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varelli.in"),
  title: {
    default: "VARELLI - Luxury Intelligent Living India",
    template: "%s | VARELLI",
  },
  description:
    "VARELLI designs and engineers intelligent residential environments for luxury villas, estates and private residences across India. KNX home automation, Dolby Atmos private cinema, Zehnder fresh air ventilation, central vacuum and smart security.",
  keywords:
    "home automation India, luxury home automation, KNX home automation India, smart home India, private cinema India, Dolby Atmos home theatre India, home automation Bangalore, home theatre Bangalore, luxury intelligent living, Zehnder ERV India, Basalte India, Sonus Faber Bangalore, central vacuum system India, smart home company Bangalore, villa automation India, smart security systems India, DALI 2 lighting control India, home automation Mumbai, home automation Delhi NCR, home automation Hyderabad",
  openGraph: {
    siteName: "VARELLI",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VARELLI",
  url: "https://varelli.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://varelli.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessBangalore = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://varelli.in/#bangalore",
  name: "VARELLI - Intelligent Living Bangalore",
  alternateName: "VARELLI Bangalore",
  description:
    "VARELLI's Bangalore studio specialises in luxury home automation (KNX), private cinema (Dolby Atmos), fresh air ventilation (Zehnder ERV), central vacuum, and intelligent home security for villas across Whitefield, Koramangala, Sarjapur Road, Indiranagar, and Yelahanka.",
  url: "https://varelli.in",
  telephone: "+919964984695",
  email: "studio@varelli.in",
  image: "https://varelli.in/images/varelli-logo.png",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Indiranagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560038",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9784,
    longitude: 77.6408,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "87",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: "https://maps.google.com/?q=VARELLI+Bangalore",
  areaServed: [
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Bengaluru" },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "KNX Home Automation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dolby Atmos Private Cinema" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zehnder Fresh Air Ventilation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Central Vacuum" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Home Security" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structured Home Networking" } },
  ],
  sameAs: [
    "https://instagram.com/varelliindia",
    "https://linkedin.com/company/varelli",
  ],
};

const localBusinessMumbai = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://varelli.in/#mumbai",
  name: "VARELLI - Intelligent Living Mumbai",
  alternateName: "VARELLI Mumbai",
  description:
    "VARELLI's Mumbai studio delivers luxury home automation, private cinema, and intelligent living solutions for residences across Bandra, Juhu, Worli, Prabhadevi, Powai, and South Mumbai.",
  url: "https://varelli.in",
  telephone: "+919964984695",
  email: "studio@varelli.in",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bandra West",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400050",
    addressCountry: "IN",
  },
  areaServed: [{ "@type": "City", name: "Mumbai" }],
};

const localBusinessDelhi = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://varelli.in/#delhi",
  name: "VARELLI - Intelligent Living Delhi NCR",
  alternateName: "VARELLI Delhi",
  description:
    "VARELLI's Delhi NCR studio delivers luxury home automation, private cinema, and intelligent living solutions for residences across Gurgaon, DLF, Vasant Vihar, Greater Kailash, and Noida.",
  url: "https://varelli.in",
  telephone: "+919964984695",
  email: "studio@varelli.in",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "DLF Phase 5",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
  ],
};

const localBusinessHyderabad = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://varelli.in/#hyderabad",
  name: "VARELLI - Intelligent Living Hyderabad",
  alternateName: "VARELLI Hyderabad",
  description:
    "VARELLI's Hyderabad studio delivers luxury home automation, private cinema, and intelligent living solutions for villas across Jubilee Hills, Banjara Hills, Hitec City, and Kondapur.",
  url: "https://varelli.in",
  telephone: "+919964984695",
  email: "studio@varelli.in",
  priceRange: "₹₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  areaServed: [{ "@type": "City", name: "Hyderabad" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <SchemaOrg schema={organizationSchema} />
        <SchemaOrg schema={websiteSchema} />
        <SchemaOrg schema={localBusinessBangalore} />
        <SchemaOrg schema={localBusinessMumbai} />
        <SchemaOrg schema={localBusinessDelhi} />
        <SchemaOrg schema={localBusinessHyderabad} />
      </head>
      <body className="font-body antialiased bg-[#08080A] text-[#F2F2F5]">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingCTA />
      </body>
    </html>
  );
}
