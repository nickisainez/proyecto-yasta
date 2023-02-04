import { Router } from "express";
import PaymentHandler from "../controller/PaymentController";

const router = Router();

const paymentHandler = new PaymentHandler();

router.get("/", paymentHandler.findPayments);
router.post("/", paymentHandler.storePayment);
router.get("/:id", paymentHandler.paymentById);
router.put("/:id", paymentHandler.updatePayment);
router.delete("/:id", paymentHandler.deletePayment);

export default router;
