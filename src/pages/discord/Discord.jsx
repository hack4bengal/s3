import React, { useEffect } from "react";

const Discord = () => {
  document.title = "Hack4Bengal | Discord";
  useEffect(() => {
    if (window.location.pathname === "/discord") {
      setTimeout(() => {
        window.location.href =
          "https://discord.gg/hack4bengal-2-0-920970750154899476";
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
        <p>Launching Discord 🚀</p>
      </div>
    </>
  );
};

export default Discord;
