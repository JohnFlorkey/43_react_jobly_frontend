import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import JoblyApi from "./api";
import JobCard from "./JobCard";

function JobList() {
  const INITIAL_FORM_STATE = { searchTerm: "" };
  const [jobList, setJobList] = useState([]);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    async function getJobsAPI(searchTerm) {
      const response = await JoblyApi.getJobs(searchTerm);
      setJobList(response);
    }
    getJobsAPI(searchTerm);
  }, [searchTerm]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // if formData.searchTerm has a value use it, otherwise use undefined
    const searchValue = formData.searchTerm ? formData.searchTerm : undefined;
    setSearchTerm(searchValue);
    //clear the form input
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="text"
            name="searchTerm"
            placeholder="enter search term"
            value={formData.searchTerm}
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </InputGroup>
      </Form>
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
