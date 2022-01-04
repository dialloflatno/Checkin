import React, { useState } from 'react';
import EventsForm from './EventsForm'
import { useEffect } from 'react';

function Events() {

    useEffect(() =>{
        fetch('/events')
        .then(res => res.json())
        .then(data => console.log(data))
      },[])

      
    return (
        <div>
            <EventsForm />
        </div>
    );
  }
  
  export default Events;