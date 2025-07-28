import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Client from "./pages/clients/Clients";
import ClientDetail from "./pages/clientDetail/ClientDetail";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/teste" element={<ClientDetail />} />

      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<Client />} />
    </Routes>
  );
};

export default AppRoutes;
