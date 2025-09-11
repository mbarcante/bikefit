import { API_BASE_URL, getStandardHeaders } from "./utils";
import { IAuthUserCreation } from "src/types";

export class AuthService {
    register = async (body: IAuthUserCreation) => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/auth/create`, {
                method: "POST",
                headers,
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `HTTP error! Status: ${response.status}`
                );
            }
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error("Erro ao registrar usuário: ", error);
            throw error;
        };
    };
    login = async (email: string, password: string) => {
        try {
            const headers = getStandardHeaders();
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers,
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `HTTP error! Status: ${response.status}`
                );
            }
            const res = await response.json();
            if (res.error) {
                throw new Error(res.message);
            }
            return res;
        } catch (error: any) {
            console.error("Erro ao fazer login: ", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;