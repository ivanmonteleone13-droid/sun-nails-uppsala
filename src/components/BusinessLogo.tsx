import { business } from "@/lib/business";

function getInitials(name: string): string {
  const cleaned = name.replace(/^#\d+\s*/, "").replace(/\s+(AB|HB|Uppsala).*$/i, "");
  const words = cleaned.match(/[A-Za-zÅÄÖåäö]+/g)?.filter(
    (w) => !["och", "i", "the", "by"].includes(w.toLowerCase())
  );
  if (!words?.length) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function BusinessLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  if ("logoImage" in business && business.logoImage) {
    return (
      <img
        src={business.logoImage}
        alt={`${business.name} logotyp`}
        className={`${dim} shrink-0 rounded-full object-contain bg-white p-0.5 ring-2 ring-[var(--secondary)]/40`}
      />
    );
  }

  return (
    <span
      className={`${dim} ${textSize} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--dark)] font-bold text-[var(--secondary)] shadow-md ring-2 ring-[var(--secondary)]/30`}
      aria-hidden
    >
      {getInitials(business.name)}
    </span>
  );
}
