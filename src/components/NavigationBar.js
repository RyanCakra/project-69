import { Navbar, Container, Nav } from "react-bootstrap";
import darkMode from "../components/darkMode";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbarX">
        <Container>
          <Navbar.Brand className="navbarY">💀 FoReal</Navbar.Brand>
          <Nav className="navbarZ">
            <Nav.Link>Movie</Nav.Link>
            <Nav.Link>Anime</Nav.Link>
            <Nav.Link>Series</Nav.Link>
            <darkMode />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
