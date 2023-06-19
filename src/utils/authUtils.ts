import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "puzzle-scret-key";
const expiresInOneWeek = 7 * 24 * 60 * 60; // 7 days * 24 hours * 60 minutes * 60 seconds

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: expiresInOneWeek  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.log(error);

    return null;
  }
}
