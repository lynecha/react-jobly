import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar"
import Routelist from "./Routelist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Routelist/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
