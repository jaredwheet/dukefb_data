// import React from "react";
// import { useState, useEffect } from "react";

// const Test = () => {
//   const [gameData, setGameData] = useState([]);
//   const host = window.location.host;
//   let serverURL;

//   if (host === "localhost:3000") {
//     serverURL = "http://localhost:4000";
//   } else {
//     serverURL = "https://dukefb-server.onrender.com";
//   }

//   useEffect(() => {
//     fetch(`${serverURL}/test`)
//       .then((res) => res.json())
//       .then((data) => setGameData(data));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // Empty dependency array to run only on mount

//   return <div>{JSON.stringify(gameData)}</div>;
// };

// export default Test;

import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import TestDataTable from "./TestDataTable";

let dataForTable = [];

const Test = () => {
  const [attendanceData, setAttendanceData] = useState();

  const host = window.location.host;
  let serverURL;

  if (host === "localhost:3000") {
    serverURL = "http://localhost:4000";
  } else {
    serverURL = "https://dukefb-server.onrender.com";
  }

  useEffect(() => {
    fetch(`${serverURL}/test`)
      .then((res) => res.json())
      .then((data) => {
        setAttendanceData(true);
        dataForTable = data;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run only on mount

  return (
    <Grid
      container
      spacing={2}
      // sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        {attendanceData && <TestDataTable attendanceData={dataForTable} />}
      </Grid>
    </Grid>
  );
};

export default Test;
