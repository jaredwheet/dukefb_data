const express = require("express");
const router = express.Router();
const cfb = require("cfb.js"); // Import the cfb package
const mongoose = require("mongoose");
const Game = require("../schema/game.schema"); // Import the Game model
var defaultClient = cfb.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = `Bearer ${process.env.CFB_AUTH_KEY}`;
var apiInstance = new cfb.GamesApi();

router.get("/", async (req, res) => {
  try {
    const allEntries = await Game.find(); // Fetch all entries
    res.json(allEntries); // Send the response as JSON
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching entries");
  }
});

module.exports = router;
