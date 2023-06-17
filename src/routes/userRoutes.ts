import express from "express";
import UserController from "@controllers/UserController";
import authMiddleware from "@middlewares/authMiddleware";

const router = express.Router();

router.get("/:id", authMiddleware, UserController.getUserById);
router.put("/:id", authMiddleware, UserController.updateUser);

export default router;
