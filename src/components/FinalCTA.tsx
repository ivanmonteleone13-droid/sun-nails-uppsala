import { business, getFullAddress } from "@/lib/business";

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFD166] to-[#e0c060] p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#E76F51] sm:text-4xl">
                Fixa soliga naglar idag
              </h2>
              <p className="mt-4 text-lg text-[#E76F51]/80">
                Boka tid på Bokadirekt eller ring {business.phone}. Vi finns på{" "}
                {getFullAddress()} — välkommen in!
              </p>
              <ul className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-[#E76F51]/70">
                <li>★ {business.rating} betyg</li>
                <li>·</li>
                <li>{business.reviewCount}+ omdömen</li>
                <li>·</li>
                <li>Uppsala, Vaksalagatan</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#E76F51] px-8 py-4 font-semibold text-white transition hover:bg-black"
              >
                {business.bookingLabel}
              </a>
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center rounded-full border-2 border-[#E76F51] bg-transparent px-8 py-4 font-semibold text-[#E76F51] transition hover:bg-[#E76F51]/10"
              >
                Ring {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
