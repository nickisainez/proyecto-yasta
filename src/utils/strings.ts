import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<any> {
  const pass = await bcrypt.hash(password, 8);
  return pass;
}
