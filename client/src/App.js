import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp.js";
import Header from "./Header";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <Switch>
          <Route path="/">
            <Redirect to="/Events" />
            <Header user={user} setUser={setUser} />

        </Route>

        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp user={user} setUser={setUser} />
          </Route>
          <Route>
            <SignIn setUser={setUser} />
          </Route>
          <Redirect to="/signin" />
        </Switch>
      )}
    </>

  );
}

export default App;
