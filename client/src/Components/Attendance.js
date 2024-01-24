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
          This is intended to provide data on every Duke football game ever
          played, however at this point there is a lot of missing data,
          especially in the early years. If you notice any errors, or think you
          can help complete the missing information, please{" "}
          <a href="mailto:ftwdatateam@gmail.com"> email us.</a>
        </Typography>
        <br></br>
        <Typography
          variant="subtitle1"
          align="center"
          style={{
            fontFamily: "EB Garamond, Georgia, Times New Roman, Times, serif",
          }}
        >
          Each column can be filtered and sorted based on your needs. You may
          also use the export button to download the data as a CSV file.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        {attendanceData && <DataTable attendanceData={dataForTable} />}
      </Grid>
    </Grid>
  );
};

export default Attendance;
