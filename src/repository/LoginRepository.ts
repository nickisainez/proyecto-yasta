import prisma from "../connection/prisma";

export async function bydni(dni: string): Promise<any> {
  return await prisma.instance.person.findFirst({ where: { dni } });
}

export async function updateLastSession(id: number): Promise<any> {
  return await prisma.instance.person.update({
    where: { id },
    data: {
      last_session: new Date()
    }
  });
}
