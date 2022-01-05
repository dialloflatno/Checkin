import React, { useState } from 'react'

function SignUp({ setUser }) {
  const [username, setUsername] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [full_name, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        full_name,
        phone_number,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }

  return (
    <div className="signContainer">
      <form onSubmit={handleSubmit}>
        <h1 className="logo">Checkedin</h1>
        <input
          className="fullName"
          type="text"
          onChange={handleChange}
          placeholder="Full Name"
        />
        <br />
        <input
          className="email"
          type="email"
          onChange={handleChange}
          placeholder="123@me.com"
        />
        <br />
        <input
          className="phoneNumber"
          type="tel"
          onChange={handleChange}
          placeholder= "+(000)-000-0000"
        />
        <br />
        <input
          className="state"
          type="text"
          onChange={handleChange}
          placeholder="State"
        />
        <br />
        <input
          className="school"
          onChange={handleChange}
          placeholder="School"
        />
        <br />
        <input
          className="idNumber"
          onChange={handleChange}
          placeholder="I.D Number"
        />
        <br />
        <input
          className="username"
          onChange={handleChange}
          placeholder="username"
        />
        <br />
        <input
          className="password"
          value={password}
          onChange={handleChange}
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
  )
}

export default SignUp
