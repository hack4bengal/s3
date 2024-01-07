import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Theme.scss";

const Theme = () => {
  return (
    <>
      <div className="theme__parent" id="themes">
        <Header {...HeaderData.theme} />

        <ComingSoon />
      </div>
    </>
  );
};

export default Theme;
