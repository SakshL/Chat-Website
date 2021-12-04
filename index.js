const express = require("express");
const helmet = require("helmet");
require("dotenv").config();
const app = express();
const cors = require("cors")
const fetch = require("node-fetch")
const path = require("path")
const port = 8080;
console.log("Running??")
 app.use(express.static("./"));
 app.use(cors())
 app.use(helmet.hidePoweredBy());
 app.use(helmet.ieNoOpen());
 app.use(helmet.referrerPolicy());
 app.use(helmet.xssFilter());
 app.use((req, res, next) => {
  res.setHeader("Permissions-Policy", "	accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()");
  next();
 });

  app.listen(port, null, null, () => {
   console.log(`Dashboard is up and running on port ${port}.`);
});

app.get("/api", async(req,res) => {
req.query;
if(!req.query.message) {
  const error = {
    message: "Something went wrong with my brain | ask NotSaksh To Fix It..."
  }
  return res.send(error);
}
const response = await fetch(`https://api.deltaa.me/chatbot?message=${req.query.message}&name=Sakshyam&gender=Male&owner=NotSaksh`)
const body = await response.json();
res.send(body);
});

app.post("/register", async(req, res) => {
  console.log(res.body.email)
})
app.get("/login", async(req, res) => {
  res.sendfile(path.join(__dirname, "./login.html"))
})
app.get("/bot", async(req, res) => {
  res.sendfile(path.join(__dirname, "./botchat.html"))
})