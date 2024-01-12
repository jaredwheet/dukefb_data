import Grid from "@mui/material/Grid";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Grid item xs={12} sx={{ marginTop: "10px" }}>
        Welcome to the Fill the Wade Data Dashboard!
      </Grid>
    </Grid>
  );
};

export default Home;
