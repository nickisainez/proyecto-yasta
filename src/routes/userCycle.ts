import { Router } from "express";
import UserCycleController from "../controller/UserCycleController";

const router = Router();

const userCycleController = new UserCycleController();

router.get("/:id_cycle/:section?", userCycleController.getUserCycle);
router.post("/", userCycleController.createUserCycle);
router.put("/:id", userCycleController.updateUserCycle);
router.delete("/:id", userCycleController.deleteUserCycle);

export default router;
