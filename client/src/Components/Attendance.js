import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";

const Attendance = () => {
  const [message, setMessage] = useState("");

  const host = window.location.host;
  console.log(host);
  let serverURL;

  if (host === "localhost:3000") {
    serverURL = "http://localhost:4000";
  } else {
    serverURL = "https://dukefb-server.onrender.com";
  }

  useEffect(() => {
    fetch(serverURL)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, [serverURL]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        {message}
      </Grid>
    </Grid>
  );
};

export default Attendance;
