import { MongoClient } from "mongodb";

export default async function handler(req,res) {
    const {id}=req.query
    const client=await MongoClient.connect(process.env.MONGODB_URI)
    const db=client.db();
    
    //const genre=await db.collection('genres').findOne({id:id})

    const booksbyGenre=await db.collection('books').find({genreId:id}).toArray()
    return res.status(200).json(booksbyGenre)
}