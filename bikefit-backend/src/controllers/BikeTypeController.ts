import { Request, Response } from "express";
import { BikeTypeService } from "@/services";

export class BikeTypeController {
  getAllBikeTypes = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await BikeTypeService.getAllBikeTypes();
      if (!response) {
        res.status(404).json({
          message: "Não foi possível encontrar nenhum tipo de bicicleta",
        });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  getBikeTypeById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await BikeTypeService.getBikeTypeById(id);
      if (!response) {
        res.status(404).json({
          message: "Não foi encontrado um tipo de bicicleta com esse id",
        });
        res.status(200).json(response);
      }
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  createBikeType = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const response = await BikeTypeService.createBikeType(body);
      if (!response) {
        res
          .status(404)
          .json({ message: "Não foi possível criar esse tipo de biciclleta" });
      }
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  updateBikeType = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const response = await BikeTypeService.updateBikeType(id, body);
      if (!id || typeof id !== "number" || !body) {
        res.status(404).json({
          message:
            "Não foi possível atualizar as informações do tipo da bicicleta",
        });
      }
      res.status(200).json(res);
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  deleteBikeType = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await BikeTypeService.deleteBikeType(id);
      if (!id || typeof id !== "number") {
        res.status(404).json({
          message: "Não foi possível excluir o tipo da bicicleta",
        });
      }
      res.status(200).json(res);
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
}

export default new BikeTypeController();
