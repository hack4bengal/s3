import React, { useEffect } from "react";

const Forward = ({ title, pathname, url }) => {
  document.title = "Hack4Bengal | " + title;
  useEffect(() => {
    if (window.location.pathname === pathname) {
      setTimeout(() => {
        window.location.href = url;
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
        <p>Launching {title} 🚀</p>
      </div>
    </>
  );
};

export default Forward;
