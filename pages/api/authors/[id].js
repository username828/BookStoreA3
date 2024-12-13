import { MongoClient } from "mongodb";
export default async function handler(req,res){

    const {id}=req.query

    const client=await MongoClient.connect(process.env.MONGODB_URI)
    const db=client.db();


    const author=await db.collection('authors').findOne({id:id})
    const books=await db.collection('books').find({authorId:id}).toArray()
    
    const authorDetails={
        ...author,
        books
    }
    
    client.close()
    return res.status(200).json(authorDetails);
}