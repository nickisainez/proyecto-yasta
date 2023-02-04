import prisma from "../connection/prisma";
import { Usercycle } from "../entity/UserCycle";

//////////// OBTENER ////////////

export const getUserCycle = async (): Promise<any> => {
  const get_UserCycle = await prisma.instance.user_Cycle.findMany();

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

/*
export async function postPlaylist(data : User_Cycle): Promise<any> {
 const create_userCycle =  await prisma.instance.user_Cycle.create({
    data });
  return create_userCycle

}
*/

/*
export async function getUserCycle(): Promise<any> {

  return await prisma.instance.user_Cycle.findMany()

};
*/
