import React from "react";
import {motion} from "framer-motion";
import "./PrizesSection.css";

const PrizesSection1 = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1, transition: {duration: 1}}}
      viewport={{once: false}}
      className="prize_section"
    >
      <div className="prize_section-title" id="prizes">
        <div className="prize_section-title1">Prizes</div>
        <hr />
        <div className="prize_section-title2">
          Win exciting prizes and swags!
        </div>

        {window.innerWidth < 769 ? (
          <div className="mb_prizeboxparent">
            <div className="mb_prizebox1 mb_prizebox">
              <img
                src="https://hackthisfall.tech/_nuxt/img/gold.e3b24e8.svg"
                alt=""
              />
              <div>
                <h3>₹50,000</h3>
                <p>Winner</p>
              </div>
            </div>
            <div className="mb_prizebox2 mb_prizebox">
              <img
                src="https://hackthisfall.tech/_nuxt/img/silver.3e9bbcb.svg"
                alt=""
              />
              <div>
                <h3>₹30,000</h3>
                <p>
                  1st runner <br /> up
                </p>
              </div>
            </div>
            <div className="mb_prizebox3 mb_prizebox">
              <img
                src="https://hackthisfall.tech/_nuxt/img/bronze.eb1941a.svg"
                alt=""
              />
              <div>
                <h3>₹20,000</h3>
                <p>
                  2nd runner <br /> up
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="prize_section-body">
            <div className="prize_section-description">
              <div className="prizes_box_main">
                <div className="prizebox prizebox4">
                  <div className="prizebox_imgdiv prizebox1_imgdiv">
                    <img
                      src="https://hackthisfall.tech/_nuxt/img/gold.e3b24e8.svg"
                      alt=""
                    />
                  </div>

                  <div className="prizes_textdiv prizes_textdiv2">
                    <div className="prize_textdiv_texts">
                      <h1>₹50,000</h1>
                      <h2>Winner</h2>
                    </div>
                  </div>
                </div>
                <div className="prizebox prizebox1">
                  <div className="prizebox_imgdiv prizebox1_imgdiv">
                    <img
                      src="https://hackthisfall.tech/_nuxt/img/silver.3e9bbcb.svg"
                      alt=""
                    />
                  </div>

                  <div className="prizes_textdiv prizes_textdiv1">
                    <div className="prize_textdiv_texts">
                      <h1>₹30,000</h1>
                      <h2>1st Runner-Up</h2>
                    </div>
                  </div>
                </div>
                <div className="prizebox prizebox2">
                  <div className="prizebox_imgdiv prizebox1_imgdiv">
                    <img
                      src="https://hackthisfall.tech/_nuxt/img/gold.e3b24e8.svg"
                      alt=""
                    />
                  </div>

                  <div className="prizes_textdiv prizes_textdiv2">
                    <div className="prize_textdiv_texts">
                      <h1>₹50,000</h1>
                      <h2>Winner</h2>
                    </div>
                  </div>
                </div>
                <div className="prizebox prizebox3">
                  <div className="prizebox_imgdiv prizebox1_imgdiv">
                    <img
                      src="https://hackthisfall.tech/_nuxt/img/bronze.eb1941a.svg"
                      alt=""
                    />
                  </div>

                  <div className="prizes_textdiv prizes_textdiv3">
                    <div className="prize_textdiv_texts">
                      <h1>₹20,000</h1>
                      <h2>2nd Runner-Up</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PrizesSection1;
