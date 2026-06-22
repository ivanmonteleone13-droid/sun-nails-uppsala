export const business = {
  name: "Sun Nails Uppsala",
  tagline: "Central nail salon on Vaksalagatan",
  description: "High-traffic central nail salon offering acrylic, gel, manicure, and pedicure daily.",
  category: "Beauty",
  address: {
    street: "Vaksalagatan 30",
    postalCode: "753 31",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "072-866 88 00",
  phoneLink: "tel:+46728668800",
  email: "sunnailsuppsala@gmail.com",
  emailLink: "mailto:sunnailsuppsala@gmail.com",
  bookingUrl: "https://www.bokadirekt.se/places/sun-nails-uppsala-50236",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Sun Nails Uppsala",
  rating: 4.4,
  reviewCount: 818,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos Sun Nails Uppsala.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 818 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Vaksalagatan 30 i Uppsala.",
    },
  ],
  services: [
    {
      id: "akrylnaglar",
      name: "Akrylnaglar",
      description: "Professionell akrylnaglar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "gel-naglar",
      name: "Gelénaglar",
      description: "Professionell gelénaglar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "manikyr-med-gellack",
      name: "Manikyr med gellack",
      description: "Professionell manikyr med gellack med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "pedikyr",
      name: "Pedikyr",
      description: "Professionell pedikyr med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fransk-design",
      name: "Fransk design",
      description: "Professionell fransk design med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Sun Nails Uppsala. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Sun Nails Uppsala varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "naglar Vaksalagatan",
    "manikyr Uppsala centrum",
    "akrylnaglar Uppsala",
    "pedikyr Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
