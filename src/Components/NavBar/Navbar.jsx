import "./navbar.css";
import React from "react";
import { FcCallback } from "react-icons/fc";
import { Container, Navbar, Nav,NavItem} from "react-bootstrap";
import { FcHome } from "react-icons/fc";
import {Link} from 'react-router-dom';



export const NavBar = () => {

  return (
    <>
      <section className="__menu__arriba">
        <div className="navbar__logocontenido">
          <img
            src="http://www.aipssa.com.mx/imagenes/logoAipssa.png"
            alt="logoAipssa"
            className="__logo"
          />
        </div>
        <div className="seccion__izquierda">
          <div className="icono">
            <FcCallback size={30} />
          </div>
          <div className="menu__letrasnumero">
            <h3>Atencion a Clientes</h3>
            <p className="text-center">+52(55)42083099</p>
          </div>
        </div>
      </section>
      <Navbar  expand="lg" className="navbar"  sticky="top">
        <Container>
          <Navbar.Brand><FcHome size={35}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem><Link className="nav-link text-white"   to="/">Home</Link> </NavItem>
              <NavItem><Link className="nav-link text-white"   to="/contacto">Contacto</Link> </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
