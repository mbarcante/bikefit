import { Request, Response } from "express";
import { RimService } from "@/services";

export class RimController {
  getAllRim = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await RimService.getAllRims();
      if (!response) {
        res.status(404).json({
          message: "Nenhum aro Articulares encontrado",
        });
      }
      res.json(200).json(response);
    } catch (error: any) {
      console.error("Erro interno no servidor: ", error);
      res.status(500).json({
        message: "Erro interno no servidor",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  getRimById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await RimService.getRimById(id);
      if (!response) {
        res.status(404).json({
          message: "Nenhum aro com esse id foi encontrado.",
        });
      }
      res.status(200).json(response);
    } catch (error) {
      console.error("Erro interno no servidor: ", error);
      res.status(500).json({
        message: "Erro interno no servidor",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  createRim = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const response = await RimService.createRim(body);
      if (!response) {
        res.status(404).json({
          message: "Não foi possível criar o aro.",
        });
      }
      res.status(200).json(response);
    } catch (error) {
      console.error("Erro interno no servidor: ", error);
      res.status(500).json({
        message: "Erro interno no servidor",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  updateRim = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const response = await RimService.updateRim(id, body);
      if (!id && !body) {
        res.status(404).json({
          message: "Não foram enviadaas as informações para atualizar aro",
        });
        res.status(200).json(response);
      }
    } catch (error) {
      console.error("EErro interno no servidor: ", error);
      res.status(500).json({
        message: "Erro interno no servidor",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
  deleteRim = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      if (!id || typeof id !== "number") {
        res.status(404).json({
          message: "Id não encontrado",
        });
        res.status(200).json({
          message: "Aro excluído com sucesso",
        });
      }
    } catch (error) {
      console.error("Erro interno no servidor: ", error);
      res.status(500).json({
        message: "Erro interno no servidor",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
}

export default new RimController();
