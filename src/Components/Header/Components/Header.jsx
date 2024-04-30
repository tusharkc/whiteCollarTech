import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import DesktopHeader from "./DesktopHeader";
import HandsetHeader from "./HandsetHeader";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <>
      <ScrollToTop />
      {width > 767 ? <DesktopHeader /> : <HandsetHeader />}
    </>
  );
};

export default Header;
