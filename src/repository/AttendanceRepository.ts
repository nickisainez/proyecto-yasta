import prisma from "../connection/prisma";
import { Attendance } from "../entity/Attendance";

export async function GetAttendance(): Promise<any> {
  return await prisma.instance.attendance.findMany();
}

export async function CreateAttendance(data: Attendance): Promise<any> {
  const new_attendance = await prisma.instance.attendance.create({ data });
  return new_attendance;
}

export async function UpdateAttendance(
  id_update: number,
  data: Attendance
): Promise<any> {
  const update_attendance = await prisma.instance.attendance.update({
    where: { id: id_update },
    data
  });
  return update_attendance;
}
export async function DeleteAttendance(id: number): Promise<any> {
  const delete_attendance = await prisma.instance.attendance.delete({
    where: { id }
  });
  return delete_attendance;
}
