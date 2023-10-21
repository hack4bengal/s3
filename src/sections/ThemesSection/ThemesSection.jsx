import React, { useEffect } from "react";
import "./ThemesSection.css";
import redbtn from "../../assets/themes/redbtn.png";
import themedata from "./ThemeData";
import doge from "../../assets/img/doge.png";

const ThemesSection = () => {
  return (
    <>
      <div className="themesection_god">
        <div className="themesection_parent" id="themes">
          <h1 className="themesection_title">Themes</h1>
          <hr style={{ marginBottom: "auto auto 2rem" }} />

          <h3
            style={{ textAlign: "center", color: "white",fontSize:"1.17em",fontFamily:"Poppins,sans-serif"}}
          >
            To be decided soon...
          </h3>
        </div>
      </div>
    </>
  );
};

export default ThemesSection;
