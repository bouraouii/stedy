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

import ModalComponent from "./Modal/Modal";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Home/Footerb";



function App() {
  return (
    <Router>
      <ToastContainer />
      <NavBar />
      <Login />
      <ModalComponent/>
      <Resume/>
      <ModalComponent/>
      <About/>
      <Home/>
      <Projects />
      <Footer/>

      {/* <Routes>
        {/* <Route path="/my-portfolio" element={<Navigate to="/Login" />} />
        <Route path="/" element={<Login />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Resume" element={} />
      </Routes> */}
    </Router> 
  );
}

export default App;
