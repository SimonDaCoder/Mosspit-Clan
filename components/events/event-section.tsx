"use client";

import { useState } from "react";
import { EventCard } from "./event-card";
import eventsData from "@/data/events.json";
import { GradientButton } from "../gradient-button";

export function EventSection() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const total = eventsData.length;

  const prev = () =>
    setCurrentEventIndex((i) => (i - 1 + total) % total);

  const next = () =>
    setCurrentEventIndex((i) => (i + 1) % total);

  return (
    <div className="mx-auto flex w-[90%] items-center gap-6">
      <GradientButton onClick={prev}>◄</GradientButton>

      <div className="flex-1 min-w-0">
        <EventCard event={eventsData[currentEventIndex]} />
      </div>

      <GradientButton onClick={next}>►</GradientButton>
    </div>

  );
}
