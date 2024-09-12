import React from "react";
import "./Marquee.scss";

function Marquee() {
  const numParagraphs = 50;

  const paragraphs = [];
  for (let i = 0; i < numParagraphs; i++) {
    paragraphs.push(
      <p key={i}>
        {" "}
        Thankyou for the overwhelming response in Hack4Bengal 3.0 !
      </p>
    );
  }

  return (
    <>
      <div className="marquee_wrapper">{paragraphs}</div>
    </>
  );
}

export default Marquee;
