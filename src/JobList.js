import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./api";
import JobCard from "./JobCard";
import SearchForm from "./SearchFrom";
import UserContext from "./UserContext";
import useSearchTerm from "./useSearchTerm";

function JobList({ props }) {
  const user = useContext(UserContext);
  const [jobList, setJobList] = useState([]);
  const [searchTerm, updateSearchTerm] = useSearchTerm();

  useEffect(() => {
    async function getJobsAPI(searchTerm) {
      const response = await JoblyApi.getJobs(searchTerm);
      setJobList(response);
    }
    getJobsAPI(searchTerm);
    return function cleanup() {
      setJobList([]);
    };
  }, [searchTerm]);

  return user.username ? (
    <div>
      <SearchForm updateSearchTerm={updateSearchTerm} />
      {jobList.map((j) => (
        <JobCard
          key={j.id}
          jobID={j.id}
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
