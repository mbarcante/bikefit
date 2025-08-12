import { useMemo, useState } from "react";
import { postureEvaluationInitialData } from "../../components/data/PostureEvaluationInitialData";
import { FormState, IPostureEvaluation, IPostureEvaluationCreation } from "../../types";
import { PostureEvaluationService } from "../../services";
import { createPostureEvaluationPayload } from "../../utils/payloads/postureEvaluationPayloads";

const usePostureEvaluationFormPage = (item?: IPostureEvaluation, clientIdFromUrl?: string) => {
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const initialData = useMemo(() => {
        if (item) {
            return { ...postureEvaluationInitialData, ...item };
        }
        if (clientIdFromUrl) {
            return {
                ...postureEvaluationInitialData,
                clientId: Number(clientIdFromUrl)
            }
        }
        return postureEvaluationInitialData;
    }, [item, clientIdFromUrl]);

    const isUpdating = !!item;

    const handleFormSubmit = async (formData: FormState) => {
        const payloads = createPostureEvaluationPayload(formData)
        setIsSaving(true);
        try {
            const postureEvaluationPayload: IPostureEvaluationCreation = {
                ...payloads
            };

            if (isUpdating && item?.id) {
                await PostureEvaluationService.patchPostureEvaluation(item!.id, postureEvaluationPayload);
            } else {
                await PostureEvaluationService.addPostureEvaluation(postureEvaluationPayload);
            }
        } catch (error) {
            console.error('Erro ao salvar bikefit:', error);
            alert('Ocorreu um erro ao salvar o bikefit. Tente novamente.');
        } finally {
            setIsSaving(false);
        }
    };

    return { initialData, handleFormSubmit }
}

export default usePostureEvaluationFormPage;