import React, { useState } from "react";
import "./Banner.css";

/** presentational component to show the Hero banner */
function Banner() {
  return (

    <section className="bgimage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5>Jobly</h5>
            <p>All the jobs in one, convenient place.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
