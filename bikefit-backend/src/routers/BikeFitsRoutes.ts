import { Router } from 'express';
import { BikeFitController } from '@/controllers';

const router = Router();
router.get('/', BikeFitController.getAllBikeFits);
router.get('/bike/:id', BikeFitController.getBikeFitsByBikeId);
router.post('/', BikeFitController.createBikeFit);
router.patch('/:id', BikeFitController.updateBikeFit);
export default router;
