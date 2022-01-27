require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const indexRoute = require("./indexRoute");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRoute);

app.listen(port, () => {
  console.log(`Midterm back-end is running at port ${port}`);
});
