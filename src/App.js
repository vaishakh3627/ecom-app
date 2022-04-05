import React from "react";

import ApplicationRoutes from "./Routes";
import Header from "./common/header";
import Footer from "./common/footer";

function App() {
  return (
    <>
      <Header />
      <ApplicationRoutes />
      <Footer />
    </>
  );
}

export default App;
