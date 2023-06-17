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
    const token = authHeader.split(" ")[1];
    const payload = verifyToken(token);

    if (payload) {
      req.user = payload;
      const order = await OrderService.findOrderById(req.params.id);

      if (order && order.userId !== req.user._id) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      next();
    } else {
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "No token provided" });
  }
}

export default userOrderAuthMiddleware;
