import React, { useState } from 'react';
import EventsForm from './EventsForm'
import { useEffect } from 'react';

function Events({handleAdd,handleEventDelete}) {

    useEffect(() =>{
        fetch('/events')
        .then(res => res.json())
        .then(data => console.log(data))
      },[])

      
    return (
        <div>
            <EventsForm handleEventDelete={handleEventDelete} handleAdd={handleAdd}/>
        </div>
    );
    }
  
  
  export default Events;