import { Main } from "../entity/Main";

export async function getHellWorld(): Promise<Main> {
  const data = <Main>await Promise.resolve({ name: "hello" });
  return data;
}
