import { NextFunction, Request, Response } from "express";
import { success } from "../utils/response";
import {
  findUserPayment,
  updateUserPayment,
  deleteUserPayment
} from "../repository/UserPaymentRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserPaymentHandler {
  public async findUserPayment(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await findUserPayment();
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  public async storeUserPayment(req: Request, res: Response, next: NextFunction) {
    try {
      const { payment_date, person, payment } = req.body;

      await prisma.user_Payment.create({
        data: {
          payment_date,
          person: { connect: { id: person } },
          payment: { connect: { id: payment } }
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
}

export default UserPaymentHandler;
