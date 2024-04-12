import React, { useEffect } from "react";

const Evangelist = () => {
  document.title = "Hack4Bengal | Evangelist";
  useEffect(() => {
    if (window.location.pathname === "/evangelist") {
      setTimeout(() => {
        window.location.href = "https://lu.ma/evangelist";
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
          fontFamily: "Poppins",
          fontSize: "4.3rem",
          height: "100vh",
          width: "100%",
          backgroundColor: "#501819",
          color: "#fff",
        }}
      >
        <p>
          Launching Evangelist <br /> Program 🚀
        </p>
      </div>
    </>
  );
};

export default Evangelist;
