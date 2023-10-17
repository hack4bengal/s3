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

          <div className="box-container">
            {themedata.map((item, index) => {
              return (
                <div className="box-item" key={index}>
                  <div className="flip-box" onClick={() => {}}>
                    <div
                      className="flip-box-front text-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    >
                      <div className="inner color-white">
                        {/*  <img src={item.img} alt="" className="flip-box-icon" /> */}
                        <h3 className="flip-box-header">
                          {item.name.split("\n").map((str, index) => (
                            <span key={index}>
                              {str}
                              <br />
                            </span>
                          ))}
                        </h3>

                        <img src={redbtn} alt="" className="flip-box-img" />
                      </div>
                    </div>
                    <div
                      className="flip-box-back text-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                    >
                      <div className="inner color-white">
                        <p>{item.desc}</p>

                        {item.isDoge && (
                          <div
                            style={{
                              position: "relative",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              src={doge}
                              style={{
                                width: "40px",
                                position: "absolute",
                                top: "-200px",
                                opacity: "0.3",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemesSection;
