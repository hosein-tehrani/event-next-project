import EventCard from "./EventCard";
import classes from "./EventsList.module.css"
export default function EventsList({ events }) {
  return (
    <div>
      {events.length}
      {events || events.length ? (
        <ul className={classes.list}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ul>
      ) : (
        <p>No events found!</p>
      )}
    </div>
  );
}
