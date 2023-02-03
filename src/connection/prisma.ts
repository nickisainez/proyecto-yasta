import { PrismaClient } from "@prisma/client";

const prisma = {
  instance: new PrismaClient()
};

export type IDBClient = typeof prisma;

Object.freeze(prisma);

export default prisma;
