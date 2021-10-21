import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        // bg="dark"
        bg="light"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <span className="brand">WeCare </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors">
              Doctors
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/appointment">
              Appointment
            </Nav.Link>

            {user.email ? (
              <Button onClick={logOut} variant="secondary" className="logout">
                Logout
              </Button>
            ) : (
              <Nav.Link
                className="text-dark"
                as={Link}
                to="/login"
                className="login"
              >
                Login
              </Nav.Link>
            )}
            <Navbar.Text className="mx-1">
              <span className="display-user"> Hello: {user.displayName} </span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
