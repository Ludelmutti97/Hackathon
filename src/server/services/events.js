import { ObjectId } from "mongodb";
import {
  findEventByMonth,
  findEventByToday,
  findEventByWeek,
  findEventById,
  createNewEvent,
  removePlayerFromEvent,
  addNewPlayer,
  findEvents,
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
    const beach = await findEventByMonth(date);
    return beach;
  }
  if (date === "day") {
    const beach = await findEventByToday(date);

    return beach;
  }
}

export async function newEvent(data) {
  const newData = {
    date: new Date(data.date),
    locationId: new ObjectId(data.locationId),
    hostId: new ObjectId(data.hostId),
    playersId: [],
  };

  const event = await createNewEvent(newData);
  return event;
}




export async function newParticipant(uid, eid) {

  const creation = await addNewPlayer(uid, eid);
  return creation;
}

//  
export async function unsubscribeFromEvent(uid, eid) {
  const playerRemoval = await removePlayerFromEvent(uid, eid);
  return playerRemoval;
}


// Todos os eventos
export async function getEvents() {
  const event = await findEvents();
  return event;
}

