import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<any> {
  const pass = await bcrypt.hash(password, 8);
  return pass;
}
export async function comparePassword(
  password: string,
  string_compare: string
): Promise<any> {
  const comparePass = await bcrypt.compare(password, string_compare);
  return comparePass;
}
