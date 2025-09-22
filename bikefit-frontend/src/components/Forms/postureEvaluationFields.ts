import { FormField } from 'src/types'

export const postureEvaluationFormFields: FormField[] = [
    // --- Informações Principais ---
    {
        name: 'clientId',
        label: 'ID do Cliente',
        type: 'number',
        required: true,
        placeholder: 'Ex: 123',
        section: 'Informações Principais',
        col: 2
    },
    {
        name: 'evaluationDate',
        label: 'Data da Avaliação',
        type: 'date',
        required: true,
        placeholder: 'YYYY-MM-DD',
        section: 'Informações Principais',
        col: 2
    },


    // --- Ângulos Posturais ---
    {
        name: 'leftQAngle',
        label: 'Ângulo Q Esquerdo (°)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Ângulos Posturais',
        col: 3,
    },
    {
        name: 'rightQAngle',
        label: 'Ângulo Q Direito (°)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Ângulos Posturais',
        col: 3,

    },
    {
        name: 'leftHipFlexion',
        label: 'Flexão do Quadril Esquerda (°)',
        type: 'number',
        placeholder: 'Ex: 120',
        section: 'Ângulos Posturais',
        col: 3,
    },
    {
        name: 'rightHipFlexion',
        label: 'Flexão do Quadril Direita (°)',
        type: 'number',
        placeholder: 'Ex: 120',
        section: 'Ângulos Posturais',
        col: 3,
    },
    {
        name: 'leftForefootRotation',
        label: 'Rotação Anterior do Pé Esquerda (°)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Ângulos Posturais',
        col: 3,
    },
    {
        name: 'rightForefootRotation',
        label: 'Rotação Anterior do Pé Direita (°)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Ângulos Posturais',
        col: 3,
    },
    {
        name: 'leftRearfootRotation',
        label: 'Rotação Posterior do Pé Esquerda (°)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Ângulos Posturais',
        col: 3,
    },
    {
        name: 'rightRearfootRotation',
        label: 'Rotação Posterior do Pé Direita (°)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Ângulos Posturais',
        col: 3,
    },

    // --- Antropometria e Perimetria ---
    {
        name: 'leftLegLength',
        label: 'Comprimento Perna Esquerda (mm)',
        type: 'number',
        placeholder: 'Ex: 900',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'rightLegLength',
        label: 'Comprimento Perna Direita (mm)',
        type: 'number',
        placeholder: 'Ex: 900',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'weberBarstowTest',
        label: 'Teste de Weber Barstow',
        type: 'text',
        placeholder: 'Ex: Desvio para direita',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'allisGaleazziTest',
        label: 'Teste de Allis Galeazzi',
        type: 'text',
        placeholder: 'Ex: Perna direita mais curta',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'inseam',
        label: 'Inseam (mm)',
        type: 'number',
        required: true,
        placeholder: 'Ex: 850',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'trunkAnthropometry',
        label: 'Antropometria Tronco (cm)',
        type: 'number',
        placeholder: 'Ex: 75',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'upperLimbAnthropometry',
        label: 'Antropometria Membro Superior (cm)',
        type: 'number',
        placeholder: 'Ex: 70',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'shoulderAnthropometry',
        label: 'Antropometria Ombro (cm)',
        type: 'number',
        placeholder: 'Ex: 45',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'heightAnthropometry',
        label: 'Altura (cm)',
        type: 'number',
        placeholder: 'Ex: 180',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'ischialTuberosityWidth',
        label: 'Largura Tuberosidade Isquiática (mm)',
        type: 'number',
        placeholder: 'Ex: 130',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'headCircumferenceAnthropometry',
        label: 'Circunferência Cabeça (cm)',
        type: 'number',
        placeholder: 'Ex: 58',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'weightAnthropometry',
        label: 'Peso (kg)',
        type: 'number',
        placeholder: 'Ex: 75.5',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'leftThighCircumference8cm',
        label: 'Circunferência Coxa Esq (8cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 45',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'leftThighCircumference15cm',
        label: 'Circunferência Coxa Esq (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 40',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'leftThighCircumference23cm',
        label: 'Circunferência Coxa Esq (23cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 35',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'rightThighCircumference8cm',
        label: 'Circunferência Coxa Dir (8cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 45',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'rightThighCircumference15cm',
        label: 'Circunferência Coxa Dir (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 40',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'rightThighCircumference23cm',
        label: 'Circunferência Coxa Dir (23cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 35',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'leftCalfCircumference15cm',
        label: 'Circunferência Panturrilha Esq (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 30',
        section: 'Antropometria e Perimetria',
        col: 3
    },
    {
        name: 'rightCalfCircumference15cm',
        label: 'Circunferência Panturrilha Dir (15cm) (cm)',
        type: 'number',
        placeholder: 'Ex: 30',
        section: 'Antropometria e Perimetria',
        col: 3
    },

    // --- Medidas do Pé ---
    {
        name: 'shoeSize',
        label: 'Tamanho do Calçado',
        type: 'number',
        placeholder: 'Ex: 42',
        section: 'Medidas do Pé',
        col: 4
    },
    {
        name: 'leftFootSize',
        label: 'Tamanho do Pé Esquerdo',
        type: 'number',
        placeholder: 'Ex: 27',
        section: 'Medidas do Pé',
        col: 4
    },
    {
        name: 'rightFootSize',
        label: 'Tamanho do Pé Direito',
        type: 'number',
        placeholder: 'Ex: 27',
        section: 'Medidas do Pé',
        col: 4
    },

    // --- Testes Especiais ---
    {
        name: 'stiborTestBefore',
        label: 'Teste de Stibor (Antes)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'stiborTestAfter',
        label: 'Teste de Stibor (Depois)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'schoberTestBefore',
        label: 'Teste de Schober (Antes)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'schoberTestAfter',
        label: 'Teste de Schober (Depois)',
        type: 'number',
        placeholder: 'Ex: 15',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'thomasTestRight',
        label: 'Teste de Thomas (Direita)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'thomasTestLeft',
        label: 'Teste de Thomas (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'elyTestRight',
        label: 'Teste de Ely (Direita)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'elyTestLeft',
        label: 'Teste de Ely (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 5',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'plankTestResult',
        label: 'Resultado do Teste da Prancha',
        type: 'text',
        placeholder: 'Ex: 60s, forma correta',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'clarkeTestRight',
        label: 'Teste de Clarke (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'clarkeTestLeft',
        label: 'Teste de Clarke (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'adamsTestPositive',
        label: 'Teste de Adams (Positivo)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'adamsTestNegative',
        label: 'Teste de Adams (Negativo)',
        type: 'number',
        placeholder: 'Ex: 0',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'nobleTestRight',
        label: 'Teste de Noble (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'nobleTestLeft',
        label: 'Teste de Noble (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'bonnetTestRight',
        label: 'Teste de Bonnet (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'bonnetTestLeft',
        label: 'Teste de Bonnet (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'lasegueTestLeft',
        label: 'Teste de Lasegue (Esquerda)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'lasegueTestRight',
        label: 'Teste de Lasegue (Direita)',
        type: 'number',
        placeholder: 'Ex: 1',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'threeFingerToGroundTest',
        label: 'Teste de 3 Dedos no Chão',
        type: 'number',
        placeholder: 'Ex: 3',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'singleLegSquatLeft',
        label: 'Agachamento Unilateral Esquerdo',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'singleLegSquatRight',
        label: 'Agachamento Unilateral Direito',
        type: 'number',
        placeholder: 'Ex: 10',
        section: 'Testes Especiais',
        col: 3
    },
    {
        name: 'additionalInformation',
        label: 'Informações Adicionais',
        type: 'textarea',
        placeholder: 'Detalhes relevantes sobre a avaliação...',
        section: 'Informações Adicionais'
    },
];