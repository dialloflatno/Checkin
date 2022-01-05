import React from 'react';
import EventsForm from './EventsForm'
// import EventsList from './EventsList'
import EventDisplay from './EventDisplay'
// import { useEffect } from 'react';

function Events({eventLists, handleAdd,handleEventDelete}) {

    // useEffect(() =>{
    //     fetch('/events')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //   },[])

      
    return (
        <div>
            <EventsForm handleEventDelete={handleEventDelete} handleAdd={handleAdd} />
            {/* <EventsList eventLists={eventLists}/> */}
            <EventDisplay eventLists={eventLists}/>
        </div>
    );
    }
  
  
  export default Events;