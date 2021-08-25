import React from "react";
import EventListItem from "./EventListItem";

function EventList({ events, selectEvent, deleteEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} selectEvent={selectEvent} key={event.id} deleteEvent={deleteEvent} />
      ))}
    </>
  );
}

export default EventList;
