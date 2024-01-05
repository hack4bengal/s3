import React from "react";
// import white from "../../assets/images/LandingImages/blob_right.png";

// import FirstPrize from "../../assets/images/PrizesImages/FirstPrize.png";
// import SecondPrize from "../../assets/images/PrizesImages/SecondPrize.png";
// import ThirdPrize from "../../assets/images/PrizesImages/ThirdPrize.png";

// import flow from "../../assets/images/PrizesImages/flow.png";

import ComingSoon from "../comingsoon/ComingSoon";
import "./Prizes.scss";

const Prizes = ({ refs }) => {
  return (
    <>
      <div className="prizes__parent" ref={refs}>
        <div className="prizes__header">
          <h1>Awards</h1>
          <h2>{window.innerWidth > 700 && "Hackathon"} Prizes</h2>
        </div>
        {/* <img src={red} alt="" className="red__blob" /> */}
        {/* <img src={white} alt="" className="white__blob" /> */}
        {/* <div className="prizes__topcards">
          <div className="prize_card">
            <img src={SecondPrize} alt="" />
            <h1>₹ 25,000</h1>
            <h2>1st Runner Up</h2>
          </div>
          <div className="prize_card">
            <img src={FirstPrize} alt="" />
            <h1>₹ 50,000</h1>
            <h2>Grand Winner</h2>
          </div>
          <div className="prize_card">
            <img src={ThirdPrize} alt="" />
            <h1>₹ 10,000</h1>
            <h2>2nd Runner Up</h2>
          </div>
        </div>
        <div className="prize__bottomcards">
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prize__card">
            <div className="prize__card_flipbox">
              <div className="front">
                <div className="prize__card_header">
                  <h3>
                    Best Apps built <br /> on Flow
                  </h3>
                </div>

                <div className="prize__img_banner">
                  <img src={flow} alt="" />
                </div>
              </div>
              <div className="back">
                <div className="prize__card_header">
                  <p>1st team - ₹1,22,987</p>

                  <p>2nd team - ₹82,000</p>

                  <p>3rd team - ₹40,000</p>

                  <br />

                  <a
                    href="https://hack4bengals2.notion.site/Themes-and-Problem-Statements-87a69e1b67dc487e82e299ad5a7dd1f1"
                    target="blank"
                    referrerPolicy="no-referrer"
                  >
                    <button className="problem_statement_btn">
                      Problem statement
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <ComingSoon />
      </div>
    </>
  );
};

export default Prizes;
