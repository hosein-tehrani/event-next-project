import EventsList from "../components/events/eventsList";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}
