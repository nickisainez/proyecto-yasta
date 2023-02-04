import { Response } from "express";
import { BAD_REQUEST, SUCCESS_STATUS } from "../core/constant";
import { IResponse } from "../entity/Response";

export function success({
  res,
  status = SUCCESS_STATUS,
  data,
  message
}: IResponse): Response {
  return res.status(status).json({
    ok: true,
    data,
    message
  });
}

export function failure({ res, status = BAD_REQUEST, message }: IResponse): Response {
  return res.status(status).json({
    ok: false,
    data: null,
    message
  });
}
