import { checkDataFromNewEvent } from "@/server/middleware/event";
import { addArray, getAddArray, getAllEvent, getAllEvents, getEventByDate, newEvent } from "@/server/services/events";

export default async function handler(req, res) {
  try {


    if (req.method === "GET") {

      const date = req.query.date
      if (date) {
        const beach = await getEventByDate(date);
        return res.status(200).json(beach)
      }

      const event= await getAllEvents()
      return res.status(200).json(event)
    }



    if (req.method === "POST") {
      const data = req.body;

      if (checkDataFromNewEvent(req, res)) {
        return res.status(401).json({ msg: checkDataFromNewEvent(req, res) });
      }

      const dataForBeach = await newEvent(data);
      return res.status(201).json({ dataForBeach });
    }

   

    if (req.method === "POST") {

      const user = {
        _id: "647dc17bdf3d14c93394afb2",
        name: "Ludmila",
        email: "ludmila@gmail.com",
        password: "password",
      }
      const { id } = req.query;
      const event = await getAddArray(id, user._id);
      if (event) {
        return res.json({ message: "Event Added" });
      } else {
        return res.status(404).json({ message: "Event not Added" });
      }
    }
  }


  
  catch (err) {
    console.log(err);

  }
}

