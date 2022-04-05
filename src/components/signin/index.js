import { React, useEffect, useState } from "react";

import {
  _validateEmail,
  _validateOtp,
} from "../../common/validators/inputValidators";

import { RESETPASSWORD, SIGNIN, OTP, EMAIL } from "./constants";

import "./signin.scss";

import SignInForm from "./components/SignInForm";
import EmailComponent from "./components/EmailComponent";
import OtpComponent from "./components/OtpComponent";
import ChangePassword from "./components/ChangePassword";

const SignInComponent = () => {
  const [component, setComponent] = useState(SIGNIN);
  const [data, setData] = useState({
    email: "",
    otp: "",
  });
  const updateResetData = (data) => {
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));
  };
  const [valid, setValid] = useState({
    email: true,
    otp: true,
  });
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
      otp: _validateOtp(data.otp),
    });
  }, [data.otp]);

  const renderComponent = {
    [SIGNIN]: <SignInForm setComponent={setComponent} />,
    [EMAIL]: (
      <EmailComponent
        data={data}
        setData={updateResetData}
        valid={valid}
        setComponent={setComponent}
      />
    ),
    [OTP]: (
      <OtpComponent
        data={data}
        setData={updateResetData}
        valid={valid}
        setComponent={setComponent}
      />
    ),
    [RESETPASSWORD]: <ChangePassword setComponent={setComponent} />,
  };

  return <>{renderComponent[component]}</>;
};
export default SignInComponent;
