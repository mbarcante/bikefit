import { FormField } from '../../types'; // Adjust path as needed

export const bikeFitFields: FormField[] = [
  // --- Informações Principais (Requeridas) ---
  { name: 'bikeId', label: 'ID da Bicicleta', type: 'number', required: true, placeholder: 'Ex: 1', col: 6 },
  {
    name: 'postureAvaliationId',
    label: 'ID da Avaliação Postural',
    type: 'number',
    required: true,
    placeholder: 'Ex: 1',
    col: 6,
  },
  { name: 'userId', label: 'ID do Usuário (Opcional)', type: 'number', required: false, placeholder: 'Ex: 10', col: 6 },

  // --- Objetivos (Opcionais) ---
  {
    name: 'shortTermGoal',
    label: 'Meta de Curto Prazo',
    type: 'textarea',
    placeholder: 'Descreva a meta...',
    col: 12,
    rows: 2,
  },
  {
    name: 'longTermGoal',
    label: 'Meta de Longo Prazo',
    type: 'textarea',
    placeholder: 'Descreva a meta...',
    col: 12,
    rows: 2,
  },

  // --- Medidas da Mesa (Stem) ---
  { name: 'stemHeightBefore', label: 'Altura do Avanço (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'stemHeightAfter', label: 'Altura do Avanço (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'stemLengthBefore', label: 'Comprimento do Avanço (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'stemLengthAfter', label: 'Comprimento do Avanço (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'stemAngleBefore', label: 'Inclinação do Avanço (Antes)', type: 'number', placeholder: 'graus', col: 6 },
  { name: 'stemAngleAfter', label: 'Inclinação do Avanço (Depois)', type: 'number', placeholder: 'graus', col: 6 },
  { name: 'stemLengthImageBefore', label: 'Imagem da Altura do Avanço (Antes)', type: 'file', col: 6 },
  { name: 'stemLengthImageAfter', label: 'Imagem da Altura do Avanço (Depois)', type: 'file', col: 6 },

  // --- Medidas do Selim (Saddle) ---
  { name: 'saddleLengthBefore', label: 'Comprimento do Selim (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'saddleLengthAfter', label: 'Comprimento do Selim (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'saddleWidthBefore', label: 'Largura do Selim (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'saddleWidthAfter', label: 'Largura do Selim (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'saddleTiltBefore', label: 'Inclinação do Selim (Antes)', type: 'number', placeholder: 'graus', col: 6 },
  { name: 'saddleTiltAfter', label: 'Inclinação do Selim (Depois)', type: 'number', placeholder: 'graus', col: 6 },

  // --- Medidas do Guidão (Handlebar) ---
  { name: 'handlebarWidthBefore', label: 'Largura do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarWidthAfter', label: 'Largura do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarRiseBefore', label: 'Rise do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarRiseAfter', label: 'Rise do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarReachBefore', label: 'Reach do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarReachAfter', label: 'Reach do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarDropBefore', label: 'Drop do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'handlebarDropAfter', label: 'Drop do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 6 },

  // --- Medidas do Canote (Seatpost) ---
  { name: 'seatpostLengthBefore', label: 'Comprimento do Canote (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'seatpostLengthAfter', label: 'Comprimento do Canote (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'seatpostOffsetBefore', label: 'Offset do Canote (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'seatpostOffsetAfter', label: 'Offset do Canote (Depois)', type: 'number', placeholder: 'mm', col: 6 },

  // --- Ângulos Corporais (Body Angles) ---
  {
    name: 'trunkUpperLimbAngleBefore',
    label: 'Ângulo Tronco/Membro Superior (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'trunkUpperLimbAngleAfter',
    label: 'Ângulo Tronco/Membro Superior (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'trunkUpperLimbAngleImageBefore',
    label: 'Imagem do Ângulo Tronco/Membro Superior (Antes)',
    type: 'file',
    col: 6,
  },
  {
    name: 'trunkUpperLimbAngleImageAfter',
    label: 'Imagem do Ângulo Tronco/Membro Superior (Depois)',
    type: 'file',
    col: 6,
  },
  {
    name: 'trunkFlexionAngleBefore',
    label: 'Ângulo de Flexão do Tronco (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'trunkFlexionAngleAfter',
    label: 'Ângulo de Flexão do Tronco (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  { name: 'trunkFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão do Tronco (Antes)', type: 'file', col: 6 },
  { name: 'trunkFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão do Tronco (Depois)', type: 'file', col: 6 },
  {
    name: 'elbowFlexionAngleBefore',
    label: 'Ângulo de Flexão do Cotovelo (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'elbowFlexionAngleAfter',
    label: 'Ângulo de Flexão do Cotovelo (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'elbowFlexionAngleImageBefore',
    label: 'Imagem do Ângulo de Flexão do Cotovelo (Antes)',
    type: 'file',
    col: 6,
  },
  {
    name: 'elbowFlexionAngleImageAfter',
    label: 'Imagem do Ângulo de Flexão do Cotovelo (Depois)',
    type: 'file',
    col: 6,
  },
  {
    name: 'shoulderElbowRecoilAngleBefore',
    label: 'Ângulo de Recuo do Ombro/Cotovelo (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'shoulderElbowRecoilAngleAfter',
    label: 'Ângulo de Recuo do Ombro/Cotovelo (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'shoulderElbowRecoilAngleImageBefore',
    label: 'Imagem do Ângulo de Recuo do Ombro/Cotovelo (Antes)',
    type: 'file',
    col: 6,
  },
  {
    name: 'shoulderElbowRecoilAngleImageAfter',
    label: 'Imagem do Ângulo de Recuo do Ombro/Cotovelo (Depois)',
    type: 'file',
    col: 6,
  },
  {
    name: 'kneeFlexionAngleBefore',
    label: 'Ângulo de Flexão do Joelho (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'kneeFlexionAngleAfter',
    label: 'Ângulo de Flexão do Joelho (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  { name: 'kneeFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão do Joelho (Antes)', type: 'file', col: 6 },
  { name: 'kneeFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão do Joelho (Depois)', type: 'file', col: 6 },
  {
    name: 'plantarFlexionAngleBefore',
    label: 'Ângulo de Flexão Plantar (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'plantarFlexionAngleAfter',
    label: 'Ângulo de Flexão Plantar (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  { name: 'plantarFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão Plantar (Antes)', type: 'file', col: 6 },
  { name: 'plantarFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão Plantar (Depois)', type: 'file', col: 6 },
  {
    name: 'dorsiflexionAngleBefore',
    label: 'Ângulo de Dorsiflexão (Antes)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  {
    name: 'dorsiflexionAngleAfter',
    label: 'Ângulo de Dorsiflexão (Depois)',
    type: 'number',
    placeholder: 'graus',
    col: 6,
  },
  { name: 'dorsiflexionAngleImageBefore', label: 'Imagem do Ângulo de Dorsiflexão (Antes)', type: 'file', col: 6 },
  { name: 'dorsiflexionAngleImageAfter', label: 'Imagem do Ângulo de Dorsiflexão (Depois)', type: 'file', col: 6 },

  // --- K.O.P.S (Knee Over Pedal Spindle) ---
  { name: 'kopsBefore', label: 'K.O.P.S (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'kopsAfter', label: 'K.O.P.S (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'kopsImageBefore', label: 'Imagem do K.O.P.S (Antes)', type: 'file', col: 6 },
  { name: 'kopsImageAfter', label: 'Imagem do K.O.P.S (Depois)', type: 'file', col: 6 },

  // --- Pedivela (Crank Arm) ---
  { name: 'crankArmLengthBefore', label: 'Comprimento do Pedivela (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'crankArmLengthAfter', label: 'Comprimento do Pedivela (Depois)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'crankArmQFactorBefore', label: 'Q-Factor do Pedivela (Antes)', type: 'number', placeholder: 'mm', col: 6 },
  { name: 'crankArmQFactorAfter', label: 'Q-Factor do Pedivela (Depois)', type: 'number', placeholder: 'mm', col: 6 },

  // --- Mídia de Avaliação ---
  { name: 'videoBefore', label: 'Vídeo (Antes)', type: 'file', col: 6 },
  { name: 'videoAfter', label: 'Vídeo (Depois)', type: 'file', col: 6 },

  // --- Observações e Informações Adicionais ---
  {
    name: 'observationBefore',
    label: 'Observação (Antes)',
    type: 'textarea',
    placeholder: 'Observações sobre o estado inicial...',
    col: 12,
    rows: 3,
  },
  {
    name: 'observationAfter',
    label: 'Observação (Depois)',
    type: 'textarea',
    placeholder: 'Observações sobre o estado final...',
    col: 12,
    rows: 3,
  },
  {
    name: 'additionalInformation',
    label: 'Informações Adicionais',
    type: 'textarea',
    placeholder: 'Outras informações relevantes...',
    col: 12,
    rows: 3,
  },
];
