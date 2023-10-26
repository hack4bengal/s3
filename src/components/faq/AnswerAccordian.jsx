import { useState } from "react";
import { useRef } from "react";

const AccordionItem = ({ faq, onToggle, isActive }) => {
  const contentEl = useRef();

  return (
    <li className={`section7-accordion_item ${isActive ? "active" : ""}`}>
      <button className="section7-button" onClick={onToggle}>
        <div className="section7-question"> {faq.question} </div>
        <span className="section7-control">{isActive ? "-" : "+"} </span>
      </button>
      <div
        ref={contentEl}
        className="section7-answer_wrapper"
        style={
          isActive
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="section7-answer">{faq.answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;
