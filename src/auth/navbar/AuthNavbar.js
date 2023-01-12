import React from "react";

import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const AuthNavbar = () => {
  return (
    <React.Fragment>
      <Navbar
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Shopping Bliss</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" exact="true" to="/">
                  {" "}
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/auth/login">
                  {" "}
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/auth/signup">
                  {" "}
                  Sign-Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default AuthNavbar;
