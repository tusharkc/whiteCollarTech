import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import DesktopHeader from "./DesktopHeader";
import HandsetHeader from "./HandsetHeader";

const Header = () => {
  const { width } = useWindowSize();
  return <>{width > 767 ? <DesktopHeader /> : <HandsetHeader />}</>;
};

export default Header;
