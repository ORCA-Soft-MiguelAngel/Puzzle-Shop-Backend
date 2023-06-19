import { NextFunction, Request, Response } from "express";
import OrderService from "@services/OrderService";
import { apiResponse, successResponse } from "@utils/response";
import { StatusCodes } from "http-status-codes";
class OrderController {
  constructor() {}

  async createOrder(req: Request, res: Response, next: NextFunction) {
    try {      
      const order = await OrderService.createOrder(req.body);
      return apiResponse(res, successResponse(order), StatusCodes.CREATED);
    } catch (error) {
      next(error);
    }
  }

  async getOrderById(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await OrderService.findOrderById(req.params.id);
      return apiResponse(res, successResponse(order), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }

  async updateOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const order = await OrderService.updateOrder(req.body._id, req.body);
      return apiResponse(res, successResponse(order), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }

  async deleteOrder(req: Request, res: Response, next: NextFunction) {
    try {
      await OrderService.deleteOrder(req.params.id);
      return apiResponse(res, successResponse("Deleted"), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }

  async getOrdersByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await OrderService.findAllOrdersByUserId(
        req.params.userId
      );
      return apiResponse(res, successResponse(orders), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }
}

export default new OrderController();
