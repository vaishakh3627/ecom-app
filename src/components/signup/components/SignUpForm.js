import { React, useEffect, useState } from "react";

import { Button, Col, Collapse, Container, Form, Row } from "react-bootstrap";

import {
  _validateEmail,
  _validatePassword,
} from "../../../common/validators/inputValidators";

import LoginIcon from "../../../assets/images/login.png";
import LoginImage from "../../../assets/images/dummy.png";

const SignUpForm = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });
  const [valid, setValid] = useState({
    email: true,
    password: true,
    confirmpassword: true,
  });
  const updateSignUpData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };
  const updateValid = (data) => {
    setValid((previousState) => ({
      ...previousState,
      ...data,
    }));
  };
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
  useEffect(() => {
    updateValid({
      confirmpassword: data.password === data.confirmpassword,
    });
  }, [data.confirmpassword]);
  return (
    <Container className="contents-wrapper" fluid>
      <Row>
        <Col
          lg={4}
          md={6}
          sm={12}
          className="text-center content-column-wrapper"
        >
          <Form>
            <img className="icon-image" src={LoginIcon} alt="Icon" />
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter First name"
                value={data.firstname}
                onChange={(e) =>
                  updateSignUpData({ firstname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter Last name"
                value={data.lastname}
                onChange={(e) => updateSignUpData({ lastname: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => updateSignUpData({ email: e.target.value })}
              />
              <Collapse in={data.email !== "" && !valid.email}>
                <p className="text-danger collapse-wrapper">Invalid email</p>
              </Collapse>
            </Form.Group>
            <Form.Group>
              <Form.Check inline className="mb-3">
                <Form.Check.Input
                  type="radio"
                  value="Male"
                  checked={data.gender === "Male"}
                  onChange={(e) => updateSignUpData({ gender: e.target.value })}
                ></Form.Check.Input>
                <Form.Check.Label>Male</Form.Check.Label>
              </Form.Check>
              <Form.Check inline className="mb-3">
                <Form.Check.Input
                  type="radio"
                  value="Female"
                  checked={data.gender === "Female"}
                  onChange={(e) => updateSignUpData({ gender: e.target.value })}
                ></Form.Check.Input>
                <Form.Check.Label>Female</Form.Check.Label>
              </Form.Check>
              <Form.Check inline className="mb-3">
                <Form.Check.Input
                  type="radio"
                  value="None"
                  checked={data.gender === "None"}
                  onChange={(e) => updateSignUpData({ gender: e.target.value })}
                ></Form.Check.Input>
                <Form.Check.Label>None</Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={data.password}
                onChange={(e) => updateSignUpData({ password: e.target.value })}
              />
              <Collapse in={data.password !== "" && !valid.password}>
                <p className="text-danger collapse-wrapper">
                  Type strong password
                </p>
              </Collapse>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={data.confirmpassword}
                onChange={(e) =>
                  updateSignUpData({ confirmpassword: e.target.value })
                }
              />
              <Collapse
                in={data.confirmpassword !== "" && !valid.confirmpassword}
              >
                <p className="text-danger collapse-wrapper">
                  Password is not matching
                </p>
              </Collapse>
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              disabled={
                !(
                  data.firstname !== "" &&
                  data.email !== "" &&
                  data.password !== "" &&
                  data.confirmpassword !== "" &&
                  valid.email &&
                  valid.password &&
                  valid.confirmpassword
                )
              }
              onClick={() => console.log("Account created")}
            >
              Sign Up
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
export default SignUpForm;
