import jwt from "jsonwebtoken";
//eslint-disable-next-line

export async function createToken(dni: string): Promise<any> {
  const secret: any = process.env.JWT_KEY;
  const token = jwt.sign({ dni }, secret, {
    expiresIn: "1h"
  });
  return token;
}
