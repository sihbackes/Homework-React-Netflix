import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/netflix_logo.png";
import "./style.css";

const NavBarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img className="logo-netflix-nav" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Tv Shows</Nav.Link>
          <Nav.Link href="#pricing">Movies</Nav.Link>
          <Nav.Link href="#pricing">Recently Added</Nav.Link>
        </Nav>
        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
