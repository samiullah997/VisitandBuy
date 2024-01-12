import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <>
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
