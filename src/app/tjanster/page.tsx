import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Tjänster",
  description: `Behandlingar och tjänster hos ${business.name} i Uppsala.`,
};

export default function ServicesPage() {
  const label = "bookingLabel" in business ? business.bookingLabel : "Boka tid";
  return (
    <>
      <section className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Tjänster</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100/90">
            Vi erbjuder professionella behandlingar anpassade efter dina önskemål. Kontakta oss för aktuella priser.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6">
            {business.services.map((service) => (
              <article key={service.id} className="flex flex-col gap-4 rounded-2xl border border-[#1a1a2e]/10 bg-[#f5f0e8] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#1a1a2e]">{service.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#1a1a2e]/70">{service.description}</p>
                  <p className="mt-2 text-xs text-[#1a1a2e]/60">{service.note}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-sm font-medium text-[#1a1a2e]">{service.duration}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950">
            <p><strong>Ring innan besök:</strong> {business.phone}</p>
            <p><strong>Bokning:</strong> Boka enkelt online via Bokadirekt.</p>
          </div>
          <div className="mt-10 text-center">
            <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#1a1a2e] px-8 py-4 font-semibold text-white transition hover:bg-[#0f0f1a]">{label}</a>
          </div>
        </div>
      </section>
    </>
  );
}