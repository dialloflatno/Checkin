import React from "react";
import Header from "./Header.js";
// import Emergency from './Emergency.js'
// import Schedule from './Schedule.js'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
