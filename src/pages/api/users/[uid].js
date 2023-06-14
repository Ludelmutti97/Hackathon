import { getUser } from "@/server/services/users";

export default async function handler(req, res) {
    try {
        const data = req.query;
        const uid = data.uid;

        if (req.method === "GET") {
            const user = await getUser(uid);
            if (user) {
                return res.status(200).json( user );
            }
            return res.status(404).json({ msg: "error" });
        }
    } catch (err) {
        console.log(err);
    }
}