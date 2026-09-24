import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://varelli.co.in";
const DEFAULT_OG_IMAGE = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80";

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = "VARELLI - Luxury Intelligent Living",
  noIndex = false,
  keywords = [],
}: PageMetadataProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const cleanTitle = title.replace(/\s*\|\s*VARELLI.*$/i, "").trim();
  const fullTitle = `${cleanTitle} | VARELLI`;

  return {
    title: cleanTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "VARELLI" }],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "VARELLI",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
  };
}
