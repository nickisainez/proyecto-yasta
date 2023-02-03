import { Router } from "express";
import AttendanceHandler from "../controller/AttendanceController";

const router = Router();

const attendanceHandler = new AttendanceHandler();

router.get("/", attendanceHandler.GetAttendance);
router.post("/", attendanceHandler.CreateAttendance);
router.put("/:id", attendanceHandler.UpdateAttendance);
router.delete("/:id", attendanceHandler.DeleteAttendance);

export default router;
