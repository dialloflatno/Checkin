import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp.js'
import NavBar from './NavBar'
import Home from './Home'
import Emergency from './Emergency'
import Schedule from './Schedule'
import Profile from './Profile'
import Grades from './Grades'
import Events from './Events'
import Teacher from './Teacher'
import Admin from './Admin'

function App() {
  const [user, setUser] = useState([])

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


  if (user.student) {
    return (
      <main>

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
      </main>

    )
  } else if ( user.teacher === true ) {
    return (
      <>
        <Switch>
          <Route path='/'>
            <Teacher />
          </Route>
        </Switch>
      </>
    )
  }
  else if ( user.admin === true ) {

    return (
      <>
        <Switch>
          <Route path='/'>
            <Admin />
          </Route>
        </Switch>
      </>
    )
  }
  else {
    return (
      <>
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
      </>
    )
  }
}


export default App
