import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";

const COLLECTION_NAME = "users";

//

export async function findUser(uid) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const result = await collection.findOne({ _id: new ObjectId(uid) });
    return result;
}

//
export async function addEventToUser(uid, eid) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const userOutfit = await collection.findOne({ _id: new ObjectId(uid) });



    if (userOutfit) {
        const array = await collection.updateOne(
            { _id: new ObjectId(uid) },
            { $push: { myEvents: new ObjectId(eid) } }
        );
        return array;
    }
}

//

export async function removeEventFromPlayer(uid, eid) {
    const collection = await getMongoCollection(COLLECTION_NAME);
    const event = await collection.findOne({ _id: new ObjectId(uid) });



    if (event) {
        const array = await collection.updateOne(
            { _id: new ObjectId(uid) },
            { $pull: { myEvents: new ObjectId(eid) } }
        );
        return array;
    }
}


