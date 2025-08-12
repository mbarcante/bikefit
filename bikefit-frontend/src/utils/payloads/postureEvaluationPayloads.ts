import { FormState, IPostureEvaluationCreation } from "../../types";

export const createPostureEvaluationPayload = (
    formData: FormState
): IPostureEvaluationCreation => {

    const payload: IPostureEvaluationCreation = {
        // --- Informações Principais ---
        // --- Campos Principais ---
        userId: formData.userId ? formData.userId as number : undefined,
        clientId: formData.clientId as number,
        evaluationDate: (formData.evaluationDate as Date) || new Date(),
        additionalInformation: (formData.additionalInformation as string) || undefined,

        // --- Ângulos Posturais ---
        leftQAngle: formData.leftQAngle ? Number(formData.leftQAngle) : undefined,
        rightQAngle: formData.rightQAngle ? Number(formData.rightQAngle) : undefined,
        leftHipFlexion: formData.leftHipFlexion ? Number(formData.leftHipFlexion) : undefined,
        rightHipFlexion: formData.rightHipFlexion ? Number(formData.rightHipFlexion) : undefined,
        leftForefootRotation: formData.leftForefootRotation ? Number(formData.leftForefootRotation) : undefined,
        rightForefootRotation: formData.rightForefootRotation ? Number(formData.rightForefootRotation) : undefined,
        leftRearfootRotation: formData.leftRearfootRotation ? Number(formData.leftRearfootRotation) : undefined,
        rightRearfootRotation: formData.rightRearfootRotation ? Number(formData.rightRearfootRotation) : undefined,

        // --- Antropometria ---
        leftLegLength: formData.leftLegLength ? Number(formData.leftLegLength) : undefined,
        rightLegLength: formData.rightLegLength ? Number(formData.rightLegLength) : undefined,
        weberBarstowTest: (formData.weberBarstowTest as string) || undefined,
        allisGaleazziTest: (formData.allisGaleazziTest as string) || undefined,
        inseam: (formData.inseam as number) ? Number(formData.inseam) : null, // Corrigido para 'undefined'
        trunkAnthropometry: formData.trunkAnthropometry ? Number(formData.trunkAnthropometry) : undefined,
        upperLimbAnthropometry: formData.upperLimbAnthropometry ? Number(formData.upperLimbAnthropometry) : undefined,
        shoulderAnthropometry: formData.shoulderAnthropometry ? Number(formData.shoulderAnthropometry) : undefined,
        heightAnthropometry: formData.heightAnthropometry ? Number(formData.heightAnthropometry) : undefined,
        ischialTuberosityWidth: formData.ischialTuberosityWidth ? Number(formData.ischialTuberosityWidth) : undefined,
        headCircumferenceAnthropometry: formData.headCircumferenceAnthropometry ? Number(formData.headCircumferenceAnthropometry) : undefined,
        weightAnthropometry: formData.weightAnthropometry ? Number(formData.weightAnthropometry) : undefined,

        // --- Perimetria ---
        leftThighCircumference8cm: formData.leftThighCircumference8cm ? Number(formData.leftThighCircumference8cm) : undefined,
        leftThighCircumference15cm: formData.leftThighCircumference15cm ? Number(formData.leftThighCircumference15cm) : undefined,
        leftThighCircumference23cm: formData.leftThighCircumference23cm ? Number(formData.leftThighCircumference23cm) : undefined,
        rightThighCircumference8cm: formData.rightThighCircumference8cm ? Number(formData.rightThighCircumference8cm) : undefined,
        rightThighCircumference15cm: formData.rightThighCircumference15cm ? Number(formData.rightThighCircumference15cm) : undefined,
        rightThighCircumference23cm: formData.rightThighCircumference23cm ? Number(formData.rightThighCircumference23cm) : undefined,
        leftCalfCircumference15cm: formData.leftCalfCircumference15cm ? Number(formData.leftCalfCircumference15cm) : undefined,
        rightCalfCircumference15cm: formData.rightCalfCircumference15cm ? Number(formData.rightCalfCircumference15cm) : undefined,

        // --- Análises Visuais Posturais ---
        headAnteriorView: (formData.headAnteriorView as string) || undefined,
        headProfileView: (formData.headProfileView as string) || undefined,
        cervicalProfileView: (formData.cervicalProfileView as string) || undefined,
        shoulderAnteriorView: (formData.shoulderAnteriorView as string) || undefined,
        shoulderProfileView: (formData.shoulderProfileView as string) || undefined,
        elbowProfileView: (formData.elbowProfileView as string) || undefined,
        thoracicProfileView: (formData.thoracicProfileView as string) || undefined,
        lumbarProfileView: (formData.lumbarProfileView as string) || undefined,
        pelvisAnteriorView: (formData.pelvisAnteriorView as string) || undefined,
        pelvisProfileView: (formData.pelvisProfileView as string) || undefined,
        kneeAnteriorView: (formData.kneeAnteriorView as string) || undefined,
        kneeProfileView: (formData.kneeProfileView as string) || undefined,
        ankleProfileView: (formData.ankleProfileView as string) || undefined,
        footProfileView: (formData.footProfileView as string) || undefined,
        thoracicHumpPosteriorView: (formData.thoracicHumpPosteriorView as string) || undefined,
        breathingPattern: (formData.breathingPattern as string) || undefined,
        diaphragmObservation: (formData.diaphragmObservation as string) || undefined,

        // --- Medidas do Pé ---
        shoeSize: formData.shoeSize ? Number(formData.shoeSize) : undefined,
        leftFootSize: formData.leftFootSize ? Number(formData.leftFootSize) : undefined,
        rightFootSize: formData.rightFootSize ? Number(formData.rightFootSize) : undefined,

        // --- Testes Especiais ---
        stiborTestBefore: formData.stiborTestBefore ? Number(formData.stiborTestBefore) : undefined,
        stiborTestAfter: formData.stiborTestAfter ? Number(formData.stiborTestAfter) : undefined,
        schoberTestBefore: formData.schoberTestBefore ? Number(formData.schoberTestBefore) : undefined,
        schoberTestAfter: formData.schoberTestAfter ? Number(formData.schoberTestAfter) : undefined,
        thomasTestRight: formData.thomasTestRight ? Number(formData.thomasTestRight) : undefined,
        thomasTestLeft: formData.thomasTestLeft ? Number(formData.thomasTestLeft) : undefined,
        elyTestRight: formData.elyTestRight ? Number(formData.elyTestRight) : undefined,
        elyTestLeft: formData.elyTestLeft ? Number(formData.elyTestLeft) : undefined,
        plankTestResult: (formData.plankTestResult as string) || undefined,
        clarkeTestRight: formData.clarkeTestRight ? Number(formData.clarkeTestRight) : undefined,
        clarkeTestLeft: formData.clarkeTestLeft ? Number(formData.clarkeTestLeft) : undefined,
        adamsTestPositive: formData.adamsTestPositive ? Number(formData.adamsTestPositive) : undefined,
        adamsTestNegative: formData.adamsTestNegative ? Number(formData.adamsTestNegative) : undefined,
        nobleTestRight: formData.nobleTestRight ? Number(formData.nobleTestRight) : undefined,
        nobleTestLeft: formData.nobleTestLeft ? Number(formData.nobleTestLeft) : undefined,
        bonnetTestRight: formData.bonnetTestRight ? Number(formData.bonnetTestRight) : undefined,
        bonnetTestLeft: formData.bonnetTestLeft ? Number(formData.bonnetTestLeft) : undefined,
        lasegueTestLeft: formData.lasegueTestLeft ? Number(formData.lasegueTestLeft) : undefined,
        lasegueTestRight: formData.lasegueTestRight ? Number(formData.lasegueTestRight) : undefined,
        threeFingerToGroundTest: formData.threeFingerToGroundTest ? Number(formData.threeFingerToGroundTest) : undefined,
        singleLegSquatLeft: formData.singleLegSquatLeft ? Number(formData.singleLegSquatLeft) : undefined,
        singleLegSquatRight: formData.singleLegSquatRight ? Number(formData.singleLegSquatRight) : undefined,
    };

    return payload;
};