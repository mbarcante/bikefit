export interface IBikeFit {
  id: number;
  postureAvaliationId?: number;
  userId?: number;
  bikeId: number;

  // Objetivos (opcionais)
  shortTermGoal?: string; // ObjetivoCurtoPrazo
  longTermGoal?: string; // ObjetivoLongoPrazo

  // Medidas da Mesa (Stem) (todos opcionais)
  stemHeightBefore?: number; // MesaAlturaAntes
  stemHeightAfter?: number; // MesaAlturaDepois
  stemLengthBefore?: number; // MesaTamanhoAntes
  stemLengthAfter?: number; // MesaTamanhoDepois
  stemLengthImageBefore?: string; // Mudança: MesaTamanhoImagemAntes (novo campo)
  stemLengthImageAfter?: string; // MesaTamanhoImagemDepois (novo campo)
  stemAngleBefore?: number; // MesaInclinacaoAntes
  stemAngleAfter?: number; // MesaInclinacaoDepois

  // Medidas do Selim (Saddle) (todos opcionais)
  saddleLengthBefore?: number; // SelimComprimentoAntes
  saddleLengthAfter?: number; // SelimComprimentoDepois
  saddleWidthBefore?: number; // SelimLarguraAntes
  saddleWidthAfter?: number; // SelimLarguraDepois
  saddleTiltBefore?: number; // SelimInclinacaoAntes
  saddleTiltAfter?: number; // SelimInclinacaoDepois

  // Medidas do Guidão (Handlebar) (todos opcionais)
  handlebarWidthBefore?: number; // GuidaoLarguraAntes
  handlebarWidthAfter?: number; // GuidaoLarguraDepois
  handlebarRiseBefore?: number; // GuidaoRiseAntes
  handlebarRiseAfter?: number; // GuidaoRiseDepois
  handlebarReachBefore?: number; // GuidaoReachAntes
  handlebarReachAfter?: number; // GuidaoReachDepois
  handlebarDropBefore?: number; // GuidaoDropAntes
  handlebarDropAfter?: number; // GuidaoDropDepois

  // Medidas do Canote (Seatpost) (todos opcionais)
  seatpostLengthBefore?: number; // CanotTamanhoAntes
  seatpostLengthAfter?: number; // CanotTamanhoDepois
  seatpostOffsetBefore?: number; // CanotOffsetAntes
  seatpostOffsetAfter?: number; // CanotOffsetDepois

  // Ângulos Corporais (Body Angles) (todos opcionais)
  trunkUpperLimbAngleBefore?: number; // AnguloTroncoMembroSuperiorAntes
  trunkUpperLimbAngleImageBefore?: string; // AnguloTroncoMembroSuperiorImagemAntes
  trunkUpperLimbAngleAfter?: number; // AnguloTroncoMembroSuperiorDepois
  trunkUpperLimbAngleImageAfter?: string; // AnguloTroncoMembroSuperiorImagemDepois

  trunkFlexionAngleBefore?: number; // AnguloFlexaoTroncoAntes
  trunkFlexionAngleImageBefore?: string; // AnguloFlexaoTroncoImagemAntes
  trunkFlexionAngleAfter?: number; // AnguloFlexaoTroncoDepois
  trunkFlexionAngleImageAfter?: string; // AnguloFlexaoTroncoImagemDepois

  elbowFlexionAngleBefore?: number; // AnguloFlexaoCotoveloAntes
  elbowFlexionAngleImageBefore?: string; // AnguloFlexaoCotoveloImagemAntes
  elbowFlexionAngleAfter?: number; // AnguloFlexaoCotoveloDepois
  elbowFlexionAngleImageAfter?: string; // AnguloFlexaoCotoveloImagemDepois

  shoulderElbowRecoilAngleBefore?: number; // AnguloRecuoOmbroCotoveloAntes
  shoulderElbowRecoilAngleImageBefore?: string; // AnguloRecuoOmbroCotoveloImagemAntes
  shoulderElbowRecoilAngleAfter?: number; // AnguloRecuoOmbroCotoveloDepois
  shoulderElbowRecoilAngleImageAfter?: string; // AnguloRecuoOmbroCotoveloImagemDepois

  kneeFlexionAngleBefore?: number; // AnguloFlexaoJoelhoAntes
  kneeFlexionAngleImageBefore?: string; // AnguloFlexaoJoelhoImagemAntes
  kneeFlexionAngleAfter?: number; // AnguloFlexaoJoelhoDepois
  kneeFlexionAngleImageAfter?: string; // AnguloFlexaoJoelhoImagemDepois

  plantarFlexionAngleBefore?: number; // AnguloFlexaoPlantaAntes
  plantarFlexionAngleImageBefore?: string; // AnguloFlexaoPlantaImagemAntes
  plantarFlexionAngleAfter?: number; // AnguloFlexaoPlantaDepois
  plantarFlexionAngleImageAfter?: string; // AnguloFlexaoPlantaImagemDepois

  dorsiflexionAngleBefore?: number; // AnguloDorsiFlexaoAntes
  dorsiflexionAngleImageBefore?: string; // AnguloDorsiFlexaoImagemAntes
  dorsiflexionAngleAfter?: number; // AnguloDorsiFlexaoDepois
  dorsiflexionAngleImageAfter?: string; // AnguloDorsiFlexaoImagemDepois

  // K.O.P.S (Knee Over Pedal Spindle) (todos opcionais)
  kopsBefore?: number; // KopsAntes
  kopsImageBefore?: string; // KopsImagemAntes
  kopsAfter?: number; // KopsDepois
  kopsImageAfter?: string; // KopsImagemDepois

  // Pedivela (Crank Arm) (todos opcionais)
  crankArmLengthBefore?: number; // PeDeVelaTamanhoAntes
  crankArmLengthAfter?: number; // PeDeVelaTamanhoDepois
  crankArmQFactorBefore?: number; // PeDeVelaQFactorAntes
  crankArmQFactorAfter?: number; // PeDeVelaQFactorDepois

  // Mídia de Avaliação (opcionais)
  videoBefore?: string; // VideoAntes
  videoAfter?: string; // VideoDepois

  // Observações e Informações Adicionais (opcionais)
  observationBefore?: string; // ObservacaoAntes
  observationAfter?: string; // ObservacaoDepois
  additionalInformation?: string; // InformacoesAdicionais

  DtCadastro?: Date;
  updatedAt?: Date;
}

export type IBikeFitCreationPayload = Omit<IBikeFit, 'id' | 'createdAt' | 'updatedAt'>;

export type IBikeFitFormState = {
  [K in keyof IBikeFitCreationPayload]?: string | number;
};
