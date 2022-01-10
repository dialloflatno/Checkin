import React from "react";

function Home({ user }) {
  return (
    <div id="welcome">
      Welcome, {user.full_name}!
      <image src="GettyImages_152496126.0.jpg" alt="school-image" />
    </div>
  );
}

export default Home;
