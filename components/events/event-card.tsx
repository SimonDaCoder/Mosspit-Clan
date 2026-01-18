"use client";

import { useState } from "react";
import eventsData from "@/data/events.json";

interface EventItem {
  name: string;
  imageMain: string;
  image1: string;
  image2: string;
  image3: string;
  description: string;
}

export const EventCard = ({ event }: { event: EventItem }) => {
  return (
    <div className="relative mx-auto max-w-5xl rounded-2xl p-[1px]">

      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-2xl 
        bg-gradient-to-bl from-emerald-400/60 via-emerald-300/10 to-transparent"
      />

      {/* Card Content */}
      <div className="relative rounded-2xl bg-white/90 p-4 shadow-md backdrop-blur-sm transition-shadow hover:shadow-xl dark:bg-zinc-900/90">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Hero */}
          <div className="md:col-span-2 overflow-hidden rounded-xl">
            <img
              src={event.imageMain}
              alt={event.name}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              {event.name}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {event.description}
            </p>
          </div>

          {/* Gallery */}
          <div className="md:col-span-3 grid grid-cols-3 gap-4">
            {[event.image1, event.image2, event.image3].map((img, i) => (
              <div key={i} className="group overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt=""
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
