import { useCallback, useState } from "react";
import { IPaginatedUserResponse } from "../../types";
import { UserService } from "../../services";

const useUsers = () => {
    const [users, setUsers] = useState<IPaginatedUserResponse>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getUsers = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await UserService.getAllUsers();
            console.log("Usuários obtidos:", response);
            setUsers(response);
        } catch (err: any) {
            setError(err.message || "Erro ao buscar usuários");
        } finally {
            setLoading(false);
        }
    }, [])

    const deleteUser = async (id: number) => {
        setLoading(true);
        setError(null);
        try {
            await UserService.deleteUser(id);
            getUsers();
        } catch (err: any) {
            setError(err.message || "Erro ao excluir usuário");
        } finally {
            setLoading(false);
        }
    };
    return { users, loading, error, getUsers, deleteUser };

}
export default useUsers;