import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Client from './pages/Clients/Clients';
import ClientDetail from './pages/ClientDetail/ClientDetail';
import BikeFitListPage from './pages/ClientDetail/components/BikeFitCard/BikeFitCard';
import BikeFitFormPage from './pages/BikeFit/BikeFitFormPage/BikeFitFormPage';
import Layout from './Layout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="clientes" element={<Client />} />
        <Route path="cliente/:id" element={<ClientDetail />} />
        <Route path="cliente/bike/:id/bikefit/new" element={<BikeFitFormPage />} />
        <Route path="cliente/bike/bikefit/:id" element={<BikeFitFormPage />} />
        <Route path="cliente/:id/bikefits" element={<BikeFitListPage />} />
      </Route>

      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  )
};

export default AppRoutes;