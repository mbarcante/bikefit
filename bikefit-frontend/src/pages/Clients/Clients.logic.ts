import { useCallback, useState } from "react";
import { ClientService } from "../../services";
import { IClient } from "../../types";

const useClients = () => {
    const [clients, setClients] = useState<IClient[]>([]);
    const getClients = useCallback(async () => {
        try {
            const clientsList = await ClientService.getAllClients();
            setClients(clientsList);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    }, []);

    const deleteClient = async (id: number) => {
        try {
            await ClientService.deleteClient(id);
            await getClients();
        } catch (error) {
            console.error('Ocorreu um erro na função deleteClient:', error);
            // Você pode querer exibir uma mensagem de erro para o usuário aqui.
        }
    }
    return { getClients, deleteClient, clients }
}

export default useClients