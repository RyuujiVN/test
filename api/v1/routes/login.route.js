import express from "express";
const router = express.Router();

import { userController } from "../controller/authen.controller.js";

router.post('/login', userController.login);

router.delete('/login', userController.logout);

router.get('/login', userController.refreshToken);

export default router;