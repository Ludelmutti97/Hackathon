import { findUser } from "../database/dbLogic/users"

export async function getUser(uid){
    const user = await findUser(uid)
    return user
}