import EventCard from "./EventCard";
import classes from "./EventsList.module.css";
export default function EventsList({ events }) {
  {
    events.length;
  }
  if (events.length === 0) {
    return <p>No events found!</p>;
  }
  return (
    <div>
      <ul className={classes.list}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}
