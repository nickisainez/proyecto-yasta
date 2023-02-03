import { Request, Response } from "express";
import { SUCCESS_STATUS, BAD_REQUEST } from "../core/constant";
import {
  findPayments,
  storePayment,
  paymentById,
  updatePayment,
  deletePayment
} from "../repository/PaymentRepository";

class PaymentHandler {
  public async findPayments(_req: Request, res: Response): Promise<Response> {
    const data = await findPayments();
    if (data) {
      return res.status(SUCCESS_STATUS).send({ data });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async storePayment(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      await storePayment(data);

      res.status(SUCCESS_STATUS).json({ ok: true, message: "Pago creado correctamente" });
    } catch (error) {
      res.status(BAD_REQUEST).json({ ok: false, message: error });
    }
  }

  public async paymentById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const paymentsbyid = await paymentById(id);

      res.status(SUCCESS_STATUS).json({
        ok: true,
        data: paymentsbyid
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({ ok: false, message: error });
    }
  }

  public async updatePayment(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      await updatePayment(id, data);

      res.status(SUCCESS_STATUS).json({ ok: true, message: "Pago actualizado" });
    } catch (error) {
      res.status(BAD_REQUEST).json({ ok: false, message: error });
    }
  }

  public async deletePayment(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await deletePayment(id);

      res.status(SUCCESS_STATUS).json({ ok: true, message: "Pago eliminado" });
    } catch (error) {
      res.status(BAD_REQUEST).json({ ok: false, message: error });
    }
  }
}

export default PaymentHandler;
