import { AuthManagerService } from "@/services"
import { Request, Response } from "express"

export class AuthController {
    login = async (req: Request, res: Response) => {
        try {
            const body = req.body
            const response = await AuthManagerService.login(body.email, body.password);
            if (!response) {
                return res.status(404).json({ message: 'Usuário ou senha inválidos' });
            }
            res.status(200).json(response);
        } catch (error: any) {
            console.error('Erro interno ao fazer o login: ', error);
            res.status(500).json({
                message: 'Erro no servidor ao fazer o login',
                code: 'INTERNAL_SERVER_ERROR',
            });
        }
    }
    createUser = async (req: Request, res: Response) => {
        try {
            console.log("Entrou no createUser")
            const body = req.body;
            const response = await AuthManagerService.createUser(body);
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Response createUser: ", response, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", body)
            if (!response) {
                return res.status(404).json({ message: 'Erro ao criar o usuário' });
            }
            console.log("Usuário criado com sucesso: ", response)
            res.status(200).json(response);
        } catch (error: any) {
            console.error('Erro interno ao criar o usuário: ', error);
            res.status(500).json({
                message: 'Erro no servidor ao criar o usuário',
                code: 'INTERNAL_SERVER_ERROR',
            });
        }
    }
}

export default new AuthController();