import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Coreteam = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/coreteam") {
      setTimeout(() => {
        window.location.href = "https://bit.ly/h4bs3-volunteer-apply";
      }, 0);
    }
  }, []);

  return (
    <>
      <div className="hack4bengal__navbar-container">
        <Navbar />
      </div>

      <div
        className="externalpage"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          justifyItems: "center",
          fontWeight: "600",
          fontFamily: "sans-serif",
          fontSize: "3rem",
          height: "100vh",
        }}
      >
        <p> Loading Hack4Bengal Volunteers Application Form 🚀 </p>
      </div>
    </>
  );
};

export default Coreteam;
