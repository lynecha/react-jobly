import React, { useState } from "react";
import "./Banner.css";
import { useContext } from "react";
import UserContext from "./userContext";
import { Link } from "react-router-dom";

/** presentational component to show the Hero banner */
function Banner() {
  const { currUser } = useContext(UserContext);
  return (
    <section className="bgimage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5>Jobly</h5>
            {currUser ? (
              <p>Welcome Back {currUser.user.username} </p>
            ) : (
              <div>
                <p>All the jobs in one, convenient place. </p>
                <div>
                  <span>
                    <Link to="login">Login</Link>{" "}
                    <Link to="signup">Signup</Link>
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
