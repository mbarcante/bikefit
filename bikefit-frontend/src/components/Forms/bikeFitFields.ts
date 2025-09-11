import { FormField } from 'src/types'; // Adjust path as needed

export const bikeFitFields: FormField[] = [
  // --- Informações Principais (Requeridas) ---
  { section: 'Informações Principais', name: 'bikeId', label: 'ID da Bicicleta', type: 'number', required: true, placeholder: 'Ex: 1', col: 2 },
  { section: 'Informações Principais', name: 'postureAvaliationId', label: 'ID da Avaliação Postural', type: 'number', required: true, placeholder: 'Ex: 1', col: 2, },
  { section: 'Informações Principais', name: 'userId', label: 'ID do Usuário', type: 'number', required: false, placeholder: 'Ex: 10', col: 2 },



  // --- Medidas da Mesa (Stem) ---
  { section: 'Medidas da Mesa(Stem)', name: 'stemHeightBefore', label: 'Altura do Avanço (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemHeightAfter', label: 'Altura do Avanço (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemLengthBefore', label: 'Comprimento do Avanço (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemLengthAfter', label: 'Comprimento do Avanço (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemAngleBefore', label: 'Inclinação do Avanço (Antes)', type: 'number', placeholder: 'graus', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemAngleAfter', label: 'Inclinação do Avanço (Depois)', type: 'number', placeholder: 'graus', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemLengthImageBefore', label: 'Imagem da Altura do Avanço (Antes)', type: 'file', col: 3 },
  { section: 'Medidas da Mesa(Stem)', name: 'stemLengthImageAfter', label: 'Imagem da Altura do Avanço (Depois)', type: 'file', col: 3 },

  // --- Medidas do Selim (Saddle) ---
  { section: 'Medidas do Selim (Saddle)', name: 'saddleLengthBefore', label: 'Comprimento do Selim (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Selim (Saddle)', name: 'saddleLengthAfter', label: 'Comprimento do Selim (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Selim (Saddle)', name: 'saddleWidthBefore', label: 'Largura do Selim (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Selim (Saddle)', name: 'saddleWidthAfter', label: 'Largura do Selim (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Selim (Saddle)', name: 'saddleTiltBefore', label: 'Inclinação do Selim (Antes)', type: 'number', placeholder: 'graus', col: 3 },
  { section: 'Medidas do Selim (Saddle)', name: 'saddleTiltAfter', label: 'Inclinação do Selim (Depois)', type: 'number', placeholder: 'graus', col: 3 },

  // --- Medidas do Guidão (Handlebar) ---
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarWidthBefore', label: 'Largura do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarWidthAfter', label: 'Largura do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarRiseBefore', label: 'Rise do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarRiseAfter', label: 'Rise do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarReachBefore', label: 'Reach do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarReachAfter', label: 'Reach do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarDropBefore', label: 'Drop do Guidão (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Guidão (Handlebar)', name: 'handlebarDropAfter', label: 'Drop do Guidão (Depois)', type: 'number', placeholder: 'mm', col: 3 },

  // --- Medidas do Canote (Seatpost) ---
  { section: 'Medidas do Canote (Seatpost)', name: 'seatpostLengthBefore', label: 'Comprimento do Canote (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Canote (Seatpost)', name: 'seatpostLengthAfter', label: 'Comprimento do Canote (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Canote (Seatpost)', name: 'seatpostOffsetBefore', label: 'Offset do Canote (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Medidas do Canote (Seatpost)', name: 'seatpostOffsetAfter', label: 'Offset do Canote (Depois)', type: 'number', placeholder: 'mm', col: 3 },

  // --- Ângulos Corporais (Body Angles) ---
  { section: 'Ângulos Corporais', name: 'trunkUpperLimbAngleBefore', label: 'Ângulo Tronco/Membro Superior (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'trunkUpperLimbAngleAfter', label: 'Ângulo Tronco/Membro Superior (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'trunkUpperLimbAngleImageBefore', label: 'Imagem do Ângulo Tronco/Membro Superior (Antes)', type: 'file', col: 4, },
  { section: 'Ângulos Corporais', name: 'trunkUpperLimbAngleImageAfter', label: 'Imagem do Ângulo Tronco/Membro Superior (Depois)', type: 'file', col: 4, },
  { section: 'Ângulos Corporais', name: 'trunkFlexionAngleBefore', label: 'Ângulo de Flexão do Tronco (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'trunkFlexionAngleAfter', label: 'Ângulo de Flexão do Tronco (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'trunkFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão do Tronco (Antes)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'trunkFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão do Tronco (Depois)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'elbowFlexionAngleBefore', label: 'Ângulo de Flexão do Cotovelo (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'elbowFlexionAngleAfter', label: 'Ângulo de Flexão do Cotovelo (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'elbowFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão do Cotovelo (Antes)', type: 'file', col: 4, },
  { section: 'Ângulos Corporais', name: 'elbowFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão do Cotovelo (Depois)', type: 'file', col: 4, },
  { section: 'Ângulos Corporais', name: 'shoulderElbowRecoilAngleBefore', label: 'Ângulo de Recuo do Ombro/Cotovelo (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'shoulderElbowRecoilAngleAfter', label: 'Ângulo de Recuo do Ombro/Cotovelo (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'shoulderElbowRecoilAngleImageBefore', label: 'Imagem do Ângulo de Recuo do Ombro/Cotovelo (Antes)', type: 'file', col: 4, },
  { section: 'Ângulos Corporais', name: 'shoulderElbowRecoilAngleImageAfter', label: 'Imagem do Ângulo de Recuo do Ombro/Cotovelo (Depois)', type: 'file', col: 4, },
  { section: 'Ângulos Corporais', name: 'kneeFlexionAngleBefore', label: 'Ângulo de Flexão do Joelho (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'kneeFlexionAngleAfter', label: 'Ângulo de Flexão do Joelho (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'kneeFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão do Joelho (Antes)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'kneeFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão do Joelho (Depois)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'plantarFlexionAngleBefore', label: 'Ângulo de Flexão Plantar (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'plantarFlexionAngleAfter', label: 'Ângulo de Flexão Plantar (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'plantarFlexionAngleImageBefore', label: 'Imagem do Ângulo de Flexão Plantar (Antes)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'plantarFlexionAngleImageAfter', label: 'Imagem do Ângulo de Flexão Plantar (Depois)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'dorsiflexionAngleBefore', label: 'Ângulo de Dorsiflexão (Antes)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'dorsiflexionAngleAfter', label: 'Ângulo de Dorsiflexão (Depois)', type: 'number', placeholder: 'graus', col: 4, },
  { section: 'Ângulos Corporais', name: 'dorsiflexionAngleImageBefore', label: 'Imagem do Ângulo de Dorsiflexão (Antes)', type: 'file', col: 4 },
  { section: 'Ângulos Corporais', name: 'dorsiflexionAngleImageAfter', label: 'Imagem do Ângulo de Dorsiflexão (Depois)', type: 'file', col: 4 },

  // --- K.O.P.S (Knee Over Pedal Spindle) ---
  { section: 'K.O.P.S', name: 'kopsBefore', label: 'K.O.P.S (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'K.O.P.S', name: 'kopsAfter', label: 'K.O.P.S (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'K.O.P.S', name: 'kopsImageBefore', label: 'Imagem do K.O.P.S (Antes)', type: 'file', col: 3 },
  { section: 'K.O.P.S', name: 'kopsImageAfter', label: 'Imagem do K.O.P.S (Depois)', type: 'file', col: 3 },

  // --- Pedivela (Crank Arm) ---
  { section: 'Pedivela', name: 'crankArmLengthBefore', label: 'Comprimento do Pedivela (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Pedivela', name: 'crankArmLengthAfter', label: 'Comprimento do Pedivela (Depois)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Pedivela', name: 'crankArmQFactorBefore', label: 'Q-Factor do Pedivela (Antes)', type: 'number', placeholder: 'mm', col: 3 },
  { section: 'Pedivela', name: 'crankArmQFactorAfter', label: 'Q-Factor do Pedivela (Depois)', type: 'number', placeholder: 'mm', col: 3 },

  // --- Mídia de Avaliação ---
  { section: 'Mídia de Avaliação', name: 'videoBefore', label: 'Vídeo (Antes)', type: 'file', col: 3 },
  { section: 'Mídia de Avaliação', name: 'videoAfter', label: 'Vídeo (Depois)', type: 'file', col: 3 },


  // --- Objetivos (Opcionais) ---
  { section: 'Objetivos', name: 'shortTermGoal', label: 'Meta de Curto Prazo', type: 'textarea', placeholder: 'Descreva a meta...', col: 12, rows: 2, },
  { section: 'Objetivos', name: 'longTermGoal', label: 'Meta de Longo Prazo', type: 'textarea', placeholder: 'Descreva a meta...', col: 12, rows: 2, },
  // --- Observações  ---
  { section: 'Observações', name: 'observationBefore', label: 'Observação (Antes)', type: 'textarea', placeholder: 'Observações sobre o estado inicial...', col: 12, rows: 3, },
  { section: 'Observações', name: 'observationAfter', label: 'Observação (Depois)', type: 'textarea', placeholder: 'Observações sobre o estado final...', col: 12, rows: 3, },
  // --- Informações Adicionais ---
  { section: 'Informações Adicionais', name: 'additionalInformation', label: 'Informações Adicionais', type: 'textarea', placeholder: 'Outras informações relevantes...', col: 12, rows: 3, },
];
