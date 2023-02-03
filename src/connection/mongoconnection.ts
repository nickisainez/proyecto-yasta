import { MongoClient, Db } from "mongodb";

const defaultDbname = "aeduca";

export let db: Db;

export const connect = async (
  dbName: string = defaultDbname
): Promise<MongoClient | void> => {
  try {
    const client = new MongoClient(<string>process.env.MONGODB_URL);
    // Use connect method to connect to the Server

    const conn = await client.connect();

    db = conn.db(dbName);

    return client;
  } catch (error) {
    //eslint-disable-next-line
    console.log(error);
  }
};
