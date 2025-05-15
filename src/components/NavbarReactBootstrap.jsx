import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/Navbar.css"
import CartWidgetReactIcons from './CartWidgetReactIcons';
import { NavLink } from 'react-router-dom';

function NavbarReactBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src='../public/logo-shop.png' alt='logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-0 my-0">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/category/ingresos'>Ingresos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>Ofertas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/maquinas'>Máquinas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/materiales'>Materiales</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/mas-vendidos'>Más vendidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/contacto'>Contacto</Nav.Link>
            <Nav.Link as={NavLink} to='/cursos'>Cursos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetReactIcons/>
      </Container>
    </Navbar>
  );
}

export default NavbarReactBootstrap;