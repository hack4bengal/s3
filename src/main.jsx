import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SmoothScrolling from "./SmoothScrolling.jsx";

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
