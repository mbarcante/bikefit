import { useCallback, useState } from "react";
import { ClientService } from "../../services";
import { IPaginatedClientResponse } from "src/types";

const useClients = () => {
    const [clients, setClients] = useState<IPaginatedClientResponse>();

    const getClients = useCallback(async (limit?: number, offset?: number) => {
        try {
            const clientsList = await ClientService.getAllClients(limit, offset);
            setClients(clientsList)
            return clientsList;
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            return {
                data: [],
                totalReg: 0,
                limit: limit || 0,
                paginate: 0,
            };
        }
    }, []);

    const deleteClient = async (id: number) => {
        try {
            await ClientService.deleteClient(id);
            await getClients();
        } catch (error) {
            console.error('Ocorreu um erro na função deleteClient:', error);
        }
    }
    return { getClients, deleteClient, clients }
}

export default useClients