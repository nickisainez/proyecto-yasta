import { NextFunction, Request, Response } from "express";
import { logMiddleware } from "../repository/LogRepository";
import { failure } from "../utils/response";

export const syncErrorMiddleware = (
  err: Error,
  req: Request, //eslint-disable-line
  res: Response,
  next: NextFunction //eslint-disable-line
) => {
  logMiddleware(err.message);
  return failure({ res, message: err.message });
};
