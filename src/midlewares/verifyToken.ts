import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
//eslint-disable-next-line
export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  const JWT_KEY = <jwt.Secret>process.env.JWT_KEY;

  if (!token) {
    return res.status(403).send({
      message: "Se requiere un token de seguridad"
    });
  }

  jwt.verify(token, JWT_KEY, (err) => {
    if (err) {
      return res.status(401).send({
        message: "Tu sesión ha expirado"
      });
    }
    next();
  });
};
