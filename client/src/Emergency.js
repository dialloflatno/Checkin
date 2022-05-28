// Emergency Request Page
import React, { useState, useEffect } from "react";

function Emergency({ user, handleNewEmergency }) {
  const [emergency, setEmergency] = useState("");
  const [location, setLocation] = useState("");
  const [displaylocation, setDisplaylocation] = useState("");

  const sUid = user?.map((their) => their.id);

  useEffect(() => {
    fetch("/locations").then((r) => {
      if (r.ok) {
        r.json().then((schoollocations) => {
          console.log(schoollocations);
          setDisplaylocation(schoollocations);
        });
      }
    });
  }, []);

  console.log(displaylocation);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/errs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emergency: emergency,
        student_id: parseFloat(sUid),
        location_id: location,
      }),
    })
      .then((r) => r.json())
      .then((eRequest) => {
        handleNewEmergency(eRequest);
        setEmergency("");
        setLocation("");
      });
  };

  let location_name = "no location";

  if (displaylocation.length)
    location_name = displaylocation?.map((place) => (
      // <div className="location-info">
      <option className="location-info">
        {place.name}
        {/* {place.id} */}
      </option>
      // </div>
    ));

  function handleChange(e) {
    // Finding ID of locations for submission from
    const room = e.target.value;
    console.log("Checking Location");
    console.log(room);
    const getRoom = displaylocation.find((zone) => zone.name === room);
    console.log(getRoom);
    const roomId = getRoom?.id;
    console.log(roomId);
    // Setter function for ID of location for submission form to work
    setLocation(roomId);
  }

  return (
    <div className="errfullpage">
      <div className="err">
        <img src="mascot.png" alt="checkedin mascot" className="mascot" />

        <div className="err-content">
          {/* <h1>Emergency Response Request</h1> */}
          <div id="title-div">
            <h2>
              Submit your emergency with Checkedin to your teachers and admins.
            </h2>
          </div>
          <span id="errinfo">
            IMPORTANT! Emergency response request forms are solely for dangerous
            situations. Submitting non-emergency related information will result
            in severe diciplinary action.
          </span>
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="What's your emergency?"
              onChange={(e) => setEmergency(e.target.value)}
            />
            <br />

            {/* New selector for locations */}
            <div id="location-name">
              <select id="location-dropdown" onChange={handleChange}>
                <option>Where are you?</option>
                {location_name}
              </select>
            </div>
            {/* Previous submission for locations  */}

            {/* <input
              type="text"
              placeholder="WHAT'S YOUR LOCATION?"
              onChange={(e) => setLocation(e.target.value)}
              className="newTitle"
            /> */}
            <br />
            <button type="submit" className="helpbutton">
              SUBMIT
            </button>
          </form>
        </div>
        <img src="mascot.png" alt="checkedin mascot" className="mascot" />
        <h1>Feeling Nervous or Worried?</h1>
        <ul>
          <ul>1) Breath in hold for 10 second</ul> 
          <br/>
          <ul>2) Breath out slowly </ul>
          <br/>
          <ul>3)Breath in hold for 10 seconds</ul>
          <br/>
          <ul>4)Breath out slowly</ul>
        </ul>

      </div>
    </div>
  );
}

export default Emergency;
