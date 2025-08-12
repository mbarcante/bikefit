import { FormField } from '../../types'

export const postureEvaluationFormFields: FormField[] = [
    // --- Informações Principais ---
    {
        name: 'clientId',
        label: 'ID do Cliente',
        type: 'number',
        required: true,
        placeholder: 'Ex: 123',
        section: 'Informações Principais'
    },
    {
        name: 'evaluationDate',
        label: 'Data da Avaliação',
        type: 'date',
        required: true,
        placeholder: 'YYYY-MM-DD',
        section: 'Informações Principais'
    },
    {
        name: 'additionalInformation',
        label: 'Informações Adicionais',
        type: 'textarea',
        placeholder: 'Detalhes relevantes sobre a avaliação...',
        section: 'Informações Principais'
    },

    // --- Ângulos Posturais ---
    {
        name: 'leftQAngle',
        label: 'Ângulo Q Esquerdo (°)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Ângulos Posturais'
    },
    {
        name: 'rightQAngle',
        label: 'Ângulo Q Direito (°)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Ângulos Posturais'
    },
    {
        name: 'leftHipFlexion',
        label: 'Flexão do Quadril Esquerda (°)',
        type: 'number',
        placeholder: 'Ex: 120',
        section: 'Ângulos Posturais'
    },
    {
        name: 'rightHipFlexion',
        label: 'Flexão do Quadril Direita (°)',
        type: 'number',
        placeholder: 'Ex: 120',
        section: 'Ângulos Posturais'
    },
    {
        name: 'leftForefootRotation',
        label: 'Rotação Anterior do Pé Esquerda (°)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Ângulos Posturais'
    },
    {
        name: 'rightForefootRotation',
        label: 'Rotação Anterior do Pé Direita (°)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Ângulos Posturais'
    },
    {
        name: 'leftRearfootRotation',
        label: 'Rotação Posterior do Pé Esquerda (°)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Ângulos Posturais'
    },
    {
        name: 'rightRearfootRotation',
        label: 'Rotação Posterior do Pé Direita (°)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Ângulos Posturais'
    },

    // --- Antropometria e Perimetria ---
    {
        name: 'leftLegLength',
        label: 'Comprimento Perna Esquerda (mm)',
        type: 'number',
        placeholder: 'Ex: 900',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'rightLegLength',
        label: 'Comprimento Perna Direita (mm)',
        type: 'number',
        placeholder: 'Ex: 900',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'weberBarstowTest',
        label: 'Teste de Weber Barstow',
        type: 'text',
        placeholder: 'Ex: Desvio para direita',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'allisGaleazziTest',
        label: 'Teste de Allis Galeazzi',
        type: 'text',
        placeholder: 'Ex: Perna direita mais curta',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'inseam',
        label: 'Inseam (mm)',
        type: 'number',
        required: true,
        placeholder: 'Ex: 850',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'trunkAnthropometry',
        label: 'Antropometria Tronco (cm)',
        type: 'number',
        placeholder: 'Ex: 75',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'upperLimbAnthropometry',
        label: 'Antropometria Membro Superior (cm)',
        type: 'number',
        placeholder: 'Ex: 70',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'shoulderAnthropometry',
        label: 'Antropometria Ombro (cm)',
        type: 'number',
        placeholder: 'Ex: 45',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'heightAnthropometry',
        label: 'Altura (cm)',
        type: 'number',
        placeholder: 'Ex: 180',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'ischialTuberosityWidth',
        label: 'Largura Tuberosidade Isquiática (mm)',
        type: 'number',
        placeholder: 'Ex: 130',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'headCircumferenceAnthropometry',
        label: 'Circunferência Cabeça (cm)',
        type: 'number',
        placeholder: 'Ex: 58',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'weightAnthropometry',
        label: 'Peso (kg)',
        type: 'number',
        placeholder: 'Ex: 75.5',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'leftThighCircumference8cm',
        label: 'Circunferência Coxa Esq (8cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 45',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'leftThighCircumference15cm',
        label: 'Circunferência Coxa Esq (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 40',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'leftThighCircumference23cm',
        label: 'Circunferência Coxa Esq (23cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 35',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'rightThighCircumference8cm',
        label: 'Circunferência Coxa Dir (8cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 45',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'rightThighCircumference15cm',
        label: 'Circunferência Coxa Dir (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 40',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'rightThighCircumference23cm',
        label: 'Circunferência Coxa Dir (23cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 35',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'leftCalfCircumference15cm',
        label: 'Circunferência Panturrilha Esq (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 30',
        section: 'Antropometria e Perimetria'
    },
    {
        name: 'rightCalfCircumference15cm',
        label: 'Circunferência Panturrilha Dir (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 30',
        section: 'Antropometria e Perimetria'
    },

    // --- Medidas do Pé ---
    {
        name: 'shoeSize',
        label: 'Tamanho do Calçado',
        type: 'number',
        placeholder: 'Ex: 42',
        section: 'Medidas do Pé'
    },
    {
        name: 'leftFootSize',
        label: 'Tamanho do Pé Esquerdo',
        type: 'number',
        placeholder: 'Ex: 27',
        section: 'Medidas do Pé'
    },
    {
        name: 'rightFootSize',
        label: 'Tamanho do Pé Direito',
        type: 'number',
        placeholder: 'Ex: 27',
        section: 'Medidas do Pé'
    },

    // --- Testes Especiais ---
    {
        name: 'stiborTestBefore',
        label: 'Teste de Stibor (Antes)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais'
    },
    {
        name: 'stiborTestAfter',
        label: 'Teste de Stibor (Depois)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Testes Especiais'
    },
    {
        name: 'schoberTestBefore',
        label: 'Teste de Schober (Antes)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais'
    },
    {
        name: 'schoberTestAfter',
        label: 'Teste de Schober (Depois)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Testes Especiais'
    },
    {
        name: 'thomasTestRight',
        label: 'Teste de Thomas (Direita)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais'
    },
    {
        name: 'thomasTestLeft',
        label: 'Teste de Thomas (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais'
    },
    {
        name: 'elyTestRight',
        label: 'Teste de Ely (Direita)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Testes Especiais'
    },
    {
        name: 'elyTestLeft',
        label: 'Teste de Ely (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Testes Especiais'
    },
    {
        name: 'plankTestResult',
        label: 'Resultado do Teste da Prancha',
        type: 'text',
        placeholder: 'Ex: 60s, forma correta',
        section: 'Testes Especiais'
    },
    {
        name: 'clarkeTestRight',
        label: 'Teste de Clarke (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'clarkeTestLeft',
        label: 'Teste de Clarke (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'adamsTestPositive',
        label: 'Teste de Adams (Positivo)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'adamsTestNegative',
        label: 'Teste de Adams (Negativo)',
        type: 'number',
        placeholder: 'Ex: 0',
        section: 'Testes Especiais'
    },
    {
        name: 'nobleTestRight',
        label: 'Teste de Noble (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'nobleTestLeft',
        label: 'Teste de Noble (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'bonnetTestRight',
        label: 'Teste de Bonnet (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'bonnetTestLeft',
        label: 'Teste de Bonnet (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'lasegueTestLeft',
        label: 'Teste de Lasegue (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'lasegueTestRight',
        label: 'Teste de Lasegue (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais'
    },
    {
        name: 'threeFingerToGroundTest',
        label: 'Teste de 3 Dedos no Chão',
        type: 'number',
        placeholder: 'Ex: 3',
        section: 'Testes Especiais'
    },
    {
        name: 'singleLegSquatLeft',
        label: 'Agachamento Unilateral Esquerdo',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais'
    },
    {
        name: 'singleLegSquatRight',
        label: 'Agachamento Unilateral Direito',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais'
    },
];