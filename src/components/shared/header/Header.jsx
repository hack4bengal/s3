import clsx from "clsx";
import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = ({ ...data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backWordStyles = {
    fontSize:
      windowWidth > 700
        ? data.backWordSize || "150px"
        : data.backWordSize_mobile,
    letterSpacing:
      windowWidth > 700
        ? data.backWordSpacing || "0.8rem"
        : data.backWordSpacing_mobile,
  };

  return (
    <div className={clsx("header__parent disable-select", data?.customClass)}>
      <h1 style={backWordStyles}>
        {windowWidth > 700
          ? data.backWord
          : data.backWordMobile || data.backWord}
      </h1>
      <h2>
        {windowWidth > 700
          ? data.frontWord
          : data.frontWordMobile || data.frontWord}
      </h2>
    </div>
  );
};

export default Header;
