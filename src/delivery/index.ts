import { Router } from "express";

import main from "./main";

const router = Router();

router.use("/main", main);

export default router;
