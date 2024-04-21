import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SmoothScrolling from "./SmoothScrolling.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </SmoothScrolling>
  </React.StrictMode>
);
