import { Router } from "express";
import verifyToken from "../midlewares/verifyToken";

import main from "./main";

const router = Router();

router.use("/main", main)

export default router;