import { useRouter } from "next/router";
import EventSearch from "../../components/events/EventSearch";
import EventsList from "../../components/events/eventsList";
import { getAllEvents, getYears } from "../../dummy-data";

export default function EventsPage() {
  const events = getAllEvents();
  const router = new useRouter();
  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventsList events={events} />
    </div>
  );
}
