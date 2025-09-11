import { Router } from "express";
import { AuthController } from "@/controllers";
const router = Router()

router.post('/', AuthController.login);
router.post('/create', AuthController.createUser);

export default router;