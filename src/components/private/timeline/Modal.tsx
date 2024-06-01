import React from "react";
import "./Modal.scss";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div  className="modal__close">
        <button onClick={closeModal}>
        <svg height="15px" width="15px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 21L21 1" stroke='#fff' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M21 21L1 1" stroke='#fff' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
        </button>
        </div>
        <ol type="1">
          <li>Registration opens on June 1, 2024, and closes on June 24, 2024.</li>
          <li>The hackathon takes place from June 28, 2024, to June 30, 2024.</li>
          <li>The judging round, winner announcement, and closing ceremony will all occur on June 30, 2024.</li>
        </ol>
      </div>
    </div>
  );
};

export default Modal;
