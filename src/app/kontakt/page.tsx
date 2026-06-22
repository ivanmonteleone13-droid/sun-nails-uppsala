import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { business, getFullAddress, getMapsEmbedUrl, getMapsLink } from "@/lib/business";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakta ${business.name} på Stora Torget i Uppsala. Ring eller besök vår butik.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3D2914] to-[#5C4033] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Kontakt</h1>
          <p className="mt-6 max-w-2xl text-lg text-amber-50/90">
            Vi finns på Stora Torget i centrala Uppsala. Ring gärna innan besök.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#3D2914]">Kontaktuppgifter</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-sm font-medium text-[#5C4033]/60">Adress</dt>
                <dd className="mt-1 text-lg text-[#3D2914]">{getFullAddress()}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-[#5C4033]/60">Telefon</dt>
                <dd>
                  <a
                    href={business.phoneLink}
                    className="text-lg font-semibold text-[#5C4033] hover:underline"
                  >
                    {business.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-[#3D2914]">Öppettider</h3>
              <p className="mt-2 text-sm text-amber-800">{business.hours.note}</p>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {business.hours.regular.map((row) => (
                    <tr key={row.day} className="border-b border-[#5C4033]/5">
                      <td className="py-2 font-medium text-[#3D2914]">{row.day}</td>
                      <td className="py-2 text-right text-[#5C4033]/70">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-[#3D2914]">Hitta hit</h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title={`Karta till ${business.name}`}
              src={getMapsEmbedUrl()}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center">
            <a
              href={getMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#5C4033] hover:underline"
            >
              Öppna i Google Maps →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
