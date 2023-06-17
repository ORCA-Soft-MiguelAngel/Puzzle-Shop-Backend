import express from "express";
import OrderController from "@controllers/OrderController";

const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/user/:userId", OrderController.getOrdersByUserId);
router.get("/:id", OrderController.getOrderById);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

export default router;
