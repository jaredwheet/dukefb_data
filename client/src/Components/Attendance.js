import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { Typography } from "@mui/material";

let dataForTable = [];

const Attendance = () => {
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
        <Typography
          variant="h4"
          align="center"
          style={{
            fontFamily: "EB Garamond, Georgia, Times New Roman, Times, serif",
          }}
        >
          {" "}
          Duke Football Attendance
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          style={{
            fontFamily: "EB Garamond, Georgia, Times New Roman, Times, serif",
          }}
        >
          {" "}
          Below you will find data on all Duke football games since 1888. The
          database is not complete however, as some games are missing data
          points. If you notice any errors, please{" "}
          <a href="mailto:ftwdatateam@gmail.com"> email us.</a>
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        {attendanceData && <DataTable attendanceData={dataForTable} />}
      </Grid>
    </Grid>
  );
};

export default Attendance;
