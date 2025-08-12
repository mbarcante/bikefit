import React, { useEffect } from 'react';
import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import usePostureEvaluationsCard from "./PostureEvaluationsCard.logic";
import { IPostureEvaluation } from '../../../../types';
import { useNavigate } from 'react-router-dom';
import PEAccordion from './components/PEAccordion';

interface clientProps {
  client: number;
}

// Helper function para renderizar campos de forma limpa
// const renderField = (label: string, value: any) => {
//   if (value === null || value === undefined || value === '') return null;

//   let displayValue = value;
//   if (label.includes('Data da Avaliação') && typeof value === 'string') {
//     displayValue = new Date(value).toLocaleDateString();
//   }

//   return (
//     <p className="mb-1">
//       <strong>{label}:</strong> {displayValue}
//     </p>
//   );
// };


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
        <Button variant="success" size="sm" /* onClick={() => navigate(...)} */>
          <i className="bi bi-plus-circle me-1" />
          Nova Avaliação
        </Button>
      </Card.Header>
      <Card.Body>
        <Accordion>
          {pEvaluations.map((postureEvaluation: IPostureEvaluation) => (
            <PEAccordion postureEvaluation={postureEvaluation} />
          ))}
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default PostureEvaluationsCard;