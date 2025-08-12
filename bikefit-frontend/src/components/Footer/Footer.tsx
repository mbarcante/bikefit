import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <Container className="text-center">
                <p className="mb-0">
                    &copy; {currentYear} BikeFit App. Todos os direitos reservados.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;