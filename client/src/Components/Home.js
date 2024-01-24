import Grid from "@mui/material/Grid";
import hellraiser from "../hellraiser.png";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "10px",
          fontFamily: "Sveningsson, Arial, serif",
          textAlign: "center",
        }}
      >
        Welcome to the FTW Data Dashboard!
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={hellraiser} alt="Hellraiser" style={{ height: "350px" }} />
      </Grid>
    </Grid>
  );
};

export default Home;
