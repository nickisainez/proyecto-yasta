import { Router } from "express";
import LoginHandler from "../controller/LoginController";

const router = Router();

const loginHandler = new LoginHandler();

router.post("/", loginHandler.login);

export default router;
