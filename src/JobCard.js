import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./JobCard.css";
import UserContext from "./UserContext";
import FunctionContext from "./FunctionContext";

function JobCard({ title, jobID, companyName, salary, equity }) {
  const user = useContext(UserContext);
  const { handleJobApplication } = useContext(FunctionContext);

  return (
    <Card className="JobCard my-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {companyName ? <Card.Subtitle>{companyName}</Card.Subtitle> : null}
        <Card.Text as="small">
          <p>Salary: {salary}</p>
          <p>Equity: {equity}</p>
        </Card.Text>
        {user.applications.find((j) => j === jobID) ? (
          <Button className="btn-danger">Applied</Button>
        ) : (
          <Button
            type="button"
            onClick={() =>
              handleJobApplication({ jobID, username: user.username })
            }
          >
            Apply
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default JobCard;
