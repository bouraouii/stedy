import React from "react";

import NavBar from "./Pages/Home/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import About from "./Pages/Home/About";
import Projects from "./Pages/Home/Projects";
import Resume from "./Pages/Home/Resume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./Pages/Home/Login";
import Accueil from "./Pages/Home/Accueil";

function App() {
  return (
    <Router>
      <ToastContainer />
      <NavBar />

      <Routes>
        <Route path="/my-portfolio" element={<Navigate to="/" />} />
        <Route path="/" element={<Login />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
