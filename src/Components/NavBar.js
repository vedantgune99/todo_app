import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">TODO APPLICATION</Navbar.Brand>
        <Button className="ml-3 px-4">Click Me!</Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
