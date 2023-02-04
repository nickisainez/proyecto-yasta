import { Router } from "express";
import CycleController from "../controller/CycleController";

const router = Router();

const cycleController = new CycleController();

router.get("/", cycleController.getCycle);
router.post("/", cycleController.createCycle);
router.put("/:id", cycleController.updateCycle);
router.delete("/:id", cycleController.deleteCycle);

export default router;
