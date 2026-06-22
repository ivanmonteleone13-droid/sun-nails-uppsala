import { business } from "@/lib/business";

export default function JsonLd() {
  const sameAs = [business.facebookUrl, business.instagramUrl].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ShoeStore",
    name: business.name,
    description: business.description,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.postalCode,
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    url: "http://localhost:3002",
    priceRange: "$$",
    openingHoursSpecification: business.hours.regular
      .filter((h) => h.hours !== "Stängt")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.hours.split(" – ")[0],
        closes: h.hours.split(" – ")[1],
      })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
