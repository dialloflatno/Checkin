import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import Events from "./Events";

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
    <BrowserRouter>
      {/* <SignIn setUser={setUser}/> */}
      <div>
        {user ? (
          // <h1>Hello World</h1>
          <Switch>
            <Route path="/">
              <Header user={user} setUser={setUser} />
              {/* <Events user={user} setUser={setUser}/> */}
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Redirect to="/signin" />
            <SignIn setUser={setUser} />
            {/* <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route> */}
          </Switch>
        )}
      </div>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Switch>
    //     <Route
    //       exact
    //       path="/"
    //       render={() => {
    //         return <Redirect to="/signin" />;
    //       }}
    //     />
    //     <Route exact path="/signin" component={SignIn} />
    //     <Route exact path="/signup" component={SignUp} />
    //     <Route exact path="/header" component={Header} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
