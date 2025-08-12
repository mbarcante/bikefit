import { Request, Response } from 'express';
import PostureEvaluationService from '@/services/PostureEvaluationService';

export class PostureEvaluationController {
  getAllPostureEvaluations = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await PostureEvaluationService.getAllPostureEvaluations();
      if (!response) {
        res.status(404).json({ message: 'Nenhuma Avaliação Postural encontrada' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  };
  getPostureEvaluationById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await PostureEvaluationService.getPostureEvaluationById(id);
      if (!response) {
        res.status(404).json({
          message: 'Não foi encontrada Avaliação Postural para este id ',
        });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  };
  createPostureEvaluation = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const response = await PostureEvaluationService.createPostureEvaluation(body);
      if (!response) {
        res.status(404).json({ message: 'Não foi possível criar a Avaliação Postural' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  };
  updatePostureEvaluation = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body;
      const id = Number(req.params.id);
      const response = await PostureEvaluationService.updatePostureEvaluation(id, body);
      if (!response) {
        res.status(404).json({ message: 'Não foi possível atualizar a Avaliação Postural' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  };
  deletePostureEvaluation = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = PostureEvaluationService.deletePostureEvaluation(id);
      if (!id || typeof id !== 'number') {
        res.status(404).json({ message: 'Não foi possível excluir a Avaliação Postural' });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Erro interno do servidor', error: error.message });
    }
  };
}

export default new PostureEvaluationController();
