export interface IArticularAngles {
  id?: number;
  type: string;
  userId?: number;
  cyclistStatus: string; // StatusCiclista

  minTrunkUpperLimbAngle: number; // AnguloTroncoMembroSuperior Min
  maxTrunkUpperLimbAngle: number; // AnguloTroncoMembroSuperior Max
  minTrunkFlexionAngle: number; // AnguloFlexaoTronco Min
  maxTrunkFlexionAngle: number; // AnguloFlexaoTronco Max
  minElbowFlexionAngle: number; // AnguloFlexaoCotovelo Min
  maxElbowFlexionAngle: number; // AnguloFlexaoCotovelo Max
  minShoulderElbowRecoilAngle: number; // AnguloRecuoOmbroCotovelo Min
  maxShoulderElbowRecoilAngle: number; // AnguloRecuoOmbroCotovelo Max
  minKneeFlexionAngle: number; // AnguloFlexaoJoelho Min
  maxKneeFlexionAngle: number; // AnguloFlexaoJoelho Max
  minPlantarFlexionAngle: number; // AnguloFlexaoPlanta Min
  maxPlantarFlexionAngle: number; // AnguloFlexaoPlanta Max

  dorsiflexionAngleBefore: number; // AnguloDorsiFlexao Antes
  dorsiflexionAngleAfter: number; // AnguloDorsiFlexao Depois
  kopsBefore: number; // Kops Antes
  kopsAfter: number; // Kops Depois
}

export type IArticularAnglesCreationAttributes = Omit<IArticularAngles, "id">;
