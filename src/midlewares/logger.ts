import { NextFunction, Request, Response } from "express";
import { logMiddleware } from "../repository/LogRepository";

export default (req: Request, res: Response, next: NextFunction): void => {
  const dt = new Date().toLocaleString();
  const { method, path, body, statusCode } = req;
  const log = `[${dt}] ${method}:${path} (${statusCode}) ${JSON.stringify(body)}`;
  logMiddleware(log);
  next();
};
