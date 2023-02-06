import { NextFunction, Request, Response } from "express";
import * as at from "../repository/AttendanceRepository";
import { success } from "../utils/response";
import sendDelay from "../services/twilio/delay";
import { GetPersonById } from "../repository/PersonRepository";

class AttendanceHandler {
  public async getByPerson(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await at.getByPerson(parseInt(req.params.person_id));
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  //if
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
      if (value.state === "tarde") {
        const person = await GetPersonById(id_person);

        if (!person) {
          throw new Error("No se encontró al usuario");
        }

        sendDelay(person.number, person.name);
      }

      return res.status(200).send({ message: "Correctamente Guardado", value });
    } catch (error) {
      next(error);
    }
  }
}

export default AttendanceHandler;
