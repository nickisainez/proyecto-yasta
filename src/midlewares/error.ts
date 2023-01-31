import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST } from "../core/constant";
//eslint-disable-next-line
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  
  console.error(err.message, err);
  return res.status(BAD_REQUEST).json({
    error: err.message
  });

};
