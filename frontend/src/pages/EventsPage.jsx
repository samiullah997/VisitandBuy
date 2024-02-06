import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import { Helmet } from "react-helmet";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
    <Helmet>
      <title>Visit And Buy|Events</title>
      <meta
        name="description"
        content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
      />
      <meta property="og:title" content="VisitandBuy|Events" />
      <meta property="og:image" content="../Assests/logo.png" />
      <meta property="og:url" content="https://visitandbuy.shop" />
      <meta
        property="og:description"
        content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
      />
      <meta property="og:site_name" content="VisitandBuy" />
    </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          {allEvents.length === 0 ? (
            <h4 className="flex justify-center text-5xl">No Events have!</h4>
          ) : (
            <EventCard active={true} data={allEvents && allEvents[0]} />
          )}
        </div>
      )}
    </>
  );
};

export default EventsPage;
