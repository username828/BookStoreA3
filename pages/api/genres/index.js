import { MongoClient } from "mongodb";

export default async function handler(req,res){
    const client=await MongoClient.connect(process.env.MONGODB_URI);
    const db=client.db()

    const genres=await db.collection('genres').find().toArray();
    return res.status(200).json(genres)
}