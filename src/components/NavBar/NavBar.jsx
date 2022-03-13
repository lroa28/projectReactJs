// import { Navbar, NavDropdown } from "react-bootstrap" // Este import trae toda la librería 
// No traemos toda la libreria de bootstrap sino que para ciertos componentes:
import Navbar  from "react-bootstrap/Navbar"
import Container  from "react-bootstrap/Container"
import Form  from "react-bootstrap/Form"
import Nav  from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Offcanvas from "react-bootstrap/Offcanvas"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import Widget from '../Widget/Widget'

function NavBar() {
  return (
    <>
  <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">_luk_c</Navbar.Brand>
    <Nav.Link eventKey={2} href="#memes">
      <Widget />
    </Nav.Link>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Products</Nav.Link>
          <NavDropdown title="Courses" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Knitting</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Mold making</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Use of Straight and Overlock Machines</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
   </Container>
   </Navbar>
    </>
  )
}

export default NavBar
