
import { checkDataFromNewEvent } from "@/server/middleware/event";
import { getEventByDate, newEvent } from "@/server/services/events";



export default async function handler(req, res) {

  try {
    //const location = req.query.location;
    const date = req.query.date;

     if (req.method === "GET") {
    /*if (location) {
    const games = await getGamesByLocation(location);
    if (games) {
        return res.status(200).json(games);
    }
    return res.status(404).json("erro" );
    } */

    if (date) {
    const beach = await getEventByDate(date);
    return  beach

    }
    if (beach) {
        return res.status(200).json(beach);
    }
    return res.status(404).json({ message: "erro" });
    }
    

    if (req.method === "POST") {
      const data = req.body;

      // if (true) {
      //   return res.status(401).json({msg: checkDataFromNewEvent(req, res)})
      // }

      const dataForBeach = await newEvent(data);
      return res.status(201).json({ dataForBeach });
    }
    }catch (err) {
    console.log(err);
  }
  
}

  
  