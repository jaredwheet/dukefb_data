import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import dayjs from "dayjs";

// import gameData from "../season_files/2001_2023";
import { Grid } from "@mui/material";

function sortByDate(a, b) {
  return new Date(b) - new Date(a);
}

function sortByTime(a, b) {
  const timeA = dayjs(a).format("HH:mm");
  const timeB = dayjs(b).format("HH:mm");
  return timeA.localeCompare(timeB);
}

const DataTable = (props) => {
  const { attendanceData } = props;

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "season",
      headerName: "Season",
      width: 90,
    },
    {
      field: "homeOrAway",
      headerName: "Home/Away",
      width: 90,
      valueGetter: (params) => {
        if (params.row.awayTeam.toLowerCase() === "duke") {
          return "Away";
        } else {
          return "Home";
        }
      },
    },

    {
      field: "awayTeam",
      headerName: "Opponent",
      width: 150,
      valueGetter: (params) => {
        if (params.row.awayTeam.toLowerCase() === "duke") {
          return params.row.homeTeam;
        } else {
          return params.row.awayTeam;
        }
      },
    },
    {
      headerName: "Day",
      field: "dayOfWeek",
      valueGetter: (params) => {
        let gameDate = new Date(params.row.startDate);
        const day = gameDate.getDay();
        if (day === 0) {
          return "Sunday";
        } else if (day === 1) {
          return "Monday";
        } else if (day === 2) {
          return "Tuesday";
        } else if (day === 3) {
          return "Wednesday";
        } else if (day === 4) {
          return "Thursday";
        } else if (day === 5) {
          return "Friday";
        } else if (day === 6) {
          return "Saturday";
        }
      },

      width: 100,
    },
    {
      headerName: "Date",
      field: "startDate",
      type: "dateTime",
      valueFormatter: (params) => {
        let gameDate = new Date(params.value);
        const options = {
          // weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        return gameDate.toLocaleString("en-us", options);
      },
      sortComparator: sortByDate,

      width: 150,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      valueGetter: (params) => {
        return new Date(params.row.startDate);
      },
      valueFormatter: (params) => {
        let gameDate = params.value;
        const options = {
          hour: "2-digit",
          minute: "2-digit",
        };
        return gameDate.toLocaleString("en-us", options);
      },
      sortComparator: sortByTime,

      width: 100,
    },
    {
      field: "attendance",
      headerName: "Attendance",
      width: 100,
    },
    {
      field: "weatherCondition",
      headerName: "Weather Condition",
      valueGetter: (params) => {
        return params.row.weather[0]?.weatherCondition
          ? params.row.weather[0]?.weatherCondition
          : "";
      },
      width: 145,
    },
    {
      field: "theTemp",
      headerName: "Temperature",
      valueGetter: (params) => {
        return params.row.weather[0]?.temperature
          ? params.row.weather[0]?.temperature
          : "";
      },
      width: 100,
    },
    {
      field: "humidity",
      headerName: "Humidity",
      valueGetter: (params) => {
        return params.row.weather[0]?.humidity
          ? params.row.weather[0]?.humidity
          : "";
      },
      width: 100,
    },
    {
      headerName: "Final Score (D - Opp)",
      width: 90,
      valueGetter: (params) => {
        if (params.row.homeTeam.toLowerCase() === "duke") {
          return `${params.row.homePoints} - ${params.row.awayPoints}`;
        } else {
          return `${params.row.awayPoints} - ${params.row.homePoints}`;
        }
      },
    },
  ];

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Box sx={{ height: 800, width: "100%" }}>
          <DataGrid
            components={{
              Toolbar: GridToolbar,
            }}
            // sx={{
            //   "& .MuiDataGrid-root": {
            //     fontFamily: `"EB Garamond", Georgia, "Times New Roman", Times, serif`, // Apply to the entire DataGrid
            //   },
            //   "& .MuiDataGrid-cell, & .MuiDataGrid-headerCell": {
            //     fontFamily: `"EB Garamond", Georgia, "Times New Roman", Times, serif`, // Apply to cells and header cells
            //   },
            // }}
            rows={attendanceData}
            columns={columns}
            initialState={{
              sorting: {
                sortModel: [{ field: "startDate", sort: "asc" }],
              },
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DataTable;
