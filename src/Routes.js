import React from "react";
import { Route, Routes } from "react-router-dom";

import SignIn from "./container/SignIn";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default ApplicationRoutes;
