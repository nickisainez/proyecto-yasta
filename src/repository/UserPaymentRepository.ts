import prisma from "../connection/prisma";
import { UserPayment } from "../entity/UserPayment";

export async function findUserPayment(): Promise<any> {
  return await prisma.instance.user_Payment.findMany();
}

export async function updateUserPayment(id: number, data: UserPayment): Promise<any> {
  await prisma.instance.user_Payment.update({
    where: { id },
    data
  });
}

export async function deleteUserPayment(id: number): Promise<any> {
  await prisma.instance.user_Payment.delete({
    where: { id }
  });
}
