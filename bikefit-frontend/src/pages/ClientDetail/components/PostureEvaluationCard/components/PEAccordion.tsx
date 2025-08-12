import React from 'react';
import { Accordion, Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { IPostureEvaluation } from '../../../../../types';

interface PostureEvaluationAccordionItemProps {
    postureEvaluation: IPostureEvaluation;
}

// Helper function para renderizar campos de forma limpa
const renderField = (label: string, value: any, unit?: string) => {
    if (value === null || value === undefined || value === '') return null;

    let displayValue = value;
    if (label.includes('Data da Avaliação') && typeof value === 'string') {
        displayValue = new Date(value).toLocaleDateString();
    }

    return (
        <p className="mb-1">
            <strong>{label}:</strong> {displayValue} {unit}
        </p>
    );
};

const PEAccordion: React.FC<PostureEvaluationAccordionItemProps> = ({ postureEvaluation }) => {
    const navigate = useNavigate();

    return (
        <Accordion.Item eventKey={String(postureEvaluation.id)} key={postureEvaluation.id}>
            <Accordion.Header>
                <div className="d-flex justify-content-between align-items-center w-100 pe-3">
                    <h6 className="mb-0">
                        Avaliação Postural - ID: {postureEvaluation.id} ({postureEvaluation.evaluationDate ? new Date(postureEvaluation.evaluationDate).toLocaleDateString() : 'N/A'})
                    </h6>
                    <div className="d-flex gap-2">
                        <Button variant="warning" size="sm">
                            <i className="bi bi-pencil-square" />
                        </Button>
                        <Button variant="danger" size="sm">
                            <i className="bi bi-trash" />
                        </Button>
                    </div>
                </div>
            </Accordion.Header>

            <Accordion.Body>
                <h6 className="mt-2">Informações Principais</h6>
                <Row>
                    <Col md={6}>
                        {renderField('ID do Usuário', postureEvaluation.userId)}
                        {renderField('ID do Cliente', postureEvaluation.clientId)}
                    </Col>
                    <Col md={6}>
                        {renderField('Data da Avaliação', postureEvaluation.evaluationDate)}
                        {renderField('Informações Adicionais', postureEvaluation.additionalInformation)}
                    </Col>
                </Row>

                <hr />
                <h6 className="mt-4">Ângulos Posturais</h6>
                <Row>
                    <Col md={6}>
                        {renderField('Ângulo Q Esquerdo', postureEvaluation.leftQAngle, '°')}
                        {renderField('Flexão do Quadril Esquerda', postureEvaluation.leftHipFlexion, '°')}
                        {renderField('Rotação Anterior do Pé Esquerda', postureEvaluation.leftForefootRotation, '°')}
                        {renderField('Rotação Posterior do Pé Esquerda', postureEvaluation.leftRearfootRotation, '°')}
                    </Col>
                    <Col md={6}>
                        {renderField('Ângulo Q Direito', postureEvaluation.rightQAngle, '°')}
                        {renderField('Flexão do Quadril Direita', postureEvaluation.rightHipFlexion, '°')}
                        {renderField('Rotação Anterior do Pé Direita', postureEvaluation.rightForefootRotation, '°')}
                        {renderField('Rotação Posterior do Pé Direita', postureEvaluation.rightRearfootRotation, '°')}
                    </Col>
                </Row>

                <hr />
                <h6 className="mt-4">Antropometria</h6>
                <Row>
                    <Col md={6}>
                        {renderField('Comprimento Perna Esquerda', postureEvaluation.leftLegLength, 'mm')}
                        {renderField('Comprimento Perna Direita', postureEvaluation.rightLegLength, 'mm')}
                        {renderField('Teste de Weber Barstow', postureEvaluation.weberBarstowTest)}
                        {renderField('Teste de Allis Galeazzi', postureEvaluation.allisGaleazziTest)}
                        {renderField('Inseam', postureEvaluation.inseam, 'mm')}
                        {renderField('Circunferência do Tronco', postureEvaluation.trunkAnthropometry, 'cm')}
                        {renderField('Circunferência do Membro Superior', postureEvaluation.upperLimbAnthropometry, 'cm')}
                    </Col>
                    <Col md={6}>
                        {renderField('Circunferência do Ombro', postureEvaluation.shoulderAnthropometry, 'cm')}
                        {renderField('Altura', postureEvaluation.heightAnthropometry, 'cm')}
                        {renderField('Largura do Tubérculo Isquiático', postureEvaluation.ischialTuberosityWidth, 'mm')}
                        {renderField('Circunferência da Cabeça', postureEvaluation.headCircumferenceAnthropometry, 'cm')}
                        {renderField('Peso', postureEvaluation.weightAnthropometry, 'kg')}
                    </Col>
                </Row>

                <hr />
                <h6 className="mt-4">Perimetria</h6>
                <Row>
                    <Col md={6}>
                        {renderField('Circunferência Coxa Esquerda (8cm)', postureEvaluation.leftThighCircumference8cm, 'cm')}
                        {renderField('Circunferência Coxa Esquerda (15cm)', postureEvaluation.leftThighCircumference15cm, 'cm')}
                        {renderField('Circunferência Coxa Esquerda (23cm)', postureEvaluation.leftThighCircumference23cm, 'cm')}
                        {renderField('Circunferência Panturrilha Esquerda (15cm)', postureEvaluation.leftCalfCircumference15cm, 'cm')}
                    </Col>
                    <Col md={6}>
                        {renderField('Circunferência Coxa Direita (8cm)', postureEvaluation.rightThighCircumference8cm, 'cm')}
                        {renderField('Circunferência Coxa Direita (15cm)', postureEvaluation.rightThighCircumference15cm, 'cm')}
                        {renderField('Circunferência Coxa Direita (23cm)', postureEvaluation.rightThighCircumference23cm, 'cm')}
                        {renderField('Circunferência Panturrilha Direita (15cm)', postureEvaluation.rightCalfCircumference15cm, 'cm')}
                    </Col>
                </Row>

                <hr />
                <h6 className="mt-4">Medidas do Pé</h6>
                <Row>
                    <Col md={6}>
                        {renderField('Tamanho do Calçado', postureEvaluation.shoeSize)}
                        {renderField('Tamanho do Pé Esquerdo', postureEvaluation.leftFootSize)}
                    </Col>
                    <Col md={6}>
                        {renderField('Tamanho do Pé Direito', postureEvaluation.rightFootSize)}
                    </Col>
                </Row>

                <hr />
                <h6 className="mt-4">Testes Especiais</h6>
                <Row>
                    <Col md={6}>
                        {renderField('Teste de Stibor (Antes)', postureEvaluation.stiborTestBefore)}
                        {renderField('Teste de Stibor (Depois)', postureEvaluation.stiborTestAfter)}
                        {renderField('Teste de Schober (Antes)', postureEvaluation.schoberTestBefore)}
                        {renderField('Teste de Schober (Depois)', postureEvaluation.schoberTestAfter)}
                        {renderField('Teste de Thomas (Direita)', postureEvaluation.thomasTestRight)}
                        {renderField('Teste de Thomas (Esquerda)', postureEvaluation.thomasTestLeft)}
                        {renderField('Teste de Ely (Direita)', postureEvaluation.elyTestRight)}
                        {renderField('Teste de Ely (Esquerda)', postureEvaluation.elyTestLeft)}
                        {renderField('Resultado do Teste da Prancha', postureEvaluation.plankTestResult)}
                        {renderField('Teste de Clarke (Direita)', postureEvaluation.clarkeTestRight)}
                        {renderField('Teste de Clarke (Esquerda)', postureEvaluation.clarkeTestLeft)}
                    </Col>
                    <Col md={6}>
                        {renderField('Teste de Adams (Positivo)', postureEvaluation.adamsTestPositive)}
                        {renderField('Teste de Adams (Negativo)', postureEvaluation.adamsTestNegative)}
                        {renderField('Teste de Noble (Direita)', postureEvaluation.nobleTestRight)}
                        {renderField('Teste de Noble (Esquerda)', postureEvaluation.nobleTestLeft)}
                        {renderField('Teste de Bonnet (Direita)', postureEvaluation.bonnetTestRight)}
                        {renderField('Teste de Bonnet (Esquerda)', postureEvaluation.bonnetTestLeft)}
                        {renderField('Teste de Lasegue (Esquerda)', postureEvaluation.lasegueTestLeft)}
                        {renderField('Teste de Lasegue (Direita)', postureEvaluation.lasegueTestRight)}
                        {renderField('Teste de 3 Dedos no Chão', postureEvaluation.threeFingerToGroundTest)}
                        {renderField('Agachamento Unilateral Esquerdo', postureEvaluation.singleLegSquatLeft)}
                        {renderField('Agachamento Unilateral Direito', postureEvaluation.singleLegSquatRight)}
                    </Col>
                </Row>

                {/* Linha de baixo: Botões de ação */}
                <div className="d-flex justify-content-end gap-2 mt-3">
                    <Button variant="warning" size="sm">
                        Editar
                    </Button>
                    <Button variant="danger" size="sm">
                        Excluir
                    </Button>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default PEAccordion;