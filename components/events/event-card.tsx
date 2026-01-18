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
    <div className="mx-auto max-w-5xl rounded-xl bg-zinc-200 p-4 dark:bg-zinc-800">
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        
        {/* Großes Bild links */}
        <div className="md:col-span-2">
          <img
            src={event.imageMain}
            alt={event.name}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Text rechts */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-2 text-2xl font-bold">{event.name}</h2>
          <p className="text-sm opacity-80">{event.description}</p>
        </div>

        {/* Untere Bildreihe */}
        <div className="md:col-span-3 grid grid-cols-3 gap-4">
          <img
            src={event.image1}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={event.image2}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />
          <img
            src={event.image3}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
};


