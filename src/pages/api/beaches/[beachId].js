import { getBeachesbyId } from "@/server/services/beaches";

export default async function handler(req, res) {
    const  beach  = req.query;

    try {
        if (req.method === "GET") {
            const response = await getBeachesbyId(beach.beachId);
           
            return res.status(200).json(response);
        }

        return res.status(404).json({msg: "not_found"});
        
    } catch (err) {
        console.log(err);
    }
}
