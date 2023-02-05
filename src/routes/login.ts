import { Router } from "express";
import LoginHandler from "../controller/LoginController";

const router = Router();

const loginHandler = new LoginHandler();

router.post("/", loginHandler.login);
router.post("/sendcode", loginHandler.codeRecoverPasswordByPhone);
router.get("/verifycode", loginHandler.verifyCodeByPhone);
router.put("/recover/:id", loginHandler.updatePassword);

export default router;
