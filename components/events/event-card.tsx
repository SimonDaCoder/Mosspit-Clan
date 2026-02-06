"use client";

import eventsData from "@/data/events.json";
import "./external-link.css";

interface EventItem {
  name: string;
  imageMain?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  description: string;
  link: string;
}

const PLACEHOLDER = "/images/blur.png";

const SafeImage = ({ src, alt }: { src?: string; alt?: string }) => (
  <img
    src={src || PLACEHOLDER}
    alt={alt || "Bild"}
    loading="lazy"
    decoding="async"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
    onError={(e) => {
      const target = e.currentTarget;
      if (target.src !== PLACEHOLDER) target.src = PLACEHOLDER;
    }}
  />
);

export const EventCard = ({ event }: { event: EventItem }) => {
  const galleryImages = [event.image1, event.image2, event.image3];

  const renderImage = (src?: string, alt?: string) => (
    <div className="relative overflow-hidden rounded-lg aspect-[16/9] bg-zinc-300 dark:bg-zinc-700 shadow-[0_0_4px_0_rgba(0,0,0,0.4)]">
      <SafeImage src={src} alt={alt} />
    </div>
  );

  return (
    <div className="relative mx-auto max-w-5xl rounded-2xl p-[1px]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-emerald-400/60 via-emerald-300/10 to-transparent" />

      <div
        className="relative rounded-2xl bg-white/90 p-4 shadow-md backdrop-blur-sm
        dark:bg-zinc-900/90
        transition-shadow duration-300 ease-out
        hover:shadow-[0_0_12px_0_rgba(16,185,129,0.4)]"
      >
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-20
          w-10 h-10 rounded-full
          bg-white/90 dark:bg-zinc-900/90
          p-2 shadow-md
          hover:scale-110 transition-transform"
        >
          <div className="external-link"></div>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">{renderImage(event.imageMain, event.name)}</div>

          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">{event.name}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{event.description}</p>
          </div>

          <div className="md:col-span-3 grid grid-cols-3 gap-4 mt-4">
            {galleryImages.map((img, i) => (
              <div key={i}>{renderImage(img, `Gallery ${i + 1}`)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
