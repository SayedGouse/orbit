//import logo from './logo.svg';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import '../node_modules/fontawesome/index';
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Slider from "./Slider";
import Home from "./Home";
import Signin from "./Signin";
import AboutUs from "./pages/AboutUs.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
      {/* <Slider></Slider> */}
    </div>
  );
}

export default App;
