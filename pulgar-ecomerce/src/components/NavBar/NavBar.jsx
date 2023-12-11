/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { CartWidget } from "../CartWidget/CartWidget";

import './NavBar.css';

function NavBar({ BrandName = "Street Burger" }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-custom">
        <Container>
          <Navbar.Brand as={NavLink} to="/" >{BrandName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-outline-primary" : "btn"
                }
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-outline-primary" : "btn"
                }
                to="/category/burgers"
              >
                Burgers
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-outline-primary" : "btn"
                }
                to="/category/snacks"
              >
                Snacks
              </NavLink>
              <NavDropdown.Divider />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-outline-primary" : "btn"
                }
                to="/"
              >
                Ver todo
              </NavLink>
            </Nav>
            <Nav>
              <Link 
              to="/cart">
                <CartWidget/>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;