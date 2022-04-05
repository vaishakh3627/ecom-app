import { React, useState } from "react";

import {
  Container,
  Dropdown,
  FormControl,
  Button,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

import "./header.scss";

import Logo from "../../assets/images/logo.svg";
import Compare from "../../assets/images/icons/icon-compare.svg";
import Wishlist from "../../assets/images/icons/icon-heart.svg";
import Cart from "../../assets/images/icons/icon-cart.svg";
import User from "../../assets/images/icons/icon-user.svg";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [show, setShow] = useState("All Categoires");
  const handleSelect = (e) => {
    setShow(e);
  };
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <InputGroup size="lg" className=" search-bar-content-wrapper">
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle variant="none">{show}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey="All Categoires"
                  className="dropdown-button-content"
                >
                  All Categoires
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Milks and Dairies"
                  className="dropdown-button-content"
                >
                  Milks and Dairies
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Wines & Alcohol"
                  className="dropdown-button-content"
                >
                  Wines & Alcohol
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Clothing & Beauty"
                  className="dropdown-button-content"
                >
                  Clothing & Beauty
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Pet Foods & Toy"
                  className="dropdown-button-content"
                >
                  Pet Foods & Toy
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Fast food"
                  className="dropdown-button-content"
                >
                  Fast food
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Baking material"
                  className="dropdown-button-content"
                >
                  Baking material
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Vegetables"
                  className="dropdown-button-content"
                >
                  Vegetables
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FormControl
              aria-label="Text input with dropdown button"
              className="search-bar"
              placeholder="Search for items..."
            />
            <Button variant="none" id="button-addon2">
              <FiSearch />
            </Button>
          </InputGroup>
          <Nav>
            <Nav.Link href="#compare" className="me-3 text-content-wrapper">
              <img src={Compare} alt="compare" className="image-link" />
              Compare
            </Nav.Link>
            <Nav.Link href="#wishlist" className="me-3 text-content-wrapper">
              <img src={Wishlist} alt="wishlist" className="image-link" />
              Wishlist
            </Nav.Link>
            <Nav.Link href="#cart" className="me-3 text-content-wrapper">
              <img src={Cart} alt="cart" className="image-link" />
              Cart
            </Nav.Link>
            <Nav.Link href="#user" className="me-3 text-content-wrapper">
              <img src={User} alt="user" className="image-link" />
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
