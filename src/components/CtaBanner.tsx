import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export default function CtaBanner() {
  const label = "bookingLabel" in business ? business.bookingLabel : "Ring oss";

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#C9A227] to-[#e0c060] p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3D2914] sm:text-4xl">
                Behöver du hjälp med skor eller nycklar?
              </h2>
              <p className="mt-4 text-lg text-[#3D2914]/80">
                Besök oss på {getFullAddress()} eller ring för att höra om vi har öppet.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={business.bookingUrl}
                className="inline-flex items-center justify-center rounded-full bg-[#3D2914] px-8 py-4 font-semibold text-white transition hover:bg-[#2a1d0e]"
              >
                {label}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#3D2914] bg-transparent px-8 py-4 font-semibold text-[#3D2914] transition hover:bg-[#3D2914]/10"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
