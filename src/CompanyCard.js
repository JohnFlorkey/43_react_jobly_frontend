import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({ handle, name, description }) {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <div>{name}</div>
        <div>{description}</div>
      </div>
    </Link>
  );
}

export default CompanyCard;
