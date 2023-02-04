import { NextFunction, Request, Response } from "express";
import { failure } from "../utils/response";

export const syncErrorMiddleware = (
  err: Error,
  req: Request, //eslint-disable-line
  res: Response,
  next: NextFunction //eslint-disable-line
) => {
  return failure({ res, message: err.message });
};
