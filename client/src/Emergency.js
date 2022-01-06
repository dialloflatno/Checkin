// Emergency Request Page
import React from "react";

function Emergency() {
    return (
        <div>
            <h1>Emergency Response Request Form</h1>
            <form>
            <textarea

                type='text'
                placeholder="Whats Your Emergency "
                onChange={(e) => console.log(e.target.value)}
                className="newTitle"

            />
            <br />
            <input

                type='text'
                placeholder="Whats YOur Location "
                onChange={(e) => console.log(e.target.value)}
                className="newTitle"

            />
            <br/>
            <button type='submit' >HELP</button>
            </form>
        </div>
    );
}

export default Emergency;