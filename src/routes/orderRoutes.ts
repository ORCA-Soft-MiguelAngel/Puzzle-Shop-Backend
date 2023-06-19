import express from "express";
import OrderController from "@controllers/OrderController";
import authMiddleware from "@middlewares/authMiddleware";
import userOrderAuthMiddleware from "@middlewares/userOrderAuthMiddleware";

const router = express.Router();

router.post("/", authMiddleware, OrderController.createOrder);
router.get("/user/:userId", authMiddleware, OrderController.getOrdersByUserId);
router.get("/:id", userOrderAuthMiddleware, OrderController.getOrderById);
router.put("/", userOrderAuthMiddleware, OrderController.updateOrder);
router.delete("/:id", userOrderAuthMiddleware, OrderController.deleteOrder);

export default router;
