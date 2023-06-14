import { unsubscribeFromEvent } from "@/server/services/events";



export default async function handler(req, res) {
    try {
       

        if (req.method === "PATCH") {
            const data = req.body;

            const addPlayer = await unsubscribeFromEvent(data.uid, data.eid);
            return res.status(200).json({msg: "participant_removed"})
        }

        return res.status(401).json({ msg: "not_subscribed" });
    } catch (err) {
        console.log(err);
    }
}