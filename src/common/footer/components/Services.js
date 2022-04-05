import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Price from "../../../assets/images/icons/icon-1.svg";
import Delivery from "../../../assets/images/icons/icon-2.svg";
import Deal from "../../../assets/images/icons/icon-3.svg";
import Discount from "../../../assets/images/icons/icon-4.svg";
import Return from "../../../assets/images/icons/icon-5.svg";

const Services = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="services-row-content-wrapper">
        <Col lg={2} sm={12} className="services-column-content-wrapper">
          <Row>
            <Col lg={12} className="services-column-content-elements">
              <img src={Price} alt="price" />
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <h5>Best prices & offers</h5>
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <p>Orders $50 or more</p>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12} className="services-column-content-wrapper">
          <Row>
            <Col lg={12} className="services-column-content-elements">
              <img src={Delivery} alt="delivery" />
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <h5>Free delivery</h5>
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <p>24/7 amazing services</p>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12} className="services-column-content-wrapper">
          <Row>
            <Col lg={12} className="services-column-content-elements">
              <img src={Deal} alt="deal" />
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <h5>Great daily deal</h5>
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <p>When you signup</p>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12} className="services-column-content-wrapper">
          <Row>
            <Col lg={12} className="services-column-content-elements">
              <img src={Discount} alt="discount" />
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <h5>Wide assortment</h5>
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <p>Mega discount</p>
            </Col>
          </Row>
        </Col>
        <Col lg={2} sm={12} className="services-column-content-wrapper">
          <Row>
            <Col lg={12} className="services-column-content-elements">
              <img src={Return} alt="return" />
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <h5>Easy returns</h5>
            </Col>
            <Col lg={12} className="services-column-content-elements">
              <p>Within 30 days</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Services;
