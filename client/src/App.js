import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header.js";
import { BrowserRouter } from "react-router-dom";



function App() {

  const [eventLists, setEventLists] = useState([]);
  const events = "http://localhost:3000/events";

  useEffect(() => {
    fetch(events)
      .then((res) => res.json())
      .then((data) => setEventLists(data));
  }, []);

  function handleEventDelete(title) {
    console.log("Delete button has been clicked!")
    const newEventLists = eventLists.filter((e) => e.title !== title);
    setEventLists(newEventLists);
  }

  function handleAdd(newEvent) {
    console.log("Submit button has been clicked!");
    const addEvent = [...eventLists, newEvent];
    setEventLists(addEvent);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header handleEventDelete={handleEventDelete} handleAdd={handleAdd}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
