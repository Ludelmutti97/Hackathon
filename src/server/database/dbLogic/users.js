import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "users";

export async function findUser(uid) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = collection.findOne({ _id: new ObjectId(uid) });
    return result;
}