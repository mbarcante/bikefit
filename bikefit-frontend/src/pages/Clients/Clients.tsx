import { Card, Container, Table } from 'react-bootstrap';
import { ClientService } from '../../services';
import { useEffect, useState } from 'react';
import ClientModal from './components/clientModal/ClientModal';
import { IClient } from '../../types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icon from '../../utils/Icons';
import useClients from './Clients.logic';

const Clients = () => {
  const navigate = useNavigate();
  const { clients, getClients, deleteClient } = useClients();
  useEffect(() => {
    getClients();
  }, [getClients]);
  return (
    <Container fluid>
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <div>Clientes</div> <ClientModal getClients={getClients} />
        </Card.Header>
        <Card.Body>
          <Table striped bordered>
            <thead>
              <tr className=" bg-secondary text-white">
                <th className="text-center bg-transparent text-white">Id</th>
                <th className="text-center bg-transparent text-white">Nome</th>
                <th className="text-center bg-transparent text-white">Sexo</th>
                <th className="text-center bg-transparent text-white">Data de Nascimento</th>
                <th className="text-center bg-transparent text-white">Profissão</th>
                <th className="text-center bg-transparent text-white">E-mail</th>
                <th className="text-center bg-transparent text-white">Observações</th>
                <th className="text-center bg-transparent text-white">Data de Cadastro</th>
                <th className="text-center bg-transparent text-white"> Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.sex}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.profession}</td>
                  <td>{item.email}</td>
                  <td>{item.observations}</td>
                  <td>{item.cellphone}</td>
                  <td className="d-flex gap-2 justify-content-center">
                    <ClientModal getClients={getClients} item={item} />
                    <Button variant="info" onClick={() => navigate(`/cliente/${item.id}`)}> <Icon type="profile" /> </Button>
                    <Button variant="danger" onClick={() => deleteClient(item.id)}> <Icon type="exclude" /> </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Clients;
