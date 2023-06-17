import { Request, Response } from 'express';
import OrderService from '@services/OrderService';

class OrderController {
    constructor() {}

    async createOrder(req: Request, res: Response) {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    }

    async getOrderById(req: Request, res: Response) {
        const order = await OrderService.findOrderById(req.params.id);
        res.json(order);
    }

    async updateOrder(req: Request, res: Response) {
        const order = await OrderService.updateOrder(req.params.id, req.body);
        res.json(order);
    }

    async deleteOrder(req: Request, res: Response) {
        await OrderService.deleteOrder(req.params.id);
        res.status(204).end();
    }

    async getOrdersByUserId(req: Request, res: Response) {
        const orders = await OrderService.findAllOrdersByUserId(req.params.userId);
        res.json(orders);
    }
}

export default new OrderController();