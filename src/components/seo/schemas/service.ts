interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}

export function buildServiceSchema({ name, description, url, areaServed = "India" }: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "VARELLI",
      url: "https://varelli.in",
    },
    areaServed,
    serviceType: "Luxury Residential Technology Integration",
  };
}
