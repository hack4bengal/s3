import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import "./FAQ.scss";

const Faq = () => {
  const faqContent = [
    {
      question: "What is a Hackathon?",
      answer:
        "A hackathon is social coding event where programmers, designers, and developers collaborate to solve a problem and compete for cash prizes. It’s one part party, one part work-hard overnight battle against the clock and the competition.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students in college, schools can apply. If you can innovate or just want to have a fun learning weekend, you are most welcome.",
    },
    {
      question: "How much does it cost to participate?",
      answer:
        "Nothing, participation in Hack4Bengal 3.0 is absolutely FREE!!🎉 We’ll have meals, snacks, and beverages onsite at the hackathon, in addition to swags, prizes, fun mini-events and more.",
    },
    {
      question: "What is the maximum/minimum team size?",
      answer:
        "We encourage you to make a team of minimum 2 and maximum 4 members. If you are a Solo Hacker and do not have a team, you can still register and we will help you find a team on our Discord Server.",
    },
    {
      question: "Can I participate remotely?",
      answer:
        "Hack4Bengal 3.0 is an in-person hackathon. So remote participation is not applicable.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

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

        {/* <div className="faq_content">
          {faqContent.map((item, index) => {
            return <div className="faq_item">

            </div>;
          })}
        </div> */}

        <div className="container">
          <div className="accordion">
            {faqContent.map((item, index) => {
              return (
                <div className="accordion-item" key={index}>
                  <button
                    id="accordion-button-1"
                    aria-expanded={openFaq === index ? "true" : "false"}
                    onClick={() => {
                      setOpenFaq(openFaq === index ? null : index);
                    }}
                  >
                    <p className="accordion-title">{item?.question}</p>
                    {/* <span className="icon"></span> */}
                    <div className="icon">
                      {openFaq !== index ? <MdAdd /> : <FiMinus />}
                    </div>
                  </button>
                  <div className="accordion-content">
                    <p>{item?.answer}</p>
                  </div>
                </div>
              );
            })}

            <div className="accordion-item">
              <button
                id="accordion-button-1"
                aria-expanded={openFaq === 5 ? "true" : "false"}
                onClick={() => {
                  setOpenFaq(openFaq === 5 ? null : 5);
                }}
              >
                <p className="accordion-title">
                  I have more questions, where and how can i reach out ?
                </p>
                {/* <span className="icon"></span> */}
                <div className="icon">
                  {openFaq !== 5 ? <MdAdd /> : <FiMinus />}
                </div>
              </button>
              <div className="accordion-content">
                <p>
                  Reach out on our Discord Server{" "}
                  <a
                    href="https://discord.gg/hack4bengal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (in #🎫ticket-support)
                  </a>{" "}
                  or email us at{" "}
                  <a href="mailto:hack4bengal@gmail.com">
                    hack4bengal@gmail.com
                  </a>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
