import { ObjectId } from "mongodb";

const MESSAGE_COLLECTION = "message";

type Main = {
  _id: ObjectId;
  name: string;
};

export { Main };
