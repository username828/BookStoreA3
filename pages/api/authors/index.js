import { MongoClient } from "mongodb";
export default async function handler(req,res){
    const client=await MongoClient.connect(process.env.MONGODB_URI)
    const db=client.db();

    const authors=await db.collection('authors').find().toArray()
    client.close()
    return res.status(200).json(authors);
}