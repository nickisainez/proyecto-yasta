import { NextFunction, Request, Response } from "express";
import {
  GetCount,
} from "../repository/CountRepository";
import { success } from "../utils/response";

class CountHandler {
  public async GetCount(req: Request, res: Response, next: NextFunction) {
    try {
      const user_type = req.params.user_type;
      console.log(user_type);
      const data = await GetCount(user_type);
      return success({ res, data });
    } catch (error) {
      next(error);
    }
  }
}
export default CountHandler;
