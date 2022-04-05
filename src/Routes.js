import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "./container/SignIn";
import SignUp from "./container/SignUp";
import Home from "./container/Home";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default ApplicationRoutes;
