import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp";

function SignIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        r.json().then((user) => setUser(user));
      }
    });
  }

  // const handleChange = (e) => {
  //     console.log(e.target.value)
  // }

  return (
      <div className="signContainer">
        <form onSubmit={handleSubmit}>
          <h1 className="logo">Checkedin</h1>
          <input
            className="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
          <br />
          <input
            className="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button className="signIn" type="submit">
            Sign In
          </button>
          <Link to="/header"><button>Main Page</button></Link>
        </form>

          <Link to="/signup"><button>Your not Checkedin Yet ?</button></Link>

      </div>
  );
}

export default SignIn;
