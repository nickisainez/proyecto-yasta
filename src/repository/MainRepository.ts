import prisma from "../connection/prisma";

export async function getHellWorld(): Promise<any> {
  return await prisma.instance.cycle.findMany();
}
