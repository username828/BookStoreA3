import { MongoClient } from "mongodb"
export default async function handler(req,res){
    const client=await MongoClient.connect(process.env.MONGODB_URI)
    const db=client.db();

    const books=await db.collection('books').find().toArray()
    console.log(books)

    client.close()
    return res.status(200).json(books)

}