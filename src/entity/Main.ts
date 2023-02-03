import { Collection, ObjectId } from "mongodb";
import { db } from "../connection/mongoconnection";

const MAIN_COLLECTION = "main";

type IMain = {
  _id: ObjectId;
  name: string;
};

const MAIN = (): Collection<IMain> => {
  return db.collection<IMain>(MAIN_COLLECTION);
};

export { IMain, MAIN };
