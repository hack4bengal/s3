// src/App.jsx
import React, { useEffect, useState } from "react";

const Surprise = () => {
  const [isFromDiscord, setIsFromDiscord] = useState(false);

  useEffect(() => {
    const referrer = document.referrer;
    console.log("🚀 ~ useEffect ~ document:", document);
    console.log("Document Referrer:", referrer); // Log the referrer to the console
    if (referrer.includes("discord.com")) {
      setIsFromDiscord(true);
    }
  }, []);

  return (
    <div>
      {isFromDiscord ? (
        <h1>Surprise! You came from Discord!</h1>
      ) : (
        <h1>Unauthorized access</h1>
      )}
    </div>
  );
};

export default Surprise;
