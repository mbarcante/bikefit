import { Router } from 'express';
import { RimController } from '@/controllers';

const router = Router();
router.get('/', RimController.getAllRim);
router.get('/:id', RimController.getRimById);
router.post('/', RimController.createRim);
router.patch('/:id', RimController.updateRim);

export default router;