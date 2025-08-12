import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">BikeFit App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#clients">Clientes</Nav.Link>
                        <Nav.Link href="#evaluations">Avaliações</Nav.Link>
                        <Nav.Link href="#bikes">Bicicletas</Nav.Link>
                        <Nav.Link href="#settings">Configurações</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;