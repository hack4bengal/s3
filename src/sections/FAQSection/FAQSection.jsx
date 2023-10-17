import React from "react";
import "./FAQSection.css";
import file10 from "../../assets/images/file10.png";
import AccordionDiv from "../../components/faq/QuestionAccordian";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="faq_section"
        id="faq"
      >
        <div className="faq_section-body">
          <div className="faq_section-part1">
            <div className="faq_section-title">Have a question?</div>
            <div className="faq_section-content">
              It doesn't matter if you are a beginner or a seasoned hacker, we
              got you covered!. Our FAQs will solve most of your
              doubts and queries.
            </div>
          </div>
          <div className="faq_section-part2">
            <div className="faq_section-image">
              <img alt="men" src={file10} />
            </div>
            <div className="faq_section-questions">
              <AccordionDiv />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQSection;
