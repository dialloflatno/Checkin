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
      Name:{values[1]}
      <br />
      Email: {values[2]}
      <br />
      Phone Number:{values[3]}
    </div>
  );
}

export default Profile;
