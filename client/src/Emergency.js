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
      <div className="location-info">
        <p>
          Location: {place.name}, ID#: {place.id}
        </p>
      </div>
    ));

  return (
    <div className="errfullpage">
      <div className="err">
        <div className="err-content">
          <h1>Emergency Response Request</h1>
          <span id="errinfo">
            IMPORTANT! Emergency response request forms are solely for very
            dangerous situations.
            <br></br>
            Submitting non-emergency related information will result in severe
            diciplinary action.
          </span>
          <form onSubmit={handleSubmit}>
            <textarea
              type="text"
              placeholder="WHAT'S YOUR EMERGENCY?"
              onChange={(e) => setEmergency(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="WHAT'S YOUR LOCATION?"
              onChange={(e) => setLocation(e.target.value)}
              className="newTitle"
            />
            <br />
            <button type="submit" className="helpbutton">
              HELP
            </button>
          </form>
          <img src="mascot.png" alt="checkedin mascot" className="mascot" />
        </div>
      </div>
      <div>{location_name}</div>
    </div>
  );
}

export default Emergency;
