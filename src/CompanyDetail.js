import React, { useState, useEffect, useContext } from "react";
import { useParams, Redirect } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import UserContext from "./UserContext";

function CompanyDetail() {
  const user = useContext(UserContext);
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

  return user.username ? (
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
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export default CompanyDetail;
