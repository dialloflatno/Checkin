import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import Grades from "./Grades";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/signin" />;
          }}
        />

        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/header" component={Header} /> */}
        <Route>
          <Header user={user} setUser={setUser} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
