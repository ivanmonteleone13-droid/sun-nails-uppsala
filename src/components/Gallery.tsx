"use client";

import { useCallback, useEffect, useState } from "react";
import { business } from "@/lib/business";

type GalleryItem = (typeof business.gallery)[number];

function hasSingleImage(item: GalleryItem): item is GalleryItem & { image: string } {
  return "image" in item && !!item.image;
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close]);

  const active = activeIndex !== null ? business.gallery[activeIndex] : null;

  return (
    <section id="galleri" className="bg-[#E76F51] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#FFD166]">Galleri</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Nageldesigns</h2>
          <p className="mt-4 text-slate-300/80">
            Riktiga bilder från {business.name} — klicka för att förstora.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {business.gallery.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group overflow-hidden rounded-2xl border border-white/10 text-left transition hover:border-[#FFD166]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD166]"
            >
              {hasSingleImage(item) ? (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <p className="bg-white/5 px-4 py-3 text-sm font-medium group-hover:bg-white/10">{item.label}</p>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && hasSingleImage(active) && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button type="button" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white" aria-label="Stäng">
            ✕
          </button>
          <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={active.label} className="max-h-[70vh] w-full object-contain bg-black" />
            <p className="bg-[#F4A261] px-6 py-4 text-center text-lg font-semibold">{active.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
