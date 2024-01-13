import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import gameData from "../season_files/2001_2023";
import { Grid } from "@mui/material";

console.log(gameData);

const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "season", headerName: "Year", width: 130 },
  { field: "awayTeam", headerName: "Opponent", width: 130 },
  {
    field: "startDate",
    headerName: "Date",
    type: "datetime",
    width: 230,
    valueGetter: (params) => {
      let gameDate = new Date(params.row.startDate);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        // hour: "2-digit",
        // minute: "2-digit",
      };
      return gameDate.toLocaleString("en-us", options);
    },
  },
  {
    field: "startTime",
    headerName: "Time",
    type: "datetime",
    width: 130,
    valueGetter: (params) => {
      let gameDate = new Date(params.row.startDate);
      const options = {
        // weekday: "long",
        // year: "numeric",
        // month: "short",
        // day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      return gameDate.toLocaleString("en-us", options);
    },
  },
  {
    field: "score",
    headerName: "Final Score",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.homePoints} - ${params.row.awayPoints}`,
  },
  { field: "attendance", headerName: "Attendance", width: 130 },
];

export default function DataTable() {
  let finalData;
  if (gameData) {
    finalData = gameData.map((obj) => {
      return { ...obj, startTime: obj.startDate };
    });
  }
  var setData = new Set(finalData);
  const array = [...setData];
  console.log(array);

  console.log(finalData);

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <div style={{ height: 1000, width: "100%" }}>
          <DataGrid
            rows={array}
            columns={columns}
            pageSize={50}
            rowsPerPageOptions={[2, 5, 7]}
            // initialState={{
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            //   },
            // }}
            // pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </div>
      </Grid>
    </Grid>
  );
}
