//Events Form
import React, { useState } from "react";
import "./App.css";

function Form({ event, handleAdd }) {
  const [title, setTitle] = useState("");
  const [planner, setPlanner] = useState("");
  const [location_id, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        planner: planner,
        location_id: location_id,
        time: time,
        date: date,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleAdd(data));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="formHolder">
          <hr className="vl" />
          <div className="formbox">
            <input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="eventTitle"
            />
            <input
              placeholder="Planner"
              onChange={(e) => setPlanner(e.target.value)}
            />
            <input
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              className="newLocation"
            />
            <input
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
              className="newDate"
            />
            <input
              type="time"
              placeholder="Time"
              onChange={(e) => setTime(e.target.value)}
              className="newTime"
            />
            <br />
            <button className="addEvent" type="submit">
              ADD EVENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
