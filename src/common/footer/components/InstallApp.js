import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import AppStore from "../../../assets/images/app-store.jpg";
import GoogleStore from "../../../assets/images/google-play.jpg";
import Payment from "../../../assets/images/payment-method.png";

const InstallApp = () => {
  return (
    <Container fluid className="mt-4">
      <Row className="footer-install-row-elements">
        <Col lg={12} sm={12}>
          <h2>Insatll App</h2>
        </Col>
        <Col lg={12} sm={12} className="mt-3">
          <h5 className="footer-install-text-content">
            From App Store or Google
          </h5>
        </Col>
        <Col lg={12} sm={12} className="mt-3">
          <img src={AppStore} alt="appstore" />
          <img src={GoogleStore} alt="googlestore" />
        </Col>
        <Col lg={12} sm={12} className="mt-5">
          <h5 className="footer-install-text-content">
            Secured Paymnet Gateways
          </h5>
        </Col>
        <Col lg={12} sm={12} className="mt-3 mb-5">
          <img
            src={Payment}
            alt="payment"
            className="footer-install-image-content"
          />
        </Col>
        <hr className="footer-line"></hr>
      </Row>
    </Container>
  );
};
export default InstallApp;
