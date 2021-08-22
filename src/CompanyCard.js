import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ handle, name, description }) {
  return (
    <Link to={`/companies/${handle}`}>
      <Card className="CompanyCard my-3">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CompanyCard;
