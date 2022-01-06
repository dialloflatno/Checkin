// Emergency Request Page
import React from "react";

function Emergency() {
  return (
    <div className="errfullpage">
      <div className="err">
        <h1>Emergency Response Request</h1>
        <form>
          <textarea
            type="text"
            placeholder="Whats Your Emergency "
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Whats Your Location "
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
  );
}

export default Emergency;
