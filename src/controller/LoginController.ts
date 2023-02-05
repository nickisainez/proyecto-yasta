import { NextFunction, Request, Response } from "express";
import { comparePassword, hashPassword } from "../utils/strings";
import {
  bydni,
  byphone,
  updateLastSession,
  updateTemporalCode,
  updatePassword
} from "../repository/LoginRepository";
import { success, failure } from "../utils/response";
import { createToken } from "../midlewares/createToken";
import { sendSMS } from "../services";

class LoginHandler {
  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { dni, password } = req.body;
      const user = await bydni(dni);
      if (!user) {
        return failure({ res, message: "DNI no encontrado" });
      }
      const comparePass = await comparePassword(password, user.password);
      if (!comparePass) {
        return failure({ res, message: "Clave incorrecta" });
      }
      await updateLastSession(user.id);
      const token = await createToken(dni);
      return success({ res, data: { ...user, token } });
    } catch (error) {
      next(error);
    }
  }

  public async codeRecoverPasswordByPhone(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { number, dni } = req.body;
      //case phone
      const user = await byphone(dni, number);
      if (!user) {
        return failure({ res, message: "Número telefónico no registrado" });
      }
      const send_code = await sendSMS(user.name, user.number);
      const new_code = String(send_code?.code);
      if (!new_code) {
        return failure({ res, message: "Ocurrio un error inesperado" });
      }
      setTimeout(() => {}, 9000);
      await updateTemporalCode(user.id, new_code);

      return success({ res, data: { user, message: "Validación exitosa" } });
    } catch (error) {
      next(error);
    }
  }

  public async verifyCodeByPhone(req: Request, res: Response, next: NextFunction) {
    try {
      const { temporal_code, number, dni } = req.body;
      const user = await byphone(dni, number);
      if (temporal_code === user.temporal_code) {
        return success({ res, data: { user, message: "Validación exitosa" } });
      } else {
        return failure({ res, message: "Código inválido" });
      }
    } catch (error) {
      next(error);
    }
  }

  public async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const passHasheado = await hashPassword(req.body.password);
      await updatePassword(id, passHasheado);
      return success({ res, data: { message: "Actualizacion exitosa" } });
    } catch (error) {
      next(error);
    }
  }
}
export default LoginHandler;
