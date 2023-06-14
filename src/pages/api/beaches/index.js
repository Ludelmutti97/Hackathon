import { getBeaches } from "@/server/services/beaches";


// Todas as praias
export default async function handler(req, res) {

    try {
        if (req.method === "GET") {
          
            const beaches = await getBeaches();
            
            console.log(beaches)
            return res.status(200).json(beaches) ;  
        }
    } catch (err) {
        console.log(err);
    }
}


