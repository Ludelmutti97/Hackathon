import { getMongoCollection } from "../db";
import { ObjectId } from "mongodb";
import moment from "moment/moment";

const COLLECTION_NAME = "events";

//  ************ FIND BEACH BY ID ************
export async function findEventById(id) {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = await collection.findOne({ _id: new ObjectId(id) });
  return result;
}

//   ************ BY DATE ************
export async function findEventByToday() {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const currentDate = moment().startOf("day");

  const result = await collection
    .find({
      date: {
        $gte: currentDate.toDate(),
        $lt: moment(currentDate).endOf("day").toDate(),
      },
    })
    .toArray();

  const orderedResult = await result.sort(
    (a, b) => Number(a.hours.slice(0, -3)) - Number(b.hours.slice(0, -3))
  );


  return orderedResult;
}

export async function findEventByWeek() {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const currentDate = moment().startOf("week");
  const startDate = currentDate.toDate();
  const endDate = currentDate.add(7, "days").toDate();
  const weeklyDate = {
    date: {
      $gte: startDate,
      $lte: endDate,
    },
  };

  const result = await collection.find(weeklyDate).toArray();

  return result;
}

export async function findEventByMonth() {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const currentDate = moment().startOf("month");
  const startDate = currentDate.toDate();
  const endDate = currentDate.endOf("month").toDate();
  const monthlyDate = {
    date: {
      $gte: startDate,
      $lte: endDate,
    },
  };

  const result = await collection.find(monthlyDate).toArray();

  return result;
}



// ********* --- INSERT EVENT --- *********

export async function createNewEvent(data) {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = collection.insertOne(data);
  return result;
}

// ADD ao Array



export async function addNewPlayer(uid, eid) {
  // CHECK IF USER IS ALREADY SIGNED IN GAME

  const collection = await getMongoCollection(COLLECTION_NAME);
  const event = await collection.findOne({ _id: new ObjectId(eid) });

  const isAlreadyParticipating = event.playersId.some(
    (playerId) => playerId.toString() === uid
  );




  if (!isAlreadyParticipating) {
    const result = await collection.updateOne(
      { _id: new ObjectId(eid) },
      {
        $push: { playersId: new ObjectId(uid) },
        $inc: { participants: 1 },
      }
    );

    return true;
  }
  return false;
}

//Desmarcar evento

export async function removePlayerFromEvent(uid, eid) {


  const collection = await getMongoCollection(COLLECTION_NAME);
  const event = await collection.findOne({ _id: new ObjectId(eid) });

  const isAlreadyParticipating = event.playersId.some(
    (playerId) => playerId.toString() === uid
  );


  if (isAlreadyParticipating) {
    const result = await collection.updateOne(
      { _id: new ObjectId(eid) },
      {
        $pull: { playersId: new ObjectId(uid) },
        $inc: { participants: -1 },
      }
    );

    return true;
  }
  return false;
}

// All events
export async function findEvents() {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = await collection.find().toArray();

  return result;
}