import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import { v4 as uuid } from "uuid";

/** state: an array of job objects
 *  fetches jobs from the api upon render
 */
function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            const resp = await JoblyApi.getJobs();
            setJobs(resp);
        }
        getJobs();
    }, []);

    if (jobs.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            
            {jobs.map((job) => {
                return (<JobCard key={uuid()} job={job} />)
            })}
        </div>
    );
}

export default Jobs;
