import React, { useState, useLocalStorage, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Routelist from "./Routelist";
import "./App.css";
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";
import UserContext from "./userContext";


function App() {



  const [currUser, setcurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(function fetchUserWhenMounted() {
    async function addToLocal() {
      if (token) {
        localStorage.setItem("token", token);
        let user = await getCurrUserFromToken(token);
        setcurrUser(user);
      }
      else {
        localStorage.removeItem("token")
      }
    }
    addToLocal();
  },[token])

  async function register(formData) {
    const resp = await JoblyApi.register(formData);
    setToken(resp);
    let user = await getCurrUserFromToken(resp);
    console.log("user", user);
    setcurrUser(user);
  }

  async function login(formData) {
    const resp = await JoblyApi.login(formData);
    setToken(resp);
    setcurrUser(() => getCurrUserFromToken(resp));
  }

  async function getCurrUserFromToken(token) {
    let user = jwt_decode(token);
    JoblyApi.token = token;
    console.log(user);
    const currUser = await JoblyApi.getCurrUser(user.username);
    return currUser;
  }



  return (
    <div>
      <UserContext.Provider value={{ currUser }}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routelist login={login} register={register} />
          </div>

          <div>
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
