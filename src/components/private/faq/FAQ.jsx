import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import "./FAQ.scss";

import messageVector from "../../../assets/images/FAQImages/message.svg";
import questionMark1Vector from "../../../assets/images/FAQImages/question_mark_1.svg";
import questionMark2Vector from "../../../assets/images/FAQImages/question_mark_2.svg";
import randomShape1Vector from "../../../assets/images/FAQImages/random_shape_vector_1.svg";
import squareVector from "../../../assets/images/FAQImages/square.svg";
import triangleVector from "../../../assets/images/FAQImages/triangle.svg";
import zigZak1Vector from "../../../assets/images/FAQImages/zig_zak_1.svg";
import zigZak2Vector from "../../../assets/images/FAQImages/zig_zak_2.svg";

const Faq = () => {
  const faqContent = [
    {
      question: "What is a Hackathon?",
      answer:
        "A hackathon is social coding event where programmers, designers, and developers collaborate to solve a problem and compete for cash prizes. It's one part party, one part work-hard overnight battle against the clock and the competition.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students currently enrolled in any course in High School or College can participate in Hack4Bengal. Along with that current year passouts can participate too.",
    },
    {
      question: "How much does it cost to participate?",
      answer:
        "Nothing, participation in Hack4Bengal 3.0 is absolutely FREE!!🎉 We'll have meals, snacks, and beverages onsite at the hackathon, in addition to swags, prizes, fun mini-events and more.",
    },
    {
      question: "What is the maximum/ minimum team size?",
      answer:
        "We encourage you to make a team of minimum 2 and maximum 4 members. If you are a Solo Hacker and do not have a team, you can still register and we will help you find a team on our Discord Server.",
    },
    {
      question: "Will hardware toolkits be available on-site?",
      answer:
        "No, hardware toolkits will not be available on-site for the Hardware Track. You'll need to bring your own.",
    },
    {
      question:
        "What are the guidelines for the teams participating in the Hardware track?",
      answer:
        "It is important to remember that you need to bring your own toolkits, although power sockets and an internet connection will be readily available on-site.",
    },
    {
      question: "What will be provided for participants at the venue?",
      answer:
        "We will be providing the following: separate rest areas for both male and female participants, complimentary meals throughout the duration of the event, and tech support, including a stable internet connection and readily available power sockets on-site. Please note that you need to bring your own laptops and any other electronic devices you may need during the hackathon.",
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
                aria-expanded={openFaq === 8 ? "true" : "false"}
                onClick={() => {
                  setOpenFaq(openFaq === 8 ? null : 8);
                }}
              >
                <p className="accordion-title">
                  I have more questions, where and how can i reach out ?
                </p>

                <div className="icon">
                  {openFaq !== 8 ? <MdAdd /> : <FiMinus />}
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
      <div className="faq__vector__container">
        <img
          src={messageVector}
          alt="message vector"
          className="faq__message__vector faq__emojis"
        />
        <img
          src={questionMark1Vector}
          alt="question mark vector"
          className="faq__question_mark_1__vector faq__emojis"
        />
        <img
          src={questionMark2Vector}
          alt="question mark vector"
          className="faq__question_mark_2__vector faq__emojis"
        />
        <img
          src={randomShape1Vector}
          alt="random shape vector"
          className="faq__random_shape_1__vector faq__emojis"
        />
        <img
          src={squareVector}
          alt="square vector"
          className="faq__square__vector faq__emojis"
        />
        <img
          src={triangleVector}
          alt="triangle vector"
          className="faq__triangle__vector faq__emojis"
        />
        <img
          src={zigZak1Vector}
          alt="zig zag vector"
          className="faq__zig_zak_1__vector faq__emojis"
        />
        <img
          src={zigZak2Vector}
          alt="zig zag vector"
          className="faq__zig_zak_2__vector faq__emojis"
        />
      </div>
    </div>
  );
};

export default Faq;
