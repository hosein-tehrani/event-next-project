import { useRouter } from "next/router";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";

export default function DetailsPage() {
  const { id } = useRouter().query;
  const data = getEventById(id);
  if (!data || !data.title) {
    return <p>there is no event!</p>;
  }
  const { title, location, description, date, image } = data;


  return (
    <>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}
