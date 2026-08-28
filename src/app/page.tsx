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

export const metadata: Metadata = {
  title: "VARELLI — Luxury Intelligent Living India",
  description:
    "VARELLI designs and engineers intelligent residential environments for luxury villas, estates and private residences across India. Home automation, private cinema, fresh air ventilation, and smart security.",
  openGraph: {
    title: "VARELLI — Luxury Intelligent Living India",
    description:
      "Designing intelligent residential environments for luxury villas and private residences across India.",
    images: [{ url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", width: 1200, height: 630 }],
  },
};

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
