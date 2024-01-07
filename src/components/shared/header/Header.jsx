import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = ({ backWord, backWordMobile, frontWord, frontWordMobile }) => {
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

  return (
    <div className="header__parent disable-select">
      <h1>{windowWidth > 700 ? backWord : backWordMobile || backWord}</h1>
      <h2>{windowWidth > 700 ? frontWord : frontWordMobile || frontWord}</h2>
    </div>
  );
};

export default Header;
