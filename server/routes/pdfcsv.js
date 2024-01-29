const mongoose = require("mongoose");
mongoose.connect("URI HERE");
const XLSX = require("xlsx");

const Game = require("../schema/game.schema"); // Import the Game model

const workbook = XLSX.readFile("routes/attend_data.xlsx");
const sheetName = workbook.SheetNames[0];
const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

console.log(excelData);
// Update documents
excelData.forEach((row) => {
  Game.updateOne({ id: row.ID }, { $set: { attendance: row.Attendance } })
    .then(() => console.log("Document updated!"))
    .catch((error) => console.error("Error updating document:", error));
});
