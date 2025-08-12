import { BikeFitService } from '@/services';
import { Request, Response } from 'express';

export class BikeFitController {
  getAllBikeFits = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await BikeFitService.getAllBikeFits();
      if (!response) {
        res.status(404).json({ message: 'Nenhum BikeFit encontrado' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
  };
  getBikeFitById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await BikeFitService.getBikeFitById(id);
      if (!response) {
        res.status(404).json({ message: 'Não foi encontrado o BikeFit para este id' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
  };
  getBikeFitsByBikeId = async (req: Request, res: Response): Promise<void> => {
    try {
      const bikeId = Number(req.params.id);
      const response = await BikeFitService.getBikeFitsByBikeId(bikeId);
      console.log('usou o service', response);
      if (!response) {
        res.status(404).json({ message: 'Não foi encontrado o BikeFit para este id' });
      }

      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
  };
  createBikeFit = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const createBikeFit = BikeFitService.createBikeFit(body);
      if (!createBikeFit) {
        res.status(404).json({ message: 'Erro ao criar um BikeFit' });
      }
    } catch (error: any) {
      res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
  };
  updateBikeFit = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const updateBikeFit = BikeFitService.updateBikeFit(id, body);
      if (!updateBikeFit) {
        res.json(404).json({ message: 'Erro ao atualizar BikeFit' });
      }
      res.status(200).json(updateBikeFit);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
  };
  deleteBikeFit = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const deleteBikeFit = BikeFitService.deleteBikeFit(id);
      if (!id || typeof id !== 'number') {
        res.status(404).json({ message: 'Erro ao excluir BikeFit' });
      }
      res.status(200).json({ message: 'BikeFit excluído com sucesso.' });
    } catch (error: any) {
      res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
  };
}

export default new BikeFitController();
