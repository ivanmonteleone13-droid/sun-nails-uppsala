import { business, getFullAddress } from "@/lib/business";
import { getSiteUrl } from "@/lib/site";

const dayMap: Record<string, string> = {
  Måndag: "Monday",
  Tisdag: "Tuesday",
  Onsdag: "Wednesday",
  Torsdag: "Thursday",
  Fredag: "Friday",
  Lördag: "Saturday",
  Söndag: "Sunday",
};

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const sameAs = [business.facebookUrl, business.instagramUrl, business.bookingUrl].filter(
    Boolean
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${siteUrl}/#localbusiness`,
    name: business.name,
    description: business.description,
    telephone: business.phone,
    image: `${siteUrl}/og-image.png`,
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
    url: siteUrl,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Uppsala",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nageltjänster",
      itemListElement: business.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
        },
      })),
    },
    openingHoursSpecification: business.hours.regular
      .filter((h) => h.hours !== "Stängt")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[h.day] ?? h.day,
        opens: h.hours.split(" – ")[0],
        closes: h.hours.split(" – ")[1],
      })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: business.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    telephone: business.phone,
    address: getFullAddress(),
    url: siteUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
