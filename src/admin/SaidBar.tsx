import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../features/dataSlice";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Par défaut, la sidebar est fermée sur mobile

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      {/* Bouton Hamburger visible uniquement sur mobile */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Menu</h2>
        <ul className="sidebar-menu cursor-pointer ">
          <li onClick={() => navigate("/UpdateCard")}>
            <a>Update</a>
          </li>
          <li onClick={() => navigate("/AllRequests")}>
            <a>All the requests</a>
          </li>
          <li onClick={() => navigate("/")}>
            <a>Back</a>
          </li>
          <li
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();

              navigate("/");
            }}
          >
            <a>disconnection</a>
          </li>
        </ul>
      </div>

      {/* Overlay pour fermer la sidebar en cliquant à l'extérieur (mobile uniquement) */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
