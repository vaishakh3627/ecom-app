import React from "react";
import OTPInput from "otp-input-react";

import { Button, Col, Collapse, Container, Row } from "react-bootstrap";

import { RESETPASSWORD } from "../constants";

import LoginIcon from "../../../assets/images/login.png";
import LoginImage from "../../../assets/images/dummy.png";

const OtpComponent = ({ data, setData, valid, setComponent }) => {
  return (
    <Container className="contents-wrapper" fluid>
      <Row>
        <Col
          lg={4}
          md={6}
          sm={12}
          className="text-center column-content-wrapper"
        >
          <img className="icon-image-x" src={LoginIcon} alt="Icon" />
          <p>
            OTP send succesfully to {data.email}!<br />
            Please enter the OTP here !
          </p>
          <OTPInput
            className="mb-4 otp-wrapper"
            value={data.otp}
            onChange={(e) => setData({ otp: e })}
            autoFocus
            OTPLength={6}
            otpType="number"
            secure
          />
          <Collapse in={data.otp !== "" && valid.otp}>
            <p className="text-success collapse-wrapper">
              OTP verification complete
            </p>
          </Collapse>
          <Button
            variant="primary"
            style={{ width: "100%" }}
            disabled={!(data.otp !== "" && valid.otp)}
            onClick={() => setComponent(RESETPASSWORD)}
          >
            Change Password
          </Button>
        </Col>
        <Col lg={8} md={6} sm={12}>
          <img className="w-100 image" src={LoginImage} alt="dummy" />
        </Col>
      </Row>
    </Container>
  );
};
export default OtpComponent;
