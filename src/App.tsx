import React from "react";

import NavBar from "./Pages/Home/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Projects from "./Pages/Home/Projects";
import Resume from "./Pages/Home/Resume";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
     
    </Router>
  );
}

export default App;
