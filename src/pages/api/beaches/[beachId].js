import { getBeachesbyId } from "@/server/services/beaches";

export default async function handler(req, res) {
    const beachId  = req.query.id;

    try {
        if (req.method === "GET") {
            const beach = await getBeachesbyId(beachId);
            return res.status(200).json({ beach });
        }

        return res.status(404).json({msg: "not_found"});
        
    } catch (err) {
        console.log(err);
    }
}
