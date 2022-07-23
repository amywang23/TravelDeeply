import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


function Footer() {
  return (
    <Navbar className="foot-nav" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#privacy">Privacy</Nav.Link>
            <Nav.Link href="#terms">Terms</Nav.Link>
            <Nav.Link href="#sitemap">Sitemap</Nav.Link>
            <Nav.Link href="#destinations">Destinations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;