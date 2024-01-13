import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Attendance from "./Components/Attendance.js";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/" element={<Home />} />
          {/* <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Grid
        container
        spacing={2}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
      >
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          Welcome to the Fill the Wade Data Dashboard!
        </Grid>
      </Grid> */}
      {/* <Grid item xs={6} md={4}>
          {message} xs=6 md=4
        </Grid>
        <Grid item xs={6} md={4}>
          {message} xs=6 md=4
        </Grid>
        <Grid item xs={6} md={8}>
          {message} xs=6 md=8
        </Grid> */}
      {/* </Grid> */}
    </>
    // <div className="App">
    //   <h1>{message}</h1>
    // </div>
  );
}

export default App;
