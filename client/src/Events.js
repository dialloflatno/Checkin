import React from 'react'
import EventsForm from './EventsForm'
import EventDisplay from './EventDisplay'
import { useState, useEffect } from 'react'

function Events() {
  const [eventLists, setEventLists] = useState([])
  const events = '/events'

  useEffect(() => {
    fetch(events)
      .then((res) => res.json())
      .then((data) => setEventLists(data))
  }, [])

  function handleEventDelete(deletedEvent) {
    console.log('Event Canceled')
    const newEventLists = eventLists.filter((e) => e.id !== deletedEvent.id)
    setEventLists(newEventLists)
  }

  function handleAdd(newEvent) {
    console.log('Submit button has been clicked!')
    const addEvent = [...eventLists, newEvent]
    setEventLists(addEvent)
  }

  return (
    <div className="eventsbackground">
      <div className="placement">
        <div className="eventsbox">
          <EventsForm handleAdd={handleAdd} />
          <div>
            <h2>Events</h2>
          </div>
          <EventDisplay
            handleEventDelete={handleEventDelete}
            eventLists={eventLists}
          />
        </div>
      </div>
    </div>
  )
}

export default Events
