import { Card, Container, Table } from 'react-bootstrap';
import { useEffect } from 'react';
import ClientModal from './components/ClientModal/ClientModal';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Icon from 'src/utils/Icons';
import useClients from './Clients.logic';
import usePaginator from 'src/components/Paginator/Paginator.logic';
import Paginator from 'src/components/Paginator/Paginator';
import TotalReg from 'src/components/TotalReg/TotalReg';
import DropdownLimit from 'src/components/Paginator/DropdownLimit/DropdownLimit';

const Clients = () => {
  const navigate = useNavigate();
  const { clients, getClients, deleteClient } = useClients();

  const { changeLimit, changeOffset, fetchPagination, limit, nextPagination, offset, pages, pagination, previousPagination, start, end, totalReg } = usePaginator<any>({
    fetchData: getClients
  });
  useEffect(() => {
    fetchPagination();
  }, [fetchPagination]);
  return (
    <Container fluid>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div>
            <h5>Clientes</h5>
          </div>
          <div>
            <DropdownLimit limit={limit} changeLimit={changeLimit} />
            <ClientModal getClients={getClients} />
          </div>
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
              {clients?.data.map((item) => (
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
          <div className="d-flex flex-row justify-content-center">
            {clients?.data.length !== 0 && totalReg > limit ? (
              <Paginator
                previousPagination={previousPagination}
                nextPagination={nextPagination}
                changeOffset={changeOffset}
                offset={offset}
                pages={pages}
                pagination={pagination}
                start={start}
                end={end}
              />
            ) : (
              ""
            )}
          </div>
          <TotalReg totalReg={totalReg} />

        </Card.Body>
      </Card>
    </Container>
  );
};

export default Clients;
