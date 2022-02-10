// This is the Navigation Bar
import './App.css'
import { Link } from 'react-router-dom'
import React from 'react'


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser('')
      }
    })
  }

  return (
    <>
      <div className="fixed-header">
        <div>
          <header className="navs">
            <div className="place-box"></div>
            <nav>
              <Link to="/">
              <Link to="/emergency">
                <img src="siren.png" alt="siren" className="siren" />
              </Link>
                <h1>Checkedin</h1>
              </Link>
              <br />
              <ul>
                <li>
                  <Link to="/schedule">Schedule</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/grades">Grades</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li id="user_name">Hello,{user.full_name}</li>
                <li>
                  {user ? (
                    <button onClick={handleLogoutClick} className="logout">
                      Logout
                    </button>
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  )
}

export default NavBar
