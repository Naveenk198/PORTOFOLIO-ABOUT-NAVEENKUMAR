import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Portofolio = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              gap: "10px",
            }}
            navbarScroll
          >
            <Nav.Link as={Link} to={""}>
              About Me |{" "}
            </Nav.Link>
            <Nav.Link as={Link} to={"/project"}>
              Projects |
            </Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Contact |
            </Nav.Link>
            <Nav.Link as={Link} to={"/resume"}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Portofolio;
