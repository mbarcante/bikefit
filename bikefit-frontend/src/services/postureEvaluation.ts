import { API_BASE_URL, getStandardHeaders } from "./utils"
import { IPostureEvaluation, IPostureEvaluationCreation } from "src/types"

export class PostureEvaluationService {
    getPostureEvaluationById = async (id: number): Promise<IPostureEvaluation> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/postureEvaluations/${id}`, {
                method: "GET",
                headers,
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`)
            }

            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error('Erro ao buscar a Avaliação Postural: ', error);
            throw error;
        }
    };
    addPostureEvaluation = async (body: IPostureEvaluationCreation): Promise<IPostureEvaluation> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/postureEvaluation`, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            };
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            };
            return res;
        } catch (error: any) {
            console.error('Erro ao criar a Avaliação Postural: ', error);
            throw error;
        }
    };
    patchPostureEvaluation = async (id: number, body: Partial<IPostureEvaluation>): Promise<IPostureEvaluation> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/postureEvaluation/${id}`, {
                method: "PATCH",
                headers,
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            };
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            };
            return res;
        } catch (error: any) {
            console.error('Erro ao atualizar a Avaliação Postural: ', error);
            throw error;
        }
    }
}
const postureEvaluationService = new PostureEvaluationService();

export default postureEvaluationService;