import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
        style={{ color: "white" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <i class="fa-solid fa-gavel fa-shake"></i>&nbsp;Edzorb Law
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Premium+</Nav.Link>
              <Nav.Link href="#pricing">Blogs</Nav.Link>
              <Nav.Link href="#pricing">
                <i className="bi bi-mic-fill"></i>Podcast
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <i class="fa-brands fa-apple fa-xl"></i>&nbsp;&nbsp;
                <i class="fa-solid fa-play fa-xl"></i>&nbsp;&nbsp;
                <a href="#">Login</a>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <a href="#">Sign Up</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
