import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction): void => {
  const dt = new Date().toLocaleString();
  const { method, path, body, statusCode } = req;
  const log = `[${dt}] ${method}:${path} (${statusCode}) ${JSON.stringify(body)}`;
  console.info(log);
  next();
};
