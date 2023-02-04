import { Request, Response } from "express";
import { SUCCESS_STATUS } from "../core/constant";
import {
  getUserCycle,
  createUserCycle,
  updateUserCycle,
  deleteUserCycle
} from "../repository/UserCycleRepository";

class UserCycleController {
  public async getUserCycle(_req: Request, res: Response): Promise<Response> {
    const data = await getUserCycle();
    return res.status(SUCCESS_STATUS).send({ data });
  }

  public async createUserCycle(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const newUserCycle = await createUserCycle(data);
    return res.status(SUCCESS_STATUS).send({ newUserCycle });
  }
  public async updateUserCycle(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);

    const data = req.body;
    const updateCycle = await updateUserCycle(id, data);

    return res.status(SUCCESS_STATUS).send({ updateCycle });
  }

  public async deleteUserCycle(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);

    await deleteUserCycle(id);

    return res.status(SUCCESS_STATUS).send({ message: "Se ha eliminado" });
  }
}
export default UserCycleController;
