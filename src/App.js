import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    function fetchUserWhenMounted() {
      async function addToLocal() {
        if (token) {
          localStorage.setItem("token", token);
          let user = await getCurrUserFromToken(token);
          setcurrUser(user);
        } else {
          localStorage.removeItem("token");
        }
      }
      addToLocal();
      setIsLoading(false);
    },
    [token]
  );
  //handle the loading logic

  async function register(formData) {
    const resp = await JoblyApi.register(formData);
    setToken(resp);
  }

  async function login(formData) {
    const resp = await JoblyApi.login(formData);
    setToken(resp);
  }

  async function updateUser(formData, username) {
    const resp = await JoblyApi.updateUser(formData, username);
    setcurrUser(resp);
  }

  async function getCurrUserFromToken(token) {
    //do it in effect
    let user = jwt_decode(token);
    JoblyApi.token = token;
    console.log(user);
    const currUser = await JoblyApi.getCurrUser(user.username);
    return currUser;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function logOutUser() {
    setToken(null);
    setcurrUser(null);
  }

  return (
    <div>
      <UserContext.Provider value={{ currUser }}>
        <BrowserRouter>
          <NavBar logOutUser={logOutUser} />
          <div className="container">
            <Routelist
              login={login}
              register={register}
              updateUser={updateUser}
            />
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
