import { newParticipant } from "@/server/services/events";


export default async function handler(req, res) {
    
    try {
      
        if (req.method === "PATCH") {
            const data = req.body;

            const addParticipant = await newParticipant(data.uid, data.eid);
            if (addParticipant) {
             
                return res.status(201).json({ addParticipant });
            }
        }

        return res.status(401).json({ msg: "error" });
    } catch (err) {
        console.log(err);
    }
}
