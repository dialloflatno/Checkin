// This is the Navigation Bar
import "./App.css";
import { useState, useEffect } from "react";
import Emergency from "./Emergency";
import Schedule from "./Schedule";
import Grades from "./Grades";
import Profile from "./Profile";
import Events from "./Events";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";
import logo from "../image.png";

function Header() {
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
    <BrowserRouter>
      <nav>
        <img src={require("./image.png")} alt="checkedin logo"></img>
        <ul>
          <li>
            <Link to="/Schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Grades">Grades</Link>
          </li>
          <li>
            <Link to="/Emergency">Emergency</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/Emergency">
          <Emergency />
        </Route>
        <Route path="/Schedule">
          <Schedule />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/Grades">
          <Grades />
        </Route>
        <Route path="/Events">
          <Events
            eventLists={eventLists}
            handleEventDelete={handleEventDelete}
            handleAdd={handleAdd}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
