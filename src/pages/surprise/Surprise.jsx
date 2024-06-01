// src/App.jsx
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import mascot from "../../assets/images/misc/mascot.png";
import { checkDiscord } from "../../services/api";
import "./Surprise.scss";

const Surprise = () => {
  const [isFromDiscord, setIsFromDiscord] = useState(true);
  const referrer = window.document.referrer;

  const { data, isLoading } = useQuery({
    queryKey: ["checkdc"],
    queryFn: () => checkDiscord(),
    onSuccess: (data) => {
      setIsFromDiscord(data?.fromDiscord);
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  return (
    <div className="surprise_landing">
      <div className="surprise_body">
        <p>Launching Registrations</p>
        <h1>
          Exclusively for our <span>Discord</span> Family
        </h1>
        <img src={mascot} alt="" />
        {/* <div className="red_chatbox tri-right left-top">
          Redirecting you to registrations
        </div> */}

        <div class="talk-bubble tri-right round btm-left">
          <div class="talktext">
            <p> Redirecting you to registrations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
