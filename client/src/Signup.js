import React, { useState } from "react";

function SignUp({ setUser }) {
  const [full_name, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [DOB, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [school, setSchool] = useState("");
  const [IDNUMBER, setIDnumber] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        DOB,
        state,
        school,
        IDNUMBER,
        full_name,
        phone_number,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="signContainer">
      <form onSubmit={handleSubmit}>
        <h1 className="logo">Checkedin</h1>
        <input
          className="fullName"
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
        <br />
        <input
          className="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="123@me.com"
        />
        <br/>
        <input
          className="email"
          type="month"         
           onChange={(e) => setDOB(e.target.value)}
          placeholder="mm/dd/yyyy"
        />
        <br />
        <input
          className="phoneNumber"
          type="tel"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+(000)-000-0000"
        />
        <br />
        <input
          className="state"
          type="text"
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
        />
        <br />
        <input
          className="school"
          onChange={(e) => setSchool(e.target.value)}
          placeholder="School"
        />
        <br />
        <input
          className="idNumber"
          onChange={(e) => setIDnumber(e.target.value)}
          placeholder="I.D Number"
        />
        <br />
        <input
          className="username"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <br />
        <input
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
