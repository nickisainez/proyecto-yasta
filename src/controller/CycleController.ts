import { Request, Response } from "express";
import { SUCCESS_STATUS, BAD_REQUEST } from "../core/constant";
import {
  getCycle,
  createCycle,
  updateCycle,
  deleteCycle
} from "../repository/CycleRepository";

class CycleController {
  public async getCycle(_req: Request, res: Response): Promise<Response> {
    const data = await getCycle();
    return res.status(SUCCESS_STATUS).send({ data });
  }

  public async createCycle(req: Request, res: Response): Promise<Response> {
    const cycle = req.body;
    const new_cycle = await createCycle(cycle);
    return res.status(SUCCESS_STATUS).send({ new_cycle });
  }

  public async updateCycle(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const cycle = req.body;
      const updated_cycle = await updateCycle(id, cycle);
      return res.status(SUCCESS_STATUS).send({ updated_cycle });
    } catch (error) {
      return res.status(BAD_REQUEST).send({ error });
    }
  }
  public async deleteCycle(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    await deleteCycle(id);
    return res.status(SUCCESS_STATUS).send({ message: "Ciclo eliminado correctamente." });
  }
}
export default CycleController;
