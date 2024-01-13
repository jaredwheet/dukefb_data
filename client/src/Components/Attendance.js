import Grid from "@mui/material/Grid";
import { useState } from "react";
import DataTable from "./DataTable";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState();

  // const host = window.location.host;
  // let serverURL;

  // if (host === "localhost:3000") {
  //   serverURL = "http://localhost:4000";
  // } else {
  //   serverURL = "https://dukefb-server.onrender.com";
  // }

  // useEffect(() => {
  //   fetch(`${serverURL}/attendance`)
  //     .then((res) => res.json())
  //     .then((data) => setAttendanceData(data));
  // }, [serverURL]);

  return (
    <Grid
      container
      spacing={2}
      // sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        <DataTable
          attendanceData={attendanceData}
          setAttendanceData={setAttendanceData}
        />
      </Grid>
    </Grid>
  );
};

export default Attendance;
