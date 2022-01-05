import { useState } from "react";

function SignIn({ setUser }) {
  const [user_name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_name, password }),
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
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
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
      </form>
    </div>
  );
}

export default SignIn;
