import React, { useCallback, useState } from "react";
import { ClientService } from "../../../../services";
import { IPostureEvaluation } from "../../../../types";

const usePostureEvaluationsCard = (client: number) => {
    const [pEvaluations, setPEvaluations] = useState<IPostureEvaluation[]>([])
    const getPostureEvaluations = useCallback(async () => {
        const response = await ClientService.getClientPostureEvaluations(Number(client));
        setPEvaluations(response)
    }, [client])
    return { pEvaluations, getPostureEvaluations }
}

export default usePostureEvaluationsCard;