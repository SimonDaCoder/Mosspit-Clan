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
    <div className="mx-auto flex flex-col items-center md:flex-row md:gap-6">
      <div className="hidden md:block">
        <GradientButton onClick={prev}>◄</GradientButton>
      </div>

      <div className="w-full max-w-4xl">
        <EventCard event={eventsData[currentEventIndex]} />
      </div>

      <div className="hidden md:block">
        <GradientButton onClick={next}>►</GradientButton>
      </div>

      <div className="flex gap-4 mt-4 md:hidden">
        <GradientButton onClick={prev}>◄</GradientButton>
        <GradientButton onClick={next}>►</GradientButton>
      </div>
    </div>
  );
}
