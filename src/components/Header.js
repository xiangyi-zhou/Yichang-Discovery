import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src={logo} alt="DiscoverCity" height="30" className="d-inline-block align-top mr-2" />
        DiscoverYichang
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-lg-5">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/neighborhood">Neighborhood</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          <Nav.Link href="/feedback">Feedback</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header;