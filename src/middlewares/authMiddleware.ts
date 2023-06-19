import { Request, Response, NextFunction } from "express";
import { verifyToken } from "@utils/authUtils";

interface RequestWithUser extends Request {
  user?: any;
}

function authMiddleware(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization;

  if (token) {    
    const payload = verifyToken(token);

    if (payload) {
      req.user = payload;
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

export default authMiddleware;
