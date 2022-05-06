import { Link } from "react-router-dom";
import React from "react";

/** props: a single company obj
 * presentational component that displays a company card
 */
function CompanyCard({ company }) {
  return (
    <div className="card" style={{width: "80em", height: "10em"}}>
      <Link to={`/companies/${company.handle}`}>
        <h1>{company.handle}</h1>
        <div className="card-body">
          <p>{company.description}</p>
          <img src={company.logoUrl} alt="Company Logo goes Here" />
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;
