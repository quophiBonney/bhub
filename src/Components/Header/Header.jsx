import React from "react";
import {Link} from "react-router-dom";
import logobgless from "../../assets/logobgless.png";
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import HeaderCSS from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <Navbar expand="lg" className="fixed-top mb-5" id={HeaderCSS.navbar}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logobgless}
              className="img-fluid img-responsive"
              alt=""
              id={HeaderCSS.logo}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" navbarScroll></Nav>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
            &nbsp;&nbsp;
            <Link to="/signup">
              <Button className="btn btn-danger">Register</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
