import { React, useEffect, useState } from "react";

import { Col, Container, Form, Row, Button, Collapse } from "react-bootstrap";

import {
  _validateEmail,
  _validatePassword,
} from "../../../common/validators/inputValidators";

import { EMAIL } from "../constants";

import LoginIcon from "../../../assets/images/login.png";
import LoginImage from "../../../assets/images/dummy.png";

const SignInForm = ({ setComponent }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState({
    email: true,
    password: true,
  });
  const updateSignInData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };
  const updateValid = (data) =>
    setValid((previousState) => ({
      ...previousState,
      ...data,
    }));
  useEffect(() => {
    updateValid({
      email: _validateEmail(data.email),
    });
  }, [data.email]);
  useEffect(() => {
    updateValid({
      password: _validatePassword(data.password),
    });
  }, [data.password]);
  const handleSubmit = (e) => {
    console.log(data.email);
    setData({ email: "", password: "" });
  };
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
                onChange={(e) => updateSignInData({ email: e.target.value })}
              />
              <Collapse in={data.email !== "" && !valid.email}>
                <p className="text-danger collapse-wrapper">Invalid email</p>
              </Collapse>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => updateSignInData({ password: e.target.value })}
              />
              <Collapse in={data.password !== "" && !valid.password}>
                <p className="text-danger collapse-wrapper">
                  Type strong password
                </p>
              </Collapse>
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              disabled={
                !(
                  data.email !== "" &&
                  data.password !== "" &&
                  valid.email &&
                  valid.password
                )
              }
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <div className="text-field mt-3">
              <a onClick={() => setComponent(EMAIL)}>
                <small className="reset me-2">Password Reset</small>
              </a>
            </div>
          </Form>
        </Col>
        <Col lg={8} md={6} sm={12}>
          <img className="w-100 image" src={LoginImage} alt="dummy"/>
        </Col>
      </Row>
    </Container>
  );
};
export default SignInForm;
