import { Router } from "express";
import { UserController } from '@/controllers'

const router = Router()

router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getUserById)
router.get('/search/:search', UserController.getSearchUser)
router.patch('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

export default router