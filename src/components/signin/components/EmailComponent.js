import React from "react";

import { Collapse, Col, Container, Form, Row, Button } from "react-bootstrap";

import LoginIcon from "../../../assets/images/login.png";
import LoginImage from "../../../assets/images/dummy.png";

import { OTP } from "../constants";

const EmailComponent = ({ data, setData, valid, setComponent }) => {
  return (
    <Container className="contents-wrapper" fluid>
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center column-content-wrapper">
          <Form>
            <img className="icon-image" src={LoginIcon} alt="Icon" />
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={data.email}
                onChange={(e) => setData({ email: e.target.value })}
              />
              <Collapse in={data.email !== "" && !valid.email}>
                <p className="text-danger collapse-wrapper">Invalid email</p>
              </Collapse>
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              disabled={!(data.email !== "" && valid.email)}
              onClick={() => setComponent(OTP)}
            >
              Send OTP
            </Button>
          </Form>
        </Col>
        <Col lg={8} md={6} sm={12}>
          <img className="w-100 image" src={LoginImage} alt="dummy" />
        </Col>
      </Row>
    </Container>
  );
};
export default EmailComponent;
