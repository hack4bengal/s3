import React from "react";
import "./MorePrizesSection.css";

const Prize = () => {
  return (
    <>
      <div className="hack4bengal__prizes">
        <div className="hack4bengal__prizes_title">
          Sponsor Prizes, Bounties, Swags
        </div>
        <hr />

        <div className="prize_main_div">
          <div className="prize_box">
            <div className="prize_box_text">
              <h1>Best Use of Shardeum</h1>
              <h2>$800 Bounty for a team</h2>
            </div>
          </div>

          <div className="prize_box">
            <div className="prize_box_text">
              <h1>Best use of Filecoin/FVM (2)</h1>
              <h2>2 Teams - $125</h2>
            </div>
          </div>

          <div className="prize_box">
            <div className="prize_box_text">
              <h1>Best Use of API by Postman</h1>
              <h2>
                The winning team members receive a Postman Student Swag Kit
                (Premium Diary, Thermos with Temperature Display, Sticker Sheet,
                Mobile Pop-up Holder, and Premium Pen)
              </h2>
            </div>
          </div>

          <div className="prize_box">
            <div className="prize_box_text">
              <h1>Google Cloud Community Days - Tickets (3)</h1>
              <h2>
                Top 3 winning teams of the hackathon will get free tickets to
                Google Cloud Community Days, Kolkata, scheduled to be held in
                Biswa Bangla Convention Center on May 7th 2023.
              </h2>
            </div>
          </div>

          <div className="prize_box">
            <div className="prize_box_text">
              <h1>Best Girls Team (GDG Cloud Kolkata)</h1>
              <h2>
                Best Girls Team of the hackathon to get $60 from Google
                Developer Group Cloud, Kolkata.
              </h2>
            </div>
          </div>

          <div className="prize_box">
            <div className="prize_box_text">
              <h1>Hackday - Best Use of Cloud (3)</h1>
              <h2>
                1st Team - $85 in cash, GCP Credits, along with free tickets to
                Google Cloud Community Days, Kolkata
              </h2>
              <h2>
                2nd & 3rd Team - Win GCP Credits, along with free tickets to
                Google Cloud Community Days, Kolkata
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/*   <div className="hack4bengal__section9-body">
            <div className="hack4bengal__section9-description">

                <div className="prizes_box_main">
                    <div className="prizebox prizebox1">
                        <div className="prizebox_imgdiv prizebox1_imgdiv">
                            <img
                                src="https://hackthisfall.tech/_nuxt/img/silver.3e9bbcb.svg"
                                alt=""
                            />
                        </div>

                        <div className="prizes_textdiv prizes_textdiv1">
                            <div className="prize_textdiv_texts">
                                <h1>₹20k</h1>
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
                                <h1>₹30k</h1>
                                <h2>Winner</h2>
                            </div>
                        </div>
                    </div>
                    <div className="prizebox prizebox1">
                        <div className="prizebox_imgdiv prizebox1_imgdiv">
                            <img
                                src="https://hackthisfall.tech/_nuxt/img/bronze.eb1941a.svg"
                                alt=""
                            />
                        </div>

                        <div className="prizes_textdiv prizes_textdiv3">
                            <div className="prize_textdiv_texts">
                                <h1>₹20k</h1>
                                <h2>2nd Runner-Up</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> */}
    </>
  );
};

export default Prize;
