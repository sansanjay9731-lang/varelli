import type { Metadata } from "next";
import { syne, cormorant, inter, jetbrainsMono } from "@/lib/fonts";
import { organizationSchema } from "@/components/seo/schemas/organization";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varelli.in"),
  title: {
    default: "VARELLI — Luxury Intelligent Living India",
    template: "%s | VARELLI",
  },
  description:
    "VARELLI designs and engineers intelligent residential environments for luxury villas, estates and private residences across India. Home automation, private cinema, fresh air ventilation, central vacuum and smart security.",
  keywords:
    "home automation India, luxury home automation, smart home India, private cinema India, home automation Bangalore, luxury intelligent living",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <SchemaOrg schema={organizationSchema} />
        <SchemaOrg schema={websiteSchema} />
      </head>
      <body className="font-body antialiased bg-[#08080A] text-[#F2F2F5]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
