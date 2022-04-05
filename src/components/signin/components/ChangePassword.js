import { React, useEffect, useState } from "react";

import { Button, Col, Collapse, Container, Form, Row } from "react-bootstrap";

import { _validatePassword } from "../../../common/validators/inputValidators";

import { SIGNIN } from "../constants";

import LoginIcon from "../../../assets/images/login.png";
import LoginImage from "../../../assets/images/dummy.png";

const ChangePassword = ({ setComponent }) => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [valid, setValid] = useState({
    password: true,
    confirmPassword: true,
  });
  const updateNewPassword = (data) => {
    setNewPassword((previousState) => ({
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
      password: _validatePassword(newPassword.password),
    });
  }, [newPassword.password]);
  useEffect(() => {
    updateValid({
      confirmPassword: newPassword.password === newPassword.confirmPassword,
    });
  }, [newPassword.confirmPassword]);

  return (
    <Container className="contents-wrapper" fluid>
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center column-content-wrapper">
          <Form>
            <img className="icon-image" src={LoginIcon} alt="Icon" />
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword.password}
                onChange={(e) =>
                  updateNewPassword({ password: e.target.value })
                }
              />
              <Collapse in={newPassword.password !== "" && !valid.password}>
                <p className="text-danger collapse-wrapper">
                  Type strong password
                </p>
              </Collapse>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={newPassword.confirmPassword}
                onChange={(e) =>
                  updateNewPassword({ confirmPassword: e.target.value })
                }
              />
              <Collapse
                in={
                  newPassword.confirmPassword !== "" && !valid.confirmPassword
                }
              >
                <p className="text-danger collapse-wrapper">
                  Password not matching
                </p>
              </Collapse>
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              disabled={
                !(
                  newPassword.password !== "" &&
                  newPassword.confirmPassword !== "" &&
                  valid.confirmPassword
                )
              }
              onClick={() => setComponent(SIGNIN)}
            >
              Sign In
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
export default ChangePassword;
