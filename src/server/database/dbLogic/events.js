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

  const newOResult = orderedResult.filter((ele) => ele.participants < 10);

  return newOResult;
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

// ************  FIND ITEMS BY LOCATION ************

/* export async function findGamesByLocation(location) {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = await collection
    .find({
      idLocation: new ObjectId("6479c2a71de2044d9892aa9f"),
    })
    .toArray();
  return result;
}
 */

// ********* --- INSERT EVENT --- *********

export async function createNewEvent(data) {
  const collection = await getMongoCollection(COLLECTION_NAME);
  const result = collection.insertOne(data);
  return result;
}

export async function addNewPlayer(uid, gameId) {
  // CHECK IF USER IS ALREADY SIGNED IN GAME

  const collection = await getMongoCollection(COLLECTION_NAME);
  const game = await collection.findOne({ _id: new ObjectId(gameId) });

  const isAlreadyParticipating = game.playersId.some(
    (playerId) => playerId.toString() === uid
  );

  const isHost = game.hostId.toString() === uid;

  if (isAlreadyParticipating) {
    const result = await collection.updateOne(
      { _id: new ObjectId(gameId) },
      {
        $push: { playersId: new ObjectId(uid) },
        $inc: { participants: 1 },
      }
    );

    return true;
  }
  return false;
}

export async function removePlayerFromEvent(uid, gameId) {
  // CHECK IF USER IS ALREADY SIGNED IN GAME

  const collection = await getMongoCollection(COLLECTION_NAME);
  const game = await collection.findOne({ _id: new ObjectId(gameId) });

  const isAlreadyParticipating = game.playersId.some(
    (playerId) => playerId.toString() === uid
  );

  const isHost = game.hostId.toString() === uid;

  if (isAlreadyParticipating) {
    const result = await collection.updateOne(
      { _id: new ObjectId(gameId) },
      {
        $pull: { playersId: new ObjectId(uid) },
        $inc: { participants: -1 },
      }
    );

    return true;
  }
  return false;
}
