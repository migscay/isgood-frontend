import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/isgoodai-logo.png";

function HomePageNavbar() {
  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
      <Navbar.Brand className="font-weight-bold text-muted">
        <LinkContainer to="/">
          <Nav.Link>
            <img src={logo} alt="Logo" />
          </Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/signup">
            <Nav.Link className="font-weight-bold">Signup</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link className="font-weight-bold">Login</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HomePageNavbar;
