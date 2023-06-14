import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "beaches";

export async function findBeachById(id) {
  const collection = await getMongoCollection(COLLECTION_NAME);

  const result = collection.findOne({ _id: new ObjectId(id) });

  return result;
}

export async function findBeaches() {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = await collection.find().toArray();

  return result;
}
