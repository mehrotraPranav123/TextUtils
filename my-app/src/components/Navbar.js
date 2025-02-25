import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === "light" ? "dark" : "light"}`} to="/">
          {props.title}
        </Link>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item px-3">
            <Link className={`nav-link active text-${props.mode === "light" ? "dark" : "light"}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/about">
              About
            </Link>
          </li>

          {/* Dark Mode Toggle */}
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
            <input 
              className="form-check-input" 
              type="checkbox" 
              role="switch" 
              id="flexSwitchCheckDefault" 
              onChange={props.toggleMode} // Call function from props
              checked={props.mode === "dark"} // Reflect current mode
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Navbar",
  mode: "light",
};

