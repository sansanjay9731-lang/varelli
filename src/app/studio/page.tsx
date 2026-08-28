import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import AIResidenceStudio from "@/components/studio/AIResidenceStudio";

export const metadata: Metadata = generatePageMetadata({
  title: "VARELLI Residence Design Studio - Floorplan Upload & Brand Configurator",
  description:
    "Upload your architectural floorplan, curate across Italian & European technology backbones, and simulate your live spatial environment on mobile or laptop.",
  path: "/studio",
  keywords: [
    "home automation floorplan configurator",
    "smart home configurator",
    "Italian luxury automation",
    "KNX brand selector",
    "VARELLI studio",
  ],
});

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <AIResidenceStudio />
    </main>
  );
}
