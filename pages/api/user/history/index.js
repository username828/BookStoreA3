import { MongoClient } from "mongodb";

export default async function handler(req,res) {

    const client=await MongoClient.connect(process.env.MONGODB_URI);
    const db=client.db()

    const userId=req.headers["x-user-id"]
    if(!userId){
        client.close()
        return res.status(401).json({message:"Unauthorized"})
    }
    if(req.method==="POST"){
        const {query}=req.body
        const newQuery={
            userId,
            query,
            timestamp:new Date()
        }

        await db.collection('userHistory').insertOne(newQuery);
        const book=await db.collection('books').findOne({title:query.toLowerCase()})
        const author=await db.collection('authors').findOne({name:query})
        const genre=await db.collection('genres').findOne({genre:query})

        return res.status(201).json({ message: "Search query added successfully." ,book,author,genre});
    }
    else if (req.method==="GET"){
        const history=await db.collection('userHistory').find({userId}).toArray();
        return res.status(200).json({history})
    }
}