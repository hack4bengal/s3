import React, { useEffect } from "react";

const Verify = () => {
  document.title = "Hack4Bengal | Verify Certificates";
  useEffect(() => {
    if (window.location.pathname === "/verify") {
      setTimeout(() => {
        window.location.href = "https://s3-verify.streamlit.app/";
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
        <p>Verify Your Certificate ✅</p>
      </div>
    </>
  );
};

export default Verify;
