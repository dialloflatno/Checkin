import React from "react";
import EventsForm from "./EventsForm";
// import EventsList from './EventsList'
import EventDisplay from './EventDisplay'
import { useState, useEffect } from 'react';

function Events() {

    const [eventLists, setEventLists] = useState([]);
    const events = "/events";
  
    useEffect(() => {
      fetch(events)
        .then((res) => res.json())
        .then((data) => setEventLists(data));
    }, []);
  
    function handleEventDelete(title) {
      console.log("Delete button has been clicked!");
      const newEventLists = eventLists.filter((e) => e.title !== title);
      setEventLists(newEventLists);
    }
  
    function handleAdd(newEvent) {
      console.log("Submit button has been clicked!");
      const addEvent = [...eventLists, newEvent];
      setEventLists(addEvent);
    }
      
    return (

        <div> 
            <h2>Events</h2>
            <EventDisplay eventLists={eventLists}/>
            <EventsForm handleEventDelete={handleEventDelete} handleAdd={handleAdd} />
        </div>
    );
    }
  
  
  export default Events;
