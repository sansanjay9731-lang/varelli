import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Authorized Luxury AV & Smart Home Brands India | Basalte · Sonus Faber · Zehnder | VARELLI",
  description:
    "Explore VARELLI's curated portfolio of European & international reference luxury smart home brands: Basalte (Belgium), Sonus Faber (Italy), Zehnder (Switzerland), Trinnov (France), Barco (Belgium), KNX (Germany), Ekinex (Italy), Lutron (USA), and DoorBird (Germany).",
  path: "/brands",
  keywords: [
    "Basalte India",
    "Basalte switches India",
    "Sonus Faber dealers Bangalore",
    "Sonus Faber India",
    "Zehnder India",
    "Zehnder ComfoAir India",
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
