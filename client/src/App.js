import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup.js";
import NavBar from "./NavBar";
import Home from "./Home";
import Emergency from "./Emergency";
import Schedule from "./Schedule";
import Profile from "./Profile";
import Grades from "./Grades";
import Events from "./Events";
import School from "./School";
import Admin from "./Admin";
import EmergencyRequest from "./EmergencyRequest";
import TeacherNavBar from "./TeacherNavBar";
import LandingPage from "./LandingPage";
import AdminNavBar from "./AdminNavBar";
import Teacher from "./Teacher";

function App() {
  const [user, setUser] = useState([]);
  const [emergencyShow, setEmergencyRequests] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  console.log(emergencyShow);

  function handleNewEmergency(newRequest) {
    console.log(newRequest);
    console.log("Request sent to await rapid responses!");
    const addRequest = [...emergencyShow, newRequest];
    console.log(addRequest);
    setEmergencyRequests(addRequest);
  }

  function handleLogin(user) {
    setUser(user);
  }

  if (user.student) {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <NavBar user={user} setUser={setUser} />
            {/* <Home user={user} /> */}
            <Emergency
              user={user.students}
              handleNewEmergency={handleNewEmergency}
            />
          </Route>
          <Route exact path="/emergency">
            <NavBar user={user} setUser={setUser} />
            <Emergency
              user={user.students}
              handleNewEmergency={handleNewEmergency}
            />
          </Route>
          <Route path="/schedule">
            <NavBar user={user} setUser={setUser} />
            <Schedule />
          </Route>
          <Route path="/profile">
            <NavBar user={user} setUser={setUser} />
            <Profile />
          </Route>
          <Route path="/grades">
            <NavBar user={user} setUser={setUser} />
            <Grades />
          </Route>
          <Route exact path="/events">
            <NavBar user={user} setUser={setUser} />
            <Events />
          </Route>
        </Switch>
      </main>
    );
  } else if (user.teacher === true) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <TeacherNavBar user={user} setUser={setUser} />
            <EmergencyRequest
              emergencyShow={emergencyShow}
              setEmergencyRequests={setEmergencyRequests}
            />{" "}
          </Route>
          <Route path="/errs">
            <TeacherNavBar user={user} setUser={setUser} />
            <EmergencyRequest
              emergencyShow={emergencyShow}
              setEmergencyRequests={setEmergencyRequests}
            />
          </Route>
        </Switch>
      </>
    );
  } else if (user.admin === true) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <AdminNavBar user={user} setUser={setUser} />
            <Admin />
          </Route>
          <Route path="/schools">
          <AdminNavBar user={user} setUser={setUser} />
            <School />
          </Route>
        </Switch>
      </>
    );
  } else {
    return (
      <>
        <Switch>
          <Route path="/signup">
            <Signup user={user} setUser={setUser} />
          </Route>
          <Route>
            <Login handleLogin={handleLogin} />
          </Route>
          <Redirect to="/login" />
          <Route>
            <LandingPage />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
