// This is the Navigation Bar
import "./App.css";
import Emergency from "./Emergency";
import Schedule from "./Schedule";
import Grades from "./Grades";
import Profile from "./Profile";
import Events from "./Events";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";

function Header({handleAdd}) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/Schedule">Schedule</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/Grades">Grades</Link></li>
          <li><Link to="/Emergency">Emergency</Link></li>
          <li><Link to="/Events">Events</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/Emergency"><Emergency /></Route>
        <Route path="/Schedule"><Schedule /></Route>
        <Route path="/Profile"><Profile /></Route>
        <Route path="/Grades"><Grades /></Route>
        <Route path="/Events"><Events handleAdd={handleAdd}/></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
