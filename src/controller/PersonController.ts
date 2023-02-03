import { Request, Response } from "express";
import { SUCCESS_STATUS, BAD_REQUEST } from "../core/constant";
import { hashPassword } from "../utils/strings";
import {
  GetPerson,
  CreatePerson,
  DeletePerson,
  UpdatePerson
} from "../repository/PersonRepository";

class PersonHandler {
  public async GetPerson(_req: Request, res: Response): Promise<Response> {
    const data = await GetPerson();
    if (data) {
      return res.status(SUCCESS_STATUS).send({ data });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async CreatePerson(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    data.password = await hashPassword(req.body.password);
    data.date_born_at = new Date(data.date_born_at);
    const new_person = await CreatePerson(data);
    if (new_person) {
      return res.status(SUCCESS_STATUS).send({ data });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async UpdatePerson(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const data = req.body;
    const update_person = await UpdatePerson(id, data);
    if (update_person) {
      return res.status(SUCCESS_STATUS).send({ update_person });
    } else {
      return res.status(BAD_REQUEST);
    }
  }

  public async DeletePerson(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const delete_person = await DeletePerson(id);
    if (delete_person) {
      return res.status(SUCCESS_STATUS).send({ delete_person });
    } else {
      return res.status(BAD_REQUEST);
    }
  }
}

export default PersonHandler;
