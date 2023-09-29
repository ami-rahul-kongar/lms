// Header.js
import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/AuthSlice";
import ARS from "../../../assets/Images/ARS.jpg";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn =
    !!localStorage.getItem("token") || !!sessionStorage.getItem("token");
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      className="shadow sticky-top"
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 className="m-0 text-primary">
          <img src={ARS} alt="logo" className="logo-image" />
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarCollapse"
        className="navbar-toggler me-4"
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/courses" className="nav-link">
            Courses
          </Nav.Link>
          <NavDropdown
            title="Pages"
            id="nav-dropdown"
            className="nav-item dropdown"
          >
            <NavDropdown.Item as={Link} to="/userprofile">
            UserProfile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/instructors">
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/testimonial">
              Testimonial
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/addcourses">
              AddCourses
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            variant="primary"
            className="btn btn-primary d-none d-lg-block"
          >
            Logout
          </Button>
        ) : (
          <Button
            as={Link}
            to="/login"
            variant="primary"
            className="btn btn-primary d-none d-lg-block"
          >
            Join Now <i className="fa fa-arrow-right ms-3"></i>
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
