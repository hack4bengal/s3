// src/App.jsx
import React, { useEffect } from "react";
import mascot from "../../assets/images/misc/mascot.png";
import letters from "../../assets/images/timer/letters.png";
import "./Register.scss";

const Register = () => {
  useEffect(() => {
    if (
      window.location.pathname === "/register" ||
      window.location.pathname === "/surprise"
    ) {
      setTimeout(() => {
        window.location.href = "https://lu.ma/0nruupo3?utm_source=twitter";
      }, 3000);
    }
  }, []);

  return (
    <div className="surprise_landing">
      <div className="surprise_body">
        <p className="launching">Redirecting you to registrations . . .</p>
        <h1>Registrations are open!🚀</h1>
        <img src={mascot} alt="" className="mascot" />

        <span className="loader"></span>
        {/* <div class="talk-bubble tri-right round btm-left">
          <div class="talktext">
            <p style={{ marginBottom: "10px" }}>We Love You 3000 🤍</p>{" "}
            <p>Redirecting you to registrations.</p>
          </div>
        </div> */}
        <div className="red_redirect">Redirecting you to registrations</div>
        <img src={letters} alt="" className="letters" />
      </div>
    </div>
  );
};

export default Register;
