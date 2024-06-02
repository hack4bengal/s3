// src/App.jsx
import React from "react";
import mascot from "../../assets/images/misc/mascot.png";
import letters from "../../assets/images/timer/letters.png";
import "./Surprise.scss";

const Surprise = () => {
  useEffect(() => {
    if (window.location.pathname === "/surprise") {
      setTimeout(() => {
        window.location.href = "https://bit.ly/h4bs3_discord";
      }, 3000);
    }
  }, []);

  return (
    <div className="surprise_landing">
      <div className="surprise_body">
        <p className="launching">Launching Registrations</p>
        <h1>
          Exclusively for our <span>Discord</span> Family
        </h1>
        <img src={mascot} alt="" className="mascot" />

        <span className="loader"></span>
        <div class="talk-bubble tri-right round btm-left">
          <div class="talktext">
            <p style={{ marginBottom: "10px" }}>We Love You 3000 🤍</p>{" "}
            <p>Redirecting you to registrations.</p>
          </div>
        </div>
        <div className="red_redirect">Redirecting you to registrations</div>
        <img src={letters} alt="" className="letters" />
      </div>
    </div>
  );
};

export default Surprise;
