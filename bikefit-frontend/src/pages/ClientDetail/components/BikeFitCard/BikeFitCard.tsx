import React from 'react';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import { useBikeFits } from '../../../../context/BikeFitContext';
import { useNavigate } from 'react-router-dom';
import PostureEvaluation from '../../../../services/postureEvaluation';
import PostureEvaluationView from './components/PostureEvaluationView';

const BikeFitCard: React.FC = () => {
  const { bikefit } = useBikeFits();
  const navigate = useNavigate();

  if (!bikefit) {
    return null;
  }

  const renderField = (label: string, value: any) => {
    if (!value) return null;

    let displayValue = value;
    if (label.includes('Cadastro') && value instanceof Date) {
      displayValue = value.toLocaleDateString();
    }

    return (
      <p className="mb-1">
        <strong>{label}:</strong> {displayValue}
      </p>
    );
  };

  return (
    <Card className="my-3" key={bikefit.id}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4>Detalhes do BikeFit - ID: {bikefit.id}</h4>
        <div>
          <Button variant="warning" size="sm" className="mx-2" onClick={() => navigate(`/cliente/bike/bikefit/${bikefit.bikeId}`, { state: bikefit })}>
            Editar
          </Button>
          <Button variant="danger" className="mx-2" size="sm">
            Excluir
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        <h5 className="mb-3">Informações Principais</h5>
        <Row>
          <Col md={6}>
            {renderField('ID da Bicicleta', bikefit.bikeId)}
            {renderField('ID da Avaliação Postural', bikefit.postureAvaliationId)}
            {renderField('ID do Usuário', bikefit.userId)}
          </Col>
          <Col md={6}>
            {renderField('Cadastro', bikefit.DtCadastro)}
            {renderField('Atualizado em', bikefit.updatedAt)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">Objetivos</h5>
        <Row>
          <Col md={6}>
            {renderField('Meta de Curto Prazo', bikefit.shortTermGoal)}
          </Col>
          <Col md={6}>
            {renderField('Meta de Longo Prazo', bikefit.longTermGoal)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">Medidas da Mesa (Stem)</h5>
        <Row>
          <Col md={6}>
            {renderField('Altura do Avanço (Antes)', bikefit.stemHeightBefore)}
            {renderField('Comprimento do Avanço (Antes)', bikefit.stemLengthBefore)}
            {renderField('Inclinação do Avanço (Antes)', bikefit.stemAngleBefore)}
            {renderField('Imagem da Altura do Avanço (Antes)', bikefit.stemLengthImageBefore)}
          </Col>
          <Col md={6}>
            {renderField('Altura do Avanço (Depois)', bikefit.stemHeightAfter)}
            {renderField('Comprimento do Avanço (Depois)', bikefit.stemLengthAfter)}
            {renderField('Inclinação do Avanço (Depois)', bikefit.stemAngleAfter)}
            {renderField('Imagem da Altura do Avanço (Depois)', bikefit.stemLengthImageAfter)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">Medidas do Selim (Saddle)</h5>
        <Row>
          <Col md={6}>
            {renderField('Comprimento do Selim (Antes)', bikefit.saddleLengthBefore)}
            {renderField('Largura do Selim (Antes)', bikefit.saddleWidthBefore)}
            {renderField('Inclinação do Selim (Antes)', bikefit.saddleTiltBefore)}
          </Col>
          <Col md={6}>
            {renderField('Comprimento do Selim (Depois)', bikefit.saddleLengthAfter)}
            {renderField('Largura do Selim (Depois)', bikefit.saddleWidthAfter)}
            {renderField('Inclinação do Selim (Depois)', bikefit.saddleTiltAfter)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">Ângulos Corporais</h5>
        <Row>
          <Col md={6}>
            {renderField('Ângulo de Flexão do Joelho (Antes)', bikefit.kneeFlexionAngleBefore)}
            {renderField('Imagem do Ângulo de Flexão do Joelho (Antes)', bikefit.kneeFlexionAngleImageBefore)}
            {renderField('Ângulo de Flexão Plantar (Antes)', bikefit.plantarFlexionAngleBefore)}
            {renderField('Imagem do Ângulo de Flexão Plantar (Antes)', bikefit.plantarFlexionAngleImageBefore)}
          </Col>
          <Col md={6}>
            {renderField('Ângulo de Flexão do Joelho (Depois)', bikefit.kneeFlexionAngleAfter)}
            {renderField('Imagem do Ângulo de Flexão do Joelho (Depois)', bikefit.kneeFlexionAngleImageAfter)}
            {renderField('Ângulo de Flexão Plantar (Depois)', bikefit.plantarFlexionAngleAfter)}
            {renderField('Imagem do Ângulo de Flexão Plantar (Depois)', bikefit.plantarFlexionAngleImageAfter)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">K.O.P.S</h5>
        <Row>
          <Col md={6}>
            {renderField('K.O.P.S (Antes)', bikefit.kopsBefore)}
            {renderField('Imagem do K.O.P.S (Antes)', bikefit.kopsImageBefore)}
          </Col>
          <Col md={6}>
            {renderField('K.O.P.S (Depois)', bikefit.kopsAfter)}
            {renderField('Imagem do K.O.P.S (Depois)', bikefit.kopsImageAfter)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">Mídia de Avaliação</h5>
        <Row>
          <Col md={6}>
            {renderField('Vídeo (Antes)', bikefit.videoBefore)}
            {renderField('Ângulo Tronco/Membro Superior (Antes)', bikefit.trunkUpperLimbAngleImageBefore)}
            {renderField('Ângulo de Flexão do Cotovelo (Antes)', bikefit.elbowFlexionAngleImageBefore)}
            {renderField('Ângulo de Recuo do Ombro/Cotovelo (Antes)', bikefit.shoulderElbowRecoilAngleImageBefore)}
          </Col>
          <Col md={6}>
            {renderField('Vídeo (Depois)', bikefit.videoAfter)}
            {renderField('Ângulo Tronco/Membro Superior (Depois)', bikefit.trunkUpperLimbAngleImageAfter)}
            {renderField('Ângulo de Flexão do Cotovelo (Depois)', bikefit.elbowFlexionAngleImageAfter)}
            {renderField('Ângulo de Recuo do Ombro/Cotovelo (Depois)', bikefit.shoulderElbowRecoilAngleImageAfter)}
          </Col>
        </Row>

        <hr />
        <h5 className="mt-4 mb-3">Observações</h5>
        <Row>
          <Col md={12}>
            {renderField('Observação (Antes)', bikefit.observationBefore)}
            {renderField('Observação (Depois)', bikefit.observationAfter)}
            {renderField('Informações Adicionais', bikefit.additionalInformation)}
          </Col>
        </Row>
        <Row>
          <PostureEvaluationView id={Number(bikefit.postureAvaliationId)} />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BikeFitCard;