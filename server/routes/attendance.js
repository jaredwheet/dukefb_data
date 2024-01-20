const express = require("express");
const router = express.Router();

var cfb = require("cfb.js");
var defaultClient = cfb.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = `Bearer ${process.env.CFB_AUTH_KEY}`;

async function getDukeGameData() {
  var apiInstance = new cfb.GamesApi();
  var opts = {
    // week: 56, // Number | Week filter
    seasonType: "regular", // String | Season type filter (regular or postseason)
    team: "duke", // String | Team
    home: "duke", // String | Home team filter
    // away: "away_example", // String | Away team filter
    // conference: "conference_example", // String | Conference abbreviation filter
    // division: "division_example", // String | Division classification filter (fbs/fcs/ii/iii)
    // id: 56, // Number | id filter for querying a single game
  };

  let array = [];
  var year = 2001; //  set your counter to 1

  async function myLoop() {
    //  create a loop function
    setTimeout(function () {
      //  call a 10s setTimeout when the loop is called
      console.log(year); //  your code here
      apiInstance.getGames(year, opts).then(
        function (data) {
          console.log("API called successfully. Returned data: " + data);
          array.push(data);
        },
        function (error) {
          console.error(error);
        }
      );
      year++; //  increment the counter
      if (year < 2024) {
        //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another
      } else {
        return;
        //  ..  setTimeout()
      }
    }, 1000);
  }

  myLoop().then((data) => {
    console.log(data, array);
  });
  console.log("Array: ", array); //  start the loop
}

router.get("/", async (req, res) => {
  getDukeGameData().then((result) => {
    console.log(result);
    res.send(result);
  });
});

// router.get("/", (req, res) => {
//   console.log("here");
//   res.send({ message: "About birds" });
// });

// router.get("/", (req, res) => {
//   res.send({ message: "About birds" });
// });

module.exports = router;
