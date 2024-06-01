const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

let port = process.env.PORT || 5000;
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "10mb" }));

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
    credentials: true,
    allowedHeaders: ["Set-Cookie", "Content-Type"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("HELLO FROM HOME");
});

app.get("/check-discord", (req, res) => {
  console.log("🚀 ~ app.get ~ req:", req);
  const referrer = req.headers["Referer"] || null;
  console.log("🚀 ~ app.get ~ referer:", referrer);

  if (referrer && referrer.includes("discord.com")) {
    res.json({ fromDiscord: true });
  } else {
    res.json({ fromDiscord: false });
  }
});

app.listen(port, () => console.log("API IS RUNNING 🚀 at port:", port));
