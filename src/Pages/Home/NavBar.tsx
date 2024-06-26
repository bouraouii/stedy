import React from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";

const NavBar: React.FC = () => {
  const options = [
    { value: "français", label: "français" },
    { value: "anglais", label: "anglais" },
  ];

  const [Traduction, setTraduction] = React.useState<Traduction>(options[0]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Portfolio
      </NavLink>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <div>raductions :</div> */}
      <div className="mx-2">
        <Select
          options={options}
          value={Traduction}
          onChange={(e: any) => {
            setTraduction(e);
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
