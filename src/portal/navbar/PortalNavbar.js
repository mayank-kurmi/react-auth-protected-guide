import React, { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
//import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
const PortalNavbar = () => {
  const { cartdata, setCartState } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navbar
        className="navbar navbar-light"
        style={{
          backgroundColor: "#e3f2fd",
          paddingLeft: "10px",
          paddingRight: "10px",
          height: "60px",
        }}
      >
        <Navbar.Brand>Shopping Bliss</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" exact="true" to="/">
                {" "}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/profile">
                {" "}
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <a className="text-reset ">
                <i className="bi bi-cart"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  {2}
                </span>
              </a>
              {/* <Button className="btn btn-dark" onClick={logout}>
                Logout
              </Button> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default PortalNavbar;
