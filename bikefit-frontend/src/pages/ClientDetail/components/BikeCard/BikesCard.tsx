import { Button, Card, Col, Row, Accordion } from 'react-bootstrap';
import { ClientService } from '../../../../services';
import { useCallback, useEffect, useState } from 'react';
import { IBike } from '../../../../types';
import BikeFitButtons from './components/BikeFitButtons';
import { useNavigate } from 'react-router-dom';

interface BikesCardProps {
  client: number;
}

const BikesCard = ({ client }: BikesCardProps) => {
  const navigate = useNavigate()
  const [bikes, setBikes] = useState<IBike[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getBikes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const clientBikes = await ClientService.getClientBikes(client);
      setBikes(clientBikes);
    } catch (err: any) {
      console.error('Erro ao buscar bicicletas do cliente:', err);
      if (err.message === 'Não há bicicletas relacionadas a este cliente') {
        setError('Este cliente não possui bicicletas cadastradas.');
      } else {
        setError('Não foi possível carregar as bicicletas. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  }, [client]);

  useEffect(() => {
    getBikes();
  }, [getBikes]);

  return (
    <Card className="my-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        Bicicletas
        <Button variant="success" size="sm">
          <i className="bi bi-plus-circle" /> Adicionar Bicicleta
        </Button>
      </Card.Header>
      <Card.Body>
        {loading && <p>Carregando bicicletas...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading && !error && bikes.length === 0 && <p>Nenhuma bicicleta encontrada para este cliente.</p>}
        {!loading && !error && bikes.length > 0 && (
          <Accordion alwaysOpen>
            {bikes.map((bike, index) => (
              <Accordion.Item eventKey={String(index)} key={bike.id}>
                <Accordion.Header>
                  <h6 className="mb-0">
                    {bike.brand} {bike.model} ({bike.year ? bike.year + ' - ' : ''}ID: {bike.id})
                  </h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md={6}>
                      <p className="mb-1">
                        <strong>Tipo:</strong> {bike.type}
                      </p>
                      <p className="mb-1">
                        <strong>Tamanho:</strong> {bike.size}
                      </p>
                      <p className="mb-1">
                        <strong>Marca:</strong> {bike.brand}
                      </p>
                      <p className="mb-1">
                        <strong>Modelo:</strong> {bike.model}
                      </p>
                    </Col>
                    <Col md={6}>
                      <p className="mb-1">
                        <strong>Ano:</strong> {bike.year || 'N/A'}
                      </p>
                      <p className="mb-1">
                        <strong>Aro:</strong> {bike.rim}
                      </p>
                      <p className="mb-1">
                        <strong>Quadro:</strong> {bike.frame}
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}> </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <p className="mb-1 text-muted">Cliente ID: {bike.clientId}</p>
                    </Col>
                    <Col md={6}>
                      <p className="mb-1 text-muted">
                        Cadastro:
                        {bike.DtCadastro ? new Date(bike.DtCadastro).toLocaleDateString() : 'N/A'}
                      </p>
                    </Col>
                  </Row>
                  <div className="d-flex align-items-center gap-2 mt-3 mb-2">
                    <div className="d-flex flex-column">
                      <div><strong>BikeFits:</strong></div>
                      <div>
                        <BikeFitButtons id={Number(bike.id)} />
                      </div>
                    </div>
                  </div>

                  {/* Linha de baixo: Botões de ação */}
                  <div className="d-flex justify-content-end gap-2">
                    <Button variant="success" size="sm" onClick={() => navigate(`/cliente/bike/${bike.id}/bikefit/new`)}>
                      <i className="bi bi-plus-circle" /> Criar BikeFit
                    </Button>
                    <Button variant="warning" size="sm">
                      Editar
                    </Button>
                    <Button variant="danger" size="sm">
                      Excluir
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Card.Body>
    </Card>
  );
};

export default BikesCard;
