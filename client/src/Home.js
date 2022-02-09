import React from "react";

function Home({ user }) {
  return (
    <div id="welcome">
      <h1>Welcome, {user.full_name}!</h1>
      <image
        // src="GettyImages_152496126.0.jpg"
        src="client/public/nigelthorn.jpeg"
        alt="school-image"
        height="100px"
        width="250px"
      />
    </div>
  );
}

export default Home;
