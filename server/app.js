const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const router = require("../server/routes/routes");

let corsOrigin;

// middleware
const corsOptions = {
  origin: ["http://localhost:3000", "https://dukefbdata-client1.onrender.com"],
  // frontend URI (ReactJS)
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

// route
// app.get("/", (req, res) => {
//   res.status(201).json({ message: "Connected to Backend!" });
// });

// app.get("/attendance", (request, response) => {
//   getGames(2023);

//   response.send(status);
// });
app.use("/attendance", router);
