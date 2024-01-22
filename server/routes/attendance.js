const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Game = require("../schema/game.schema"); // Import the Game model

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
