import { body } from "express-validator";

export const validateUserCreate = [
  body("username").notEmpty(),
  body("password").isLength({ min: 5 }),
];

export const validateUserLogin = [
  body("username").notEmpty(),
  body("password").isLength({ min: 5 }),
]; 
