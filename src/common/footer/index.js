import React from "react";

import BaseFooter from "./components/BaseFooter";
import FooterBanner from "./components/FooterBanner";
import FooterDetails from "./components/FooterDetails";
import InstallApp from "./components/InstallApp";
import Services from "./components/Services";

import "./footer.scss";

const Footer = () => {
  return (
    <>
      <FooterBanner />
      <Services />
      <FooterDetails />
      <InstallApp />
      <BaseFooter />
    </>
  );
};
export default Footer;
