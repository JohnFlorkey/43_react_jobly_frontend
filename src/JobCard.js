import React from "react";
import { Card } from "react-bootstrap";
import "./JobCard.css";

function JobCard({ title, salary, equity }) {
  return (
    <Card className="JobCard my-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text as="small">
          <p>Salary: {salary}</p>
          <p>Equity: {equity}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default JobCard;
