import { Router } from "express";
import MainHandler from "../handler/MainHandler";

const router = Router();

const mainHandler = new MainHandler();

router.get("/helloworld", mainHandler.getHellWorld);

export default router;
