import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routelist from "./Routelist";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routelist />
        </div>
      </BrowserRouter>
      {/* <div className="hero-image">
        <div className="hero-text"></div>
      </div> */}
    </div>
  );
}

export default App;
