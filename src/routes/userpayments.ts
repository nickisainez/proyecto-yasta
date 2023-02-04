import { Router } from "express";
import UserPaymentHandler from "../controller/UserPaymentController";

const router = Router();

const userPaymentHandler = new UserPaymentHandler();

router.get("/", userPaymentHandler.findUserPayment);
router.post("/", userPaymentHandler.storeUserPayment);
router.put("/:id", userPaymentHandler.updateUserPayment);
router.delete("/:id", userPaymentHandler.deleteUserPayment);

export default router;
