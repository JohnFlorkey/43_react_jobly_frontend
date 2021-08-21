import React from "react";

function JobCard({ title, salary, equity }) {
  return (
    <div>
      <div>{title}</div>
      <div>{salary}</div>
      <div>{equity}</div>
    </div>
  );
}
export default JobCard;
