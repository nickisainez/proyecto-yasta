import { NextFunction, Request, Response } from "express";
import * as at from "../repository/AttendanceRepository";
import { success } from "../utils/response";

class AttendanceHandler {
  public async getByPerson(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await at.getByPerson(parseInt(req.params.person_id));
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_person } = req.body;
      const _existsToday = await at.existsToday(id_person);
      if (_existsToday) {
        return success({
          res,
          message: "Su asistencia ya ha sido registrado",
          data: null
        });
      }
      const value = await at.create(req.body);
      return res.status(200).send({ message: "Correctamente Guardado", value });
    } catch (error) {
      next(error);
    }
  }
}

export default AttendanceHandler;
