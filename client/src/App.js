import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp.js";
import Navigator from "./Navigator";
// import Header from "./Header";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  return (
    <>
      <main>
        {user ? (
          <Switch>
            <Navigator user={user} setUser={setUser} />
            <Route exact path="/">
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp user={user} setUser={setUser} />
            </Route>
            <Route>
              <SignIn handleLogin={handleLogin} />
            </Route>
            <Redirect to="/signin" />
          </Switch>
        )}
      </main>
    </>

  );
}

export default App;
