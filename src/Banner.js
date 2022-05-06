import React, { useState } from "react";
import "./Banner.css";
import { useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";

/** presentational component to show the Hero banner */
function Banner() {
  const { currUser } = useContext(UserContext);
  return (
    <section className="bgimage d-flex align-items-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2>Jobly</h2>
            {currUser ? (
              <p>Welcome Back {currUser.username} </p>
            ) : (
              <div>
                <h5>All the jobs in one, convenient place. </h5>
                <div>
                  <span>
                    <Link className="btn btn-primary" to="login">Log in</Link>{" "}
                    <Link className="btn btn-primary" to="signup">Signup</Link>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
