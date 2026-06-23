import { business } from "@/lib/business";

const iconMap: Record<string, string> = {
  star: "★",
  reviews: "✓",
  location: "📍",
  student: "🎓",
};

export default function TrustBadges() {
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Förtroendeindikatorer">
      {business.trustBadges.map((badge) => (
        <li
          key={badge.label}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
        >
          <span aria-hidden className="text-[#FFD166]">
            {iconMap[badge.icon] ?? "•"}
          </span>
          {badge.label}
        </li>
      ))}
    </ul>
  );
}
