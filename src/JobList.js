import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchFrom";

function JobList() {
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

  return (
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
  );
}

export default JobList;
