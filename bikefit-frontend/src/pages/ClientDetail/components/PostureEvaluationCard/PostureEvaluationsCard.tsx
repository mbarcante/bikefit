import React, { useEffect } from 'react';
import { Accordion, Button, Card } from "react-bootstrap";
import usePostureEvaluationsCard from "./PostureEvaluationsCard.logic";
import { IPostureEvaluation } from '../../../../types';
import { useNavigate } from 'react-router-dom';
import PEAccordion from './components/PEAccordion';

interface clientProps {
  client: number;
}

const PostureEvaluationsCard: React.FC<clientProps> = ({ client }) => {
  const { getPostureEvaluations, pEvaluations } = usePostureEvaluationsCard(Number(client));
  const navigate = useNavigate();

  useEffect(() => {
    getPostureEvaluations();
  }, [getPostureEvaluations]);

  return (
    <Card className="my-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <Card.Title className="mb-0">Avaliações Posturais</Card.Title>
        <Button variant="success" size="sm" onClick={() => navigate("avaliacao-postural/new")} >
          <i className="bi bi-plus-circle me-1" />
          Nova Avaliação
        </Button>
      </Card.Header>
      <Card.Body as='div'>
        <Accordion>
          {pEvaluations.map((postureEvaluation: IPostureEvaluation) => (
            <PEAccordion postureEvaluation={postureEvaluation} client={client} key={postureEvaluation.id} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default PostureEvaluationsCard;