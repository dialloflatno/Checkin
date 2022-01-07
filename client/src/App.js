import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp.js";
import Header from "./Header";
// import Events from "./Events";

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
      {/* <SignIn setUser={setUser}/> */}
      {user ? (
        // <h1>Hello World</h1>
        <Switch>
          <Route path="/">
            <Redirect to="/Events" />
            <Header user={user} setUser={setUser} />
            {/* <Events user={user} setUser={setUser}/> */}
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
