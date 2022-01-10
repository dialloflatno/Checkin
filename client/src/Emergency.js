// Emergency Request Page
import React from "react";

function Emergency() {
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
          <form>
            <textarea
              type="text"
              placeholder="WHAT'S YOUR EMERGENCY?"
              onChange={(e) => console.log(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="WHAT'S YOUR LOCATION?"
              onChange={(e) => console.log(e.target.value)}
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
    </div>
  );
}

export default Emergency;
