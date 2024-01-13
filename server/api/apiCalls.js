var cfb = require("cfb.js");
var defaultClient = cfb.ApiClient.instance;

var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = `Bearer ${process.env.CFB_AUTH_KEY}`;

function getGames(year) {
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
  apiInstance.getGames(year, opts).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data);
    },
    function (error) {
      console.error(error);
    }
  );
}
