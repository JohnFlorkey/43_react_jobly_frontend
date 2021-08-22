import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function CompanyDetail() {
  const [companyDetail, setCompanyDetail] = useState({
    name: "",
    description: "",
    jobs: [],
  });
  const { handle } = useParams();

  useEffect(() => {
    async function getCompanyDetailAPI(handle) {
      const response = await JoblyApi.getCompany(handle);
      setCompanyDetail(response);
    }
    getCompanyDetailAPI(handle);
  }, [handle]);

  return (
    <div className="text-align-left">
      <h3>{companyDetail.name}</h3>
      <div>{companyDetail.description}</div>
      {companyDetail.jobs.map((j) => (
        <JobCard
          key={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
        />
      ))}
    </div>
  );
}

export default CompanyDetail;
