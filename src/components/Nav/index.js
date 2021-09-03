import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(props) {
  return (

  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
    <Nav.Link class="nav-link" href="#About" onClick={() => {props.setCurrentPage("About")}}>About <span className="sr-only"></span></Nav.Link>
    <Nav.Link class="nav-link" href="#Project" onClick={() => {props.setCurrentPage("Project")}}>Portfolio <span className="sr-only"> </span></Nav.Link>
    <Nav.Link class="nav-link" href="#Contact"  onClick={() => {props.setCurrentPage("Contact")}}>Contact</Nav.Link>
    <Nav.Link class="nav-link" href="#Resume"  onClick={() => {props.setCurrentPage("Resume")}}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  );
}

export default Navigation;
