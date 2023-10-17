import React from "react";
import "./InfiniteCarousel.css";

const InfiniteCarouselSection = () => {
  const numParagraphs = 50; // define the number of paragraphs to render

  // create an array of paragraph elements
  const paragraphs = [];
  for (let i = 0; i < numParagraphs; i++) {
    paragraphs.push(<p key={i}>REGISTRATIONS CLOSED. THANK YOU FOR THE OVERWHELMING RESPONSE. LET THE HACK BEGIN !</p>);
  }

  return (
    <>
      <div className="h4b_reg_text_wrapper">{paragraphs}</div>
    </>
  );
};

export default InfiniteCarouselSection;
