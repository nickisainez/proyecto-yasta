import { Request, Response } from "express";
import { SUCCESS_STATUS } from "../core/constant";
import { getHellWorld } from "../repository/MainRepository";

class MainHandler {
  public async getHellWorld(req: Request, res: Response): Promise<Response> {
    const data = await getHellWorld();
    return res.status(SUCCESS_STATUS).send({ data });
  }
}

export default MainHandler;
