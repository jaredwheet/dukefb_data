import * as React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import gameData from "../season_files/2001_2023";
import { Grid } from "@mui/material";

// const columns = [
//   { field: "id", headerName: "ID", width: 120 },
//   { field: "season", headerName: "Year", width: 130 },
//   { field: "awayTeam", headerName: "Opponent", width: 130 },
//   {
//     field: "startDate",
//     headerName: "Date",
//     type: "datetime",
//     width: 230,
//     valueGetter: (params) => {
//       let gameDate = new Date(params.row.startDate);
//       const options = {
//         weekday: "long",
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//         // hour: "2-digit",
//         // minute: "2-digit",
//       };
//       return gameDate.toLocaleString("en-us", options);
//     },
//   },
//   {
//     field: "startTime",
//     headerName: "Time",
//     type: "datetime",
//     width: 130,
//     valueGetter: (params) => {
//       let gameDate = new Date(params.row.startDate);
//       const options = {
//         // weekday: "long",
//         // year: "numeric",
//         // month: "short",
//         // day: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//       };
//       return gameDate.toLocaleString("en-us", options);
//     },
//   },
//   {
//     field: "score",
//     headerName: "Final Score",
//     // description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.homePoints} - ${params.row.awayPoints}`,
//   },
//   { field: "attendance", headerName: "Attendance", width: 130 },
// ];

// let finalData;
// if (gameData) {
//   finalData = gameData.map((obj) => {
//     return { ...obj, startTime: obj.startDate };
//   });
// }
// var setData = new Set(finalData);
// const array = [...setData];
// console.log(array);

const data = gameData;

const DataTable = () => {
  //should be memoized or stable
  // const [test, setTest] = React.useState([]);

  // React.useEffect(() => {
  //   let finalData;
  //   if (gameData) {
  //     finalData = gameData.map((obj) => {
  //       return { ...obj, startTime: obj.startDate };
  //     });
  //   }
  //   var setData = new Set(finalData);
  //   const array = [...setData];
  //   setTest(array);
  // }, [test]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
        size: 1,
      },
      {
        accessorKey: "season", //access nested data with dot notation
        header: "Season",
        size: 1,
      },

      {
        accessorKey: "awayTeam",
        header: "Opponent",
        size: 1,
      },
      {
        // accessorKey: "startDate", //normal accessorKey
        header: "Date",
        size: 1,
        accessorFn: (row) => {
          let gameDate = new Date(row.startDate);
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
        // accessorKey: "startDate", //normal accessorKey
        header: "Start Time",
        size: 1,
        accessorFn: (row) => {
          let gameDate = new Date(row.startDate);
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
        accessorKey: "attendance",
        header: "Attendance",
        size: 150,
      },
      {
        header: "Final Score",
        size: 1,
        accessorFn: (row) => `${row.homePoints} - ${row.awayPoints}`,
      },
    ],
    []
  );
  console.log(gameData);
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <Grid container>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <MaterialReactTable table={table} />
      </Grid>
    </Grid>
  );
};

export default DataTable;
