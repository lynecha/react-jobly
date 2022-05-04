import { Link } from "react-router-dom";
import React from "react";

/** prop: one single job object
 * presentational component that displays a single job card
 */
function JobCard({ job }) {
    return (
        <div>
            <h3>{job.title}</h3>
            <h3>{job.companyName || ""}</h3>
            <p>salary: {job.salary || ""}</p>
            <p>equity: {job.equity || ""}</p>
        </div >
    );
}

export default JobCard;
