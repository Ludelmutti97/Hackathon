import { getAddArray, newParticipant } from "@/server/services/events";


export default async function handler(req, res) {

    try {

        if (req.method === "PATCH") {
            const data = req.body;

            const addParticipant = await newParticipant(data.uid, data.eid);
            if (addParticipant) {


                const event = await getAddArray(data.uid, data.eid);
                
                if (event) {
                    return res.status(201).json({ message: "Event Added" });
                } else {
                    return res.status(404).json({ message: "Event not Added" });
                }
                //return res.status(201).json({ addParticipant });
            }
        }

        return res.status(401).json({ msg: "error" });
    } catch (err) {
        console.log(err);
    }
}
