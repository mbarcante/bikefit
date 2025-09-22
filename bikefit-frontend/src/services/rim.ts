import { API_BASE_URL, getStandardHeaders } from "./utils";
import { IRim } from "../types";

class RimService {
    getAllRims = async (): Promise<IRim[]> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/rims`, {
                method: 'GET',
                headers: getStandardHeaders(),
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar aros');
            }

            return response.json();
        } catch (error: any) {
            console.error("Erro ao buscar aros: ", error);
            throw new Error(error);
        }
    };

    static async createRim(rimData: Omit<IRim, 'id'>): Promise<IRim> {
        const response = await fetch(`${API_BASE_URL}/rims`, {
            method: 'POST',
            headers: getStandardHeaders(),
            body: JSON.stringify(rimData),
        });

        if (!response.ok) {
            throw new Error('Erro ao criar aro');
        }

        return response.json();
    }

    static async updateRim(id: number, rimData: Omit<IRim, 'id'>): Promise<IRim> {
        const response = await fetch(`${API_BASE_URL}/rims/${id}`, {
            method: 'PUT',
            headers: getStandardHeaders(),
            body: JSON.stringify(rimData),
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar aro');
        }

        return response.json();
    }

    static async deleteRim(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/rims/${id}`, {
            method: 'DELETE',
            headers: getStandardHeaders(),
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar aro');
        }
    }
}
const rimService = new RimService();
export default rimService;