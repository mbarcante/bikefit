// src/Layout.tsx
import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';

const Layout: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (isHomePage) {
        return <Outlet />;
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <Container fluid className="my-4">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;