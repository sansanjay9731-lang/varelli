import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Authorized Luxury AV & Smart Home Brands India | Basalte · Sonus Faber · VaaYoo | VARELLI",
  description:
    "Explore VARELLI's curated portfolio of European & international reference luxury smart home brands: Basalte (Belgium), Sonus Faber (Italy), VaaYoo (Switzerland), Trinnov (France), Barco (Belgium), KNX (Germany), Ekinex (Italy), Lutron (USA), and DoorBird (Germany).",
  path: "/brands",
  keywords: [
    "Basalte India",
    "Basalte switches India",
    "Sonus Faber dealers Bangalore",
    "Sonus Faber India",
    "VaaYoo India",
    "VaaYoo PRO1 India",
    "Trinnov Audio India",
    "Barco residential projector India",
    "Ekinex keypads India",
    "Lutron Palladiom India",
    "DoorBird video door phone India",
    "KNX standard India",
    "luxury AV brands Bangalore",
    "architectural switch brands India",
    "reference cinema brands India",
    "high end audio dealers Bangalore",
  ],
});

export default function BrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
