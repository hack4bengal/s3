import React, { Component } from "react";
import redbtn from "../../assets/themes/redbtn.png";
import "./MorePrizesPage.css";
import solana from "../../assets/images/sponsers/solana.png";
import shardeum from "../../assets/images/sponsers/shardeum.png";
import fvm from "../../assets/images/sponsers/fvm.png";
// import { Link, useNavigate } from "react-router-dom";
import Postman from "../../assets/images/sponsers/Postman.png";
import CCD from "../../assets/images/sponsers/CCD.png";
import girlsteam from "../../assets/images/sponsers/gdgcloudkolkata.png";
import hyperlane from "../../assets/images/sponsers/hyperlane.png";
import intel from "../../assets/images/sponsers/intel.png";
import flow from "../../assets/images/sponsers/flow.png";
import tezos from "../../assets/images/sponsers/tezos.png";
import graph from "../../assets/images/sponsers/Graphlogo1.png";
import zeeve from "../../assets//images/sponsers/zeeve.png";
import { Link } from "react-router-dom";

const MorePrizesPage = () => {
  return (
    <>
      <div className="prizepage_container_main">
        <>
          <div className="moreprizesection_god">
            <div className="moreprizesection_parent" id="themes">
              <div className="moreprizesbox-container">
                {/* FLOW */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox">
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={flow}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{ height: "74px", objectFit: "contain" }}
                        />
                        <h3 className="flip-moreprizesbox-header">
                          Best Apps built <br /> on Flow
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p>1st team - ₹1,22,987</p>

                        <p>2nd team - ₹82,000</p>

                        <p>3rd team - ₹40,000</p>

                        <br />

                        <a
                          href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                          target="blank"
                          referrerpolicy="no-referrer"
                        >
                          <button className="problem_statement_btn">
                            Problem statement
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOLANA */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={solana}
                          alt=""
                          className="flip-moreprizesbox-icon"
                        />
                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> Solana
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p>1st team - ₹40,000</p>
                        <br />
                        <p>2nd team - ₹20,000</p>
                        <br />
                        <p>3rd team - ₹8,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SHARDEUM */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={shardeum}
                          alt=""
                          className="flip-moreprizesbox-icon"
                        />
                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> Shardeum
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p>1st Team - ₹24,000</p>
                        <p> 2nd Team - ₹16,000</p>
                        <p>
                          Rest of the Prize Pool of ₹24,000 for the Best
                          Projects build on Shardeum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Filecoin, FVM */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={fvm}
                          alt=""
                          className="flip-moreprizesbox-icon"
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> Filecoin/FVM
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p>
                          2 teams <br /> ₹10,000 each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Postman */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={Postman}
                          alt=""
                          className="flip-moreprizesbox-icon"
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> API by Postman
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          The winning team members receive a Postman Student
                          Swag Kit <br /> <br /> (Premium Diary, Thermos with
                          Temperature Display, Sticker Sheet, Mobile Pop-up
                          Holder, and Premium Pen)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={Postman}
                          alt=""
                          className="flip-moreprizesbox-icon"
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Postman <br /> Public Workspace
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          The winning team members receive a Postman Student
                          Swag Kit <br /> <br /> (Premium Diary, Thermos with
                          Temperature Display, Sticker Sheet, Mobile Pop-up
                          Holder, and Premium Pen)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* GIRLS TEAM GDG */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={girlsteam}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{ height: "74px", objectFit: "contain" }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Of All-Girls <br /> Team
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        {/* <p>1st Team - ₹10000</p>
                        <p>2nd Team - ₹7500</p> */}

                        {/* {window.innerWidth > 800 && (
                          <>
                            <br />
                            <br />
                          </>
                        )} */}

                        <p>₹7500</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={CCD}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{ width: "60%" }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Hackday <br /> Best Use of Cloud
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p>1st Team - ₹10000</p>
                        <p> 2nd Team - ₹7500</p>

                        {window.innerWidth > 800 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}

                        {/* <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          {" "}
                          2nd & 3rd - Win GCP Credits, along with free tickets
                          to GCCD, Kolkata
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="moreprizesbox-item">
                  <div className="flip-prizebox">
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={intel}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{width: "50%"}}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Intel oneAPI for <br /> Machine Learning
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{fontSize: "19px", letterSpacing: "1.2px"}}>
                          {" "}
                          1st Team - ₹15,000
                        </p>

                        <p style={{fontSize: "19px", letterSpacing: "1.2px"}}>
                          {" "}
                          2nd Team - ₹12,000
                        </p>

                        <p style={{fontSize: "19px", letterSpacing: "1.2px"}}>
                          3rd Team - ₹10,000
                        </p>
                        <br />
                        <a
                          href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                          target="blank"
                          referrerpolicy="no-referrer"
                        >
                          <button className="problem_statement_btn">
                            Problem statement
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Hyperlane */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={hyperlane}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{ width: "60%", height: "74px" }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> Hyperlane
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          {" "}
                          Prize Pool of <br /> <br /> ₹80,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tezos */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={tezos}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{
                            width: "60%",
                            height: "74px",
                            objectFit: "contain",
                          }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> Tezos
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          1st Team - ₹13,000
                        </p>
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          1st Team - ₹12,000
                        </p>

                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          2nd Team - ₹8,000
                        </p>

                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          3rd Team - ₹4,000
                        </p>
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          Prize Pool - ₹16,000 for people building on top of
                          Tezos , and from the problem statements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* special-classes-demo */}
                {/* 
                <div className="moreprizesbox-item specialwidth tezosbox">
                  <div className="flip-prizebox">
                    <div className="flip-moreprizesbox-front text-center specialheight">
                      <div className="inner color-white">
                        <img
                          src={tezos}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{
                            width: "60%",
                            height: "74px",
                            objectFit: "contain",
                          }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> Tezos
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back specialheight ">
                      <div className="inner color-white text-center">
                        <p> 1st Team - ₹12,000</p>

                        <p>2nd Team - ₹8,000</p>

                        <p>3rd Team - ₹4,000</p>
                        <p>
                          Prize Pool - ₹16,000 for people building on top of
                          Tezos , and from the problem statements.
                        </p>

                        <br />
                        <a
                          href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                          target="blank"
                          referrerpolicy="no-referrer"
                        >
                          <button className="problem_statement_btn">
                            Problem statement
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Graph */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={graph}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{
                            width: "60%",
                            height: "74px",
                            objectFit: "contain",
                          }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Best Use of <br /> The Graph
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          1st Team - ₹13,000
                        </p>
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          2nd Team - ₹12,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Zeeve */}
                <div className="moreprizesbox-item">
                  <div className="flip-prizebox" onClick={() => {}}>
                    <div className="flip-moreprizesbox-front text-center">
                      <div className="inner color-white">
                        <img
                          src={zeeve}
                          alt=""
                          className="flip-moreprizesbox-icon"
                          style={{
                            width: "60%",
                            height: "74px",
                            objectFit: "contain",
                          }}
                        />

                        <h3 className="flip-moreprizesbox-header">
                          Build with <br /> Zeeve.io
                        </h3>

                        <img
                          src={redbtn}
                          alt=""
                          className="flip-moreprizesbox-img"
                        />
                      </div>
                    </div>
                    <div className="flip-moreprizesbox-back ">
                      <div className="inner color-white text-center">
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          Total Teams eligible to get prize: 2{" "}
                        </p>
                        <p style={{ fontSize: "19px", letterSpacing: "1.2px" }}>
                          Prize for winning teams: Exclusive Merchandise Kit
                          from Zeeve + Mentoring to take Projects
                          further in Web3 Grants.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End */}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MorePrizesPage;
