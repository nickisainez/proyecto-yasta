import { NextFunction, Request, Response } from "express";
import { success } from "../utils/response";
import {
  findPayments,
  storePayment,
  paymentById,
  updatePayment,
  deletePayment
} from "../repository/PaymentRepository";

class PaymentHandler {
  public async findPayments(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await findPayments();
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  public async storePayment(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      data.expiration_date = new Date(data.expiration_date.split("T")[0]);
      const store_payment = await storePayment(data);

      return success({ res, data: store_payment, message: "Pago creado correctamente" });
    } catch (error) {
      next(error);
    }
  }

  public async paymentById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const paymentsbyid = await paymentById(id);

      return success({ res, data: paymentsbyid });
    } catch (error) {
      next(error);
    }
  }

  public async updatePayment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      data.expiration_date = new Date(data.expiration_date.split("T")[0]);
      const update_payment = await updatePayment(id, data);

      return success({
        res,
        data: update_payment,
        message: "Pago actualizado correctamente"
      });
    } catch (error) {
      next(error);
    }
  }

  public async deletePayment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await deletePayment(id);

      return success({ res, message: "Pago eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  }
}

export default PaymentHandler;
