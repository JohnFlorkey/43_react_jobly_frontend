import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Nav className="justify-content-center">
      <Nav.Link href="/">React Jobly</Nav.Link>
      <LinkContainer to="/companies">
        <Nav.Link eventKey="companies">Companies</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/jobs">
        <Nav.Link eventKey="jobs">Jobs</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/profile">
        <Nav.Link eventKey="/profile">Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/login">
        <Nav.Link eventKey="/login">Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/signup">
        <Nav.Link eventKey="/signup">Signup</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}

export default NavBar;
