const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: Number,
  season: Number,
  week: Number,
  seasonType: String,
  startDate: Date,
  startTimeTbd: Boolean,
  neutralSite: Boolean,
  conferenceGame: Boolean,
  attendance: Number,
  venueId: Number,
  venue: String,
  homeId: Number,
  homeTeam: String,
  homeConference: String,
  homePoints: Number,
  homeLineScores: [Number], // Array of numbers
  homePostWinProb: Number,
  homePregameElo: Number,
  homePostgameElo: Number,
  awayId: Number,
  awayTeam: String,
  awayConference: String,
  awayPoints: Number,
  awayLineScores: [Number], // Array of numbers
  awayPostWinProb: Number,
  awayPregameElo: Number,
  awayPostgameElo: Number,
  excitementIndex: Number,
  highlights: String, // Consider using a more suitable type if needed
  notes: String,
  weather: [
    {
      id: Number,
      season: Number,
      week: Number,
      seasonType: String,
      startTime: Date,
      gameIndoors: Boolean,
      homeTeam: String,
      homeConference: String,
      awayTeam: String,
      awayConference: String,
      venueId: Number,
      venue: String,
      temperature: Number,
      dewPoint: Number, // Ensure type compatibility
      humidity: Number,
      precipitation: Number,
      snowfall: Number,
      windDirection: Number,
      windSpeed: Number,
      pressure: Number,
      weatherConditionCode: Number, // Consider using a string or enum
      weatherCondition: String,
    },
  ],
});

gameSchema.index({ id: 1 }, { unique: true });

module.exports = mongoose.model("Game", gameSchema);
