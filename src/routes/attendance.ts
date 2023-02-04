import { Router } from "express";
import AttendanceController from "../controller/AttendanceController";

const router = Router();

const attController = new AttendanceController();

router.get("/:person_id", attController.getByPerson);
router.post("/", attController.create);

export default router;
