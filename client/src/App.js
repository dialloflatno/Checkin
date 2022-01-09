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

  return (
    <>
      {user ? (
        <Switch>
          <Route path="/">
            <Redirect to="/home" />
            <NavBar user={user} setUser={setUser} />
            <Home user={user} />
            {/* <Errorpage /> */}
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/signup">
            <SignUp user={user} setUser={setUser} />
          </Route>
          <Route>
            <Login setUser={setUser} />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
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
