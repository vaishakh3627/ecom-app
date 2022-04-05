import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const FooterBanner = () => {
  return (
    <Container fluid className="footer-banner-container-wrapper">
      <Row className="footer-banner-row-elements">
        <Col className="footer-banner-column-elements">
          <Row>
            <Col lg={8} sm={12}>
              <h1>Stay home & get your daily needs from our shop</h1>
              <h5>Start You'r Daily Shopping with Nest Mart</h5>
              <InputGroup>
                <FormControl
                  size="lg"
                  placeholder="Your email address"
                  className="subscribe-formcontrol-content-wrapper"
                />
                <Button className="subscribe-button-content-wrapper">
                  Subscribe
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterBanner;
