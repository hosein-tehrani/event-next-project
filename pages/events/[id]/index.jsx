import { getAllEvents, getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventLogistics from "../../../components/event-detail/event-logistics";
import EventContent from "../../../components/event-detail/event-content";

export default function DetailsPage({ data }) {
  const { title, location, description, date, image } = data;

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;
  const data = getEventById(id);
  if (!data || !data.title) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const events = getAllEvents();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
