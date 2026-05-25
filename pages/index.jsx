import Head from "next/head";
import EventsList from "../components/events/eventsList";
import { getFeaturedEvents } from "../dummy-data";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function HomePage(props) {
  const { featuredEvents } = props;
  return (
    <div>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="a test project for training nextJS" />
      </Head>
      <NewsletterRegistration />
      <EventsList events={featuredEvents} />
    </div>
  );
}
export async function getStaticProps() {
  const events = getFeaturedEvents();
  return {
    props: {
      featuredEvents: events,
    },
    revalidate: 1800,
  };
}
