import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "./UserContext";

function NavBar() {
  const user = useContext(UserContext);
  return (
    <Navbar>
      <Navbar.Brand href="/">React Jobly</Navbar.Brand>
      {user && user.username ? (
        <Nav className="justify-content-center">
          <LinkContainer to="/companies">
            <Nav.Link eventKey="companies">Companies</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/jobs">
            <Nav.Link eventKey="jobs">Jobs</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link eventKey="/profile">Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Nav.Link eventKey="/logout">Log out {user.username}</Nav.Link>
          </LinkContainer>
        </Nav>
      ) : (
        <Nav>
          <LinkContainer to="/login">
            <Nav.Link eventKey="/login">Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link eventKey="/signup">Signup</Nav.Link>
          </LinkContainer>
        </Nav>
      )}
    </Navbar>
  );
}

export default NavBar;
