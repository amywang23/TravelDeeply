import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


function Header() {
  return (
    <div>
      <Navbar className="head-nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TravelDeeply</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#partnerships">Partnerships</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;