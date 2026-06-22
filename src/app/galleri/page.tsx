import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Inspireras av vårt arbete hos ${business.name} i Uppsala.`,
};

const galleryItems = [
  { title: "Lashlift", gradient: "from-rose-100 to-rose-300", emoji: "👁️" },
  { title: "Fransar", gradient: "from-pink-100 to-pink-300", emoji: "✨" },
  { title: "Bryn", gradient: "from-amber-100 to-amber-300", emoji: "🌿" },
  { title: "Naglar", gradient: "from-violet-100 to-violet-300", emoji: "💅" },
  { title: "Manikyr", gradient: "from-sky-100 to-sky-300", emoji: "💎" },
  { title: "Behandling", gradient: "from-fuchsia-100 to-fuchsia-300", emoji: "🌸" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#5a2d4a] to-[#8b4a6b] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Galleri</h1>
          <p className="mt-6 max-w-2xl text-lg text-pink-50/90">
            Platshållarbilder i demo-webbplatsen. Besök studion på {business.address.street} för att se vårt arbete.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure key={item.title} className={`group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient}`}>
                <div className="flex h-full flex-col items-center justify-center p-6 text-center transition group-hover:scale-105">
                  <span className="text-6xl" aria-hidden>{item.emoji}</span>
                  <figcaption className="mt-4 text-lg font-semibold text-[#5a2d4a]/80">{item.title}</figcaption>
                </div>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[#8b4a6b]/60">Bilder i detta galleri är illustrativa platshållare.</p>
        </div>
      </section>
    </>
  );
}