import Image from "next/image";
import Header from "../components/Header/Header";
import { PlayerCard } from "@/components/Playercard/Playercard";
import { EventCard } from "../components/events/event-card";
import eventsData from "../data/events.json";
import { EventSection } from "../components/events/event-section";
import { PlayerSection } from "@/components/Playercard/Playersection";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Main } from "next/document";
import MainSection from "@/components/main/main-section";


export default function Home() {
  return (
    <div
      className="flex min-h-screen h-full flex-col bg-zinc-50 dark:bg-black font-sans costum-bg-pattern"
    >        
      <section className="w-full flex flex-col items-center" id="home">
        <Header />
      </section>

      <main className="flex flex-1 flex-col items-center justify-top px-20 text-center full-w py-10 gap-20">

        <section className="w-full" id="socials">
          <MainSection />
        </section>
        <section className="w-full" id="events">
          <EventSection />
        </section>
        <section className="w-full" id="members">
          <PlayerSection
          />
        </section>
      </main>
    </div>
  );
}
