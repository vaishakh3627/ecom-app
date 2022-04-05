import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

const DealHeader = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" className="mt-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <h1>Daily Best Sells</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#featured">
            <h5>Featured</h5>
          </Nav.Link>
          <Nav.Link href="#popular">
            <h5>Popular</h5>
          </Nav.Link>
          <Nav.Link href="#newadded">
            <h5>New added</h5>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default DealHeader;
