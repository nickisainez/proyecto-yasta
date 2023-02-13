import { NextFunction, Request, Response } from "express";
import {
  getCycle,
  createCycle,
  updateCycle,
  deleteCycle
} from "../repository/CycleRepository";
import { success } from "../utils/response";

class CycleController {
  public async getCycle(_req: Request, res: Response, next: NextFunction) {
    try {
      const data = await getCycle();
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  public async createCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      data.start_date = new Date(data.start_date.split("T")[0]);
      data.finish_date = new Date(data.finish_date.split("T")[0]);
      const new_cycle = await createCycle(data);
      return success({ res, data: new_cycle, message: "Se creo correctamente" });
    } catch (error) {
      next(error);
    }
  }

  public async updateCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      data.start_date = new Date(data.start_date.split("T")[0]);
      data.finish_date = new Date(data.finish_date.split("T")[0]);
      const updated_cycle = await updateCycle(id, data);
      return success({ res, data: updated_cycle, message: "Se actualizo correctamente" });
    } catch (error) {
      next(error);
    }
  }
  public async deleteCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await deleteCycle(id);
      return success({ res, message: "Se elimino correctamente." });
    } catch (error) {
      next(error);
    }
  }
}
export default CycleController;
