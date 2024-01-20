const express = require("express");
const router = express.Router();
const cfb = require("cfb.js"); // Import the cfb package
const mongoose = require("mongoose");
const Game = require("../schema/game.schema"); // Import the Game model
var defaultClient = cfb.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = `Bearer ${process.env.CFB_AUTH_KEY}`;
var apiInstance = new cfb.GamesApi();

async function fetchAllGames() {
  var opts = {
    // week: 56, // Number | Week filter
    seasonType: "regular", // String | Season type filter (regular or postseason)
    team: "duke", // String | Team
    // home: "duke", // String | Home team filter
    // away: "away_example", // String | Away team filter
    // conference: "conference_example", // String | Conference abbreviation filter
    // division: "division_example", // String | Division classification filter (fbs/fcs/ii/iii)
    // id: 56, // Number | id filter for querying a single game
  };

  let dataArray = []; // Accumulate data

  for (let year = 1888; year <= 2023; year++) {
    try {
      const data = await apiInstance.getGames(year, opts);
      console.log(year, " API called successfully. Data:");
      dataArray.push(data); // Add data to array

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 3 seconds
    } catch (error) {
      console.error(`Error fetching games for year ${year}:`, error);
      // Handle the error gracefully, e.g., log it and continue with other years
    }
  }

  dataArray = [].concat(...dataArray); // Flatten array of arrays
  return dataArray;
}

async function getGamesWithWeather(games) {
  const gamesWithWeather = [];

  for (const game of games) {
    // Iterate through each game
    try {
      const opts = {
        gameId: game.id, // Use game's ID for API call
      };

      console.log(opts);
      const weatherData = await apiInstance.getGameWeather(opts);
      gamesWithWeather.push({
        ...game, // Copy game data
        weather: weatherData, // Add weather data
      });

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 3 seconds
    } catch (error) {
      console.error(`Error fetching weather for game ${game.id}:`, error);
      // Handle the error gracefully, e.g., log it and potentially add the game without weather data
    }
  }

  return gamesWithWeather;
}

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
