import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    console.log("Ready");
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
      <div className="signContainer">
        <div>
          <img src="checkedinLogo.svg" alt="checkedin Logo" className="logo" />
          <img
            src="mascot.png"
            alt="checkedin mascot"
            className="mascotSIGNIN"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <br />
          <input
            className="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <br/>
          <button onClick={handleClick} className="signIn" type="submit">
            Sign In
          </button>
        </form>

        <Link to="/SignUp" className="signUp">
          <h5>Your not Checkedin Yet ?</h5>
        </Link>
      </div>
    </div>
  );
}

export default Login;
