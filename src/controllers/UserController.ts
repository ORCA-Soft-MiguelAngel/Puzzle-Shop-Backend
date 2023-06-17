import { NextFunction, Request, Response } from "express";
import UserService from "@services/UserService";
import { StatusCodes } from "http-status-codes";
import { apiResponse, successResponse } from "@utils/response";

class UserController {
  constructor() {}

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.findUserById(req.params.id);
      return apiResponse(res, successResponse(user), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      return apiResponse(res, successResponse(user), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
