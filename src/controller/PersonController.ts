import { Request, Response } from "express";
import { BAD_REQUEST, SUCCESS_STATUS } from "../core/constant";
import { GetPerson , CreatePerson, DeletePerson,UpdatePerson, } from "../repository/PersonRepository";
import prisma from "../connection/prisma";

class PersonHandler {
  public async GetPerson(_req: Request, res: Response): Promise<Response> {
    const data = await GetPerson();
    return res.status(SUCCESS_STATUS).send({ data });
  }

  public async CreatePerson(req: Request, res: Response): Promise<Response> {
      const data = req.body
      data.date_born_at = new Date(data.date_born_at);
      const new_person = await CreatePerson(data);
      return res.status(SUCCESS_STATUS).send({ new_person });    
  }
  public async DeletePerson(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const delete_person = await DeletePerson(id);
    return res.status(SUCCESS_STATUS).send(delete_person);
  }

  public async UpdatePerson(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const data = req.body
    const update_person = await UpdatePerson(id,data);
    return res.status(SUCCESS_STATUS).send(update_person);
  }
}

export default PersonHandler;
