import express from "express";
import AuthController from "@controllers/AuthController";
import {
  validateUserCreate,
  validateUserLogin,
} from "@validators/userValidator";

const router = express.Router();

router.post("/signup", validateUserCreate, AuthController.signup);
router.post("/login", validateUserLogin, AuthController.login);
router.post("/validate", AuthController.validateUser);

export default router;
