const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const attendance = require("./routes/attendance");
const test = require("./routes/test");
const Game = require("../server/schema/game.schema");

// middleware
const corsOptions = {
  origin: ["http://localhost:3000", "https://dukefbdata-client1.onrender.com"],
};
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/attendance", attendance);

const cron = require("node-cron");
const { fetchAllGames, getGamesWithWeather } = require("./api/apiCalls");

// runs weekly to update mongodb
cron.schedule("0 3 * * 0", async () => {
  //  runs every Sunday at 3:00 AM
  console.log("Weekly cron job running - Sunday at 3:00 AM");
  // Your weekly task code goes here
  // Example: Fetch and process new games with weather
  try {
    const games = await fetchAllGames();
    const gamesWithWeather = await getGamesWithWeather(games);
    await Promise.all(
      gamesWithWeather.map(async (game) => {
        try {
          const existingGame = await Game.findOne({ id: game.id }); // Check for existing game

          if (!existingGame) {
            const newGame = new Game(game);
            await newGame.save();
            console.log(`Game ${game.id} saved successfully`);
          } else {
            console.log(`Game ${game.id} already exists, skipping`);
          }
        } catch (error) {
          console.error(`Error saving game ${game.id}:`, error);
          // Handle specific errors if needed (e.g., duplicate key errors)
        }
      })
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching games with weather data");
  }
});

app.use("/test", test);
