import React, { useEffect } from "react";

const Evangelist = () => {
  document.title = "Hack4Bengal | Evangelist";
  useEffect(() => {
    if (window.location.pathname === "/evangelist") {
      setTimeout(() => {
        window.location.href =
          "https://www.notion.so/Hackathon-Evangelist-Program-Hack4Bengal-3-0-1cad5373b52640ed89e88e6d5ab3f34c";
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
