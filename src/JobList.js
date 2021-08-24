import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchFrom";
import UserContext from "./UserContext";

function JobList() {
  const user = useContext(UserContext);
  const [jobList, setJobList] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    async function getJobsAPI(searchTerm) {
      const response = await JoblyApi.getJobs(searchTerm);
      setJobList(response);
    }
    getJobsAPI(searchTerm);
  }, [searchTerm]);

  const updateSearchTerm = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return user.username ? (
    <div>
      <SearchForm updateSearchTerm={updateSearchTerm} />
      {jobList.map((j) => (
        <JobCard
          key={j.id}
          title={j.title}
          companyName={j.companyName}
          salary={j.salary}
          equity={j.equity}
        />
      ))}
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
}

export default JobList;
