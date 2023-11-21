import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
        style={{ color: "white", backgroundColor: "gray" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            <i class="fa-solid fa-gavel fa-shake"></i>&nbsp;Edzorb Law
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Premium+
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Blogs
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                <i class="fa-solid fa-microphone fa-beat-fade"></i>
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
              <Nav.Link href="#deets" style={{ color: "white" }}>
                <i class="fa-brands fa-apple fa-xl"></i>&nbsp;&nbsp;
                <i class="fa-solid fa-play fa-xl"></i>&nbsp;&nbsp;
                <a href="#" style={{ color: "white" }}>
                  Login
                </a>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <a href="#" style={{ color: "white" }}>
                  Sign Up
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
