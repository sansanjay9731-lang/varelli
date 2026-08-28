interface LocalBusinessProps {
  city: string;
  url: string;
  description: string;
}

export function buildLocalBusinessSchema({ city, url, description }: LocalBusinessProps) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `VARELLI — ${city}`,
    description,
    url,
    "@id": url,
    areaServed: city,
    priceRange: "$$$",
    image: "https://varelli.in/images/varelli-logo.png",
    sameAs: "https://varelli.in",
  };
}
