import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import ManifestoSection from "@/components/sections/home/ManifestoSection";
import ServicesGrid from "@/components/sections/home/ServicesGrid";
import SceneSwitcher from "@/components/sections/home/SceneSwitcher";
import ProcessSection from "@/components/sections/home/ProcessSection";
import ResidencesSection from "@/components/sections/home/ResidencesSection";
import ProtocolMarquee from "@/components/sections/home/ProtocolMarquee";
import ArchitectCTA from "@/components/sections/home/ArchitectCTA";
import ConsultationCTA from "@/components/sections/home/ConsultationCTA";

import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "VARELLI | Luxury Home Automation & Private Cinema India",
  description:
    "VARELLI engineers bespoke KNX home automation, Dolby Atmos private cinema, Swiss Zehnder ERV, and luxury smart security for villas across India.",
  path: "",
  keywords: [
    "home automation Bangalore",
    "smart home automation India",
    "luxury home automation India",
    "home theatre Bangalore",
    "private cinema India",
    "Dolby Atmos home theatre Bangalore",
    "KNX home automation India",
    "home automation company Bangalore",
    "best home theatre installation Bangalore",
    "smart home company Bangalore",
    "home automation cost in India",
    "home theatre cost Bangalore",
    "Zehnder fresh air ventilation India",
    "central vacuum system India",
    "Basalte switches India",
    "Sonus Faber dealers Bangalore",
    "luxury villa automation Bangalore",
    "home automation Mumbai",
    "home automation Delhi",
    "home automation Hyderabad",
    "architectural lighting control DALI 2",
    "smart security systems for villas",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ServicesGrid />
      <SceneSwitcher />
      <ProcessSection />
      <ResidencesSection />
      <ProtocolMarquee />
      <ArchitectCTA />
      <ConsultationCTA />
    </>
  );
}
