import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import CustomLink from "./CustomLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Container>
        <Navbar expand="md">
          <NavbarBrand className="brand" href="/">
            tmdb
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <CustomLink activeOnlyWhenExact to="/" label="Home" />
              </NavItem>
              <NavItem>
                <CustomLink to="/movies" label="Movies" />
              </NavItem>
              <NavItem>
                <CustomLink to="/tv-shows" label="Tv Shows" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
