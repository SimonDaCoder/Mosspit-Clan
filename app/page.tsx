import Image from "next/image";
import Header from "../components/Header/Header";
import { GalleryCarousel } from "../components/gallery-carousel/gallery-carousel";
import { EventCard } from "../components/events/event-card";
import eventsData from "../data/events.json";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-black font-sans">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-20 text-center full-w">
        <EventCard event={eventsData[1]} />
      </main>
    </div>
  );
}
