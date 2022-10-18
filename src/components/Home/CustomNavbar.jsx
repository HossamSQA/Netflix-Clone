import { useState } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logo } from "..";

const CustomNavbar = () => {
  // Language State
  const [language, setLanguage] = useState("English");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      variant="dark"
      className="ms-5 me-5 mb-5"
    >
      <Navbar.Brand href="/">
        <img src={logo} alt="Netflix Logo" width="150px" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto gap-3">
          <NavDropdown title={language} onChange={handleChange}>
            <NavDropdown.Item
              onClick={() => {
                setLanguage("English");
              }}
            >
              English
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                setLanguage("Arabic");
              }}
            >
              Arabic
            </NavDropdown.Item>
          </NavDropdown>
          <Button className="btn w-100 btn-red">Sign in</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
