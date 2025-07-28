import { Request, Response } from "express";
import { FrameService } from "@/services";

export class FrameController {
  getAllFrame = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await FrameService.getAllFrames();
      if (!response) {
        res.status(404).json({
          message: "Nenhum quadro encontrado",
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
  getArticularAngleById = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await FrameService.getFrameById(id);
      if (!response) {
        res.status(404).json({
          message: "Nenhum quadro com esse id foi encontrado.",
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
  createFrame = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const response = await FrameService.createFrame(body);
      if (!response) {
        res.status(404).json({
          message: "Não foi possível criar o quadro.",
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
  updateFrame = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const response = await FrameService.updateFrame(id, body);
      if (!id && !body) {
        res.status(404).json({
          message:
            "Não foram enviadaas as informações para atualizar o registro de Angulos Articulares",
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
      console.error("Erro interno no servidor: ", error);
      res.status(500).json({
        message: "Erro interno no servidor",
        code: "INTERNAL_SERVER_ERROR",
      });
    }
  };
}

export default new FrameController();
