import { MetadataRoute } from "next";

const BASE_URL = "https://varelli.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    
    // Core Services & City Hubs
    { url: `${BASE_URL}/home-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/home-automation/bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/private-cinema`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/private-cinema/bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/home-theatre`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/home-theatre/bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/fresh-air-ventilation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/fresh-air-ventilation/bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/central-vacuum`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/central-vacuum/bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/home-security`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/home-networking`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    
    // Brand & Trade Pages
    { url: `${BASE_URL}/brands`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/architects`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/residences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/studio`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    
    // Knowledge Base / Journal (AEO & GEO Pillars)
    { url: `${BASE_URL}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // ── Tier 1: Highest-priority new articles ──
    { url: `${BASE_URL}/journal/best-home-automation-company-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/journal/smart-home-automation-mumbai`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/journal/knx-home-automation-india`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/journal/home-theatre-cost-india`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/journal/dolby-atmos-speakers-india`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/journal/luxury-smart-home-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },

    // ── Tier 2: Brand & product authority articles ──
    { url: `${BASE_URL}/journal/basalte-keypad-india`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/journal/zehnder-fresh-air-system-india`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/journal/central-vacuum-system-india`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // ── Existing articles ──
    { url: `${BASE_URL}/journal/knx-vs-crestron-vs-control4`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/journal/home-automation-cost-india-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/journal/home-automation-cost-india-2025`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/journal/dolby-atmos-room-design-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/journal/private-cinema-vs-home-theatre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/journal/fresh-air-ventilation-vs-air-purifier`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/journal/home-automation-cost-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/journal/home-theatre-cost-bangalore`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/journal/knx-vs-control4`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/journal/private-cinema-design-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/journal/what-is-home-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/journal/dolby-atmos-home-theatre`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
