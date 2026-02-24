import { EventSection } from "../components/events/event-section";
import { PlayerSection } from "@/components/Playercard/Playersection";
import MainSection from "@/components/main/main-section";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="flex flex-1 flex-col items-center justify-top px-5 md:px-20 text-center w-full py-10 gap-20">

        {/* each section gets a scroll-margin to offset for the header */}
        <section className="w-full scroll-mt-36" id="home">
          <MainSection />
        </section>

        <section className="w-full flex justify-center scroll-mt-36" id="events">
          <EventSection />
        </section>

        <section className="w-full scroll-mt-36" id="members">
          <PlayerSection />
        </section>
      </main>
    </div>
  );
}
