import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import DesktopFooter from "./DesktopFooter";
import HandsetFooter from "./HandsetFooter";

const Footer = () => {
  const { width } = useWindowSize();
  return <>{width > 767 ? <DesktopFooter /> : <HandsetFooter />}</>;
};

export default Footer;
