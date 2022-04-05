import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import PhoneCall from "../../../assets/images/icons/phone-call.svg";
import Facebook from "../../../assets/images/icons/icon-facebook-white.svg";
import Twitter from "../../../assets/images/icons/icon-twitter-white.svg";
import Instagram from "../../../assets/images/icons/icon-instagram-white.svg";
import Pinterest from "../../../assets/images/icons/icon-pinterest-white.svg";
import Youtube from "../../../assets/images/icons/icon-youtube-white.svg";

const BaseFooter = () => {
  return (
    <Container fluid className="mt-4 mb-2">
      <Row className="base-footer-main-row-content-wrapper">
        <Col lg={3} sm={12}>
          <p>© 2021, Nest - HTML Ecommerce Template All rights reserved</p>
        </Col>
        <Col lg={3} sm={12}>
          <Row>
            <Col
              lg={3}
              sm={12}
              className="base-footer-phone-call-content-wrapper"
            >
              <img src={PhoneCall} className="base-footer-phone-call" />
            </Col>
            <Col lg={9} sm={12}>
              <h3 className="base-footer-number">1900 - 6666</h3> Working 8:00 -
              22:00
            </Col>
          </Row>
          <Row>
            <Col
              lg={3}
              sm={12}
              className="base-footer-phone-call-content-wrapper"
            >
              <img src={PhoneCall} className="base-footer-phone-call" />
            </Col>
            <Col lg={9} sm={12}>
              <h3 className="base-footer-number">1900 - 6666</h3> Working 8:00 -
              22:00
            </Col>
          </Row>
        </Col>
        <Col lg={3} sm={12}>
          <Row>
            <Col className="base-footer-social-elemets">
              <h4>Follow Us</h4>
              <img
                src={Facebook}
                alt="facebook"
                className="base-footer-follow-icon"
              />
              <img
                src={Twitter}
                alt="twitter"
                className="base-footer-follow-icon"
              />
              <img
                src={Instagram}
                alt="instagram"
                className="base-footer-follow-icon"
              />
              <img
                src={Pinterest}
                alt="pinterest"
                className="base-footer-follow-icon"
              />
              <img
                src={Youtube}
                alt="youtube"
                className="base-footer-follow-icon"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h6>Up to 15% discount on your first subscribe</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default BaseFooter;
