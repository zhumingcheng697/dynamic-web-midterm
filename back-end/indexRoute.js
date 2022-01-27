const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=${req.query.country}&pageSize=${req.query.pageSize}&page=${req.query.page}&apiKey=${process.env.NEWS_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(null);
    });
});

module.exports = router;
