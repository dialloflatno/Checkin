//Events Form
import React, { useState } from "react";
import './App.css';

function Form({ event, handleAdd }) {

  const [newEvent, setNewEvent] = useState("")
  const [location, setLocation] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(event, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newEvent: newEvent,
        location: location,
        time: time,
        date: date,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleAdd(data));
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="formHolder">
          <hr className="vl" />
          <div className="formHolder">
            <input placeholder="Event" onChange={(e) => setNewEvent(e.target.value)} className="newEvent" />
            <input placeholder="Location" onChange={(e) => setLocation(e.target.value)} className="newEvent" />
            <span> <input type="number" placeholder="Height" onChange={(e) => setDate(e.target.value)} className="newEvent" />
              <input type="number" placeholder="Time" onChange={(e) => setTime(e.target.value)} className="newEvent" /></span>
            <button className="addEvent" type="submit">ADD EVENT</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
