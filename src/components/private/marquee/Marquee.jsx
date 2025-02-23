import React from "react";
import "./Marquee.scss";

function Marquee() {
  const numParagraphs = 50;

  const paragraphs = [];
  for (let i = 0; i < numParagraphs; i++) {
    paragraphs.push(<p key={i}>Season 4.0 Registration opens soon !</p>);
  }

  return (
    <>
      <div className="marquee_wrapper">{paragraphs}</div>
    </>
  );
}

export default Marquee;
