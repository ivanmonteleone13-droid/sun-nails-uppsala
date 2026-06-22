import Link from "next/link";
import { business } from "@/lib/business";

export default function ServicesPreview() {
  const featured = business.services.slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-[#3D2914] sm:text-4xl">
              Våra tjänster
            </h2>
            <p className="mt-4 max-w-xl text-lg text-[#5C4033]/70">
              Reparation, service och skovårdsprodukter – allt under ett tak på Stora Torget.
            </p>
          </div>
          <Link
            href="/tjanster"
            className="rounded-full border border-[#5C4033] px-6 py-3 text-sm font-semibold text-[#5C4033] transition hover:bg-[#5C4033] hover:text-white"
          >
            Alla tjänster
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-[#5C4033]/5 bg-[#FAF7F2] p-6"
            >
              <h3 className="text-xl font-semibold text-[#3D2914]">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C4033]/70">
                {service.description}
              </p>
              <div className="mt-6 border-t border-[#5C4033]/10 pt-4">
                <p className="text-xs text-[#5C4033]/60">{service.duration}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>Tips:</strong> Ring {business.phone} innan besök för att säkerställa att vi har öppet.
        </p>
      </div>
    </section>
  );
}
