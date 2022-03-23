import React from "react";

import { Container } from "react-bootstrap";

import SignInForm from "./components/SignInForm";

import "./style.scss";

const SignInComponent = () => {
  return (
    <Container fluid>
      <SignInForm />
    </Container>
  );
};
export default SignInComponent;
