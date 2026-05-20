import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventsList from "../../../components/events/eventsList";
import Link from "next/link";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/ui/error-alert";

export default function FillteredEvents() {
  const { slug } = useRouter().query;
  if (!slug) {
    return <p>loading...</p>;
  }
  const [year, month] = slug;
  const numYear = +year;
  const numMonth = +month;
  if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>invalid filter, Please check your enteries!</p>
        </ErrorAlert>
        <Link href="/events">
          <Button>Show All Events</Button>
        </Link>
      </div>
    );
  }
  const events = getFilteredEvents({ year: numYear, month: numMonth });
  if (!events || events.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>no events found!</p>
        </ErrorAlert>
        <Link href="/events">
          <Button>Show All Events</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}
