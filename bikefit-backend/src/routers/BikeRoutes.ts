import { Router } from "express";
import { BikeController } from "@/controllers";

const router = Router();

router.post("/", BikeController.createBike);

export default router;
