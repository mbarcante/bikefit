import { useMemo, useState } from "react";
import { FormState, IPostureEvaluation, IPostureEvaluationCreation } from "../../types";
import { PostureEvaluationService } from "../../services";
import { postureEvaluationFormFields } from "../../components/Forms/postureEvaluationFields";
import { useNavigate } from "react-router-dom";

const usePostureEvaluationFormPage = (item?: IPostureEvaluation, clientIdFromUrl?: string) => {
    const navigate = useNavigate();
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const initialData: FormState | undefined = useMemo(() => {
        if (item) {
            return {
                // --- Informa\u00e7\u00f5es Principais ---
                userId: item.userId,
                clientId: item.clientId,
                evaluationDate: item.evaluationDate,
                additionalInformation: item.additionalInformation,

                // --- \u00c2ngulos Posturais ---
                leftQAngle: item.leftQAngle,
                rightQAngle: item.rightQAngle,
                leftHipFlexion: item.leftHipFlexion,
                rightHipFlexion: item.rightHipFlexion,
                leftForefootRotation: item.leftForefootRotation,
                rightForefootRotation: item.rightForefootRotation,
                leftRearfootRotation: item.leftRearfootRotation,
                rightRearfootRotation: item.rightRearfootRotation,

                // --- Antropometria ---
                leftLegLength: item.leftLegLength,
                rightLegLength: item.rightLegLength,
                weberBarstowTest: item.weberBarstowTest,
                allisGaleazziTest: item.allisGaleazziTest,
                inseam: item.inseam,
                trunkAnthropometry: item.trunkAnthropometry,
                upperLimbAnthropometry: item.upperLimbAnthropometry,
                shoulderAnthropometry: item.shoulderAnthropometry,
                heightAnthropometry: item.heightAnthropometry,
                ischialTuberosityWidth: item.ischialTuberosityWidth,
                headCircumferenceAnthropometry: item.headCircumferenceAnthropometry,
                weightAnthropometry: item.weightAnthropometry,

                // --- Perimetria ---
                leftThighCircumference8cm: item.leftThighCircumference8cm,
                leftThighCircumference15cm: item.leftThighCircumference15cm,
                leftThighCircumference23cm: item.leftThighCircumference23cm,
                rightThighCircumference8cm: item.rightThighCircumference8cm,
                rightThighCircumference15cm: item.rightThighCircumference15cm,
                rightThighCircumference23cm: item.rightThighCircumference23cm,
                leftCalfCircumference15cm: item.leftCalfCircumference15cm,
                rightCalfCircumference15cm: item.rightCalfCircumference15cm,

                // --- An\u00e1lises Visuais Posturais ---
                headAnteriorView: item.headAnteriorView,
                headProfileView: item.headProfileView,
                cervicalProfileView: item.cervicalProfileView,
                shoulderAnteriorView: item.shoulderAnteriorView,
                shoulderProfileView: item.shoulderProfileView,
                elbowProfileView: item.elbowProfileView,
                thoracicProfileView: item.thoracicProfileView,
                lumbarProfileView: item.lumbarProfileView,
                pelvisAnteriorView: item.pelvisAnteriorView,
                pelvisProfileView: item.pelvisProfileView,
                kneeAnteriorView: item.kneeAnteriorView,
                kneeProfileView: item.kneeProfileView,
                ankleProfileView: item.ankleProfileView,
                footProfileView: item.footProfileView,
                thoracicHumpPosteriorView: item.thoracicHumpPosteriorView,
                breathingPattern: item.breathingPattern,
                diaphragmObservation: item.diaphragmObservation,

                // --- Medidas do P\u00e9 ---
                shoeSize: item.shoeSize,
                leftFootSize: item.leftFootSize,
                rightFootSize: item.rightFootSize,

                // --- Testes Especiais ---
                stiborTestBefore: item.stiborTestBefore,
                stiborTestAfter: item.stiborTestAfter,
                schoberTestBefore: item.schoberTestBefore,
                schoberTestAfter: item.schoberTestAfter,
                thomasTestRight: item.thomasTestRight,
                thomasTestLeft: item.thomasTestLeft,
                elyTestRight: item.elyTestRight,
                elyTestLeft: item.elyTestLeft,
                plankTestResult: item.plankTestResult,
                clarkeTestRight: item.clarkeTestRight,
                clarkeTestLeft: item.clarkeTestLeft,
                adamsTestPositive: item.adamsTestPositive,
                adamsTestNegative: item.adamsTestNegative,
                nobleTestRight: item.nobleTestRight,
                nobleTestLeft: item.nobleTestLeft,
                bonnetTestRight: item.bonnetTestRight,
                bonnetTestLeft: item.bonnetTestLeft,
                lasegueTestLeft: item.lasegueTestLeft,
                lasegueTestRight: item.lasegueTestRight,
                threeFingerToGroundTest: item.threeFingerToGroundTest,
                singleLegSquatLeft: item.singleLegSquatLeft,
                singleLegSquatRight: item.singleLegSquatRight,
            };
        }
        if (clientIdFromUrl) {
            return {
                clientId: Number(clientIdFromUrl),
                evaluationDate: new Date()
            };
        }
        return undefined;
    }, [item, clientIdFromUrl]);



    const isUpdating = !!item;

    const handleFormSubmit = async (formData: FormState) => {
        setIsSaving(true);
        try {
            const postureEvaluationPayload: IPostureEvaluationCreation = {
                // --- Informa\u00e7\u00f5es Principais ---
                clientId: formData.clientId as number,
                evaluationDate: formData.evaluationDate as Date,
                userId: formData.userId ? (formData.userId as number) : undefined,
                additionalInformation: (formData.additionalInformation as string) || undefined,

                // --- \u00c2ngulos Posturais ---
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
                inseam: formData.inseam ? Number(formData.inseam) : null,
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

                // --- An\u00e1lises Visuais Posturais ---
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

                // --- Medidas do P\u00e9 ---
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

            if (isUpdating && item?.id) {
                await PostureEvaluationService.patchPostureEvaluation(item!.id, postureEvaluationPayload);
            } else {
                await PostureEvaluationService.addPostureEvaluation(postureEvaluationPayload);
            }
            navigate('/sucess-page');
        } catch (error) {
            console.error('Erro ao salvar avaliação postural:', error);
            alert('Ocorreu um erro ao salvar a avaliação postural. Tente novamente.');
        } finally {
            setIsSaving(false);
        }
    };
    return { initialData, handleFormSubmit, postureEvaluationFormFields, isSaving }
}

export default usePostureEvaluationFormPage;