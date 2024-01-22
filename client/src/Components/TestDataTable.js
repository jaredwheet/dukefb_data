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
      type: "dateTime",
      valueFormatter: (params) => {
        let gameDate = new Date(params.value);
        const options = {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        return gameDate.toLocaleString("en-us", options);
      },
      sortComparator: sortByDate,

      width: 200,
    },
    {
      field: "startTime",
      headerName: "Start Time",
      valueGetter: (params) => {
        return new Date(params.row.startDate);
        // let gameDate = new Date(params.row.startDate);
        // const options = {
        //   hour: "2-digit",
        //   minute: "2-digit",
        // };
        // return gameDate.toLocaleString("en-us", options);
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
      //   valueFormatter: (params) => {
      //     let gameDate = new Date(params.row.startDate);
      //     const options = {
      //       hour: "2-digit",
      //       minute: "2-digit",
      //     };
      //     return gameDate.toLocaleString("en-us", options);
      //   },
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
      width: 100,
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
      width: 175,
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
            components={{ Toolbar: GridToolbar }}
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
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TestDataTable;
