import { Request, Response } from 'express';
import { BikeService } from '@/services';

export class BikeController {
  getAllBikes = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await BikeService.getAllBikes();
      if (!response) {
        res.status(404).json({ Message: 'Nenhuma bicicleta encontrada' });
      }
      res.status(404).json(response);
    } catch (error: any) {
      console.error('Erro interno ao deletar o cliente: ', error);
      res.status(500).json({
        message: 'Erro no servidor ao deletar o cliente',
        code: 'INTERNAL_SERVER_ERROR',
      });
    }
  };
  getBikeById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await BikeService.getBikeById(id);
      if (!response) {
        res.status(404).json({
          message: 'Não foi possível encontrar bicicleta com o Id fornecido',
        });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error('Erro interno do servidor: ', error);
      res.status(500).json({
        message: 'Erro no servidor interno',
        code: 'INTERNAL_SERVER_ERROR',
      });
    }
  };
  createBike = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const response = await BikeService.createBike(body);
      if (!response) {
        res.status(404).json({ message: 'Não foi possível criar a bicicleta' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error('Erro interno do servidor: ', error);
      res.status(500).json({
        message: 'Erro no servidor interno',
        code: 'INTERNAL_SERVER_ERROR',
      });
    }
  };
  updateBike = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const response = await BikeService.updateBike(id, body);
      if (!id || typeof id !== 'number' || !body) {
        res.status(404).json({ message: 'Não foi possível atualizar a bicicleta' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      console.error('Erro interno do servidor: ', error);
      res.status(500).json({
        message: 'Erro no servidor interno',
        code: 'INTERNAL_SERVER_ERROR',
      });
    }
  };
  deleteBike = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      if (!id || typeof id !== 'number') {
        res.status(404).json({ message: 'Não foi possível excluir a bicicleta' });
      }
      const deleteBike = await BikeService.deleteBike(id);
      res.status(200).json({ message: 'Bicicleta excluída com sucesso' });
    } catch (error: any) {
      console.error('Erro interno do servidor: ', error);
      res.status(500).json({
        message: 'Erro no servidor interno',
        code: 'INTERNAL_SERVER_ERROR',
      });
    }
  };
}

export default new BikeController();
