import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

const DealOfTheDayHeader = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" className="mt-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <h1>Deals Of The Day</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#featured">
            <h5>All Deals</h5>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default DealOfTheDayHeader;