import { Optional } from 'sequelize'

export interface IPostureEvaluation {
  id?: number;
  userId: number;
  clientId: number;
  evaluationDate: Date;
  additionalInformation?: string;

  //Posture Angles
  leftQAngle?: number;
  rightQAngle?: number;
  leftHipFlexion?: number;
  rightHipFlexion?: number;
  leftForefootRotation?: number;
  rightForefootRotation?: number;
  leftRearfootRotation?: number;
  rightRearfootRotation?: number;

  //Posture Anthropometry
  leftLegLength?: number;
  rightLegLength?: number;
  weberBarstowTest?: string;
  allisGaleazziTest?: string;
  inseam: number;
  trunkAnthropometry?: number;
  upperLimbAnthropometry?: number;
  shoulderAnthropometry?: number;
  heightAnthropometry?: number;
  ischialTuberosityWidth?: number;
  headCircumferenceAnthropometry?: number;
  weightAnthropometry?: number;

  //Posture Perimetry
  leftThighCircumference8cm?: number;
  leftThighCircumference15cm?: number;
  leftThighCircumference23cm?: number;
  rightThighCircumference8cm?: number;
  rightThighCircumference15cm?: number;
  rightThighCircumference23cm?: number;
  leftCalfCircumference15cm?: number;
  rightCalfCircumference15cm?: number;

  //Posture Visual Analyses
  headAnteriorView?: string;
  headProfileView?: string;
  cervicalProfileView?: string;
  shoulderAnteriorView?: string;
  shoulderProfileView?: string;
  elbowProfileView?: string;
  thoracicProfileView?: string;
  lumbarProfileView?: string;
  pelvisAnteriorView?: string;
  pelvisProfileView?: string;
  kneeAnteriorView?: string;
  kneeProfileView?: string;
  ankleProfileView?: string;
  footProfileView?: string;
  thoracicHumpPosteriorView?: string;
  breathingPattern?: string;
  diaphragmObservation?: string;


  //Foot Measurements
  shoeSize?: number;
  leftFootSize?: number;
  rightFootSize?: number;

  //Posture Special Tests
  stiborTestBefore?: number;
  stiborTestAfter?: number;
  schoberTestBefore?: number;
  schoberTestAfter?: number;
  thomasTestRight?: number;
  thomasTestLeft?: number;
  elyTestRight?: number;
  elyTestLeft?: number;
  plankTestResult?: string;
  clarkeTestRight?: number;
  clarkeTestLeft?: number;
  adamsTestPositive?: number;
  adamsTestNegative?: number;
  nobleTestRight?: number;
  nobleTestLeft?: number;
  bonnetTestRight?: number;
  bonnetTestLeft?: number;
  lasegueTestLeft?: number;
  lasegueTestRight?: number;
  threeFingerToGroundTest?: number;
  singleLegSquatLeft?: number;
  singleLegSquatRight?: number;

}

export type IPostureEvaluationCreation = Omit<IPostureEvaluation, 'id'>