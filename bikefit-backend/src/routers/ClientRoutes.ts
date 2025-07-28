import { Router } from "express";
import { ClientController } from "@/controllers";

const router = Router();

router.get("/", ClientController.getAllClients);
router.get("/:id", ClientController.getClientById);
router.get("/bikes/:id", ClientController.getClientBikes);
router.get("/email/:email", ClientController.getClientByEmail);
router.post("/", ClientController.createClient);
router.patch("/:id", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);

export default router;
