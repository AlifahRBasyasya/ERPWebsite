import { Image, Navbar, Nav, Button } from 'react-bootstrap';

import logo from "../../assets/logo.svg";

const NavigationBar = (props: any) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="m-3 fs-2">
      <Navbar.Brand href="#home" className="text-white fw-bold fs-2 mx-3">
        <Image src={logo} className="me-4"/>
        HOME
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto fw-bold">
          <Nav.Link href="#about" className="mx-3">ABOUT</Nav.Link>
          <Nav.Link href="#pricing" className="mx-3">PRICING</Nav.Link>
          <Nav.Link href="#contact" className="mx-3">CONTACT</Nav.Link>
          <Nav.Link className="mx-3">
            <Button variant="outline-info" className="fw-bold px-5">LOGIN</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default NavigationBar;