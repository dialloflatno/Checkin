// This is the Navigation Bar
import "./App.css";
// import Emergency from "./Emergency";
// import Schedule from "./Schedule";
// import Grades from "./Grades";
// import Profile from "./Profile";
// import Events from "./Events";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Emergency">
          {/* <Emergency /> */}
          {/* <Link to="/Emergency">Emergency</Link> */}
        </Route>
      </Switch>
      <Switch>
        <Route>
          {/* <Schedule /> */}
          <Link to="/Schedule">Schedule</Link>
        </Route>
      </Switch>
      <Switch>
        <Route>
          {/* <Profile /> */}
          <Link to="/Profile">Profile</Link>
        </Route>
      </Switch>
      <Switch>
        <Route>
          {/* <Grades /> */}
          <Link to="/Grades">Grades</Link>
        </Route>
      </Switch>
      <Switch>
        <Route path="Events">
          {/* <Events /> */}
          <Link to="/Events">Link</Link>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
