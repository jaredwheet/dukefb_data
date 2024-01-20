import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

// import gameData from "../season_files/2001_2023";
import { Grid } from "@mui/material";

const TestDataTable = (props) => {
  const { attendanceData } = props;
  console.log(attendanceData);

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
      headerName: "Date",
      field: "startDate",
      valueGetter: (params) => {
        let gameDate = new Date(params.row.startDate);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        return gameDate.toLocaleString("en-us", options);
      },
      width: 200,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      valueGetter: (params) => {
        let gameDate = new Date(params.row.startDate);
        const options = {
          hour: "2-digit",
          minute: "2-digit",
        };
        return gameDate.toLocaleString("en-us", options);
      },
      width: 100,
    },

    // {
    //   headerName: "Start Time",
    //   field: "startDate",
    //   width: 150,
    //   valueGetter: (params) => {
    //     let gameDate = new Date(params.row.startDate);
    //     const options = {
    //       hour: "2-digit",
    //       minute: "2-digit",
    //     };
    //     return gameDate.toLocaleString("en-us", options);
    //   },
    // },
    {
      field: "attendance",
      headerName: "Attendance",
      width: 150,
    },
    {
      field: "theTemp",
      headerName: "Temperature",
      valueGetter: (params) => {
        return params.row.weather[0].temperature;
      },
      width: 100,
    },
    {
      field: "humidity",
      headerName: "Humidity",
      valueGetter: (params) => {
        return `${params.row.weather[0].humidity}%`;
      },
      width: 100,
    },
    {
      field: "weatherCondition",
      headerName: "Weather Condition",
      valueGetter: (params) => {
        return params.row.weather[0].weatherCondition;
      },
      width: 200,
    },
    {
      headerName: "Final Score",
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
            rows={attendanceData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestDataTable;
