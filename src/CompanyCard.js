import { Link } from "react-router-dom";
import React from "react";

function CompanyCard({ company }) {
  return (
    <div>
      <Link to={`/company/${company.handle}`}>
        <h1>{company.handle}</h1>
        <p>{company.description}</p>
        <img src={company.logoUrl} alt="Company Logo goes Here" />
      </Link>
    </div>
  );
}

export default CompanyCard;
