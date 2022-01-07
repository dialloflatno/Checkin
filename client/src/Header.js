// This is the Navigation Bar
import "./App.css";
// import { useState, useEffect } from "react";
import Emergency from "./Emergency";
import Schedule from "./Schedule";
import Grades from "./Grades";
import Profile from "./Profile";
import Events from "./Events";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React from "react";
import SignIn from "./SignIn";

function Header({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser("");
      }
    });
  }
 

  return (
    <>
      <div></div>
      <BrowserRouter>
        <div className="container">
          <img src="logo.png" alt="checkedin Logo" className="logo" />
          <nav>
            <Link to="/Emergency">
              <button className="errButton">Emergency</button>
            </Link>
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
                <Link to="/Events">Events</Link>
              </li>
              <li id='user_name'>Hello,{user.full_name}</li>
              <li>
                {user ? (
                  <button onClick={handleLogoutClick} className="logout">Logout</button>
                ) : (
                  <>
                  </>
                )}
              </li>

            </ul>
          </nav>
        </div>
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
            <Events />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Header;
