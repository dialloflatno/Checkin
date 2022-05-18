import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    console.log("Login button has been clicked!");
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => handleLogin(user));
      }
    });
  }

  return (
    <div>
      <div className="login-bckg">
        <div className="signContainer">
          <div className="loginHolder">
            <div className="stack">
              <img
                src="checkedinLogo.svg"
                alt="checkedin Logo"
                className="logo"
              />
              {/* <img
              src="mascot.png"
              alt="checkedin mascot"
              className="mascotSIGNIN"
            /> */}
            </div>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                className="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
              />
              <input
                className="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <button onClick={handleClick} className="signIn" type="submit">
                Sign In
              </button>
            </form>

            <Link to="/signup" className="signUp">
              <h5>You're not Checkedin Yet?</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
