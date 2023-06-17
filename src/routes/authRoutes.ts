import express from 'express';
import AuthController from '@controllers/AuthController';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);
router.post('/validate', AuthController.validateUser);

export default router;