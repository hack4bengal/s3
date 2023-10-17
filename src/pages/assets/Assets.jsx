import { useEffect } from "react";
import "./Assets.css";

export default function Assets() {

  useEffect(() => {
    window.location.href = "https://drive.google.com/drive/folders/1rwyYqMLUTWPkpGndF67uXEVczvCJlUMX";
  }, []);


  return (
    <div>
      <iframe
        className="assets-frame"
        src="https://drive.google.com/drive/folders/1rwyYqMLUTWPkpGndF67uXEVczvCJlUMX"
      ></iframe>
    </div>
  );
}
