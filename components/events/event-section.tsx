import { EventCard } from "./event-card";
import eventsData from "@/data/events.json";


export function EventSection() {
  var currentEventIndex = 0; // Change this index to display a different event
  return (
    <div className="flex items-space-between gap-4 w-[90%]">
      <button className="">asd</button>
      <EventCard event={eventsData[currentEventIndex]} />
      <button >next</button>
    </div>
  );
}