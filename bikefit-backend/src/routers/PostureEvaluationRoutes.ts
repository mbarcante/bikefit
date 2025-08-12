import { Router } from 'express';
import { PostureEvaluationController } from '@/controllers/';

const router = Router();

router.get('/:id', PostureEvaluationController.getPostureEvaluationById)
router.post('/', PostureEvaluationController.createPostureEvaluation);
router.patch('/:id', PostureEvaluationController.updatePostureEvaluation)

export default router;
