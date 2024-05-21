import React, { useEffect } from "react";

const Cloud = () => {
  document.title = "Hack4Bengal | Cloud101";
  useEffect(() => {
    if (window.location.pathname === "/cloud-101") {
      setTimeout(() => {
        window.location.href = "https://lu.ma/c8p4owm4";
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
        <p>Launching Cloud 101 🚀</p>
      </div>
    </>
  );
};

export default Cloud;
