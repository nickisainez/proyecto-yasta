import prisma from "../connection/prisma";

export async function GetPerson(): Promise<any> {
  return await prisma.instance.person.findMany();
}

export async function CreatePerson(data:any): Promise<any> {
  const new_person = await prisma.instance.person.create({data})
  return new_person
}

export async function UpdatePerson(id_update:number,data:any): Promise<any> {
  const update_person = await prisma.instance.person.update({
    where: { id:id_update },
    data 
    })
  return update_person
}
export async function DeletePerson(id:number): Promise<any> {
  const delete_person = await prisma.instance.person.delete({
    where: { id }
    })
  return delete_person
}