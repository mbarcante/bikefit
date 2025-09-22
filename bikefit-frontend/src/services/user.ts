import { API_BASE_URL, getStandardHeaders } from "./utils";
import { IUser, IPaginatedUserResponse } from "src/types";

export class UserService {
    getAllUsers = async (limit: number = 10, offset: number = 0): Promise<IPaginatedUserResponse> => {
        try {
            const params = new URLSearchParams({
                limit: limit.toString(),
                offset: offset.toString()
            });
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/users?${params.toString()}`, {
                method: "GET",
                headers,
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error("Erro ao buscar usuários: ", error);
            throw error;
        }
    };

    getUserById = async (id: number): Promise<IUser> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
                method: "GET",
                headers,
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error("Erro ao buscar usuário por ID: ", error);
            throw error;
        };
    }
    addUser = async (user: IUser): Promise<IUser> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/users`, {
                method: "POST",
                headers,
                body: JSON.stringify(user),
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error("Erro ao adicionar usuário: ", error);
            throw error;
        }
    };
    patchUser = async (id: number, user: Partial<IUser>): Promise<IUser> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
                method: "PATCH",
                headers,
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error("Erro ao atualizar usuário: ", error);
            throw error;
        }
    }
    deleteUser = async (id: number): Promise<void> => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
                method: "DELETE",
                headers,
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
            }
        } catch (error: any) {
            console.error("Erro ao excluir usuário: ", error);
            throw error;
        }
    };
}

const userService = new UserService();

export default userService;