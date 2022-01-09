import React from "react";
import { useState, useEffect } from "react";
// import User from "./User";

function Profile() {
  const [profile, setProfile] = useState([]);
  const profile_url = "/me";

  useEffect(() => {
    fetch(profile_url)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  const values = Object.values(profile);

  return (
    <div className="App">
      <div className="profilebox">
        <div className="profile-content">

          <img src="profileicon.png" alt="profile icon" className="profileicon" />
          <br></br>
          Name:{values[1]}
          <br />
          Email: {values[2]}
          <br />
          Phone Number:{values[3]}
          <br></br>
          <img src="mascot.png" alt="checkedin mascot" className="mascot" />
        </div>
      </div>
      <footer/>

    </div>
  );
}

export default Profile;
