import EventsList from "../../components/events/eventsList";
import { getAllEvents } from "../../dummy-data";

export default function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}
