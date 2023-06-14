import { findBeaches, findBeachById } from "../database/dbLogic/beaches";

export async function getBeaches() {
  const fields = await findBeaches();
  return fields;
}

export async function getBeachesbyId() {
  const fields = await findBeachById();
  return fields;
}
