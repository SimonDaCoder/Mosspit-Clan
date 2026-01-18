"use client";

import { useState } from "react";
import { GalleryImage } from "./gallery-image";
import eventsData from "@/data/events.json";

interface EventItem {
  name: string;
  imageMain: string;
  imageLeft: string;
  imageRight: string;
  description: string;
}

export const GalleryCarousel = () => {
  const [index, setIndex] = useState(0);
  const events: EventItem[] = eventsData;
  const total = events.length;

  if (total < 3) {
    throw new Error("Mindestens 3 Events erforderlich");
  }

  const left = (index - 1 + total) % total;
  const center = index;
  const right = (index + 1) % total;

  return (
    <section className="w-full relative overflow-visible">
      <h2 className="mb-6 text-center text-3xl font-bold">
        Events
      </h2>

      <div className="relative h-[35vh] max-w-5xl mx-auto flex items-center justify-center gap-20">

        {/* links */}
        <div className="relative w-[22%] scale-105 -translate-y-12">
          <GalleryImage src={events[left].imageMain} />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* center */}
        <div className="relative w-[40%] scale-110 z-10">
          <GalleryImage src={events[center].imageMain} />

          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold text-lg z-20">
            {events[center].name}
          </div>

          {/* extra unten links */}
          <div className="absolute -bottom-14 -left-16 w-[45%] z-0">
            <GalleryImage src={events[center].imageLeft} />
          </div>

          {/* extra unten rechts */}
          <div className="absolute -bottom-14 -right-16 w-[45%] z-0">
            <GalleryImage src={events[center].imageRight} />
          </div>
        </div>



        {/* rechts */}
        <div className="relative w-[22%] scale-105 -translate-y-12">
          <GalleryImage src={events[right].imageMain} />
          <div className="absolute inset-0 bg-black/30" />
        </div>


        {/* Buttons */}
        <button
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 z-30"
        >
          {"<"}
        </button>

        <button
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 z-30"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};
