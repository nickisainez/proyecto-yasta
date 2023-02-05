import { Prisma } from "@prisma/client";
import prisma from "../connection/prisma";
import { Attendance } from "../entity/Attendance";

export async function getByPerson(id_person: number): Promise<any> {
  return await prisma.instance.attendance.findMany({ where: { id_person } });
}

export async function existsToday(id_person: number): Promise<any> {
  const value: any = await prisma.instance.$queryRaw(
    Prisma.sql`SELECT * FROM attendance WHERE id_person = ${id_person} and CAST(created_at AS date) = CURRENT_DATE`
  );
  console.log(value);
  return value.length > 0;
}

export async function create(data: Attendance): Promise<any> {
  const new_attendance = await prisma.instance.attendance.create({ data });
  return new_attendance;
}
