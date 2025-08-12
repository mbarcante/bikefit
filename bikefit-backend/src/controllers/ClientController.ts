import { Request, Response } from "express";
import { ClientService } from "@/services";

export class ClientController {
  getAllClients = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await ClientService.getAllClients();
      if (!response) {
        res
          .status(404)
          .json({ messaage: "Não foi possível encontrar os clientes" });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error("Erro no ClientController.getAllClients", error);
      res.status(500).json({
        message: "Erro  no sevidor ao buscar os clientes",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };

  getClientBikes = async (req: Request, res: Response) => {
    try {
      const clientId = Number(req.params.id);
      const response = await ClientService.getClientBikes(clientId);
      if (!response) {
        res.json(404).json({
          message: "Não foi possível encontrar as bicicletas do cliente",
        });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error("Erro no ClientController.getClientBikes", error);
      res.status(500).json({
        message: "Erro  no sevidor ao buscar bicicletas dos clientes",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };

  getClientPostures = async (req: Request, res: Response) => {
    try {
      const clientId = Number(req.params.id);
      const response = await ClientService.getClientPostureEvaluations(clientId);
      if (!response) {
        res.status(404).json({ message: "Não foi possível encontrar as avaliações posturais do cliente" })
      }
      res.status(200).json(response)

    } catch (error: any) {
      console.error("Erro no ClientController.getClientPosturesEvaluations", error);
      res.status(500).json({
        message: "Erro  no sevidor ao buscar avaliações posturais do cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  }

  getClientByEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const email = req.params.email;
      if (!email || typeof email !== "string") {
        res.status(400).json({
          message: 'O campo "email" é obrigatório e deve ser uma string.',
          code: "INVALID_INPUT_EMAIL",
        });
      }
      const response = await ClientService.getClientByEmail(email);
      if (response === null) {
        res.status(404).json({
          message: `Cliente com o email '${email}' não encontrado.`,
          code: "CLIENT_NOT_FOUND",
        });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error("Erro no ClientController.getClientByEmail:", error);
      res.status(500).json({
        message: "Erro no servidor ao buscar o cliente.",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };

  getClientById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      if (!id || typeof id !== "number") {
        res.status(400).json({
          message: "O campo 'id' é obrigatório e deve ser do tipo number",
          code: "INVALID_INPUT_ID",
        });
      }
      const response = await ClientService.getClientById(id);
      if (response === null) {
        res.status(404).json({
          message: `Cliente com o id '${id}' não encontrado.`,
          code: "CLIENT_NOT_FOUND",
        });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error("Erro no ClientController.getClientById:", error);
      res.status(500).json({
        message: "Erro servidor ao buscar o cliente.",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };

  createClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const credentials = req.body;
      if (!credentials) {
        res.status(404).json({
          message: "Não foram enviadas as informações do novo cliente",
        });
      }
      const newClient = await ClientService.createClient(credentials);

      res.status(200).json({
        message: "Cliente criado com sucesso: ",
        name: newClient.name,
      });
    } catch (error: any) {
      console.error("Erro no ClientController.addClient: ", error);
      res.status(500).json({
        message: "Erro no servidor ao buscar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };

  updateClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      if (!id && body) {
        res.status(404).json({
          message:
            "Não foram enviadaas as informações para atualizar o cliente",
        });
      }
      ClientService.updateClient(id, body);
      res.status(200).json({ message: "Cliente alterado com sucesso!" });
    } catch (error: any) {
      console.error("Erro no ClientController.updateClient: ", error);
      res.status(500).json({
        message: "Erro no servidor ao atualizar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };

  deleteClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      if (!id || typeof id !== "number") {
        res.status(400).json({
          message: "O campo 'id' é obrigatório e deve ser do tipo number",
          code: "INVALID_INPUT_ID",
        });
      }
      const deletedClient = ClientService.deleteClient(id);
      res
        .status(200)
        .json({ message: "Avaliação Postural excluída com sucesso." });
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
}

export default new ClientController();
