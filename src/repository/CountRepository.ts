import prisma from "../connection/prisma";


export async function GetCount(user_type : string): Promise<any> {
  return await prisma.instance.person.count({where : {user_type}});
}
