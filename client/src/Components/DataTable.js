import * as React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import gameData from "../season_files/2001_2023";
import { Grid } from "@mui/material";

const data = gameData;

const DataTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 1,
      },
      {
        accessorKey: "season",
        header: "Season",
        size: 1,
      },

      {
        accessorKey: "awayTeam",
        header: "Opponent",
        size: 1,
      },
      {
        header: "Date",
        sortType: "datetime",
        accessor: "startDate",
        accessorFn: (row) => {
          let gameDate = new Date(row.startDate);
          const options = {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          };
          return gameDate.toLocaleString("en-us", options);
        },

        size: 1,
        // accessorFn: (row) => {
        //   let gameDate = new Date(row.startDate);
        //   const options = {
        //     weekday: "long",
        //     year: "numeric",
        //     month: "short",
        //     day: "numeric",
        //   };
        //   return gameDate.toLocaleString("en-us", options);
        // },
      },
      {
        header: "Start Time",
        sortType: "datetime",
        // sortingFn: (rowA, rowB, columnId) => {
        //   rowA.localeCompare(rowB);
        // }, // your custom sorting logic
        size: 1,
        accessorFn: (row) => {
          let gameDate = new Date(row.startDate);
          const options = {
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
