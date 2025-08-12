export interface IPostureEvaluation {
    id?: number;
    userId?: number | null;
    clientId: number;
    evaluationDate: Date;
    additionalInformation?: string | null;

    //Posture Angles
    leftQAngle?: number | null;
    rightQAngle?: number | null;
    leftHipFlexion?: number | null;
    rightHipFlexion?: number | null;
    leftForefootRotation?: number | null;
    rightForefootRotation?: number | null;
    leftRearfootRotation?: number | null;
    rightRearfootRotation?: number | null;

    //Posture Anthropometry
    leftLegLength?: number | null;
    rightLegLength?: number | null;
    weberBarstowTest?: string | null;
    allisGaleazziTest?: string | null;
    inseam: number | null;
    trunkAnthropometry?: number | null;
    upperLimbAnthropometry?: number | null;
    shoulderAnthropometry?: number | null;
    heightAnthropometry?: number | null;
    ischialTuberosityWidth?: number | null;
    headCircumferenceAnthropometry?: number | null;
    weightAnthropometry?: number | null;

    //Posture Perimetry
    leftThighCircumference8cm?: number | null;
    leftThighCircumference15cm?: number | null;
    leftThighCircumference23cm?: number | null;
    rightThighCircumference8cm?: number | null;
    rightThighCircumference15cm?: number | null;
    rightThighCircumference23cm?: number | null;
    leftCalfCircumference15cm?: number | null;
    rightCalfCircumference15cm?: number | null;

    //Posture Visual Analyses
    headAnteriorView?: string | null;
    headProfileView?: string | null;
    cervicalProfileView?: string | null;
    shoulderAnteriorView?: string | null;
    shoulderProfileView?: string | null;
    elbowProfileView?: string | null;
    thoracicProfileView?: string | null;
    lumbarProfileView?: string | null;
    pelvisAnteriorView?: string | null;
    pelvisProfileView?: string | null;
    kneeAnteriorView?: string | null;
    kneeProfileView?: string | null;
    ankleProfileView?: string | null;
    footProfileView?: string | null;
    thoracicHumpPosteriorView?: string | null;
    breathingPattern?: string | null;
    diaphragmObservation?: string | null;


    //Foot Measurements
    shoeSize?: number | null;
    leftFootSize?: number | null;
    rightFootSize?: number | null;

    //Posture Special Tests
    stiborTestBefore?: number | null;
    stiborTestAfter?: number | null;
    schoberTestBefore?: number | null;
    schoberTestAfter?: number | null;
    thomasTestRight?: number | null;
    thomasTestLeft?: number | null;
    elyTestRight?: number | null;
    elyTestLeft?: number | null;
    plankTestResult?: string | null;
    clarkeTestRight?: number | null;
    clarkeTestLeft?: number | null;
    adamsTestPositive?: number | null;
    adamsTestNegative?: number | null;
    nobleTestRight?: number | null;
    nobleTestLeft?: number | null;
    bonnetTestRight?: number | null;
    bonnetTestLeft?: number | null;
    lasegueTestLeft?: number | null;
    lasegueTestRight?: number | null;
    threeFingerToGroundTest?: number | null;
    singleLegSquatLeft?: number | null;
    singleLegSquatRight?: number | null;

}

export type IPostureEvaluationCreation = Omit<IPostureEvaluation, 'id'>