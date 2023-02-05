import { Router } from "express";
import LoginHandler from "../controller/LoginController";

const router = Router();

const loginHandler = new LoginHandler();

router.post("/", loginHandler.login);
router.post("/sendcode", loginHandler.codeRecoverPasswordByPhone);
router.put("/verifycode/:id", loginHandler.verifyCodeByPhone);

export default router;
