import { checkDataFromNewEvent } from "@/server/middleware/event";
import { getEventByDate, newEvent } from "@/server/services/events";


export async function handler(req, res) {
  try {


    if (req.method === "GET") {
   
     /*  if (date) {

       const beach = await getEventByDate(date); 
        return res.status(200).end()
      } */
        }
        if (req.method === "POST") {
            console.log("oi");
            const data = req.body;
            if (checkDataFromNewEvent(req, res)) {
                return res
                    .status(401)
                    .json({ msg: checkDataFromNewEvent(req, res) });
            }

            const dataForBeach = await newEvent(data);
            return res.status(201).json({ dataForBeach });
        }
    } catch (err) {
        console.log(err);
    }
}
