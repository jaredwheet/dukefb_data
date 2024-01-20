import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Attendance from "./Components/Attendance.js";
import Test from "./Components/Test.js";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/test" element={<Test />} /> */}
          {/* <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="test" element={<Test />} />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
