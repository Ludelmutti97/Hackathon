import { ObjectId } from "mongodb";
import {
  findEventByMonth,
  findEventByToday,
  findEventByWeek,
  findEventById,
  createNewEvent,
  removePlayerFromEvent,
} from "../database/dbLogic/events";

export async function getEventById(id) {
  const beach = await findEventById(id);
  return beach;
}

/* export async function getGamesByLocation(location) {
    const beach = await findGamesByLocation(location);
    return beach;
} */

export async function getEventByDate(date) {
  if (date === "week") {
    const beach = await findEventByWeek();
    return beach;
  }
  if (date === "month") {
    const beach = await findEventByMonth();
    return beach;
  }
  if (date === "day") {
    const beach = await findEventByToday();

    return beach;
  }
}

export async function newEvent(data) {
  const newData = {
    date: new Date(data.date),
    hours: data.hours,
    locationId: new ObjectId(data.locationId),
    participants: data.participants,
    hostId: new ObjectId(data.hostId),
    playersId: [],
  };

  const event = await createNewEvent(newData);
  return event;
}

export async function newParticipant(uid, gameId) {
  const gameCreation = await addNewPlayer(uid, gameId);
  return gameCreation;
}

export async function unsubscribeFromEvent(uid, gameId) {
  const playerRemoval = await removePlayerFromEvent(uid, gameId);
  return playerRemoval;
}
