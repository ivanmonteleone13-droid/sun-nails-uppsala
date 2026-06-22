import Link from "next/link";
import { business } from "@/lib/business";

export default function Hero() {
  const label = "bookingLabel" in business ? business.bookingLabel : "Kontakta oss";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3D2914] via-[#5C4033] to-[#7A5C44] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#C9A227] blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-amber-300 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
            <span aria-hidden>★</span>
            {business.rating}/5 · {business.reviewCount} omdömen
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Dina skor förtjänar
            <span className="block text-[#C9A227]">professionell vård</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-amber-50/90">
            {business.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.bookingUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#C9A227] px-8 py-4 text-base font-semibold text-[#3D2914] shadow-lg transition hover:bg-[#b8921f]"
            >
              {label}
            </a>
            <Link
              href="/tjanster"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold backdrop-blur transition hover:bg-white/20"
            >
              Se våra tjänster
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-amber-200/30 to-[#C9A227]/30 shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <span className="text-8xl" aria-hidden>
                🔧
              </span>
              <p className="mt-4 text-xl font-semibold">Hantverk & service</p>
              <p className="mt-2 text-sm text-amber-50/80">
                Skoreparation · Nyckelservice · Skovårdsprodukter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
