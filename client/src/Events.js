import React from "react";
import EventsForm from "./EventsForm";
// import EventsList from './EventsList'
import EventDisplay from "./EventDisplay";
// import { useEffect } from 'react';

function Events({ eventLists, handleAdd, handleEventDelete }) {
  return (
    <div className="eventsbackground">
      <div className="eventsbox">
        <h2>Events</h2>
        <EventDisplay eventLists={eventLists} />
        <EventsForm
          handleEventDelete={handleEventDelete}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default Events;
