import type { Metadata } from "next";
import { syne, cormorant, inter, jetbrainsMono } from "@/lib/fonts";
import { organizationSchema } from "@/components/seo/schemas/organization";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingCTA from "@/components/ui/WhatsAppFloatingCTA";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varelli.co.in"),
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
  verification: {
    google: "zFQzK5uZfkaBN-PU5XDAG6_Zc-NhKi9jkxSWZOjQPJA",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
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
  url: "https://varelli.co.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://varelli.co.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessBangalore = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://varelli.co.in/#bangalore",
  name: "VARELLI - Intelligent Living Bangalore",
  alternateName: "VARELLI Bangalore",
  description:
    "VARELLI's Bangalore studio specialises in luxury home automation (KNX), private cinema (Dolby Atmos), fresh air ventilation (Zehnder ERV), central vacuum, and intelligent home security for villas across Whitefield, Koramangala, Sarjapur Road, Indiranagar, and Yelahanka.",
  url: "https://varelli.co.in",
  telephone: "+919964984695",
  email: "studio@varelli.co.in",
  image: "https://varelli.co.in/images/varelli-logo.png",
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
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Delhi NCR" },
    { "@type": "City", name: "Hyderabad" },
    { "@type": "Country", name: "India" },
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
