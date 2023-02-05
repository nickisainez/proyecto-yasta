import prisma from "../connection/prisma";

export async function bydni(dni: string): Promise<any> {
  return await prisma.instance.person.findFirst({ where: { dni } });
}

export async function byphone(dni: string, number: string): Promise<any> {
  return await prisma.instance.person.findFirst({ where: { number, dni } });
}

export async function updateLastSession(id: number): Promise<any> {
  return await prisma.instance.person.update({
    where: { id },
    data: {
      last_session: new Date()
    }
  });
}

export async function updateTemporalCode(
  id: number,
  temporal_code: string | null
): Promise<any> {
  return await prisma.instance.person.update({
    where: { id },
    data: {
      temporal_code
    }
  });
}
export async function updatePassword(id: number, password: string): Promise<any> {
  return await prisma.instance.person.update({
    where: { id },
    data: {
      password
    }
  });
}
