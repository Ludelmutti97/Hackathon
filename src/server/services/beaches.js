import { findBeaches, findBeachById } from "../database/dbLogic/beaches";

export async function getBeaches() {
  const fields = await findBeaches();
  return fields;
}

export async function getBeachesbyId(id) {
  const fields = await findBeachById(id);
  return fields;
}
