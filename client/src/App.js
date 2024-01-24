import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Attendance from "./Components/Attendance.js";
import Test from "./Components/Test.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
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
      </div>
      <Footer />
    </>
  );
}

export default App;
