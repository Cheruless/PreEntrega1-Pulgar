import Cart from "../Cart/Cart";


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

function NavBar({BrandName}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">{BrandName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to='/'>Inicio</Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
                <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to='/category/Burgers'>Burgers</NavLink>
                <br/>
                <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to='/category/Snacks'>Snacks</NavLink>
                <NavDropdown.Divider />
                <NavLink className={({isActive}) => isActive ? 'btn btn-primary' : 'btn' } to="/">Ver todo</NavLink>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Welcome to the Burger World</Nav.Link>
              <Link to='/cart'>
                <Cart />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
