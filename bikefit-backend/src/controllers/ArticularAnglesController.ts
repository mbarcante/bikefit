import { Request, Response } from "express";
import { ArticularAnglesService } from "@/services";

export class ArticularAngleController {
  getAllArticularAngles = async (
    _req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const response = await ArticularAnglesService.getAllArticularAngles();
      if (!response) {
        res.status(404).json({
          message: "Nenhum registro de Angulos Articulares encontrado",
        });
      }
      res.json(200).json(response);
    } catch (error: any) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  getArticularAngleById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await ArticularAnglesService.getArticularAnglesById(id);
      if (!response) {
        res.status(404).json({
          message:
            "Nenhum registro de Angulos Articulares com esse id foi encontrado.",
        });
      }
      res.status(200).json(response);
    } catch (error) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  createArticularAngles = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const body = req.body;
      const response = await ArticularAnglesService.createArticularAngles(body);
      if (!response) {
        res.status(404).json({
          message: "Não foi possível criar o registro de Angulos Articulares.",
        });
      }
      res.status(200).json(response);
    } catch (error) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  updateArticularAngles = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const response = await ArticularAnglesService.updateArticularAngles(
        id,
        body
      );
      if (!id && !body) {
        res.status(404).json({
          message:
            "Não foram enviadaas as informações para atualizar o registro de Angulos Articulares",
        });
        res.status(200).json(response);
      }
    } catch (error) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  deleteArticularAngle = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      if (!id || typeof id !== "number") {
        res.status(404).json({
          message: "Id não encontrado",
        });
        res.status(200).json({
          message: "Registro de Angulos Articulares excluído com sucesso",
        });
      }
    } catch (error) {
      console.error("Erro interno ao deletar o cliente: ", error);
      res.status(500).json({
        message: "Erro no servidor ao deletar o cliente",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
}
