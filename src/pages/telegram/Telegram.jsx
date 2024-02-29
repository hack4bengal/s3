import React, { useEffect } from "react";

const Telegram = () => {
  document.title = "Hack4Bengal | Telegram";
  useEffect(() => {
    if (window.location.pathname === "/tg") {
      setTimeout(() => {
        window.location.href = "http://telegram.me/hack4bengal";
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
        <p>Launching Telegram 🚀</p>
      </div>
    </>
  );
};

export default Telegram;
