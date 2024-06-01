// src/App.jsx
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../components/shared/loading/Loading";
import { checkDiscord } from "../../services/api";

const Surprise = () => {
  const [isFromDiscord, setIsFromDiscord] = useState(false);
  const referrer = window.document.referrer;
  console.log("🚀 ~ Surprise ~ referrer:", referrer);

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
    <div>
      {isFromDiscord === null || isLoading ? (
        <Loading />
      ) : isFromDiscord ? (
        <h1>Surprise! You came from Discord!</h1>
      ) : (
        <h1>Unauthorized access</h1>
      )}
    </div>
  );
};

export default Surprise;
