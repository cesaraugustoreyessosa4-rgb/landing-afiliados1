require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api/image", async (req, res) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=business&image_type=photo`
    );

    const image =
      response.data.hits[
        Math.floor(Math.random() * response.data.hits.length)
      ];

    res.json({ url: image.webformatURL });
  } catch (err) {
    res.json({ error: "error" });
  }
});

app.listen(3000);
