import React from 'react';
import EventsForm from './EventsForm'

function Events({handleAdd,handleEventDelete}) {
    return (
        <div>
            <EventsForm handleEventDelete={handleEventDelete} handleAdd={handleAdd}/>
        </div>
    );
  }
  
  export default Events;