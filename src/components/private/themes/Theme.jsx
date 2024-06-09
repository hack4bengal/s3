import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Theme.scss";
import themedata from "./themeData";

const Theme = () => {
  return (
    <>
      <div className="theme__parent" id="themes">
        <Header {...HeaderData.theme} />

        <div className="themes_container">
          {themedata?.map((item, index) => {
            return (
              <div className="box-item" key={index}>
                <div className="flip-box" onClick={() => {}}>
                  <div
                    className="flip-box-front text-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div
                    className="flip-box-back text-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <div className="inner color-white flipbox_desc">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Theme;
