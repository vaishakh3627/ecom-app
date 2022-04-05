import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

const ProductHeader = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" className="mt-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <h1>Popular Products</h1>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#all">
            <h5>All</h5>
          </Nav.Link>
          <Nav.Link href="#milk & dairies">
            <h5>Milk & Dairies</h5>
          </Nav.Link>
          <Nav.Link href="#cofees & teas">
            <h5>Coffes & Teas</h5>
          </Nav.Link>
          <Nav.Link href="#pet foods">
            <h5>Pet Foods</h5>
          </Nav.Link>
          <Nav.Link href="#meats">
            <h5>Meats</h5>
          </Nav.Link>
          <Nav.Link href="#vegetables">
            <h5>Vegetables</h5>
          </Nav.Link>
          <Nav.Link href="#fruits">
            <h5>Fruits</h5>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default ProductHeader;
