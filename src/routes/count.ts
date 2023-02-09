import { Router } from "express";
import CountHandler from "../controller/CountController";

const router = Router();

const countHandler = new CountHandler();

router.get("/:user_type", countHandler.GetCount);


export default router;
