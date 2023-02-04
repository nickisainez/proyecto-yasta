import prisma from "../connection/prisma";
import { Usercycle } from "../entity/UserCycle";

export const getUserCycle = async (
  id_cycle: number,
  section: string | undefined
): Promise<any> => {
  const get_UserCycle = await prisma.instance.user_Cycle.findMany({
    where: { id_cycle, section },
    include: { person: true }
  });

  return get_UserCycle;
};

export const createUserCycle = async (data: Usercycle): Promise<any> => {
  const create_userCycle = await prisma.instance.user_Cycle.create({ data });

  return create_userCycle;
};

export const updateUserCycle = async (
  id_update: number,
  data: Usercycle
): Promise<any> => {
  const update_userCycle = await prisma.instance.user_Cycle.update({
    where: { id: id_update },
    data
  });
  return update_userCycle;
};

export const deleteUserCycle = async (id_delete: number): Promise<any> => {
  const delete_userCycle = await prisma.instance.user_Cycle.delete({
    where: { id: id_delete }
  });

  return delete_userCycle;
};
