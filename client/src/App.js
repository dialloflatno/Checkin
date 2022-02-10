import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp.js'
import NavBar from './NavBar'
import Errorpage from './ErrorPage'
import Home from './Home'
import Emergency from './Emergency'
import Schedule from './Schedule'
import Profile from './Profile'
import Grades from './Grades'
import Events from './Events'

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  function handleLogin(user) {
    setUser(user)
  }

  return (
    <>
      <main>
        {user ? (
          <Switch>
            <Route exact path="/">
              <NavBar user={user} setUser={setUser} />
              <Home user={user} />
            </Route>
            <Route path="/emergency">
              <NavBar user={user} setUser={setUser} />
              <Emergency />
            </Route>
            <Route path="/schedule">
              <NavBar user={user} setUser={setUser} />
              <Schedule />
            </Route>
            <Route path="/profile">
              <NavBar user={user} setUser={setUser} />
              <Profile />
            </Route>
            <Route path="/grades">
              <NavBar user={user} setUser={setUser} />
              <Grades />
            </Route>
            <Route exact path="/events">
              <NavBar user={user} setUser={setUser} />
              <Events />
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
  )
}

export default App
