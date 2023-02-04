import { NextFunction, Request, Response } from "express";
import {
  getUserCycle,
  createUserCycle,
  updateUserCycle,
  deleteUserCycle
} from "../repository/UserCycleRepository";
import { success } from "../utils/response";

class UserCycleController {
  public async getUserCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const { id_cycle, section } = req.params;
      const data = await getUserCycle(parseInt(id_cycle), section);
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }

  public async createUserCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const newUserCycle = await createUserCycle(data);

      return success({ res, data: newUserCycle, message: "Se ha creado correctamente" });
    } catch (error) {
      next(error);
    }
  }
  public async updateUserCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const updateCycle = await updateUserCycle(id, data);

      return success({
        res,
        data: updateCycle,
        message: "Se ha actualizado correctamente"
      });
    } catch (error) {
      next(error);
    }
  }

  public async deleteUserCycle(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);

      await deleteUserCycle(id);

      return success({ res, message: "Se ha eliminado correctamente" });
    } catch (error) {
      next(error);
    }
  }
}
export default UserCycleController;
