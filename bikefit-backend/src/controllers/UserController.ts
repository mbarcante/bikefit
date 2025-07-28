import { Request, Response } from "express";
import UserService from "@/services/UserService";

export class UserController {
  getAllUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
      const response = await UserService.getAllUsers();
      if (!response || response.length === 0) {
        res.status(404).json({ message: "No users found" });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error: ", error: error.message });
    }
  };
  getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const response = await UserService.getUserById(userId);
      if (!response) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  };
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userData = req.body;
      const response = await UserService.createUser(userData);
      if (!response) {
        res.status(400).json({ message: "User creation failed" });
      }
      res.status(201).json(response);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  };
  updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData = req.body;
      const response = await UserService.updateUser(userId, userData);
      if (!response) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(response);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  };
  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const response = await UserService.deleteUser(id);
      if (!id || typeof id !== "number") {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  };
}

export default new UserController();
