import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import { v4 as uuid } from "uuid";
import Form from "./Form";

/** state: an array of job objects
 *  fetches jobs from the api upon render
 */
function Jobs() {
  const [jobs, setJobs] = useState({
    jobData: null,
    isLoading: true,
  });
  const [searchQuery, setSearchQuery] = useState(undefined);

  useEffect(() => {
    async function getJobs() {
      console.log("searchQuery =", searchQuery);
      const resp = await JoblyApi.getJobs(searchQuery);
      setJobs({
        jobData: resp,
        isLoading: false,
      });
    }
    getJobs();
  }, [searchQuery]);

  if (jobs.isLoading) {
    return <h1>Loading...</h1>;
  }

  function search(searchJobs) {
    setSearchQuery(searchJobs);
  }
  return (
    <div>
      <Form search={search} />
      {jobs.jobData.length === 0 ? (
        <h4>No Jobs Found</h4>
      ) : (
        jobs.jobData.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })
      )}
    </div>
  );
}

export default Jobs;
