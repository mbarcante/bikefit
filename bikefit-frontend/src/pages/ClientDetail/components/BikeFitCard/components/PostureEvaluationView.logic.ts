import { useCallback, useState } from "react"
import { PostureEvaluationService } from "../../../../../services"
import { IPostureEvaluation } from "../../../../../types"
interface PEvaluationId {
    id: number;
}

export const usePostureEvaluationView = (id: number) => {
    const [pEvaluation, setPEvaluation] = useState<IPostureEvaluation>()
    const getBikeFitPEvaluation = useCallback(async () => {
        try {
            const data = await PostureEvaluationService.getPostureEvaluationById(Number(id));
            console.log(data)
            setPEvaluation(data)

        } catch (error: any) {
            console.log(error)
        }
    }, [id]
    )

    return { getBikeFitPEvaluation, pEvaluation }
}