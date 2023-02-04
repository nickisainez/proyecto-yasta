import { Response } from "express";

export type IResponse = {
  res: Response;
  status?: number;
  data?: any;
  message?: any;
};
