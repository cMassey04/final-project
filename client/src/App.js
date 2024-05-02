import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/home/HomePage.js";
import Freshman from "./pages/freshman/Freshman.js";
import Sophmore from "./pages/sophmore/Sophmore.js";
import Junior from "./pages/junior/Junior.js";
import Senior from "./pages/senior/Senior.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freshman" element={<Freshman />} />
        <Route path="/sophmore" element={<Sophmore />} />
        <Route path="/junior" element={<Junior />} />
        <Route path="/senior" element={<Senior />} />
      </Routes>
    </Router>
  );
};

export default App;
