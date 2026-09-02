interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
}

export function buildArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  authorName = "VARELLI Editorial Team",
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://varelli.co.in",
    },
    publisher: {
      "@type": "Organization",
      name: "VARELLI",
      url: "https://varelli.co.in",
      logo: {
        "@type": "ImageObject",
        url: "https://varelli.co.in/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
