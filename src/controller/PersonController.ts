import { NextFunction, Request, Response } from "express";
import { hashPassword } from "../utils/strings";
import {
  GetPerson,
  CreatePerson,
  DeletePerson,
  UpdatePerson
} from "../repository/PersonRepository";
import { success } from "../utils/response";

class PersonHandler {
  public async GetPerson(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await GetPerson();
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  public async CreatePerson(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      data.password = await hashPassword(req.body.password);
      data.date_born_at = new Date(data.date_born_at);
      const new_person = await CreatePerson(data);
      return success({ res, data: new_person, message: "Correctamente creado" });
    } catch (error) {
      next(error);
    }
  }

  public async UpdatePerson(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = req.body;
      const update_person = await UpdatePerson(id, data);
      return success({ res, data: update_person, message: "Correctamente modificado" });
    } catch (error) {
      next(error);
    }
  }

  public async DeletePerson(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await DeletePerson(id);
      return success({ res, message: "Correctamente eliminado" });
    } catch (error) {
      next(error);
    }
  }
}

export default PersonHandler;
