import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import UserService from "@services/UserService";
import { signToken, verifyToken } from "@utils/authUtils";
import { apiResponse, failedResponse, successResponse } from "@utils/response";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";

class AuthController {
  constructor() {}

  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return apiResponse(
          res,
          failedResponse({ errors: errors.array() }),
          StatusCodes.BAD_REQUEST
        );
      }

      const user = await UserService.createUser(req.body);
      const token = signToken({ userId: user._id, username: user.username });
      return apiResponse(
        res,
        successResponse({ user, token }),
        StatusCodes.CREATED
      );
    } catch (error: any) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return apiResponse(
          res,
          failedResponse({ errors: errors.array() }),
          StatusCodes.BAD_REQUEST
        );
      }

      const user = await UserService.login(
        req.body.username,
        req.body.password
      );
      const token = signToken({ userId: user._id, username: user.username });
      return apiResponse(res, successResponse({ token }), StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }

  async validateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.body.token;
      const payload = verifyToken(token);
      return apiResponse(
        res,
        successResponse({ valid: payload ? true : false }),
        StatusCodes.OK
      );
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
