import prisma from "../connection/prisma";
import { Cycle } from "../entity/Cycle";

export async function getCycle(): Promise<any> {
  return await prisma.instance.cycle.findMany();
}

export async function createCycle(data: Cycle): Promise<any> {
  const new_cycle = await prisma.instance.cycle.create({ data });
  return new_cycle;
}

export async function updateCycle(id: number, data: Cycle): Promise<any> {
  const isexist = await prisma.instance.cycle.findUnique({ where: { id } });
  if (!isexist) {
    throw new Error("Usuario no encontrado");
  }
  const updated_cycle = await prisma.instance.cycle.update({
    where: { id },
    data
  });
  return updated_cycle;
}

export async function deleteCycle(id: number): Promise<any> {
  const deleted_cycle = await prisma.instance.cycle.delete({
    where: { id }
  });
  return deleted_cycle;
}
