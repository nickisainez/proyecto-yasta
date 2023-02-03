import prisma from "../connection/prisma";
import { Payment } from "../entity/Payment";

export async function findPayments(): Promise<any> {
  return await prisma.instance.payment.findMany();
}

export async function storePayment(data: Payment): Promise<any> {
  await prisma.instance.payment.create({ data });
}

export async function paymentById(id: number): Promise<any> {
  return await prisma.instance.payment.findUnique({
    where: { id: Number(id) }
  });
}

export async function updatePayment(id: number, data: Payment): Promise<any> {
  await prisma.instance.payment.update({
    where: { id },
    data
  });
}

export async function deletePayment(id: number): Promise<any> {
  await prisma.instance.payment.delete({
    where: { id }
  });
}
