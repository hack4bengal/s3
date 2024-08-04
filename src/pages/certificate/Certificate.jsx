import React, { useEffect } from "react";

const Certificate = () => {
  document.title = "Hack4Bengal | Certificate";
  useEffect(() => {
    if (window.location.pathname === "/certificate") {
      setTimeout(() => {
        window.location.href = "https://s3certificates.streamlit.app/";
      }, 800);
    }
  }, []);
  return (
    <>
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
        <p>Certificates Incoming 🚀</p>
      </div>
    </>
  );
};

export default Certificate;
