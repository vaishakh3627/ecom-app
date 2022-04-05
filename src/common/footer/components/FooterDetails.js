import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Logo from "../../../assets/images/logo.svg";
import {
  FaMapMarkerAlt,
  FaHeadphonesAlt,
  FaBusinessTime,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const FooterDetails = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="foooter-details-content-wrapper">
        <Col lg={3} sm={12}>
          <Row>
            <Col
              lg={12}
              sm={12}
              className="footer-details-column-elements mt-2"
            >
              <img src={Logo} alt="logo" />
            </Col>
            <Col
              lg={12}
              sm={12}
              className="footer-details-column-elements mt-2"
            >
              <h5>Awesome grocery store website template</h5>
            </Col>
            <Col lg={12} sm={12} className="mt-4">
              <Row>
                <Col lg={1}>
                  <FaMapMarkerAlt />
                </Col>
                <Col lg={3}>
                  <h5>Address :</h5>
                </Col>
                <Col lg={8}>
                  <p>
                    5171 W Campbell Ave undefined Kent, Utah 53127 United States
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={12}>
              <Row>
                <Col lg={1}>
                  <FaHeadphonesAlt />
                </Col>
                <Col lg={3}>
                  <h5>Call Us :</h5>
                </Col>
                <Col lg={8}>
                  <p>(+91) - 540-025-124553</p>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={12}>
              <Row>
                <Col lg={1}>
                  <FiSend />
                </Col>
                <Col lg={3}>
                  <h5>Email :</h5>
                </Col>
                <Col lg={8}>
                  <p>sale@Nest.com</p>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={12}>
              <Row>
                <Col lg={1} sm={1}>
                  <FaBusinessTime />
                </Col>
                <Col lg={3} sm={3}>
                  <h5>Hours :</h5>
                </Col>
                <Col lg={8} sm={8}>
                  <p>10:00 - 18:00, Mon - Sat</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12}>
          <Row>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h2>Company</h2>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-3 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">About Us</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">
                Delivery Information
              </h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Privacy Policy</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Terms & Condition</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Contact Us</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Support Center</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Careers</h5>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12}>
          <Row>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h2>Account</h2>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-3 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Sign In</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">View Cart</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">My Wishlist</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Track My Order</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Help Ticket</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Shipping Details</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Compare Products</h5>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12}>
          <Row>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h2>Corporate</h2>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-3 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Become a Vendor</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Affiliate Program</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Farm Business</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Farm Careers</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Our Suppliers</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Accessibility</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Promotions</h5>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12}>
          <Row>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h2>Popular</h2>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-3 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">
                Milk & Flavoured Milk
              </h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">
                Butter and Margarine
              </h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Eggs Substitutes</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Marmaladas</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">
                Sour Cream and Dips
              </h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Tea & Kombucha</h5>
            </Col>
            <Col
              lg={12}
              sm={12}
              className="mt-2 footer-details-company-column-elements"
            >
              <h5 className="footer-details-text-element">Cheese</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterDetails;
