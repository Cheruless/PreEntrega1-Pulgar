import Cart from "../Cart/Cart";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar({BrandName}) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">{BrandName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Inicio</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
              <NavDropdown title="Catálogo" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Burgers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Snacks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Promociones
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ver todo</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Welcome to the Burger World</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Cart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
