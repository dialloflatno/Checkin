// This is the Navigation Bar
import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

export default function TeacherNavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser("");
      }
    });
  }

  return (
    <>
      <div className="fixed-header">
        <div>
          <header className="navs">
            <div className="place-box"></div>
            <nav className="newnav">
              <Link to="/">
                <h1> Checkedin</h1>
                <br />
                <h5> Teacher</h5>
              </Link>
              <br />
              <ul>
                {/* HIDING THESE LIS UNTIL WE FINISH FUNCTIONALITY AND DESIGN */}

                <li id="teacher-er" className="teacher-nav-li">
                  <Link to="/errs">Emergency Requests</Link>
                </li>
                {/* <li> 
                  <Link to="/grades">Grades</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li> */}
                <li id="user_name">Hello,{user.full_name}</li>
                <li className="teacher-nav-li">
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
  );
}
