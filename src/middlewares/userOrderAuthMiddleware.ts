import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@utils/authUtils";
import OrderService from "@services/OrderService";
import { JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
  user?: any;
}

async function userOrderAuthMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const payload = verifyToken(authHeader);

    if (payload) {
      req.user = payload;
      const order = await OrderService.findOrderById(req.params.id);

      if (order && order.userId !== req.user.userId) {
        // TODO: Change to apiResponse
        return res.status(401).json({ error: "Unauthorized" });
      }
      next();
    } else {
      // TODO: Change to apiResponse
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    // TODO: Change to apiResponse
    res.status(401).json({ error: "No token provided" });
  }
}

export default userOrderAuthMiddleware;
