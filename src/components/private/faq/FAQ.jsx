import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import "./FAQ.scss";

const Faq = () => {
  return (
    <div className="faq" id="faq">
      <div className="faq__content">
        <Header {...HeaderData.faq} />

        <div className="faq__subheader">
          <p>
            It doesn't matter if you are a beginner or a seasoned hacker, we got
            you covered. Our FAQs will solve most of your doubts and queries.
          </p>
        </div>

        <div className="faq__body">
          <div className="faq__body__left">
            <div className="faq__body__left__top">
              <h3>What is a Hackathon?</h3>
              <p>
                A hackathon is social coding event where programmers, designers,
                and developers collaborate to solve a problem and compete for
                cash prizes. It’s one part party, one part work-hard overnight
                battle against the clock and the competition.
              </p>
            </div>
            <div className="faq__body__left__bottom">
              <h3>What is the maximum/minimum team size?</h3>
              <p>
                We encourage you to make a team of minimum 2 and maximum 4
                members. If you are a Solo Hacker and do not have a team, you
                can still register and we will help you find a team on our
                Discord Server.
              </p>
            </div>
          </div>
          <div className="faq__body__right">
            <div className="faq__body__right__top">
              <div className="faq__body__right__top__left">
                <div className="faq__body__right__top__left__top">
                  <h3>Who can participate?</h3>
                  <p>
                    Hack4Bengal 3.0 is an in-person hackathon. So remote
                    participation is not applicable.
                  </p>
                </div>
                <div className="faq__body__right__top__left__bottom">
                  <h3>Can I participate remotely?</h3>
                  <p>
                    Hack4Bengal 3.0 is an in-person hackathon. So remote
                    participation is not applicable.
                  </p>
                </div>
              </div>
              <div className="faq__body__right__top__right">
                <h3>How much does it cost to participate?</h3>
                <p>
                  Nothing, participation in Hack4Bengal 3.0 is absolutely
                  FREE!!🎉 We’ll have meals, snacks, and beverages onsite at the
                  hackathon, in addition to swags, prizes, fun mini-events and
                  more.
                </p>
              </div>
            </div>
            <div className="faq__body__right__bottom">
              <h3>I have more questions, where and how can i reach out</h3>
              <p>
                You can reach out to us on our Discord Server (
                <a
                  href="https://discord.com/invite/hack4bengal-2-0-920970750154899476"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://discord.com/invite/hack4bengal-2-0-920970750154899476
                </a>
                ) in #🎫ticket-support or email us at hack4bengal@gmail.com!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
