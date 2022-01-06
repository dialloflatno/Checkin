import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import Home from "./Home"

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
          <h1>Hello World</h1>
          // <Switch>
          //   <Route path="/header">
          //     <Header />
          //   </Route>
          // </Switch>
        ) : (
          <Switch>
            <Route path="/signin">
              <SignIn setUser={setUser} />
            </Route>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
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
