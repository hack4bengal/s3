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
          <hr style={{ marginBottom: "70px" }} />

          <h3
            style={{ textAlign: "center", color: "white", fontWeight: "700" }}
          >
            To be decided soon...
          </h3>
        </div>
      </div>
    </>
  );
};

export default ThemesSection;
