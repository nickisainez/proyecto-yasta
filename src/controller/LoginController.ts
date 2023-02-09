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
import { GetPersonById } from "../repository/PersonRepository";

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
        return failure({ res, message: "Tus datos ingresados no coinciden" });
      }
      return sendSMS(user.name, user.number)
        .then(async (send_code) => {
          const new_code = String(send_code?.code);
          await updateTemporalCode(user.id, new_code);
          return success({ res, message: "Te enviamos un sms", data: user.id });
        })
        .catch(() => {
          throw new Error("Ocurrio un error inesperado");
        });
    } catch (error) {
      next(error);
    }
  }

  public async verifyCodeByPhone(req: Request, res: Response, next: NextFunction) {
    try {
      const { temporal_code, password: newpassword, current_password } = req.body;
      const id = parseInt(req.params.id);
      const user = await GetPersonById(id);
      if (!current_password) {
        if (temporal_code === user.temporal_code) {
          const passHasheado = await hashPassword(newpassword);
          await updatePassword(id, passHasheado);
          await updateTemporalCode(id, null);
          return success({ res, message: "Actualizacion exitosa" });
        } else {
          return failure({ res, message: "Código inválido" });
        }
      } else {
        const comparePass = await comparePassword(current_password, user.password);
        if (!comparePass) {
          return failure({ res, message: "Clave actual incorrecta" });
        }
        const passHasheado = await hashPassword(newpassword);
        await updatePassword(id, passHasheado);
        return success({ res, message: "Actualizacion exitosa" });
      }
    } catch (error) {
      next(error);
    }
  }
}
export default LoginHandler;
