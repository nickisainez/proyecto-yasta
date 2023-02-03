import { MAIN } from "../entity/Main";

export async function getHellWorld() {
  return await MAIN().find().toArray();
}
