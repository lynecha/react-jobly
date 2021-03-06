import { Navigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import { v4 as uuid } from "uuid";
import UserContext from "./userContext";

/** state: a company object with description and jobs for that company
 * displays the name,description along with the jobs for that company
 */
function CompanyDetails() {
  const { currUser } = useContext(UserContext);

  const [companyDetail, setCompanyDetail] = useState({});
  const params = useParams();
  useEffect(() => {
    async function getCompanyDetails() {
      const resp = await JoblyApi.getCompany(params.handle);
      setCompanyDetail(resp);
    }
    getCompanyDetails();
  }, []);

  if (!currUser) {
    return <Navigate to="/" />;
  }
  if (Object.keys(companyDetail).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>{companyDetail.name}</h2>
      <p>{companyDetail.description}</p>
      <div>
        {companyDetail.jobs.map((job) => {
          return <JobCard key={uuid()} job={job} />;
        })}
      </div>
    </div>
  );
}

export default CompanyDetails;
