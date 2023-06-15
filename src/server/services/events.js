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
  createArray,
} from "../database/dbLogic/events";
import { addEventToUser, removeEventFromPlayer } from "../database/dbLogic/users";


//Evento por Id
export async function getEventById(id) {
  const beach = await findEventById(id);
  return beach;
}

/* export async function getGamesByLocation(location) {
    const beach = await findGamesByLocation(location);
    return beach;
} */

// Eventos por dia, semana e mes
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


//Novo Evento
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

//Array


export async function getAddArray(uid, eid) {

  const pedido = await addEventToUser(uid, eid)
  
  return pedido;

}


//

export async function newParticipant(uid, eid) {

  const creation = await addNewPlayer(uid, eid);
  return creation;
}

//  Desmarcar Evento
export async function unsubscribeFromEvent(uid, eid) {
  const playerRemoval = await removePlayerFromEvent(uid, eid);
  const removeEvent = await removeEventFromPlayer(uid, eid)
  return playerRemoval;
}


// Todos os eventos
export async function getAllEvents() {
  const event = await findEvents();
  return event;
}

