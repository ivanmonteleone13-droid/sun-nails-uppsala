import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Lär känna ${business.name} – skomakeri och nyckelservice på Stora Torget i Uppsala.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3D2914] to-[#5C4033] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Om {business.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-amber-50/90">
            Ett centralt skomakeri där kvalitet, noggrannhet och personlig service står i fokus.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-[#3D2914]">Välkommen till oss</h2>
            <p className="mt-6 leading-relaxed text-[#5C4033]/80">
              Hos {business.name} på Stora Torget i Uppsala utför vi reparation och underhåll av
              skodon och lädervaror. Vi lagar allt från klackar och sulor till dragkedjor på
              väskor och skidpjäxor.
            </p>
            <p className="mt-4 leading-relaxed text-[#5C4033]/80">
              I butiken säljer vi även skovårdsprodukter så att du kan ta hand om dina skor hemma.
              Dessutom erbjuder vi lås- och nyckelservice – praktiskt när du behöver en ny nyckel
              eller hjälp med lås.
            </p>
          </div>

          <div className="rounded-3xl bg-[#FAF7F2] p-8">
            <h2 className="text-2xl font-bold text-[#3D2914]">I siffror</h2>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-sm font-medium text-[#5C4033]/60">Betyg</dt>
                <dd className="text-3xl font-bold text-[#5C4033]">
                  {business.rating} / 5
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[#5C4033]/60">Omdömen</dt>
                <dd className="text-3xl font-bold text-[#5C4033]">
                  {business.reviewCount}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[#5C4033]/60">Läge</dt>
                <dd className="text-xl font-semibold text-[#3D2914]">Stora Torget, Uppsala</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#3D2914]">Så arbetar vi</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Bedömning",
                text: "Vi tittar på skick och material och ger dig en tydlig bedömning innan arbetet påbörjas.",
              },
              {
                title: "Hantverk",
                text: "Reparationer utförs noggrant med fokus på hållbarhet och ett snyggt resultat.",
              },
              {
                title: "Leverans",
                text: "Du får tillbaka dina skor eller nycklar i gott skick – redo att användas igen.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#3D2914]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5C4033]/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#3D2914]">Vill du veta mer?</h2>
          <p className="mt-4 text-[#5C4033]/70">Ring oss eller besök butiken på Stora Torget.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#5C4033] px-8 py-4 font-semibold text-white transition hover:bg-[#3D2914]"
            >
              Kontakta oss
            </Link>
            <a
              href={business.bookingUrl}
              className="rounded-full border border-[#5C4033] px-8 py-4 font-semibold text-[#5C4033] transition hover:bg-amber-50"
            >
              Ring oss
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
