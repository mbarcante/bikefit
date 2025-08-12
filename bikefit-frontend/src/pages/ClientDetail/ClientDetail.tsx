import { Container } from 'react-bootstrap';
import BikesCard from './components/BikeCard/BikesCard';
import PostureEvaluationsCard from './components/PostureEvaluationCard/PostureEvaluationsCard';
import { useParams } from 'react-router-dom';
import { ClientService } from '../../services';
import { useEffect, useState, useCallback } from 'react';
import { IClient } from '../../types';
import BikeFitCard from './components/BikeFitCard/BikeFitCard';

const ClientDetail = () => {
  const { id } = useParams();
  const [client, setClient] = useState<IClient>();
  const getClient = useCallback(async () => {
    const data = await ClientService.getClientById(Number(id));
    setClient(data);
  }, [id]);
  useEffect(() => {
    if (id) {
      getClient();
    }
  }, [id, getClient]);
  return (
    <Container>
      <div className="my-3">
        <h1>Detalhes {client ? client.name : ''}</h1>
      </div>
      <div>
        <PostureEvaluationsCard client={Number(id)} />
        <BikesCard client={Number(id)} />
        <BikeFitCard />
      </div>
    </Container>
  );
};

export default ClientDetail;
