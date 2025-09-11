import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
            {/* O container com d-flex e justify-content-between \\u00e9 o elemento pai */}
            <Container fluid className="d-flex justify-content-between">
                <Navbar.Brand href="/clientes" className="mx-5">BikeFit App</Navbar.Brand>
                <Nav className="mx-5">
                    <Nav.Link href="/clientes">Clientes</Nav.Link>
                    <Nav.Link href="/usuarios">Usuários </Nav.Link>
                    <Nav.Link href="#bikes">Bicicletas</Nav.Link>
                    <Nav.Link href="#settings">Configurações</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;