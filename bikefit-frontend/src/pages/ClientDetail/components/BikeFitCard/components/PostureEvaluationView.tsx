import { useEffect } from "react";
import { usePostureEvaluationView } from "./PostureEvaluationView.logic";
import { Button, Row, Col, Accordion } from "react-bootstrap";
import postureEvaluation from "../../../../../services/postureEvaluation";
import Icon from "../../../../../utils/Icons";

interface PEvaluationId {
    id: number;
}

const PostureEvaluationView: React.FC<PEvaluationId> = (id) => {
    const { getBikeFitPEvaluation, pEvaluation } = usePostureEvaluationView(Number(id));
    useEffect(() => {
        getBikeFitPEvaluation()
    }, [getBikeFitPEvaluation])


    if (!pEvaluation) {
        return null;
    }
    const eventKey = `posture-evaluation-${pEvaluation.id}`;

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
        <Accordion className="my-5" defaultActiveKey={eventKey}>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>
                    <div className="d-flex justify-content-between align-items-center w-100 pe-3">
                        <span>Detalhes da Avaliação Postural - ID: {pEvaluation.id}</span>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <h5 className="mb-3">Informações Principais</h5>
                    <Row>
                        <Col md={6}>
                            {renderField('ID do Usuário', pEvaluation.userId)}
                            {renderField('ID do Cliente', pEvaluation.clientId)}
                        </Col>
                        <Col md={6}>
                            {renderField('Data da Avaliação', pEvaluation.evaluationDate)}
                            {renderField('Informações Adicionais', pEvaluation.additionalInformation)}
                        </Col>
                    </Row>

                    <hr />
                    <h5 className="mt-4 mb-3">Ângulos Posturais</h5>
                    <Row>
                        <Col md={6}>
                            {renderField('Ângulo Q Esquerdo', pEvaluation.leftQAngle)}
                            {renderField('Flexão do Quadril Esquerda', pEvaluation.leftHipFlexion)}
                            {renderField('Rotação do Antepé Esquerda', pEvaluation.leftForefootRotation)}
                            {renderField('Rotação do Retropé Esquerda', pEvaluation.leftRearfootRotation)}
                        </Col>
                        <Col md={6}>
                            {renderField('Ângulo Q Direito', pEvaluation.rightQAngle)}
                            {renderField('Flexão do Quadril Direita', pEvaluation.rightHipFlexion)}
                            {renderField('Rotação do Antepé Direita', pEvaluation.rightForefootRotation)}
                            {renderField('Rotação do Retropé Direita', pEvaluation.rightRearfootRotation)}
                        </Col>
                    </Row>

                    <hr />
                    <h5 className="mt-4 mb-3">Antropometria Postural</h5>
                    <Row>
                        <Col md={6}>
                            {renderField('Comprimento da Perna Esquerda', pEvaluation.leftLegLength)}
                            {renderField('Teste de Weber-Barstow', pEvaluation.weberBarstowTest)}
                            {renderField('Teste de Allis-Galeazzi', pEvaluation.allisGaleazziTest)}
                            {renderField('Tronco', pEvaluation.trunkAnthropometry)}
                            {renderField('Membro Superior', pEvaluation.upperLimbAnthropometry)}
                            {renderField('Altura', pEvaluation.heightAnthropometry)}
                            {renderField('Largura da Tuberosidade Isquiática', pEvaluation.ischialTuberosityWidth)}
                        </Col>
                        <Col md={6}>
                            {renderField('Comprimento da Perna Direita', pEvaluation.rightLegLength)}
                            {renderField('Costura Interna (Inseam)', pEvaluation.inseam)}
                            {renderField('Ombro', pEvaluation.shoulderAnthropometry)}
                            {renderField('Circunferência da Cabeça', pEvaluation.headCircumferenceAnthropometry)}
                            {renderField('Peso', pEvaluation.weightAnthropometry)}
                        </Col>
                    </Row>

                    <hr />
                    <h5 className="mt-4 mb-3">Perimetria Postural</h5>
                    <Row>
                        <Col md={6}>
                            {renderField('Coxa Esquerda (8cm)', pEvaluation.leftThighCircumference8cm)}
                            {renderField('Coxa Esquerda (15cm)', pEvaluation.leftThighCircumference15cm)}
                            {renderField('Coxa Esquerda (23cm)', pEvaluation.leftThighCircumference23cm)}
                            {renderField('Panturrilha Esquerda (15cm)', pEvaluation.leftCalfCircumference15cm)}
                        </Col>
                        <Col md={6}>
                            {renderField('Coxa Direita (8cm)', pEvaluation.rightThighCircumference8cm)}
                            {renderField('Coxa Direita (15cm)', pEvaluation.rightThighCircumference15cm)}
                            {renderField('Coxa Direita (23cm)', pEvaluation.rightThighCircumference23cm)}
                            {renderField('Panturrilha Direita (15cm)', pEvaluation.rightCalfCircumference15cm)}
                        </Col>
                    </Row>

                    <hr />
                    <h5 className="mt-4 mb-3">Testes Especiais</h5>
                    <Row>
                        <Col md={6}>
                            {renderField('Teste de Stibor (Antes)', pEvaluation.stiborTestBefore)}
                            {renderField('Teste de Schober (Antes)', pEvaluation.schoberTestBefore)}
                            {renderField('Teste de Thomas (Direita)', pEvaluation.thomasTestRight)}
                            {renderField('Teste de Ely (Direita)', pEvaluation.elyTestRight)}
                            {renderField('Teste de Clarke (Direita)', pEvaluation.clarkeTestRight)}
                            {renderField('Teste de Noble (Direita)', pEvaluation.nobleTestRight)}
                            {renderField('Teste de Bonnet (Direita)', pEvaluation.bonnetTestRight)}
                            {renderField('Teste de Lasegue (Direita)', pEvaluation.lasegueTestRight)}
                            {renderField('Agachamento Unilateral (Direita)', pEvaluation.singleLegSquatRight)}
                        </Col>
                        <Col md={6}>
                            {renderField('Teste de Stibor (Depois)', pEvaluation.stiborTestAfter)}
                            {renderField('Teste de Schober (Depois)', pEvaluation.schoberTestAfter)}
                            {renderField('Teste de Thomas (Esquerda)', pEvaluation.thomasTestLeft)}
                            {renderField('Teste de Ely (Esquerda)', pEvaluation.elyTestLeft)}
                            {renderField('Teste de Clarke (Esquerda)', pEvaluation.clarkeTestLeft)}
                            {renderField('Teste de Noble (Esquerda)', pEvaluation.nobleTestLeft)}
                            {renderField('Teste de Bonnet (Esquerda)', pEvaluation.bonnetTestLeft)}
                            {renderField('Teste de Lasegue (Esquerda)', pEvaluation.lasegueTestLeft)}
                            {renderField('Agachamento Unilateral (Esquerda)', pEvaluation.singleLegSquatLeft)}
                        </Col>
                        <Col md={12}>
                            <div className="d-flex justify-content-end my-3">
                                <Button variant="warning" size="sm" className="mx-2">
                                    Editar
                                </Button>
                                <Button variant="danger" className="mx-2" size="sm">
                                    Excluir
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )

}

export default PostureEvaluationView;