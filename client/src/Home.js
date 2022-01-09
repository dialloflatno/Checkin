import React from "react";

function Home({ user }) {
  if (user) {
    return <div id="welcome">Welcome, {user.full_name}!</div>;
  } else {
    return <h1>Please Login or Sign Up</h1>;
  }
}

export default Home;
