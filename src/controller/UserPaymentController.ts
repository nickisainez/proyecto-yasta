import { Request, Response } from "express";
import { SUCCESS_STATUS, BAD_REQUEST } from "../core/constant";
import {
  findUserPayment,
  updateUserPayment,
  deleteUserPayment
} from "../repository/UserPaymentRepository";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

class UserPaymentHandler {
  public async findUserPayment(_req: Request, res: Response): Promise<Response> {
    const data = await findUserPayment();
    if (data) {
      return res.status(SUCCESS_STATUS).send({ data });
    } else {
      return res.status(BAD_REQUEST);
    }
  };

  public async storeUserPayment (req: Request, res: Response): Promise<void>  {
    try {
      const {payment_date, person, payment} = req.body;
  
      await prisma.user_Payment.create({
        data: {
          payment_date,
          person: { connect: { id: person } },
          payment : {connect: { id : payment} }
        }
      });
      res.status(201).json({ ok: true, message: "Pago de usuario agregado"});
  
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  };

  public async updateUserPayment(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      await updateUserPayment(id, data);

      res.status(SUCCESS_STATUS).json({ ok: true, message: "Pago de usuario actualizado" });
    } catch (error) {
      res.status(BAD_REQUEST).json({ ok: false, message: error });
    }
  };

  public async deleteUserPayment(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await deleteUserPayment(id);

      res.status(SUCCESS_STATUS).json({ ok: true, message: "Pago de usuario eliminado" });
    } catch (error) {
      res.status(BAD_REQUEST).json({ ok: false, message: error });
    }
  }

}

export default UserPaymentHandler;