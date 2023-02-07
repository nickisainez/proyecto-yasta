import { NextFunction, Request, Response } from "express";
import { success } from "../utils/response";
import {
  updateUserPayment,
  deleteUserPayment
} from "../repository/UserPaymentRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserPaymentHandler {
  public async findUserPayment(_req: Request, res: Response, next: NextFunction) {
    try {
      const allPaymentsUsers = await prisma.user_Payment.findMany({
        include: { payments: true }
      });
      return success({ res, data: allPaymentsUsers });
    } catch (error) {
      next(error);
    }
  }

  public async storeUserPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      await prisma.user_Payment.create({
        data: {
          person: { connect: { id: data.id_person } }
        }
      });
      return success({ res, message: "Pago de usuario creado correctamente" });
    } catch (error) {
      next(error);
    }
  }

  public async updateUserPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const update_uspay = await updateUserPayment(id, data);

      return success({
        res,
        data: update_uspay,
        message: "Pago de usuario actualizado correctamente"
      });
    } catch (error) {
      next(error);
    }
  }

  public async deleteUserPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await deleteUserPayment(id);

      return success({ res, message: "Pago de usuario eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  }

  public async paymentToUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      await prisma.user_Payment.update({
        where: {
          id: data.id_user_Payment
        },
        include: {
          payments: true
        },
        data: {
          payments: { connect: { id: data.id_payment } }
        }
      });
      res
        .status(201)
        .json({ ok: true, message: "Pago agregado a usuario correctamente" });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  }
}
export default UserPaymentHandler;
