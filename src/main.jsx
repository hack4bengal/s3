import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SmoothScrolling from "./SmoothScrolling.jsx";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SW_UPDATED") {
      // Optionally, show a notification to the user before reloading
      window.location.reload();
    }
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
        <Analytics />
        <SpeedInsights />
      </Suspense>
    </SmoothScrolling>
  </React.StrictMode>
);
