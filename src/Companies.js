import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import { v4 as uuid } from "uuid";

/** state: an array of companies
 * calls use effect to fetch array of companies upon render
 */
function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const resp = await JoblyApi.getCompanies();
      setCompanies(resp);
    }
    getCompanies();
  }, []);

  if (companies.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {companies.map((company) => {
        return <CompanyCard key={uuid()}company={company} />;
      })}
    </div>
  );
}

export default Companies;
