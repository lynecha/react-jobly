import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const resp = await JoblyApi.getCompanies();
      console.log(resp);
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
        return <CompanyCard company={company} />;
      })}
    </div>
  );
}

export default Companies;
