import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp.js";
import NavBar from "./NavBar";
import Errorpage from "./ErrorPage";
import Home from "./Home";

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
            <Route exact path="/">
              <NavBar user={user} setUser={setUser} />
              <Home user={user} />
              <Errorpage />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp user={user} setUser={setUser} />
            </Route>
            <Route>
              <Login handleLogin={handleLogin} />
            </Route>
            <Redirect to="/login" />
            <Route path="/home"></Route>
          </Switch>
        )}
      </main>
    </>
  );
}
//   return (
//     <>
//       <NavBar user={user} setUser={setUser} />
//       <main>
//         {user ? (
//           <Switch>
//             <Route exact path="/home">
//               <Home user={user} setUser={setUser} />
//             </Route>
//           </Switch>
//         ) : (
//           <Switch>
//             <Route path="/signup">
//               <SignUp setUser={setUser} />
//             </Route>
//             <Route path="/login">
//               <Login setUser={setUser} />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         )}
//       </main>
//     </>
//   );
// }

export default App;
